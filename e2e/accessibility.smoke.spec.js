import { expect, test } from "@playwright/test";
import { APP_PATH, comparisonUrl, fourDriverUrl, routeOpenF1, setPreferences, timeline } from "./fixtures.js";

// Include transparent ::after targets, then hit-test their edges against the browser's actual event recipient.
async function touchTarget(locator) {
  await locator.scrollIntoViewIfNeeded();
  const target = await locator.evaluate((el) => {
    const r = el.getBoundingClientRect();
    const p = getComputedStyle(el, "::after");
    let box = { x: r.x, y: r.y, width: r.width, height: r.height };
    if (p.content === '""' && p.position === "absolute" && p.pointerEvents !== "none") {
      const width = parseFloat(p.width),
        height = parseFloat(p.height);
      const transform = new DOMMatrix(p.transform === "none" ? undefined : p.transform);
      const left = p.left === "auto" ? el.clientWidth - parseFloat(p.right) - width : parseFloat(p.left);
      const top = p.top === "auto" ? el.clientHeight - parseFloat(p.bottom) - height : parseFloat(p.top);
      const x = r.x + el.clientLeft + left + transform.e,
        y = r.y + el.clientTop + top + transform.f;
      box = {
        x: Math.min(x, r.x),
        y: Math.min(y, r.y),
        width: Math.max(x + width, r.right) - Math.min(x, r.x),
        height: Math.max(y + height, r.bottom) - Math.min(y, r.y),
      };
    }
    const points = [0.05, 0.5, 0.95].flatMap((x) =>
      [0.05, 0.5, 0.95].map((y) => [box.x + box.width * x, box.y + box.height * y])
    );
    const hits = points.map(
      ([x, y]) => document.elementFromPoint(x, y)?.closest("a,button,input,select,textarea") === el
    );
    return { ...box, hits };
  });
  expect(target.width).toBeGreaterThanOrEqual(43.9);
  expect(target.height).toBeGreaterThanOrEqual(43.9);
  expect(target.hits, (await locator.getAttribute("class")) + JSON.stringify(target)).toEqual(Array(9).fill(true));
}

async function keyboardRing(page, locator, offset = 5) {
  await locator.scrollIntoViewIfNeeded();
  await page.keyboard.press("Tab");
  await locator.focus();
  const ring = await locator.evaluate((el) => {
    const s = getComputedStyle(el),
      r = el.getBoundingClientRect();
    const extent = Math.max(0, parseFloat(s.outlineWidth) + parseFloat(s.outlineOffset));
    const clips = [];
    for (let p = el.parentElement; p; p = p.parentElement) {
      const ps = getComputedStyle(p),
        b = p.getBoundingClientRect();
      if (!/(auto|scroll|hidden|clip)/.test(ps.overflowX + ps.overflowY) && ps.clipPath === "none") continue;
      if (
        r.left - extent < b.left + p.clientLeft - 1 ||
        r.right + extent > b.left + p.clientLeft + p.clientWidth + 1 ||
        r.top - extent < b.top + p.clientTop - 1 ||
        r.bottom + extent > b.top + p.clientTop + p.clientHeight + 1
      )
        clips.push(p.className);
      // A popover paints in the top layer, outside its DOM ancestors' clipping.
      if (p.matches(":popover-open")) break;
    }
    return {
      visible: el.matches(":focus-visible"),
      width: s.outlineWidth,
      style: s.outlineStyle,
      offset: s.outlineOffset,
      clips,
    };
  });
  expect(ring).toEqual({ visible: true, width: "2px", style: "solid", offset: `${offset}px`, clips: [] });
}

