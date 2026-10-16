import { expect, test } from "@playwright/test";
import { readFile } from "node:fs/promises";
import { collectPageErrors, comparisonUrl, routeOpenF1, setPreferences } from "./fixtures.js";

const raw = async (name) =>
  JSON.parse(await readFile(new URL(`../docs/analysis/russell-baku-2026/raw/${name}.json`, import.meta.url)));
const url = "/ghostcar/?y=2026&mk=1295&sk=11373&d1=63&d2=63&l1=21&l2=25&tab=sectors&v=2";
async function routeRussell(page) {
  await setPreferences(page, { trackView: "2d" });
  await page.route("https://api.openf1.org/v1/**", async (route) => {
    const request = new URL(route.request().url()),
      ep = request.pathname.split("/").at(-1);
    const table = {
      meetings: "meetings",
      sessions: "sessions",
      drivers: "drivers",
      laps: "laps-russell",
      stints: "stints-russell",
    };
    let body = [];
    if (table[ep]) body = await raw(table[ep]);
    if (["location", "car_data"].includes(ep)) {
      const lap = request.searchParams.get("date>").includes("13:02") ? 25 : 21;
      body = await raw(`lap-${lap}-${ep === "location" ? "location" : "telemetry"}`);
    }
    await route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify(body) });
  });
}

test("same-driver figures select map, delta and final-run telemetry and download self-contained SVG/PNG", async ({
  page,
}) => {
  const errors = collectPageErrors(page);
  await routeRussell(page);
  await page.goto(url);
  const figures = page.locator(".analysis-figures");
  await expect(figures.locator("svg.comparison-figure")).toBeVisible();
  await expect(figures).toContainText("RUS · L21");
  await expect(figures).toContainText("RUS · L25");
  await figures.screenshot({ path: "/tmp/ghostcar-figure-map-desktop.png" });
  await figures.getByRole("combobox", { name: "Γράφημα", exact: true }).selectOption("delta");
  await expect(figures).toContainText("Τερματισμός: +1.187 s");
  const svgDownload = page.waitForEvent("download");
  await figures.getByRole("button", { name: "SVG", exact: true }).click();
  const svg = await readFile(await (await svgDownload).path(), "utf8");
  expect(svg).toContain("@font-face");
  expect(svg).toContain("data:");
  expect(svg).toContain("L21");
  expect(svg).toContain("L25");
  expect(svg).toContain("+1.187");
  await figures.getByRole("combobox", { name: "Γράφημα", exact: true }).selectOption("telemetry");
  await figures.getByRole("button", { name: "T16 έξοδος* → τερματισμός", exact: true }).click();
  await expect(figures.getByRole("combobox", { name: "Από στροφή", exact: true })).toHaveValue("turn-16");
  await expect(figures.locator('input[type="number"]')).toHaveCount(0);
  await expect(figures.getByRole("combobox", { name: "Από στροφή", exact: true }).locator("option")).toHaveCount(21);
  await expect(figures).toContainText("DRS · δεν υπάρχουν διαθέσιμα δεδομένα");
  await figures.getByRole("button", { name: "T20 έξοδος* → τερματισμός", exact: true }).click();
  await expect(figures).toContainText(/Επιμέρους κέρδος Β: 0\.0/);
  await figures.screenshot({ path: "/tmp/ghostcar-figure-telemetry-desktop.png" });
  const pngDownload = page.waitForEvent("download");
  await figures.getByRole("button", { name: "PNG · 4.200 px" }).click();
  const png = await readFile(await (await pngDownload).path());
  expect(png.subarray(1, 4).toString()).toBe("PNG");
  expect(png.readUInt32BE(16)).toBe(4200);
  expect(
    await page.evaluate(async (base64) => {
      const image = new Image();
      image.src = `data:image/png;base64,${base64}`;
      await image.decode();
      const canvas = document.createElement("canvas");
      canvas.width = 120;
      canvas.height = 100;
      const context = canvas.getContext("2d");
      context.drawImage(image, 0, 0, 120, 100);
      const pixels = context.getImageData(0, 0, 120, 100).data;
      let differing = 0;
      for (let i = 0; i < pixels.length; i += 4)
        if (
          Math.abs(pixels[i] - pixels[0]) + Math.abs(pixels[i + 1] - pixels[1]) + Math.abs(pixels[i + 2] - pixels[2]) >
          50
        )
          differing++;
      return differing;
    }, png.toString("base64"))
  ).toBeGreaterThan(100);
  expect(errors).toEqual([]);
});

