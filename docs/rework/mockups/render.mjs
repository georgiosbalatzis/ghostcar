// Renders the rework mockups to PNG: node docs/rework/mockups/render.mjs
import { chromium } from "@playwright/test";
import { fileURLToPath } from "node:url";
import path from "node:path";

const dir = path.dirname(fileURLToPath(import.meta.url));
const shots = [
  ["a-desk-loaded.html", 1440, 900, true],
  ["a-desk-empty.html", 1440, 900, true],
  ["a-desk-mobile.html", 390, 844, true],
  ["b-broadcast.html", 1440, 900, false],
  ["b-broadcast.html?light", 1440, 900, false],
  ["b-broadcast-mobile.html", 390, 844, false],
  ["c-story.html", 1440, 900, true],
  ["c-story-mobile.html", 390, 844, true],
];

const browser = await chromium.launch();
const only = process.argv[2]; // optional filename filter
for (const [file, width, height, fullPage] of shots.filter(([f]) => !only || f.includes(only))) {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: width < 500 ? 2 : 1 });
  await page.goto("file://" + path.join(dir, "src", file));
  await page.waitForTimeout(150);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.join(dir, file.replace(".html?", "-").replace(".html", "") + ".png"), fullPage });
  await page.close();
  console.log("rendered", file);
}
await browser.close();
