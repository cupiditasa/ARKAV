import { readFile, writeFile } from "node:fs/promises";
import { buildPriceSnapshot } from "../src/price-sync.mjs";

const outputPath = process.argv[2];
if (!outputPath) throw new Error("Pass an output file path for Wrangler KV seed data.");

const catalogText = await readFile(new URL("../public/zand/catalog.js", import.meta.url), "utf8");
const snapshot = await buildPriceSnapshot(catalogText, null, new Date(), fetch);
const count = Object.keys(snapshot.items).length;
if (snapshot.sources.dastavval?.status !== "ok" || snapshot.sources.coffeeomde?.status !== "ok" || count < 140) {
  throw new Error("Initial source sync did not reach the expected coverage.");
}
await writeFile(outputPath, JSON.stringify(snapshot), "utf8");
console.log("Initial price snapshot ready: " + count + " products.");
