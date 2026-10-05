import { expect, test } from "@playwright/test";
import { APP_PATH, comparisonUrl, routeOpenF1 } from "./fixtures.js";

// Ghost Car as the third Race Desk product (docs/race-desk.md): F1 STORIES / RACE DESK → THE GRID · TELEMETRY · GHOST CAR
// → GHOST CAR. While Δεδομένα stays the current global section.
const raceDesk = (page) => page.getByRole("navigation", { name: "Race Desk" });

// Is the centre of `selector`'s element painted by something inside `cover`? (What a click there would hit.)
const hitBy = (page, selector, cover) =>
  page.locator(selector).evaluateAll(
    (els, c) =>
      els.map((el) => {
        const r = el.getBoundingClientRect();
        const x = r.x + r.width / 2;
        const y = r.y + r.height / 2;
        const inView = y >= 0 && y <= innerHeight;
        return { inView, covered: inView && Boolean(document.elementFromPoint(x, y)?.closest(c)) };
      }),
    cover
  );

test("Race Desk sits between the global nav and the GHOST CAR. title", async ({ page }) => {
  await routeOpenF1(page);
  await page.goto(APP_PATH);

  const nav = raceDesk(page);
  const links = nav.getByRole("link");
  await expect(links).toHaveText(["THE GRID", "TELEMETRY", "GHOST CAR", "TYRES"]);
  await expect(links.nth(0)).toHaveAttribute("href", "https://f1stories.gr/standings/");
  await expect(links.nth(1)).toHaveAttribute("href", "https://georgiosbalatzis.github.io/f1-telemetry-dashboard/");
  // The app's own base, so dev and preview builds stay local.
  await expect(links.nth(2)).toHaveAttribute("href", APP_PATH);
  await expect(links.nth(3)).toHaveAttribute("href", "https://georgiosbalatzis.github.io/Tyres/");
  await expect(nav.locator("[aria-current]")).toHaveText(["GHOST CAR"]);
  await expect(links.nth(2)).toHaveAttribute("aria-current", "page");
  // Same-tab product navigation: no new tab, no BetCast (a sibling product, not Race Desk), not a tablist.
  await expect(nav.locator("[target]")).toHaveCount(0);
  await expect(nav.getByText("BetCast")).toHaveCount(0);
  await expect(nav.locator("[role]")).toHaveCount(0);
  await expect(page.getByRole("tablist")).toHaveCount(0);

  // Two current items at two levels: Δεδομένα globally, GHOST CAR in Race Desk. The masthead never lists the products.
  const global = page.getByRole("navigation", { name: "F1 Stories" }).first();
  await expect(global.locator("[aria-current]")).toHaveText(["Δεδομένα"]);
  for (const product of ["THE GRID", "TELEMETRY", "GHOST CAR", "TYRES", "Race Desk"])
    await expect(page.getByRole("banner").getByText(product, { exact: true })).toHaveCount(0);

  // The umbrella is a kicker, not a heading; GHOST CAR. is the only H1 and carries the descriptor.
  const hero = page.locator(".hero");
  await expect(hero.locator(".crumb > span")).toHaveText("F1 Stories / Race Desk");
  await expect(page.getByRole("heading", { name: /Race Desk/i })).toHaveCount(0);
  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
  const h1 = page.getByRole("heading", { level: 1 });
  await expect(h1).toHaveAccessibleName("Ghost Car. Σύγκριση γύρων · OpenF1");
  await expect(h1.getByText("Σύγκριση γύρων · OpenF1")).toBeVisible();
  // Retired names are gone from the page.
  await expect(page.locator("body")).not.toContainText(/data desk|data hub/i);
});

