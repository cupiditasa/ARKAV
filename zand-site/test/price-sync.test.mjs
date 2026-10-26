import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildPriceSnapshot } from "../src/price-sync.mjs";
import { currentPrices } from "../src/store.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const catalogPath = path.join(here, "../public/zand/catalog.js");
const catalogText = fs.readFileSync(catalogPath, "utf8");
const marker = "window.CATALOG_PRODUCTS=";
const catalog = JSON.parse(catalogText.slice(catalogText.indexOf(marker) + marker.length, catalogText.lastIndexOf("];") + 1));

test("catalog covers all available direct items and priced billboard offers", () => {
  const direct = catalog.filter(p => !p.isBillboard && p.type !== "coffee");
  const billboard = catalog.filter(p => p.isBillboard);
  const coffee = catalog.filter(p => p.type === "coffee");
  assert.equal(direct.length, 121);
  assert.equal(billboard.length, 15);
  assert.equal(coffee.length, 33);
  assert.equal(new Set(catalog.map(p => String(p.id))).size, catalog.length);
  assert.ok(catalog.every(p => Number(p.basePrice) > 0 && p.image));
});

test("daily sync imports available direct items and only approved, priced offers", async () => {
  const directRows = [
    { id: "new-1", name: "کالای مستقیم", bulk_price: 1200, price: 1100, stock_quantity_cartons: 8, image_url: "https://img.test/prd_991.webp" },
    { id: "new-2", name: "ناموجود", bulk_price: 500, stock_quantity_cartons: 0 }
  ];
  const adResponse = { success: true, count: 3, data: [
    { id: "ad-1", status: "approved", isApproved: true, isActive: true, wholesalePrice: "۱۲٬۳۰۰ تومان", price: 0 },
    { id: "ad-2", status: "rejected", isApproved: false, wholesalePrice: "۲۰٬۰۰۰ تومان" },
    { id: "ad-3", status: "approved", isApproved: true, wholesalePrice: "توافقی", price: 0 }
  ] };
  const fixture = [
    { id: "dastavval-new-1", name: "کالای مستقیم", source: "https://dastavval.com/?tab=order", type: "carton" },
    { id: "dastavval-new-2", name: "ناموجود", source: "https://dastavval.com/?tab=order", type: "carton" },
    { id: "billboard-ad-1", name: "حراج", source: "https://dastavval.com/?tab=billboard", type: "carton", isBillboard: true },
    { id: "billboard-ad-2", name: "ردشده", source: "https://dastavval.com/?tab=billboard", type: "carton", isBillboard: true },
    { id: "billboard-ad-3", name: "بی‌قیمت", source: "https://dastavval.com/?tab=billboard", type: "carton", isBillboard: true },
    { id: "coffee-1", name: "قهوه", source: "https://coffeeomde.ir/product/coffee/", type: "coffee" }
  ];
  const fetcher = async url => {
    if (url.includes("/dev/products")) return Response.json(directRows);
    if (url.includes("/dev/ads")) return Response.json(adResponse);
    if (url.includes("coffeeomde")) return Response.json([{ slug: "coffee", id: 72, prices: { currency_code: "IRT", price: "330000" } }]);
    throw new Error("unexpected source URL");
  };
  const now = new Date("2026-10-26T12:00:00.000Z");
  const snapshot = await buildPriceSnapshot("window.CATALOG_PRODUCTS=" + JSON.stringify(fixture) + ";", null, now, fetcher);
  assert.equal(snapshot.sources.dastavval.status, "ok");
  assert.equal(snapshot.sources.dastavval.matched, 1);
  assert.equal(snapshot.items["dastavval-new-1"].sourcePrice, 1200);
  assert.equal(snapshot.items["dastavval-new-2"], undefined);
  assert.equal(snapshot.sources["dastavval-billboard"].status, "ok");
  assert.equal(snapshot.sources["dastavval-billboard"].matched, 1);
  assert.equal(snapshot.items["billboard-ad-1"].sourcePrice, 12300);
  assert.equal(snapshot.items["billboard-ad-2"], undefined);
  assert.equal(snapshot.items["billboard-ad-3"], undefined);
  assert.equal(snapshot.items["coffee-1"].sourcePrice, 330000);
});

test("direct and billboard prices include exactly 10 percent", async () => {
  const updatedAt = "2026-10-26T11:00:00.000Z";
  const products = [
    { id: "direct", name: "مستقیم", category: "تنقلات", brand: "", base_price: 1000, price_mode: "source", carton_count: 1, min_cartons: 1, description: "", image: "", source: "https://dastavval.com/?tab=order", type: "carton", is_active: 1, deleted_at: null, updated_at: updatedAt },
    { id: "billboard-ad", name: "حراج", category: "حراج عمده", brand: "", base_price: 2000, price_mode: "source", carton_count: 1, min_cartons: 1, description: "", image: "", source: "https://dastavval.com/?tab=billboard", type: "carton", is_active: 1, deleted_at: null, updated_at: updatedAt },
    { id: "manual-direct", name: "قیمت دستی", category: "تنقلات", brand: "", base_price: 3000, price_mode: "manual", carton_count: 1, min_cartons: 1, description: "", image: "", source: "https://dastavval.com/?tab=order", type: "carton", is_active: 1, deleted_at: null, updated_at: updatedAt },
    { id: "coffee-1", name: "قهوه", category: "coffee", brand: "", base_price: 4000, price_mode: "source", carton_count: 1, min_cartons: 1, description: "", image: "", source: "https://coffeeomde.ir/product/coffee/", type: "coffee", is_active: 1, deleted_at: null, updated_at: updatedAt }
  ];
  const snapshot = { generatedAt: updatedAt, sources: {}, items: {
    direct: { source: "dastavval", sourcePrice: 1000, updatedAt },
    "billboard-ad": { source: "dastavval-billboard", sourcePrice: 2000, updatedAt },
    "coffee-1": { source: "coffeeomde", sourcePrice: 4000, updatedAt }
  } };
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(catalogText));
  const revision = [...new Uint8Array(digest)].map(byte => byte.toString(16).padStart(2, "0")).join("");
  const statement = sql => ({
    bind() { return this; },
    async first() {
      if (sql.includes("global_margin")) return { value: "5" };
      if (sql.includes("catalog_revision")) return { value: revision };
      return null;
    },
    async all() {
      if (sql.includes("SELECT * FROM products")) return { results: products };
      if (sql.includes("category_margin_rules")) return { results: [] };
      return { results: [] };
    }
  });
  const env = {
    PRICES: { async get() { return snapshot; } },
    DB: { prepare: statement },
    ASSETS: { async fetch() { return new Response(catalogText); } }
  };
  const prices = await currentPrices(env);
  assert.equal(prices.items.direct.customerPrice, 1100);
  assert.equal(prices.items.direct.marginPercent, 10);
  assert.equal(prices.items["billboard-ad"].customerPrice, 2200);
  assert.equal(prices.items["billboard-ad"].marginPercent, 10);
  assert.equal(prices.items["manual-direct"].customerPrice, 3300);
  assert.equal(prices.items["manual-direct"].marginPercent, 10);
  assert.equal(prices.items["coffee-1"].customerPrice, 4200);
  assert.equal(prices.items["coffee-1"].marginPercent, 5);
});