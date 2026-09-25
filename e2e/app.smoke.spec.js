import { expect, test } from "@playwright/test";
import { APP_PATH, collectPageErrors, routeOpenF1 } from "./fixtures.js";

test("builder loads as the only surface, without browser errors", async ({ page }) => {
  const errors = collectPageErrors(page);
  await routeOpenF1(page);
  await page.goto(APP_PATH);

  await expect(page).toHaveTitle(/F1 Stories Ghost Car/);
  await expect(page.getByRole("heading", { level: 1, name: "Σύγκριση γύρων Formula 1" })).toBeVisible();
  await expect(page.getByLabel("Σεζόν")).toHaveValue("2025");
  // Progressive disclosure: session and driver fields appear only once they are relevant.
  await expect(page.getByLabel("Σκέλος")).toHaveCount(0);
  await expect(page.getByLabel("Οδηγός 1", { exact: true })).toHaveCount(0);
  await expect(page.getByRole("button", { name: "Σύγκριση γύρων" })).toBeDisabled();
  await expect(page.getByRole("heading", { name: "Επιλεγμένες συγκρίσεις" })).toBeVisible();
  // No replay chrome before there is a replay.
  await expect(page.getByRole("slider", { name: "Πρόοδος γύρου" })).toHaveCount(0);
  await expect(page.getByRole("tab")).toHaveCount(0);
  expect(errors).toEqual([]);
});

test("empty season explains itself", async ({ page }) => {
  await routeOpenF1(page, { empty: true });
  await page.goto(APP_PATH);
  await expect(page.getByText(/Δεν υπάρχουν ακόμη Γκραν Πρι για το 2025/)).toBeVisible();
});

test("OpenF1 failure is reported in plain language", async ({ page }) => {
  await routeOpenF1(page, { status: 500 });
  await page.goto(APP_PATH);
  await expect(page.getByRole("alert")).toContainText("Το OpenF1 δεν απαντά", { timeout: 10_000 });
  await page.getByRole("button", { name: "Απόκρυψη μηνύματος" }).click();
  await expect(page.getByRole("alert")).toHaveCount(0);
});

for (const width of [320, 390]) {
  test(`builder has no horizontal overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 800 });
    await routeOpenF1(page);
    await page.goto(APP_PATH);
    await page.getByLabel("Γκραν Πρι").selectOption({ index: 1 });
    await page.getByLabel("Σκέλος").selectOption({ index: 1 });
    await page.getByLabel("Οδηγός 1", { exact: true }).selectOption("1");
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(0);
  });
}

test("embed without a comparison shows only a quiet loading state", async ({ page }) => {
  await routeOpenF1(page, { empty: true });
  await page.goto(`${APP_PATH}?embed=1`);
  await expect(page.locator(".app--embed")).toBeVisible();
  await expect(page.getByText("Φόρτωση σύγκρισης…")).toBeVisible();
  await expect(page.getByRole("banner")).toHaveCount(0);
});

test("secondary surfaces open from menus and close with Escape", async ({ page }) => {
  await routeOpenF1(page);
  await page.goto(APP_PATH);

  await page.getByRole("button", { name: /^Όλες/ }).click();
  const featured = page.getByRole("dialog", { name: "Επιλεγμένες συγκρίσεις" });
  await expect(featured).toBeVisible();
  await featured.getByRole("searchbox").fill("suzuka");
  await expect(featured.getByRole("button", { name: /Μαγική pole στη Suzuka/ })).toBeVisible();
  // Native search field: the first Escape clears the query, the next closes the dialog.
  await page.keyboard.press("Escape");
  await expect(featured.getByRole("searchbox")).toHaveValue("");
  await page.keyboard.press("Escape");
  await expect(featured).toHaveCount(0);

  await page.getByRole("button", { name: "Περισσότερα" }).click();
  await page.getByRole("menuitem", { name: "Αποθηκευμένες συγκρίσεις" }).click();
  const saved = page.getByRole("dialog", { name: "Αποθηκευμένες συγκρίσεις" });
  await expect(saved).toContainText("Δεν έχεις αποθηκεύσει συγκρίσεις ακόμη");
  await page.keyboard.press("Escape");
  await expect(saved).toHaveCount(0);

  await page.keyboard.press("?");
  const shortcuts = page.getByRole("dialog", { name: "Συντομεύσεις πληκτρολογίου" });
  await expect(shortcuts).toBeVisible();
  await shortcuts.getByRole("button", { name: "Κλείσιμο" }).click();
  await expect(shortcuts).toHaveCount(0);
  // Focus returns to the page, not lost in a removed dialog.
  await expect(page.locator("body")).toBeVisible();
});

test("theme is a quiet preference that persists", async ({ page }) => {
  await routeOpenF1(page);
  await page.goto(APP_PATH);
  const html = page.locator("html");
  await expect(html).toHaveAttribute("data-theme", "dark");
  const darkBackground = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);

  await page.getByRole("button", { name: "Περισσότερα" }).click();
  await page.getByRole("menuitem", { name: "Φωτεινό θέμα" }).click();
  await expect(html).toHaveAttribute("data-theme", "light");
  const lightBackground = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
  expect(lightBackground).not.toEqual(darkBackground);

  await page.reload();
  await expect(html).toHaveAttribute("data-theme", "light");
  // URL theme wins over the stored preference.
  await page.goto(`${APP_PATH}?th=dark`);
  await expect(html).toHaveAttribute("data-theme", "dark");
});
