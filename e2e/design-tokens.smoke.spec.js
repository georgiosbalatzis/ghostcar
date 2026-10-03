import { expect, test } from "@playwright/test";
import { readFileSync } from "node:fs";
import { APP_PATH, comparisonUrl, routeOpenF1, setPreferences } from "./fixtures.js";

const manifest = JSON.parse(readFileSync(new URL("../docs/design-tokens.json", import.meta.url), "utf8"));
const expectedInks = JSON.parse(
  readFileSync(new URL("../test/fixtures/visualization-inks.json", import.meta.url), "utf8")
);
async function preservedInks(page, theme) {
  for (const [cls, expected] of Object.entries(expectedInks.browser[theme])) {
    const colors = await page
      .locator("." + cls)
      .evaluateAll(
        (els, property) => els.map((el) => getComputedStyle(el).getPropertyValue(property)),
        expected.property
      );
    expect(colors, theme + " exact rendered " + cls).toEqual(expected.values);
  }
}

async function canonical(page, theme) {
  const colors = await page
    .locator("html")
    .evaluate(
      (el, keys) => Object.fromEntries(keys.map((key) => [key, getComputedStyle(el).getPropertyValue(key).trim()])),
      Object.keys(manifest.themes[theme])
    );
  expect(colors).toEqual(manifest.themes[theme]);
}

async function ring(page, locator, offset) {
  await locator.scrollIntoViewIfNeeded();
  await page.keyboard.press("Tab");
  await locator.focus();
  const focus = await locator.evaluate((el) => {
    const s = getComputedStyle(el),
      r = el.getBoundingClientRect();
    const extent = Math.max(0, parseFloat(s.outlineOffset) + parseFloat(s.outlineWidth));
    const clips = [];
    for (let parent = el.parentElement; parent; parent = parent.parentElement) {
      const ps = getComputedStyle(parent);
      if (!/(auto|scroll|hidden|clip)/.test(ps.overflowX + ps.overflowY)) continue;
      const b = parent.getBoundingClientRect();
      const left = b.left + parent.clientLeft,
        top = b.top + parent.clientTop;
      if (
        r.left - extent < left - 1 ||
        r.right + extent > left + parent.clientWidth + 1 ||
        r.top - extent < top - 1 ||
        r.bottom + extent > top + parent.clientHeight + 1
      )
        clips.push(parent.className);
    }
    return {
      visible: el.matches(":focus-visible"),
      style: s.outlineStyle,
      width: s.outlineWidth,
      offset: s.outlineOffset,
      color: s.outlineColor,
      clips,
    };
  });
  expect(focus.visible).toBe(true);
  expect(focus.style).toBe("solid");
  expect(focus.width).toBe("2px");
  expect(focus.offset).toBe(offset + "px");
  expect(focus.clips).toEqual([]);
  expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBeLessThanOrEqual(0);
  return focus;
}

for (const theme of ["light", "dark"])
  for (const width of [1440, 390, 375]) {
    test("UI tokens and complete keyboard rings: " + theme + " " + width, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await setPreferences(page, { theme });
      await routeOpenF1(page);
      await page.goto(APP_PATH);
      await canonical(page, theme);
      await ring(page, page.locator(".masthead__theme"), 5);
      await ring(page, page.getByRole("navigation", { name: "Race Desk" }).getByRole("link").first(), 2);
      await ring(page, page.locator(".builder .select:enabled").first(), 5);
      const footer = await ring(page, page.locator(".colophon__brand"), 5);
      if (theme === "light") expect(footer.color).toBe("rgb(233, 227, 214)");
      if (width < 992) {
        await page.getByRole("button", { name: "Μενού F1 Stories" }).click();
        await ring(page, page.locator(".masthead__menu-link").first(), -4);
        await page.keyboard.press("Escape");
      }
      await page.goto(comparisonUrl);
      await page.getByRole("slider", { name: "Πρόοδος γύρου" }).waitFor();
      await canonical(page, theme);
      await preservedInks(page, theme);
      await ring(page, page.locator(".tabs__tab").first(), -4);
      await ring(page, page.locator(".stage__tools button").first(), 5);
      await ring(page, page.getByRole("slider", { name: "Πρόοδος γύρου" }), 5);
      await ring(page, page.locator(".transport__play"), 5);
      if (width < 768) {
        await expect(page.getByRole("navigation", { name: "Race Desk" })).toBeHidden();
        await expect(page.locator(".hero__descriptor")).toBeHidden();
      }
      await page.getByRole("button", { name: "Αλλαγή σύγκρισης", exact: true }).click();
      await ring(page, page.locator(".dialog .select:enabled").first(), 5);
      await page.keyboard.press("Escape");
      if (width === 1440) {
        await page.getByRole("button", { name: "Κοινοποίηση", exact: true }).click();
        await ring(page, page.getByRole("menuitem", { name: "Αντιγραφή συνδέσμου", exact: true }), -2);
      }
    });
  }

for (const [os, stored, legacy, url, expected] of [
  ["light", "auto", null, "", "light"],
  ["dark", "auto", null, "", "dark"],
  ["dark", null, null, "", "light"],
  ["light", null, "dark", "", "dark"],
  ["dark", "light", "dark", "", "light"],
  ["light", "light", null, "?th=dark", "dark"],
]) {
  test("theme compatibility " + [os, stored, legacy, url].join("/"), async ({ page }) => {
    await page.emulateMedia({ colorScheme: os });
    await page.addInitScript(
      ({ stored, legacy }) => {
        localStorage.clear();
        if (stored) localStorage.setItem("f1stories-theme", stored);
        if (legacy) localStorage.setItem("f1s-theme", legacy);
      },
      { stored, legacy }
    );
    await routeOpenF1(page);
    await page.goto(APP_PATH + url);
    await expect(page.locator("html")).toHaveAttribute("data-theme", expected);
    await canonical(page, expected);
    const state = await page.evaluate(() => ({
      canonical: localStorage.getItem("f1stories-theme"),
      legacy: localStorage.getItem("f1s-theme"),
    }));
    expect(state.legacy).toBeNull();
    expect(state.canonical).toBe(stored || legacy);
    await page.locator(".masthead__theme").click();
    const toggled = expected === "light" ? "dark" : "light";
    expect(await page.evaluate(() => localStorage.getItem("f1stories-theme"))).toBe(toggled);
    expect(await page.evaluate(() => localStorage.getItem("f1s-theme"))).toBeNull();
    // Clear the init script's reset before reload by using the persisted state in a fresh page.
    const next = await page.context().newPage();
    await routeOpenF1(next);
    await next.goto(APP_PATH);
    await expect(next.locator("html")).toHaveAttribute("data-theme", toggled);
    await canonical(next, toggled);
    await next.close();
  });
}

for (const theme of ["light", "dark"]) {
  test("signal-band cancel focus uses its readable ink: " + theme, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 900 });
    await setPreferences(page, { theme });
    await routeOpenF1(page, { locationDelayMs: 5000 });
    await page.goto(comparisonUrl);
    const cancel = page.getByRole("button", { name: "Ακύρωση", exact: true });
    await expect(cancel).toBeVisible();
    const focus = await ring(page, cancel, 5);
    expect(focus.color).toBe("rgb(23, 25, 27)");
    await cancel.click();
  });
}