test("embed dialog chooses each figure, preserves lap/range identity, and can lock reader controls", async ({
  page,
}) => {
  await routeRussell(page);
  await page.goto(url);
  await page.locator(".analysis-figures").getByRole("button", { name: "Ενσωμάτωση γραφήματος" }).click();
  const dialog = page.getByRole("dialog", { name: "Ενσωμάτωση σε σελίδα" });
  await dialog.getByLabel("Προβολή ενσωμάτωσης").selectOption("telemetry");
  await dialog.getByRole("combobox", { name: "Από στροφή", exact: true }).selectOption("turn-16");
  await dialog.getByRole("combobox", { name: "Έως στροφή", exact: true }).selectOption("turn-20");
  await expect(
    dialog.getByRole("combobox", { name: "Από στροφή", exact: true }).locator('option[value="turn-20"]')
  ).toHaveJSProperty("disabled", true);
  const code = await dialog.getByRole("textbox", { name: "Κώδικας ενσωμάτωσης" }).inputValue();
  expect(code).toContain("fig=telemetry");
  const selectedRange = new URL(code.match(/src="([^"]+)"/)[1]);
  expect(Number(selectedRange.searchParams.get("from"))).toBeCloseTo(4114.7, 0);
  expect(Number(selectedRange.searchParams.get("to"))).toBeCloseTo(5010.4, 0);
  expect(code).toContain("d1=63&d2=63");
  expect(code).toContain("l1=21&l2=25");
  expect(code).not.toContain("fixed=1");
  await dialog.getByRole("checkbox").uncheck();
  const locked = await dialog.getByRole("textbox", { name: "Κώδικας ενσωμάτωσης" }).inputValue();
  expect(locked).toContain("fixed=1");
  const src = new URL(locked.match(/src="([^"]+)"/)[1]);
  await page.goto(src.pathname + src.search);
  await expect(page.locator("svg.comparison-figure")).toBeVisible();
  await expect(page.locator("svg.comparison-figure")).toContainText("T16 έξοδος* → T20 έξοδος*");
  await expect(page.locator(".analysis-figures select")).toHaveCount(0);
  await expect(page.locator(".stage")).toHaveCount(0);
  await expect(page.locator(".embed__footer")).toBeVisible();
});

test("interactive mobile figure embed changes views and ranges without overflowing the document", async ({ page }) => {
  const errors = collectPageErrors(page);
  await page.setViewportSize({ width: 390, height: 844 });
  await routeRussell(page);
  await page.goto(`${url}&embed=1&fig=telemetry&from=4115&th=dark`);
  await expect(page.locator("svg.comparison-figure")).toBeVisible();
  await expect(page.locator(".app--embed .site-masthead")).toHaveCount(0);
  await expect(page.getByRole("combobox", { name: "Από στροφή", exact: true })).toHaveValue("custom");
  await page.getByRole("combobox", { name: "Από στροφή", exact: true }).selectOption("turn-16");
  await page.getByRole("combobox", { name: "Έως στροφή", exact: true }).selectOption("turn-20");
  await expect(page.locator("svg.comparison-figure")).toContainText("T16 έξοδος* → T20 έξοδος*");
  await page.screenshot({ path: "/tmp/ghostcar-turns-embed-mobile.png", fullPage: true });
  await page.getByRole("combobox", { name: "Γράφημα", exact: true }).selectOption("delta");
  await expect(page.locator(".analysis-figures")).toContainText("Τερματισμός: +1.187 s");
  await page.screenshot({ path: "/tmp/ghostcar-figure-embed-mobile.png", fullPage: true });
  expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBeLessThanOrEqual(1);
  expect(await page.locator(".figure-scroll").evaluate((node) => node.scrollWidth > node.clientWidth)).toBe(true);
  expect(errors).toEqual([]);
});

