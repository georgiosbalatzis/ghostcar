import { expect, test } from "@playwright/test";

const APP_PATH = "/ghostcar/";

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    window.localStorage.setItem("f1s-toured", "1");
  });
  await page.route("https://api.openf1.org/v1/**", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: "[]",
    });
  });
});

async function dismissTour(page) {
  const skipButton = page.getByRole("button", { name: "ΠΑΡΑΛΕΙΨΗ" });
  if (await skipButton.isVisible().catch(() => false)) {
    await skipButton.click();
  }
}

function collectPageErrors(page) {
  const errors = [];
  page.on("pageerror", (error) => {
    errors.push(error.message);
  });
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  return errors;
}

test("desktop app shell loads without browser errors", async ({ page }) => {
  const errors = collectPageErrors(page);

  await page.goto(APP_PATH);
  await dismissTour(page);

  await expect(page).toHaveTitle(/F1 Stories Ghost Car/);
  await expect(page.getByRole("button", { name: /ΜΑΧΕΣ/ })).toBeVisible();
  await expect(page.getByRole("combobox").first()).toBeVisible();
  expect(errors).toEqual([]);
});

test("mobile shell does not create horizontal page overflow", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });

  await page.goto(APP_PATH);
  await dismissTour(page);

  const hasHorizontalOverflow = await page.evaluate(
    () =>
      document.documentElement.scrollWidth > window.innerWidth + 1 || document.body.scrollWidth > window.innerWidth + 1
  );
  expect(hasHorizontalOverflow).toBe(false);
});

test("embed mode renders the embed loading shell", async ({ page }) => {
  await page.goto(`${APP_PATH}?embed=1`);

  await expect(page.getByText("ΦΟΡΤΩΣΗ ΣΥΓΚΡΙΣΗΣ")).toBeVisible();
  await expect(page.locator(".app-shell-embed")).toBeVisible();
});

test("available modals open and close with Escape", async ({ page }) => {
  await page.goto(APP_PATH);
  await dismissTour(page);

  await page.getByRole("button", { name: /ΜΑΧΕΣ/ }).click();
  await expect(page.getByText(/ΕΠΙΛΕΓΜΕΝΕΣ ΜΑΧΕΣ/)).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByText(/ΕΠΙΛΕΓΜΕΝΕΣ ΜΑΧΕΣ/)).toBeHidden();

  await page.getByRole("button", { name: "Άνοιγμα συλλογής" }).click();
  await expect(page.getByText(/ΣΥΛΛΟΓΗ ΣΥΓΚΡΙΣΕΩΝ/)).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByText(/ΣΥΛΛΟΓΗ ΣΥΓΚΡΙΣΕΩΝ/)).toBeHidden();

  await page.getByRole("button", { name: "Εμφάνιση συντομεύσεων πληκτρολογίου" }).click();
  await expect(page.getByText(/ΣΥΝΤΟΜΕΥΣΕΙΣ ΠΛΗΚΤΡΟΛΟΓΙΟΥ/)).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByText(/ΣΥΝΤΟΜΕΥΣΕΙΣ ΠΛΗΚΤΡΟΛΟΓΙΟΥ/)).toBeHidden();
});

test("theme toggle keeps critical text readable", async ({ page }) => {
  await page.goto(APP_PATH);
  await dismissTour(page);

  const shell = page.locator(".app-shell");
  const title = page.getByText("F1 Stories Ghost Car").first();
  await expect(title).toBeVisible();

  const darkColor = await title.evaluate((node) => getComputedStyle(node).color);
  await page.getByRole("button", { name: "Μετάβαση σε φωτεινό θέμα" }).click();
  await expect(page.getByRole("button", { name: "Μετάβαση σε σκούρο θέμα" })).toBeVisible();
  const lightColor = await title.evaluate((node) => getComputedStyle(node).color);
  const shellBackground = await shell.evaluate((node) => getComputedStyle(node).backgroundColor);

  expect(darkColor).not.toEqual(lightColor);
  expect(shellBackground).not.toEqual("rgba(0, 0, 0, 0)");
});