for (const theme of ["light", "dark"]) {
  test(`Race Desk fits 1440 to 375px without overlap, overflow or clipped focus (${theme})`, async ({ page }) => {
    await routeOpenF1(page);
    await page.goto(`${APP_PATH}?th=${theme}`);
    const nav = raceDesk(page);
    const current = nav.locator('[aria-current="page"]');
    for (const width of [1440, 1280, 1024, 768, 390, 375]) {
      await page.setViewportSize({ width, height: 900 });
      await page.evaluate(() => scrollTo(0, 0));
      const at = `${width}px ${theme}`;
      expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth), at).toBeLessThanOrEqual(0);

      const kicker = await page.locator(".hero .crumb > span").boundingBox();
      const masthead = await page.locator(".masthead").boundingBox();
      const title = await page.getByRole("heading", { level: 1 }).boundingBox();
      let previous = null;
      for (const link of await nav.getByRole("link").all()) {
        const box = await link.boundingBox();
        expect(box.height, at).toBeGreaterThanOrEqual(44);
        expect(box.x >= 0 && box.x + box.width <= width, `${at}: label clipped`).toBe(true);
        expect(await link.evaluate((el) => el.scrollWidth <= el.clientWidth), `${at}: label truncated`).toBe(true);
        if (previous)
          expect(box.x >= previous.x + previous.width || box.y >= previous.y + previous.height, at).toBe(true);
        expect(box.y >= kicker.y + kicker.height || box.x >= kicker.x + kicker.width, `${at}: hits kicker`).toBe(true);
        expect(box.y, `${at}: under the masthead`).toBeGreaterThanOrEqual(masthead.y + masthead.height);
        expect(box.y + box.height, `${at}: hits the title`).toBeLessThanOrEqual(title.y);
        previous = box;
      }
      // Below 768px the products take their own sub-rule under the kicker.
      expect((await nav.boundingBox()).y > kicker.y + kicker.height, at).toBe(width < 768);

      // The current bar: 3px of signal red on the rule, plus brighter text (not colour alone).
      const bar = await current.evaluate((el) => {
        const before = getComputedStyle(el, "::before");
        return { height: before.height, background: before.backgroundColor, top: before.top };
      });
      const signal = await page.evaluate(() => {
        const probe = document.createElement("i");
        probe.style.color = "var(--signal)";
        document.body.append(probe);
        const color = getComputedStyle(probe).color;
        probe.remove();
        return color;
      });
      expect(bar, at).toEqual({ height: "3px", background: signal, top: "0px" });
      const [currentColor, otherColor, textColor] = await nav
        .getByRole("link")
        .evaluateAll((els) => [
          getComputedStyle(els[2]).color,
          getComputedStyle(els[0]).color,
          getComputedStyle(document.body).color,
        ]);
      expect(currentColor, at).toBe(textColor);
      expect(otherColor, at).not.toBe(textColor);

      // Keyboard focus: a solid ring that fits the viewport and that no ancestor can clip.
      await current.focus();
      await expect(current).toHaveCSS("outline-style", "solid");
      const ring = await current.evaluate((el) => {
        const r = el.getBoundingClientRect();
        const reach = parseFloat(getComputedStyle(el).outlineWidth) + parseFloat(getComputedStyle(el).outlineOffset);
        const clips = [];
        for (let n = el.parentElement; n && n !== document.body; n = n.parentElement)
          if (getComputedStyle(n).overflow !== "visible") clips.push(n.className || n.tagName);
        return { left: r.left - reach, right: r.right + reach, clips };
      });
      expect(ring.clips, at).toEqual([]);
      expect(ring.left >= 0 && ring.right <= width, `${at}: focus ring leaves the viewport`).toBe(true);
      await current.blur();

      // The masthead controls stay usable around the new row.
      const toggle = page.getByRole("banner").getByRole("button", { name: /θέμα$/ });
      expect((await hitBy(page, ".masthead__theme", ".masthead__theme"))[0].covered, at).toBe(true);
      await expect(toggle).toBeVisible();
    }
  });
}