for (const theme of ["light", "dark"])
  for (const width of [1440, 1280, 1024, 768, 390, 375, 320]) {
    test(`interaction targets, keyboard rings and modal isolation: ${width} ${theme}`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await setPreferences(page, { theme });
      await routeOpenF1(page);
      await page.goto(APP_PATH);
      await page.evaluate(() => document.fonts.ready);
      await touchTarget(page.locator(".masthead__brand"));
      await keyboardRing(page, page.locator(".masthead__brand"));
      await keyboardRing(page, page.locator(".masthead__theme"));
      await keyboardRing(page, page.locator(".race-desk-nav a").first(), 2);
      await keyboardRing(page, page.locator(".builder .select:enabled").first());
      if (width < 1100) {
        await touchTarget(page.locator(".masthead__theme"));
        for (const action of await page.locator(".builder-more button").all()) await touchTarget(action);
        await page.getByRole("button", { name: /^Επιλεγμένες συγκρίσεις/ }).click();
        const featured = page.getByRole("dialog", { name: "Επιλεγμένες συγκρίσεις" });
        await touchTarget(featured.getByRole("searchbox"));
        await keyboardRing(page, featured.getByRole("searchbox"));
        await keyboardRing(page, featured.locator(".preset").first());
        await page.keyboard.press("Escape");
      }
      await page.evaluate(() => scrollTo(0, 0));
      if (width < 992) {
        const trigger = page.getByRole("button", { name: "Μενού F1 Stories" });
        await touchTarget(trigger);
        await trigger.click();
        await keyboardRing(page, page.locator(".masthead__menu-link").first(), -4);
        await page.keyboard.press("Escape");
        await expect(trigger).toBeFocused();
      } else {
        if (width < 1100) for (const link of await page.locator(".masthead__link").all()) await touchTarget(link);
        await keyboardRing(page, page.locator(".masthead__link").first());
      }

      await page.goto(comparisonUrl);
      await timeline(page).waitFor();
      if (width < 768) {
        await expect(page.locator(".race-desk-nav")).toBeHidden();
        await expect(page.locator(".hero__descriptor")).toBeHidden();
        const player = await page.locator("#replay-player").boundingBox();
        expect(player.y + player.height).toBeLessThan(720);
      }
      for (const button of await page.locator(".stage__tools button").all()) {
        if (width < 1100) await touchTarget(button);
        const segmented = await button.evaluate((el) => Boolean(el.closest(".segmented")));
        await keyboardRing(page, button, segmented ? -3 : 5);
      }
      for (const control of await page.locator(".transport button,.transport select,.timeline").all()) {
        if (width < 1100) await touchTarget(control);
        await keyboardRing(page, control);
      }
      if (width < 1100) {
        // At its sticky top, the complete ring remains on screen and its controls still receive hits.
        await page.locator(".desk__traces").scrollIntoViewIfNeeded();
        const box = await page.locator("#replay-player").boundingBox();
        expect(box.y).toBeCloseTo(0, 0);
        for (const control of await page.locator(".transport button,.transport select,.timeline").all())
          await touchTarget(control);
        await keyboardRing(page, page.locator(".transport__play"));
        const play = await page.locator(".transport__play").boundingBox();
        expect(play.y).toBeGreaterThanOrEqual(7);
        expect(play.y + play.height + 7).toBeLessThan(900);
      }
      const opener = page.getByRole("button", { name: "Αλλαγή σύγκρισης", exact: true });
      await opener.click();
      const dialog = page.getByRole("dialog");
      await expect(dialog.locator(":focus")).toHaveCount(1);
      await keyboardRing(page, dialog.getByRole("button", { name: "Κλείσιμο", exact: true }));
      await keyboardRing(page, dialog.locator(".select:enabled").first());
      if (width < 1100) await touchTarget(dialog.locator(".builder__add"));
      await dialog.locator(".builder__add").click();
      if (width < 1100) await touchTarget(dialog.getByRole("button", { name: "Αφαίρεση οδηγού 3" }));
      // Native showModal makes every underlying control inert, including replay and the theme shortcut.
      await page.locator(".transport__play").evaluate((el) => el.focus());
      await expect(dialog.locator(":focus")).toHaveCount(1);
      const progress = await timeline(page).inputValue();
      await page.keyboard.press("Space");
      await page.keyboard.press("v");
      await expect(timeline(page)).toHaveValue(progress);
      await expect(page.locator(".stage__canvas--2d")).toHaveCount(1);
      const controls = dialog.locator("button:enabled,select:enabled");
      await controls.last().focus();
      await page.keyboard.press("Tab");
      // Chromium may visit browser chrome at the boundary; no underlying page control receives focus.
      if (await page.evaluate(() => document.activeElement === document.body)) await page.keyboard.press("Tab");
      await expect(dialog.locator(":focus")).toHaveCount(1);
      await page.keyboard.press("Shift+Tab");
      if (await page.evaluate(() => document.activeElement === document.body)) await page.keyboard.press("Shift+Tab");
      await expect(dialog.locator(":focus")).toHaveCount(1);
      await page.keyboard.press("Escape");
      await expect(dialog).toHaveCount(0);
      await expect(opener).toBeFocused();
      expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBe(0);
    });
  }

