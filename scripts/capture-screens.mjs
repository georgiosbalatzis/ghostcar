// Screenshots of the app on the deterministic e2e fixtures, for before/after visual comparison.
// Usage: node scripts/capture-screens.mjs <output dir> [full]
//   default: builder and loaded replay at 390/768/1440 (+3D at 1440), both themes (docs/rework/baseline)
//   full:    every width from 320 to 1920, embeds, the other tabs and the edit sheet (docs/rework/final)
// Every capture is also checked for horizontal overflow and a clipped display title; problems are listed at the end.
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "@playwright/test";
import { createServer } from "vite";
import { APP_PATH, comparisonUrl, fourDriverUrl, routeOpenF1 } from "../e2e/fixtures.js";

const [outDir, mode] = process.argv.slice(2);
if (!outDir) {
  console.error("Usage: node scripts/capture-screens.mjs <output dir> [full]");
  process.exit(1);
}
const full = mode === "full";
await mkdir(outDir, { recursive: true });

const viewports = full
  ? [320, 390, 430, 768, 1024, 1280, 1440, 1920].map((width) => [width, width < 768 ? 844 : width < 1100 ? 1024 : 900])
  : [
      [390, 844],
      [768, 1024],
      [1440, 900],
    ];
const states = [
  { name: "empty", url: APP_PATH, view: "2d" },
  { name: "loaded-2d", url: comparisonUrl, view: "2d" },
  { name: "loaded-3d", url: comparisonUrl, view: "3d", only: [1440, ...(full ? [390] : [])] },
  ...(full
    ? [
        { name: "four-drivers", url: fourDriverUrl, view: "2d", only: [1440, 390] },
        { name: "tab-sectors", url: comparisonUrl, view: "2d", tab: "Τομείς", only: [1440, 390] },
        { name: "tab-laps", url: comparisonUrl, view: "2d", tab: "Γύροι", only: [1440] },
        { name: "tab-season", url: comparisonUrl, view: "2d", tab: "Κατατακτήριες σεζόν", only: [1440] },
        { name: "edit-sheet", url: comparisonUrl, view: "2d", edit: true, only: [1440, 390] },
        { name: "embed", url: `${comparisonUrl}&embed=1`, view: "2d", only: [390, 800] },
      ]
    : []),
];
if (full) viewports.push([800, 560]); // the article-embed size

const server = await createServer({ server: { host: "127.0.0.1", port: 5174, strictPort: true }, logLevel: "error" });
await server.listen();
const origin = "http://127.0.0.1:5174";
const browser = await chromium.launch();
const problems = [];

try {
  for (const theme of ["dark", "light"]) {
    for (const [width, height] of viewports) {
      for (const state of states) {
        const isEmbed = state.name === "embed";
        if (state.only ? !state.only.includes(width) : width === 800) continue;
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
        await page.goto(origin + state.url + (isEmbed ? `&th=${theme}` : ""));
        if (state.name === "empty") {
          await page.getByRole("button", { name: "Σύγκριση γύρων" }).waitFor();
        } else {
          const slider = page.getByRole("slider", { name: "Πρόοδος γύρου" });
          await slider.waitFor({ timeout: 15_000 });
          await slider.fill("0.45");
          await slider.blur(); // no focus ring in the capture
          await (state.view === "3d" ? page.locator(".stage canvas") : page.locator("svg.track-map")).waitFor();
          if (state.tab) await page.getByRole("tab", { name: state.tab }).click();
          if (state.edit) await page.getByRole("button", { name: "Αλλαγή σύγκρισης" }).click();
        }
        await page.evaluate(() => document.fonts.ready);
        await page.waitForTimeout(state.view === "3d" && state.name !== "empty" ? 1500 : state.tab ? 1200 : 300);
        const layout = await page.evaluate(() => {
          const title = document.querySelector(".hero h1");
          return {
            overflow: document.documentElement.scrollWidth - window.innerWidth,
            titleClipped: title ? title.scrollWidth > title.clientWidth + 1 : false,
          };
        });
        const label = `${state.name}-${width}-${theme}`;
        if (layout.overflow > 0) problems.push(`${label}: page overflows by ${layout.overflow}px`);
        if (layout.titleClipped) problems.push(`${label}: display title is clipped`);
        const file = path.join(outDir, `${label}.png`);
        await page.screenshot({ path: file, fullPage: !state.edit });
        console.log("captured", file);
        await context.close();
      }
    }
  }
} finally {
  await browser.close();
  await server.close();
}
console.log(problems.length ? `\nLayout problems:\n${problems.join("\n")}` : "\nNo layout problems.");
