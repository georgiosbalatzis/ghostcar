// Screenshots of the app on the deterministic e2e fixtures, for before/after visual comparison.
// Usage: node scripts/capture-screens.mjs <output dir>   (e.g. docs/rework/baseline)
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "@playwright/test";
import { createServer } from "vite";
import { APP_PATH, comparisonUrl, routeOpenF1 } from "../e2e/fixtures.js";

const outDir = process.argv[2];
if (!outDir) {
  console.error("Usage: node scripts/capture-screens.mjs <output dir>");
  process.exit(1);
}
await mkdir(outDir, { recursive: true });

const viewports = [
  [390, 844],
  [768, 1024],
  [1440, 900],
];
const states = [
  { name: "empty", url: APP_PATH, view: "2d" },
  { name: "loaded-2d", url: comparisonUrl, view: "2d" },
  { name: "loaded-3d", url: comparisonUrl, view: "3d", only: 1440 },
];

const server = await createServer({ server: { host: "127.0.0.1", port: 5174, strictPort: true }, logLevel: "error" });
await server.listen();
const origin = "http://127.0.0.1:5174";
const browser = await chromium.launch();

try {
  for (const theme of ["dark", "light"]) {
    for (const [width, height] of viewports) {
      for (const state of states) {
        if (state.only && state.only !== width) continue;
        const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1 });
        await context.addInitScript(
          ([view, th]) => {
            localStorage.setItem("f1s-track-view", view);
            localStorage.setItem("f1s-theme", th);
          },
          [state.view, theme]
        );
        const page = await context.newPage();
        await routeOpenF1(page);
        await page.goto(origin + state.url);
        if (state.name === "empty") {
          await page.getByRole("button", { name: "Σύγκριση γύρων" }).waitFor();
        } else {
          const slider = page.getByRole("slider", { name: "Πρόοδος γύρου" });
          await slider.waitFor({ timeout: 15_000 });
          await slider.fill("0.45");
          await slider.blur(); // no focus ring in the capture
          await (state.view === "3d" ? page.locator(".stage canvas") : page.locator("svg.track-map")).waitFor();
        }
        await page.evaluate(() => document.fonts.ready);
        await page.waitForTimeout(state.view === "3d" && state.name !== "empty" ? 1500 : 300);
        const file = path.join(outDir, `${state.name}-${width}-${theme}.png`);
        await page.screenshot({ path: file, fullPage: true });
        console.log("captured", file);
        await context.close();
      }
    }
  }
} finally {
  await browser.close();
  await server.close();
}