for (const os of ["light", "dark"])
  test(`auto-resolved ${os}: share/gallery keyboard and expanded targets`, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 844 });
    await page.emulateMedia({ colorScheme: os });
    await setPreferences(page, { theme: "auto" });
    await routeOpenF1(page);
    await page.goto(comparisonUrl);
    await timeline(page).waitFor();
    await expect(page.locator("html")).toHaveAttribute("data-theme", os);
    await touchTarget(page.locator(".masthead__brand"));
    await keyboardRing(page, page.locator(".stage__tools .segmented button").first(), -3);
    await page.getByRole("button", { name: "Κοινοποίηση", exact: true }).click();
    await touchTarget(page.getByRole("menuitem", { name: "Αποθήκευση σύγκρισης", exact: true }));
    await page.getByRole("menuitem", { name: "Αποθήκευση σύγκρισης", exact: true }).click();
    await page.getByRole("button", { name: "Περισσότερα", exact: true }).click();
    await page.getByRole("menuitem", { name: "Αποθηκευμένες συγκρίσεις", exact: true }).click();
    const dialog = page.getByRole("dialog");
    for (const button of await dialog.getByRole("button").all()) {
      await touchTarget(button);
      await keyboardRing(page, button);
    }
    await page.keyboard.press("Escape");
    await expect(page.getByRole("button", { name: "Περισσότερα", exact: true })).toBeFocused();
    expect(await page.evaluate(() => localStorage.getItem("f1stories-theme"))).toBe("auto");
  });

test("clipboard denial returns focus to the selectable share field", async ({ page }) => {
  await page.setViewportSize({ width: 768, height: 900 });
  await routeOpenF1(page);
  await page.addInitScript(() => {
    Object.defineProperty(navigator, "clipboard", {
      value: {
        writeText: async () => {
          throw new Error("Denied");
        },
      },
    });
  });
  await page.goto(comparisonUrl);
  await timeline(page).waitFor();
  await page.getByRole("button", { name: "Κοινοποίηση", exact: true }).click();
  await page.getByRole("menuitem", { name: "Αντιγραφή συνδέσμου", exact: true }).click();
  const dialog = page.getByRole("dialog", { name: "Σύνδεσμος σύγκρισης" });
  await touchTarget(dialog.getByRole("textbox"));
  await touchTarget(dialog.getByRole("button", { name: "Αντιγραφή", exact: true }));
  await dialog.getByRole("button", { name: "Αντιγραφή", exact: true }).click();
  await expect(dialog.getByRole("textbox")).toBeFocused();
  await expect(dialog.getByRole("status")).toHaveText("Αντίγραψε με Ctrl/⌘ + C");
});

test("coarse touch hardware expands dense controls even on a desktop viewport", async ({ browser }) => {
  const context = await browser.newContext({ hasTouch: true, viewport: { width: 1440, height: 900 } });
  try {
    const page = await context.newPage();
    await routeOpenF1(page);
    await page.goto(comparisonUrl);
    await timeline(page).waitFor();
    for (const control of await page
      .locator(
        ".masthead__link,.masthead__theme,.stage__tools button,.transport button,.transport select,.timeline,.tab-actions button:not(.menu__item)"
      )
      .all()) {
      if (await control.isVisible()) await touchTarget(control);
    }
  } finally {
    await context.close();
  }
});

for (const theme of ["light", "dark"])
  test(`loading cancel is a separate 44px touch action: ${theme}`, async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 844 });
    await setPreferences(page, { theme });
    await routeOpenF1(page, { locationDelayMs: 5000 });
    await page.goto(comparisonUrl);
    const cancel = page.getByRole("button", { name: "Ακύρωση", exact: true });
    await expect(cancel).toBeVisible();
    await touchTarget(cancel);
    await keyboardRing(page, cancel);
    await cancel.click();
    await expect(cancel).toBeHidden();
  });

test("a tall four-driver view menu scrolls inside a short touch viewport", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 568 });
  await routeOpenF1(page);
  await page.goto(fourDriverUrl + "&tv=3d");
  await page.locator(".stage canvas").waitFor();
  await page.getByRole("button", { name: "Επιλογές προβολής", exact: true }).click();
  const menu = page.getByRole("menu", { name: "Επιλογές προβολής" });
  await page.keyboard.press("End");
  await expect(menu.getByRole("menuitemcheckbox", { name: "Γραμμές οδηγών" })).toBeFocused();
  await keyboardRing(page, menu.getByRole("menuitemcheckbox", { name: "Γραμμές οδηγών" }), -2);
  const box = await menu.boundingBox();
  expect(box.y).toBeGreaterThanOrEqual(8);
  expect(box.y + box.height).toBeLessThanOrEqual(560);
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Επιλογές προβολής", exact: true })).toBeFocused();
});
