import { expect, test } from "@playwright/test";
import {
  APP_PATH,
  canvasHasPixels,
  collectPageErrors,
  comparisonUrl,
  fourDriverUrl,
  invalidLapUrl,
  routeOpenF1,
  setPreferences,
  timeline,
  trackMap,
} from "./fixtures.js";

async function expectSceneRendered(page) {
  const canvas = page.locator(".stage canvas").first();
  await expect(canvas).toBeVisible();
  await expect.poll(() => canvasHasPixels(canvas), { message: "WebGL canvas should render pixels" }).toBe(true);
}

test("primary flow: build, compare, play, scrub, switch view, inspect, edit, share", async ({ page }) => {
  const errors = collectPageErrors(page);
  await setPreferences(page, { trackView: "2d" });
  await page.addInitScript(() => {
    // Deterministic clipboard failure exercises the manual-copy fallback.
    Object.defineProperty(navigator, "clipboard", { value: { writeText: () => Promise.reject(new Error("no")) } });
  });
  await routeOpenF1(page);
  await page.goto(APP_PATH);

  await page.getByLabel("Γκραν Πρι").selectOption({ label: "Monza GP" });
  await page.getByLabel("Σκέλος").selectOption({ label: "Κατατακτήριες" });
  await page.getByLabel("Οδηγός 1", { exact: true }).selectOption("1");
  await page.getByLabel("Οδηγός 2", { exact: true }).selectOption("4");
  // Fastest-lap fallback preselects each driver's best lap.
  await expect(page.getByLabel("Γύρος οδηγού 1")).toHaveValue("7");
  await expect(page.getByLabel("Γύρος οδηγού 2")).toHaveValue("8");
  await page.getByRole("button", { name: "Σύγκριση γύρων" }).click();

  // Workspace: replay dominates, the form is gone, the result is labelled honestly.
  await expect(trackMap(page)).toBeVisible();
  await expect(page.getByLabel("Σεζόν")).toHaveCount(0);
  await expect(page.getByText("Τελική διαφορά γύρου")).toBeVisible();
  await expect(page.locator(".legend__value")).toHaveText("0.500 s");
  await expect(page.getByRole("banner")).toContainText("Monza GP 2025");

  await timeline(page).fill("0.45");
  await page.getByRole("button", { name: "Αναπαραγωγή" }).click();
  await expect.poll(async () => Number(await timeline(page).inputValue()), { timeout: 8000 }).toBeGreaterThan(0.45);
  await page.getByRole("button", { name: "Παύση" }).click();

  await page.getByRole("button", { name: "3D", exact: true }).click();
  await expectSceneRendered(page);
  await page.getByRole("button", { name: "2D", exact: true }).click();
  await expect(trackMap(page)).toBeVisible();

  await page.getByRole("tab", { name: "Τηλεμετρία" }).click();
  await expect(page.locator("figure.trace")).toHaveCount(3);
  await page.getByRole("tab", { name: "Τομείς" }).click();
  await expect(page.getByRole("table", { name: "Χρόνοι τομέων" })).toBeVisible();

  // Editing does not discard the loaded replay; it opens the builder in a sheet.
  await page.getByRole("button", { name: "Αλλαγή σύγκρισης" }).click();
  const sheet = page.getByRole("dialog", { name: "Αλλαγή σύγκρισης" });
  await expect(sheet.getByLabel("Οδηγός 1", { exact: true })).toHaveValue("1");
  await sheet.getByLabel("Γύρος οδηγού 1").selectOption("5");
  await sheet.getByRole("button", { name: "Φόρτωση σύγκρισης" }).click();
  await expect(sheet).toHaveCount(0);
  await expect(page.locator(".legend__drivers")).toContainText("Γ5");

  await page.getByRole("button", { name: "Κοινοποίηση" }).click();
  await page.getByRole("menuitem", { name: "Αντιγραφή συνδέσμου" }).click();
  const linkDialog = page.getByRole("dialog", { name: "Σύνδεσμος σύγκρισης" });
  await expect(linkDialog.getByRole("textbox")).toHaveValue(/d1=1&d2=4&l1=5&l2=8/);
  await page.keyboard.press("Escape");

  expect(errors).toEqual([]);
});

