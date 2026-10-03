import { expect, test } from "@playwright/test";
import { APP_PATH, collectPageErrors, routeOpenF1 } from "./fixtures.js";

test("builder loads as the only surface, without browser errors", async ({ page }) => {
  const errors = collectPageErrors(page);
  await routeOpenF1(page);
  await page.goto(APP_PATH);

  await expect(page).toHaveTitle(/F1 Stories Ghost Car/);
  // The canonical f1stories.gr nav stays intact; Ghost Car is the product title below it.
  const desktopNav = page.getByRole("navigation", { name: "F1 Stories" }).first();
  await expect(desktopNav.getByRole("link")).toHaveText([
    "Αρχική",
    "Άρθρα",
    "YouTube",
    "Βαθμολογία",
    "Δεδομένα",
    "Συντάκτες",
    "BetCast",
  ]);
  await expect(desktopNav.getByRole("link", { name: "Δεδομένα" })).toHaveAttribute("aria-current", "page");
  await expect(desktopNav.getByRole("link", { name: "Ghost Car" })).toHaveCount(0);
  await expect(desktopNav.getByRole("link", { name: "YouTube" })).toHaveAttribute("rel", "noopener noreferrer");
  await expect(desktopNav.getByRole("link", { name: "BetCast" })).toHaveAttribute("target", "_blank");
  await expect(desktopNav.getByRole("link", { name: "BetCast" })).toHaveAttribute("rel", "noopener noreferrer");
  await expect(page.getByRole("heading", { level: 1, name: "Ghost Car." })).toBeVisible();
  await expect(page.getByText("EVERY TENTH COUNTS.")).toBeVisible();
  const footer = page.getByRole("contentinfo");
  await expect(footer).toContainText("Τεχνική ανάλυση, άποψη και ελληνική F1 κοινότητα.");
  await expect(footer).toContainText("Πολιτική Απορρήτου");
  await expect(footer).not.toContainText("Ghost Car");
  await expect(
    footer.getByRole("navigation", { name: "F1 Stories στα κοινωνικά δίκτυα" }).getByRole("link")
  ).toHaveCount(5);
  await expect(page.getByLabel("Σεζόν")).toHaveValue("2025");
  // Progressive disclosure: session and driver fields appear only once they are relevant.
  await expect(page.getByLabel("Σκέλος")).toHaveCount(0);
  await expect(page.getByLabel("Οδηγός 1", { exact: true })).toHaveCount(0);
  await expect(page.getByRole("button", { name: "Σύγκριση γύρων" })).toBeDisabled();
  // Featured comparisons are one quiet link to their dialog, not a list on the page.
  await expect(page.getByRole("button", { name: /^Επιλεγμένες συγκρίσεις \(\d+\)/ })).toBeVisible();
  await expect(page.getByText("Μαγική pole στη Suzuka")).toHaveCount(0);
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
  await expect(page.locator(".sponsors")).toHaveCount(0);
});

test("secondary surfaces open from menus and close with Escape", async ({ page }) => {
  await routeOpenF1(page);
  await page.goto(APP_PATH);

  await page.getByRole("button", { name: /^Επιλεγμένες συγκρίσεις/ }).click();
  const featured = page.getByRole("dialog", { name: "Επιλεγμένες συγκρίσεις" });
  await expect(featured).toBeVisible();
  await featured.getByRole("searchbox").fill("suzuka");
  await expect(featured.getByRole("button", { name: /Μαγική pole στη Suzuka/ })).toBeVisible();
  // Native search field: the first Escape clears the query, the next closes the dialog.
  await page.keyboard.press("Escape");
  await expect(featured.getByRole("searchbox")).toHaveValue("");
  await page.keyboard.press("Escape");
  await expect(featured).toHaveCount(0);

  await page.getByRole("button", { name: "Αποθηκευμένες" }).click();
  const saved = page.getByRole("dialog", { name: "Αποθηκευμένες συγκρίσεις" });
  await expect(saved).toContainText("Δεν έχεις αποθηκεύσει συγκρίσεις ακόμη");
  await page.keyboard.press("Escape");
  await expect(saved).toHaveCount(0);

  const shortcuts = page.getByRole("dialog", { name: "Συντομεύσεις πληκτρολογίου" });
  // The key can land while the page is still catching up after the last dialog closed: press until it opens.
  await expect(async () => {
    await page.keyboard.press("?");
    await expect(shortcuts).toBeVisible({ timeout: 1500 });
  }).toPass();
  await shortcuts.getByRole("button", { name: "Κλείσιμο" }).click();
  await expect(shortcuts).toHaveCount(0);
  // Focus returns to the page, not lost in a removed dialog.
  await expect(page.locator("body")).toBeVisible();
});

