import { buildPriceSnapshot, PRICE_DATA_KEY } from "./price-sync.mjs";
import { currentPrices, dynamicCatalog, handleApi, syncCatalog } from "./store.js";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === "zandbazar.ir" && url.pathname === "/") {
      const assetUrl = new URL("/zand/", url);
      const page = await withSupportWidget(await env.ASSETS.fetch(new Request(assetUrl, request)), env, request.url);
      return new HTMLRewriter()
        .on("head", {
          element(element) {
            element.prepend('<base href="/zand/">', { html: true });
          },
        })
        .transform(page);
    }

    if (url.pathname === "/zand") {
      url.pathname = "/zand/";
      return Response.redirect(url, 308);
    }

    if (url.pathname === "/zand/" || url.pathname === "/zand/index.html") {
      return withSupportWidget(await env.ASSETS.fetch(request), env, request.url);
    }

    if (url.pathname === "/zand/api" || url.pathname.startsWith("/zand/api/")) {
      const apiUrl = new URL(request.url);
      apiUrl.pathname = apiUrl.pathname.slice("/zand".length) || "/api";
      return handleApi(new Request(apiUrl, request), env);
    }

    if (url.pathname === "/api" || url.pathname.startsWith("/api/")) {
      return handleApi(request, env);
    }

    if (url.pathname === "/zand/catalog.js" && request.method === "GET") {
      return dynamicCatalog(request, env);
    }

    if (url.pathname === "/zand/prices.json" && request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, OPTIONS",
          "Access-Control-Allow-Headers": "Accept",
          "Access-Control-Max-Age": "86400",
        },
      });
    }

    if (url.pathname === "/zand/prices.json" && request.method === "GET") {
      const snapshot = await currentPrices(env);
      return Response.json(snapshot, {
        headers: {
          "Cache-Control": "public, max-age=60, s-maxage=300, stale-while-revalidate=300",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, OPTIONS",
          "Access-Control-Allow-Headers": "Accept",
        },
      });
    }

    return env.ASSETS.fetch(request);
  },

  async scheduled(controller, env, ctx) {
    ctx.waitUntil(refreshPrices(env, controller.scheduledTime));
  },
};

async function withSupportWidget(page, env, requestUrl) {
  if (!page.ok || !page.headers.get("content-type")?.includes("text/html")) return page;
  const widgetUrl = new URL("/zand/support-widget.html", requestUrl);
  const widgetResponse = await env.ASSETS.fetch(new Request(widgetUrl));
  if (!widgetResponse.ok) return page;
  const markup = await widgetResponse.text();
  return new HTMLRewriter()
    .on("head", { element(element) { element.append('<link rel="stylesheet" href="/zand/support-widget.css?v=2">', { html: true }); } })
    .on("body", { element(element) {
      element.append(markup, { html: true });
      element.append('<script src="/zand/support-widget.js?v=2" defer></script>', { html: true });
    } })
    .transform(page);
}

async function refreshPrices(env, scheduledTime) {
  const catalog = await syncCatalog(env);
  if (!catalog.length) throw new Error("catalog_empty");
  const previous = await env.PRICES.get(PRICE_DATA_KEY, "json");
  const snapshot = await buildPriceSnapshot(
    "window.CATALOG_PRODUCTS=" + JSON.stringify(catalog) + ";",
    previous,
    new Date(scheduledTime),
  );

  await env.PRICES.put(PRICE_DATA_KEY, JSON.stringify(snapshot));
  console.log(JSON.stringify({
    event: "daily_price_sync",
    generatedAt: snapshot.generatedAt,
    sources: snapshot.sources,
    itemCount: Object.keys(snapshot.items).length,
  }));
}