test("a cancelled load never replaces the builder or leaves a stuck loading state", async ({ page }) => {
  await setPreferences(page, { trackView: "2d" });
  await routeOpenF1(page, { locationDelayMs: 1500 });
  await page.goto(APP_PATH);
  await page.getByLabel("Γκραν Πρι").selectOption({ label: "Monza GP" });
  await page.getByLabel("Σκέλος").selectOption({ label: "Κατατακτήριες" });
  await page.getByLabel("Οδηγός 1", { exact: true }).selectOption("1");
  await page.getByLabel("Οδηγός 2", { exact: true }).selectOption("4");
  await page.getByRole("button", { name: "Σύγκριση γύρων" }).click();

  const status = page.locator(".builder__status");
  await expect(status).toContainText("VER γύρος 7 · NOR γύρος 8");
  await status.getByRole("button", { name: "Ακύρωση" }).click();
  await expect(status).toHaveCount(0);
  // Let the aborted responses arrive: they must not produce a replay.
  await page.waitForTimeout(1800);
  await expect(trackMap(page)).toHaveCount(0);
  await expect(page.getByRole("button", { name: "Σύγκριση γύρων" })).toBeEnabled();

  await page.getByRole("button", { name: "Σύγκριση γύρων" }).click();
  await expect(trackMap(page)).toBeVisible({ timeout: 8000 });
});

test("3D replay renders and survives a 2D round trip from a shared link", async ({ page }) => {
  const errors = collectPageErrors(page);
  await setPreferences(page, { trackView: "3d" });
  await routeOpenF1(page);
  await page.goto(comparisonUrl);
  await expectSceneRendered(page);
  await page.getByRole("button", { name: "Επιλογές προβολής" }).click();
  await page.getByRole("menuitemradio", { name: "Από ψηλά" }).click();
  await page.getByRole("button", { name: "2D", exact: true }).click();
  await expect(trackMap(page)).toBeVisible();
  await expect(page.locator(".stage canvas")).toHaveCount(0);
  await page.getByRole("button", { name: "3D", exact: true }).click();
  await expectSceneRendered(page);
  expect(errors).toEqual([]);
});

test("WebGL failure continues in 2D with a discreet message", async ({ page }) => {
  await setPreferences(page, { trackView: "3d" });
  await page.addInitScript(() => {
    delete window.WebGLRenderingContext;
  });
  await routeOpenF1(page);
  await page.goto(comparisonUrl);
  await expect(trackMap(page)).toBeVisible();
  await expect(page.getByRole("status").filter({ hasText: "Συνέχεια σε 2D" })).toBeVisible();
});

test("invalid shared lap warning stays visible after fastest-lap fallback", async ({ page }) => {
  const errors = collectPageErrors(page);
  await setPreferences(page, { trackView: "2d" });
  await routeOpenF1(page);
  await page.goto(invalidLapUrl);
  await expect(page.getByText(/Δεν βρέθηκε διαθέσιμος γύρος L99 για τον Οδηγό 1/)).toBeVisible();
  await expect(trackMap(page)).toBeVisible();
  await expect(page.locator(".legend__drivers")).toContainText("Γ7");
  expect(errors).toEqual([]);
});

test("four-driver links restore every slot", async ({ page }) => {
  await setPreferences(page, { trackView: "2d" });
  await routeOpenF1(page);
  await page.goto(fourDriverUrl);
  await expect(page.locator(".legend__drivers tbody tr")).toHaveCount(4);
  await expect(page.locator(".car")).toHaveCount(4);
  await page.getByRole("tab", { name: "Τηλεμετρία" }).click();
  await expect(page.locator(".brake-lane")).toHaveCount(4);
});

test("picking another lap marks the replay as out of date until applied", async ({ page }) => {
  await setPreferences(page, { trackView: "2d" });
  await routeOpenF1(page);
  await page.goto(comparisonUrl);
  await expect(trackMap(page)).toBeVisible();
  await page.getByRole("tab", { name: "Γύροι" }).click();
  await page.getByRole("button", { name: /Γ5/ }).first().click();
  const pending = page.getByRole("status").filter({ hasText: "διαφέρει" });
  await expect(pending).toBeVisible();
  // The replay still describes what was loaded.
  await expect(page.locator(".legend__drivers")).toContainText("Γ7");
  await pending.getByRole("button", { name: "Φόρτωση" }).click();
  await expect(page.locator(".legend__drivers")).toContainText("Γ5");
  await expect(pending).toHaveCount(0);
});