// Records every value <html data-theme> takes during a load, from before the page's first script. One value: no flash.
async function watchTheme(page) {
  await page.addInitScript(() => {
    window.__themeHistory = [];
    new MutationObserver((records) => {
      for (const record of records) if (record.oldValue !== null) window.__themeHistory.push(record.oldValue);
    }).observe(document, { attributeFilter: ["data-theme"], attributeOldValue: true, subtree: true });
  });
}
const themesSeen = (page) =>
  page.evaluate(() => [...new Set([...window.__themeHistory, document.documentElement.dataset.theme])]);
const storedThemes = (page) =>
  page.evaluate(() => ({ shared: localStorage.getItem("f1stories-theme"), old: localStorage.getItem("f1s-theme") }));
const themeButton = (page) => page.getByRole("banner").getByRole("button", { name: /θέμα$/ });

test("theme is a quiet preference that persists", async ({ page }) => {
  await watchTheme(page);
  await routeOpenF1(page);
  await page.goto(APP_PATH);
  const html = page.locator("html");
  // Paper by default, as on f1stories.gr, and nothing is stored until the reader chooses.
  await expect(html).toHaveAttribute("data-theme", "light");
  const lightBackground = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
  expect(lightBackground).toBe("rgb(242, 238, 228)");
  await expect(themeButton(page)).toHaveAccessibleName("Σκούρο θέμα");
  expect(await storedThemes(page)).toEqual({ shared: null, old: null });

  await themeButton(page).click();
  await expect(html).toHaveAttribute("data-theme", "dark");
  const darkBackground = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
  expect(darkBackground).not.toEqual(lightBackground);
  expect(await storedThemes(page)).toEqual({ shared: "dark", old: null });

  // A reload opens straight on the stored choice: no other theme is ever set on <html>.
  for (const theme of ["dark", "light"]) {
    await page.reload();
    await expect(themeButton(page)).toHaveAccessibleName(theme === "dark" ? "Φωτεινό θέμα" : "Σκούρο θέμα");
    expect(await themesSeen(page)).toEqual([theme]);
    if (theme === "dark") await themeButton(page).click();
  }
  expect(await storedThemes(page)).toEqual({ shared: "light", old: null });

  // URL theme wins for that view and is not stored.
  await page.goto(`${APP_PATH}?th=dark`);
  await expect(html).toHaveAttribute("data-theme", "dark");
  expect(await storedThemes(page)).toEqual({ shared: "light", old: null });
});

test("an old Ghost Car theme moves to the shared key without a flash", async ({ page }) => {
  await routeOpenF1(page);
  await page.goto(APP_PATH);
  await page.evaluate(() => localStorage.setItem("f1s-theme", "dark"));
  await watchTheme(page);
  await page.reload();
  await expect(themeButton(page)).toHaveAccessibleName("Φωτεινό θέμα");
  expect(await themesSeen(page)).toEqual(["dark"]);
  expect(await storedThemes(page)).toEqual({ shared: "dark", old: null });
});

test("a shared 'auto' follows the OS until the reader chooses", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await routeOpenF1(page);
  await page.goto(APP_PATH);
  await page.evaluate(() => localStorage.setItem("f1stories-theme", "auto"));
  const html = page.locator("html");
  for (const scheme of ["light", "dark"]) {
    await page.emulateMedia({ colorScheme: scheme });
    await page.reload();
    await expect(html).toHaveAttribute("data-theme", scheme);
    await expect(themeButton(page)).toBeVisible();
    expect(await storedThemes(page)).toEqual({ shared: "auto", old: null });
  }

  // The phone masthead toggle, by keyboard: an explicit choice replaces 'auto'.
  await themeButton(page).focus();
  await page.keyboard.press("Enter");
  await expect(html).toHaveAttribute("data-theme", "light");
  await expect(themeButton(page)).toHaveAccessibleName("Σκούρο θέμα");
  await expect(themeButton(page)).toBeFocused();
  expect(await storedThemes(page)).toEqual({ shared: "light", old: null });
  // The OS is still dark; the reader's choice wins.
  await page.reload();
  await expect(html).toHaveAttribute("data-theme", "light");
});

