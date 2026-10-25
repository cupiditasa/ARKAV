import { buildPriceSnapshot, PRICE_DATA_KEY } from "./price-sync.mjs";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/zand") {
      url.pathname = "/zand/";
      return Response.redirect(url, 308);
    }

    if (url.pathname === "/zand/prices.json" && request.method === "GET") {
      const snapshot = await env.PRICES.get(PRICE_DATA_KEY, "json");
      return Response.json(
        snapshot || { schemaVersion: 1, generatedAt: null, sources: {}, items: {} },
        {
          headers: {
            "Cache-Control": "public, max-age=60, s-maxage=300, stale-while-revalidate=300",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, OPTIONS",
            "Access-Control-Allow-Headers": "Accept",
          },
        },
      );
    }

    return env.ASSETS.fetch(request);
  },

  async scheduled(controller, env, ctx) {
    ctx.waitUntil(refreshPrices(env, controller.scheduledTime));
  },
};

async function refreshPrices(env, scheduledTime) {
  const catalogResponse = await env.ASSETS.fetch("https://assets.local/zand/catalog.js");
  if (!catalogResponse.ok) throw new Error("catalog_asset_http_" + catalogResponse.status);

  const previous = await env.PRICES.get(PRICE_DATA_KEY, "json");
  const snapshot = await buildPriceSnapshot(
    await catalogResponse.text(),
    previous,
    new Date(scheduledTime),
  );

  await env.PRICES.put(PRICE_DATA_KEY, JSON.stringify(snapshot));
  console.log(
    JSON.stringify({
      event: "daily_price_sync",
      generatedAt: snapshot.generatedAt,
      sources: snapshot.sources,
      itemCount: Object.keys(snapshot.items).length,
    }),
  );
}