for (const width of [320, 390, 768]) {
  test(`loaded replay is usable at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: width === 768 ? 1024 : 844 });
    await setPreferences(page, { trackView: "2d" });
    await routeOpenF1(page);
    await page.goto(comparisonUrl);
    await expect(trackMap(page)).toBeVisible();

    await timeline(page).fill("0.45");
    await expect(timeline(page)).toHaveValue("0.45");
    await page.getByLabel("Ταχύτητα αναπαραγωγής").selectOption("2");
    await page.getByRole("button", { name: "Αναπαραγωγή" }).click();
    await expect.poll(async () => Number(await timeline(page).inputValue()), { timeout: 8000 }).toBeGreaterThan(0.45);
    await page.getByRole("button", { name: "Παύση" }).click();
    const loopButton = page.getByRole("button", { name: /Επανάληψη/ });
    await loopButton.click();
    await expect(loopButton).toHaveAttribute("aria-pressed", "true");

    const box = await page.evaluate(() => ({
      page: document.documentElement.scrollWidth,
      play: document.querySelector(".transport__play").getBoundingClientRect().toJSON(),
      slider: document.querySelector(".timeline").getBoundingClientRect().toJSON(),
    }));
    expect(box.page).toBeLessThanOrEqual(width);
    expect(box.play.width).toBeGreaterThanOrEqual(44);
    expect(box.slider.width).toBeGreaterThan(width < 768 ? 250 : 300);

    // The replay is reached before any form on small screens.
    const stageTop = await page.locator(".stage").evaluate((node) => node.getBoundingClientRect().top);
    expect(stageTop).toBeLessThan(120);

    await page.getByRole("button", { name: "Αλλαγή σύγκρισης" }).click();
    await expect(page.getByRole("dialog", { name: "Αλλαγή σύγκρισης" }).getByLabel("Σεζόν")).toBeVisible();
  });
}

test("mobile embed keeps replay, scrub and play inside its frame", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 650 });
  await setPreferences(page, { trackView: "2d" });
  await routeOpenF1(page);
  await page.goto(`${comparisonUrl}&tv=2d&embed=1`);
  await expect(trackMap(page)).toBeVisible();
  await expect(page.getByRole("button", { name: "Αναπαραγωγή" })).toBeInViewport();
  await timeline(page).fill("0.6");
  await expect(timeline(page)).toHaveValue("0.6");
  await expect(page.getByRole("link", { name: /Άνοιγμα στο F1 Stories Ghost Car/ })).toHaveAttribute(
    "href",
    /d1=1&d2=4/
  );
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(390);
  await expect(page.getByRole("banner")).toHaveCount(0);
  await expect(page.getByRole("tab")).toHaveCount(0);
});

test("publishing and season analysis preserve the loaded comparison", async ({ page }) => {
  const errors = collectPageErrors(page);
  await setPreferences(page, { trackView: "2d" });
  await routeOpenF1(page);
  await page.goto(comparisonUrl);
  await expect(trackMap(page)).toBeVisible();

  await page.getByRole("button", { name: "Περισσότερα" }).click();
  await page.getByRole("menuitem", { name: /Κατατακτήριες σεζόν 2025/ }).click();
  const season = page.getByRole("dialog", { name: "Κατατακτήριες 2025" });
  await expect(season.getByRole("row", { name: /Monza GP/ })).toBeVisible({ timeout: 10_000 });
  await page.keyboard.press("Escape");

  await page.getByRole("button", { name: "Κοινοποίηση" }).click();
  await page.getByRole("menuitem", { name: "Αποθήκευση σύγκρισης" }).click();
  await expect(page.getByRole("status").filter({ hasText: "αποθηκεύτηκε" })).toBeVisible();

  await page.getByRole("button", { name: "Κοινοποίηση" }).click();
  await page.getByRole("menuitem", { name: "Ενσωμάτωση σε σελίδα" }).click();
  await expect(page.getByRole("dialog", { name: "Ενσωμάτωση σε σελίδα" }).getByRole("textbox")).toHaveValue(
    /src="https:\/\/georgiosbalatzis\.github\.io\/ghostcar\/\?[^"]*embed=1/
  );
  await page.keyboard.press("Escape");

  await page.getByRole("button", { name: "Περισσότερα" }).click();
  await page.getByRole("menuitem", { name: "Αποθηκευμένες συγκρίσεις" }).click();
  const saved = page.getByRole("dialog", { name: "Αποθηκευμένες συγκρίσεις" });
  await expect(saved.locator(".saved")).toHaveCount(1);
  await saved.getByRole("button", { name: /VER – NOR/ }).click();
  await expect(saved).toHaveCount(0);
  await expect(trackMap(page)).toBeVisible();
  await expect(page.locator(".legend__drivers")).toContainText("VER");

  await timeline(page).focus();
  await page.keyboard.press("ArrowRight");
  await expect.poll(async () => Number(await timeline(page).inputValue())).toBeGreaterThan(0);
  expect(errors).toEqual([]);
});