test("phone masthead folds the site links into a menu", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await routeOpenF1(page);
  await page.goto(APP_PATH);
  const menuButton = page.getByRole("button", { name: "Μενού F1 Stories" });
  await menuButton.click();
  const menu = page.locator(".masthead__menu");
  await expect(menu.getByRole("link")).toHaveCount(7);
  await expect(menu.getByRole("link", { name: "Βαθμολογία" })).toHaveAttribute(
    "href",
    "https://f1stories.gr/standings/"
  );
  await expect(menu.getByRole("link", { name: "Δεδομένα" })).toHaveAttribute("aria-current", "page");
  await expect(menu.getByRole("link", { name: "Ghost Car" })).toHaveCount(0);
  await page.keyboard.press("Escape");
  await expect(menu).toBeHidden();
});

test("canonical masthead fits its desktop and mobile breakpoints in both themes", async ({ page }) => {
  await routeOpenF1(page);
  await page.route("https://api.openf1.org/v1/sessions**", async (route) => {
    if (new URL(route.request().url()).searchParams.get("session_name") !== "Race") return route.fallback();
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify([
        { location: "Test Grand Prix", date_start: new Date(Date.now() + 5 * 86_400_000).toISOString() },
      ]),
    });
  });
  for (const theme of ["light", "dark"]) {
    await page.goto(`${APP_PATH}?th=${theme}`);
    for (const width of [1440, 1280, 768, 390, 375]) {
      await page.setViewportSize({ width, height: 900 });
      const header = page.getByRole("banner");
      const nav = page.locator(".masthead__nav");
      const menuButton = page.getByRole("button", { name: "Μενού F1 Stories" });
      if (width > 991) {
        await expect(nav).toBeVisible();
        await expect(menuButton).toBeHidden();
        await expect(nav.getByRole("link", { name: "Δεδομένα" })).toHaveAttribute("aria-current", "page");
      } else {
        await expect(nav).toBeHidden();
        await expect(menuButton).toBeVisible();
        await menuButton.click();
        await expect(page.locator(".masthead__menu").getByRole("link", { name: "Δεδομένα" })).toHaveAttribute(
          "aria-current",
          "page"
        );
        await page.keyboard.press("Escape");
      }
      if (width > 767) await expect(header.locator(".masthead__countdown")).toContainText("Test Grand Prix");
      else await expect(header.locator(".masthead__countdown")).toBeHidden();
      await expect(
        header.getByRole("button", { name: theme === "light" ? "Σκούρο θέμα" : "Φωτεινό θέμα" })
      ).toBeVisible();
      const sponsorColumns = await page
        .locator(".sponsors__logos")
        .evaluate((list) => getComputedStyle(list).gridTemplateColumns.split(" ").length);
      expect(sponsorColumns).toBe(width > 1199 ? 6 : 3);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(overflow, `${width}px ${theme}`).toBeLessThanOrEqual(0);
    }
  }
});

test("sponsors sit above the footer, load local logos, and use the site's hover treatment", async ({ page }) => {
  await routeOpenF1(page);
  await page.goto(APP_PATH);
  const section = page.getByRole("region", { name: "ΜΑΖΙ ΣΤΗΝ ΕΚΚΙΝΗΣΗ" });
  const logos = section.locator(".sponsors__logo");
  await expect(logos).toHaveCount(6);
  expect(
    await page
      .locator(".sponsors")
      .evaluate((node) =>
        Boolean(node.compareDocumentPosition(document.querySelector(".colophon")) & Node.DOCUMENT_POSITION_FOLLOWING)
      )
  ).toBe(true);
  const footerGap = await page.locator(".sponsors").evaluate((section) => {
    const sponsorBottom = section.getBoundingClientRect().bottom;
    return document.querySelector(".colophon").getBoundingClientRect().top - sponsorBottom;
  });
  expect(footerGap).toBeLessThanOrEqual(1);
  await section.scrollIntoViewIfNeeded();
  await expect
    .poll(() =>
      logos
        .first()
        .locator("img")
        .evaluate((img) => img.naturalWidth)
    )
    .toBeGreaterThan(0);
  await expect(logos.first()).toHaveAttribute("rel", "noopener noreferrer sponsored");
  const image = logos.first().locator("img");
  await expect(image).toHaveCSS("filter", "grayscale(1) contrast(1.05)");
  await expect(image).toHaveCSS("opacity", "0.68");
  await logos.first().hover();
  await expect(image).toHaveCSS("filter", "none");
  await expect(image).toHaveCSS("opacity", "1");
});

test("keyboard users can skip the site navigation", async ({ page }) => {
  await routeOpenF1(page);
  await page.goto(APP_PATH);
  await page.keyboard.press("Tab");
  const skip = page.getByRole("link", { name: "Μετάβαση στο περιεχόμενο" });
  await expect(skip).toBeFocused();
  await expect(skip).toBeInViewport();
  await page.keyboard.press("Enter");
  await expect(page.locator("main#content")).toBeFocused();
});