test("the masthead, its open menu and dialogs all paint over the Race Desk links", async ({ page }) => {
  await routeOpenF1(page);
  await page.goto(APP_PATH);
  const links = ".race-desk-nav a";

  for (const width of [1440, 768, 390, 375]) {
    await page.setViewportSize({ width, height: 900 });
    // Scroll the links up through the masthead's band: wherever the masthead still covers a link's centre, the
    // masthead must be what paints there. (The masthead is in flow today; this holds if it is ever made sticky.)
    const linkTop = await page
      .locator(links)
      .first()
      .evaluate((el) => el.getBoundingClientRect().top + scrollY);
    for (const y of [0, 20, 40, 60, 80, 100].map((offset) => Math.max(0, linkTop - offset))) {
      await page.evaluate((top) => scrollTo(0, top), y);
      const masthead = await page.locator(".masthead").boundingBox();
      for (const [i, link] of (await page.locator(links).all()).entries()) {
        const box = await link.boundingBox();
        const cx = box.x + box.width / 2;
        const cy = box.y + box.height / 2;
        const underMasthead = masthead && cy >= masthead.y && cy <= masthead.y + masthead.height && cx >= masthead.x;
        if (underMasthead)
          expect((await hitBy(page, links, ".masthead"))[i].covered, `${width}px link ${i} over masthead`).toBe(true);
      }
    }
    await page.evaluate(() => scrollTo(0, 0));

    if (width <= 991) {
      // The open site menu covers the row (it opens over the hero), including the current bar.
      await page.getByRole("button", { name: "Μενού F1 Stories" }).click();
      const menu = page.locator(".masthead__menu");
      await expect(menu).toBeVisible();
      const menuBox = await menu.boundingBox();
      const boxes = await page
        .locator(links)
        .evaluateAll((els) => els.map((el) => el.getBoundingClientRect().toJSON()));
      const under = boxes.map((b) => b.y + b.height / 2 < menuBox.y + menuBox.height && b.x + b.width / 2 > menuBox.x);
      expect(under.some(Boolean), `${width}px: menu does not reach the Race Desk row`).toBe(true);
      const hits = await hitBy(page, links, ".masthead__menu");
      under.forEach((isUnder, i) => isUnder && expect(hits[i].covered, `${width}px link ${i} over menu`).toBe(true));
      const barCovered = await page.locator('.race-desk-nav [aria-current="page"]').evaluate((el) => {
        const r = el.getBoundingClientRect();
        return Boolean(document.elementFromPoint(r.x + r.width / 2, r.y + 1)?.closest(".masthead__menu"));
      });
      expect(barCovered, `${width}px: current bar over menu`).toBe(true);
      await page.keyboard.press("Escape");
      await expect(menu).toBeHidden();
    }
  }

  // A focused Race Desk link stays under a modal dialog (top layer) and its backdrop.
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.locator('.race-desk-nav [aria-current="page"]').focus();
  await page.getByRole("button", { name: /^Επιλεγμένες συγκρίσεις/ }).click();
  await expect(page.getByRole("dialog", { name: "Επιλεγμένες συγκρίσεις" })).toBeVisible();
  const behind = await hitBy(page, links, ".race-desk-nav");
  expect(behind.every((hit) => hit.inView && !hit.covered)).toBe(true);
});

test("a loaded comparison keeps Race Desk on desktop and the one-line opening on phones", async ({ page }) => {
  await routeOpenF1(page);
  await page.goto(comparisonUrl);
  await expect(page.getByRole("slider", { name: "Πρόοδος γύρου" })).toBeVisible({ timeout: 15_000 });
  await expect(raceDesk(page).locator("[aria-current]")).toHaveText(["GHOST CAR"]);
  await expect(page.getByRole("heading", { level: 1 }).getByText("Σύγκριση γύρων · OpenF1")).toBeVisible();
  // Race Desk links never carry the comparison along.
  await expect(raceDesk(page).getByRole("link", { name: "GHOST CAR" })).toHaveAttribute("href", APP_PATH);

  // Phones with a replay keep the existing one-line opening (replay in the first screen); Race Desk and the descriptor
  // return with the builder, and the site menu stays one tap away.
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(raceDesk(page)).toBeHidden();
  await expect(page.getByRole("heading", { level: 1 }).getByText("Σύγκριση γύρων · OpenF1")).toBeHidden();
  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
});
