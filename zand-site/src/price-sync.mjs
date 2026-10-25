const DASTAVVAL_URL = "https://dastavval.com/api/v1/dev/products";
const COFFEEOMDE_URL = "https://coffeeomde.ir/wp-json/wc/store/products?per_page=100";

export const PRICE_DATA_KEY = "latest";

export async function buildPriceSnapshot(catalogText, previous, now = new Date(), fetcher = fetch) {
  const catalog = parseCatalog(catalogText);
  const nowIso = now.toISOString();
  const items = { ...(previous?.items || {}) };
  const sources = { ...(previous?.sources || {}) };

  const [dastavvalResult, coffeeomdeResult] = await Promise.allSettled([
    fetchJson(DASTAVVAL_URL, fetcher),
    fetchJson(COFFEEOMDE_URL, fetcher),
  ]);

  applySourceResult({
    result: dastavvalResult,
    source: "dastavval",
    previousItems: items,
    sources,
    nowIso,
    expected: catalog.filter((product) => isDastavval(product)).length,
    build: (rows) => mapDastavval(catalog, rows, nowIso),
  });

  applySourceResult({
    result: coffeeomdeResult,
    source: "coffeeomde",
    previousItems: items,
    sources,
    nowIso,
    expected: catalog.filter((product) => isCoffeeomde(product)).length,
    build: (rows) => mapCoffeeomde(catalog, rows, nowIso),
  });

  return {
    schemaVersion: 1,
    generatedAt: nowIso,
    lastAttemptAt: nowIso,
    items,
    sources,
  };
}

function applySourceResult({ result, source, previousItems, sources, nowIso, expected, build }) {
  if (result.status !== "fulfilled") {
    const prior = sources[source] || {};
    sources[source] = {
      ...prior,
      status: prior.updatedAt ? "stale" : "unavailable",
      lastAttemptAt: nowIso,
    };
    return;
  }

  try {
    const updates = build(result.value);
    const matched = Object.keys(updates).length;
    const minimum = Math.max(1, Math.floor(expected * 0.65));
    if (matched < minimum) throw new Error("source_match_threshold");

    for (const [id, entry] of Object.entries(previousItems)) {
      if (entry?.source === source) delete previousItems[id];
    }
    Object.assign(previousItems, updates);
    sources[source] = { status: "ok", updatedAt: nowIso, matched, total: expected };
  } catch {
    const prior = sources[source] || {};
    sources[source] = {
      ...prior,
      status: prior.updatedAt ? "stale" : "unavailable",
      lastAttemptAt: nowIso,
    };
  }
}

async function fetchJson(url, fetcher) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetcher(url, {
      headers: { Accept: "application/json", "Cache-Control": "no-cache" },
      signal: controller.signal,
    });
    if (!response.ok) throw new Error("source_http_" + response.status);
    const data = await response.json();
    if (!Array.isArray(data) || data.length === 0) throw new Error("source_invalid_data");
    return data;
  } finally {
    clearTimeout(timeout);
  }
}

function parseCatalog(text) {
  const marker = "window.CATALOG_PRODUCTS=";
  const start = text.indexOf(marker);
  const end = text.lastIndexOf("];");
  if (start < 0 || end <= start) throw new Error("catalog_asset_invalid");
  const catalog = JSON.parse(text.slice(start + marker.length, end + 1));
  if (!Array.isArray(catalog) || catalog.length === 0) throw new Error("catalog_empty");
  return catalog;
}

function isDastavval(product) {
  return product?.type !== "coffee" && /(^|\.)dastavval\.com$/i.test(new URL(product?.source || "https://invalid.local").hostname);
}

function isCoffeeomde(product) {
  return product?.type === "coffee" && /(^|\.)coffeeomde\.ir$/i.test(new URL(product?.source || "https://invalid.local").hostname);
}

function mapDastavval(catalog, rows, updatedAt) {
  const byImage = new Map();
  const byName = new Map();
  for (const row of rows) {
    const imageKey = productImageKey(row.image_url || row.imageUrl);
    if (imageKey) addCandidate(byImage, imageKey, row);
    const nameKey = normalizeName(row.name);
    if (nameKey) addCandidate(byName, nameKey, row);
  }

  const updates = {};
  for (const product of catalog.filter(isDastavval)) {
    let row = null;
    const imageKey = productImageKey(product.image);
    const imageCandidates = imageKey ? byImage.get(imageKey) : null;
    if (imageCandidates?.length === 1) row = imageCandidates[0];
    if (!row) {
      const nameCandidates = byName.get(normalizeName(product.name));
      if (nameCandidates?.length === 1) row = nameCandidates[0];
    }
    if (!row || row.disabled === true) continue;

    const sourcePrice = Number(row.bulk_price ?? row.price);
    if (!Number.isFinite(sourcePrice) || sourcePrice <= 0) continue;
    updates[String(product.id)] = {
      source: "dastavval",
      sourceProductId: String(row.productCode || row.id || row.sku || ""),
      sourcePrice,
      updatedAt,
    };
  }
  return updates;
}

function mapCoffeeomde(catalog, rows, updatedAt) {
  const bySlug = new Map(rows.map((row) => [String(row.slug || ""), row]));
  const updates = {};
  for (const product of catalog.filter(isCoffeeomde)) {
    let slug = "";
    try {
      slug = new URL(product.source).pathname.split("/").filter(Boolean).pop() || "";
    } catch {
      continue;
    }
    const row = bySlug.get(slug);
    if (!row) continue;
    const currency = String(row.prices?.currency_code || "").toUpperCase();
    if (currency && currency !== "IRT") continue;
    const sourcePrice = Number(row.prices?.price);
    if (!Number.isFinite(sourcePrice) || sourcePrice <= 0) continue;
    updates[String(product.id)] = {
      source: "coffeeomde",
      sourceProductId: String(row.id || row.sku || slug),
      sourcePrice,
      updatedAt,
    };
  }
  return updates;
}

function productImageKey(value) {
  if (typeof value !== "string") return "";
  let decoded = value;
  try {
    decoded = decodeURIComponent(value);
  } catch {
    // Keep the original path when it contains an invalid escape sequence.
  }
  return decoded.match(/(?:prd|prod)_(\d+)\.(?:webp|jpe?g|png)(?:[?#].*)?$/i)?.[1] || "";
}

function normalizeName(value) {
  return String(value || "")
    .normalize("NFKC")
    .replace(/[\u200c\u200d\u200e\u200f\ufeff]/g, " ")
    .replace(/[ي]/g, "ی")
    .replace(/[ك]/g, "ک")
    .replace(/[ًٌٍَُِّْـ]/g, "")
    .replace(/[۰-۹]/g, (digit) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit)))
    .replace(/[٠-٩]/g, (digit) => String("٠١٢٣٤٥٦٧٨٩".indexOf(digit)))
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function addCandidate(map, key, row) {
  const list = map.get(key) || [];
  list.push(row);
  map.set(key, list);
}