test("unreliable positions refuse publication figures and disable downloads", async ({ page }) => {
  await routeOpenF1(page);
  await setPreferences(page, { trackView: "2d" });
  await page.goto(`${comparisonUrl.replace("l1=7", "l1=5")}&tab=sectors`);
  const figures = page.locator(".analysis-figures");
  await expect(figures).toContainText("Δεν υπάρχει αξιόπιστη σύγκριση ανά απόσταση.");
  await expect(figures.locator("svg")).toHaveCount(0);
  await expect(figures.getByRole("button", { name: "SVG", exact: true })).toBeDisabled();
});

test("invalid ranges are explicit and unapplied lap edits cannot relabel the published figure", async ({ page }) => {
  await routeRussell(page);
  await page.goto(`${url}&fig=telemetry&from=5000&to=4000`);
  const figures = page.locator(".analysis-figures");
  await expect(figures.getByRole("alert")).toContainText("Δώσε αρχή μικρότερη");
  await expect(figures.getByRole("button", { name: "SVG", exact: true })).toBeDisabled();
  await figures.getByRole("button", { name: "Όλος ο γύρος", exact: true }).click();
  await expect(figures.locator("svg")).toBeVisible();
  await page.getByRole("button", { name: "Αλλαγή σύγκρισης", exact: true }).click();
  await page.getByRole("dialog").getByLabel("Γύρος οδηγού 1", { exact: true }).selectOption("23");
  await page.keyboard.press("Escape");
  await expect(figures).toContainText("RUS · L21");
  await expect(figures).not.toContainText("RUS · L23");
  await figures.getByRole("button", { name: "Ενσωμάτωση γραφήματος" }).click();
  const code = await page.getByRole("dialog").getByRole("textbox", { name: "Κώδικας ενσωμάτωσης" }).inputValue();
  expect(code).toContain("l1=21");
  expect(code).not.toContain("l1=23");
});

test("different-driver comparisons use the same figures without changing the replay embed default", async ({
  page,
}) => {
  await routeOpenF1(page);
  await setPreferences(page, { trackView: "2d" });
  await page.goto(`${comparisonUrl}&tab=sectors`);
  await expect(page.locator("svg.comparison-figure")).toBeVisible();
  await expect(page.locator(".analysis-figures")).toContainText("VER · L7");
  await expect(page.locator(".analysis-figures")).toContainText("NOR · L8");
  await page.getByRole("button", { name: "Ενσωμάτωση", exact: true }).click();
  const dialog = page.getByRole("dialog", { name: "Ενσωμάτωση σε σελίδα" });
  await expect(dialog.getByLabel("Προβολή ενσωμάτωσης")).toHaveValue("replay");
  const code = await dialog.getByRole("textbox", { name: "Κώδικας ενσωμάτωσης" }).inputValue();
  expect(code).not.toContain("fig=");
  expect(code).toContain('height="560"');
  await page.keyboard.press("Escape");
  await page
    .locator(".analysis-figures")
    .getByRole("combobox", { name: "Γράφημα", exact: true })
    .selectOption("telemetry");
  await expect(page.getByLabel("Από [m]", { exact: true })).toBeVisible();
  await expect(page.locator(".analysis-figures")).toContainText("Δεν υπάρχει διαθέσιμη χαρτογράφηση στροφών");
});
