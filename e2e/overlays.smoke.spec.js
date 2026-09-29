import { expect, test } from "@playwright/test";
import { collectPageErrors, comparisonUrl, routeOpenF1, setPreferences, suzukaUrl, timeline } from "./fixtures.js";

async function openScene(page, url, { circuit = "monza", cam } = {}) {
  await setPreferences(page, { trackView: "3d" });
  await routeOpenF1(page, { circuit });
  await page.goto(cam ? `${url}&cam=${cam}` : url);
  await expect(page.locator(".stage canvas").first()).toBeVisible();
  await page.waitForFunction(() => window.__ghostcar3d?.ready === true);
}

// Every visible name chip sits inside the stage and clear of the others.
const chipLayout = (page) =>
  page.evaluate(() => {
    const stage = document.querySelector(".stage__canvas").getBoundingClientRect();
    const chips = [...document.querySelectorAll(".scene-label")]
      .filter((node) => getComputedStyle(node).opacity === "1")
      .map((node) => node.querySelector(".car__label").getBoundingClientRect());
    return {
      count: chips.length,
      inside: chips.every(
        (r) => r.left >= stage.left && r.right <= stage.right && r.top >= stage.top && r.bottom <= stage.bottom
      ),
      overlap: chips.some((a, i) =>
        chips.slice(i + 1).some((b) => a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom)
      ),
    };
  });

for (const [width, height] of [
  [1440, 900],
  [390, 844],
]) {
  for (const cam of ["orbit", "top"]) {
    test(`name chips stay inside the stage and apart: ${cam} at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height });
      await openScene(page, suzukaUrl, { circuit: "suzuka", cam });
      await timeline(page).fill("0.5");
      await page.waitForTimeout(600);
      expect(await chipLayout(page)).toEqual({ count: 2, inside: true, overlap: false });
    });
  }
}

test("the chip of the car the camera is on is hidden", async ({ page }) => {
  await openScene(page, comparisonUrl, { cam: "follow1" });
  const opacity = (index) =>
    page.evaluate((i) => getComputedStyle(document.querySelector(`.scene-label[data-index="${i}"]`)).opacity, index);
  expect(await opacity(0)).toBe("0");
});

test("the readout shows the values of the Αγωνιστικό δελτίο, and the gap only when it can be trusted", async ({
  page,
}) => {
  const errors = collectPageErrors(page);
  await openScene(page, comparisonUrl, { cam: "follow1" });
  await timeline(page).fill("0.45");
  await page.waitForTimeout(500);
  const hud = page.locator(".scene-hud");
  await expect(hud).toBeVisible();
  const brief = (label) => page.locator(".live tbody tr").filter({ hasText: label }).locator("td").first();
  await expect(hud.locator('[data-hud="speed"]')).toHaveText(
    new RegExp(`^${(await brief("Ταχύτητα").innerText()).trim()}`)
  );
  await expect(hud.locator('[data-hud="gear"]')).toHaveText((await brief("Σχέση").innerText()).trim());
  await expect(hud.locator('[data-hud="gap"]')).toContainText("vs NOR");

  // Driver 2 is compared with the fastest.
  await page.goto(`${comparisonUrl}&cam=follow2`);
  await timeline(page).fill("0.45");
  await expect(page.locator('.scene-hud [data-hud="gap"]')).toContainText("vs VER");

  // A lap whose sector times contradict its positions has no trusted gap: no gap row.
  await page.goto(`${comparisonUrl.replace("l1=7", "l1=5")}&cam=follow1`);
  await expect(page.locator(".scene-hud")).toBeVisible();
  await expect(page.locator('.scene-hud [data-hud="gap"]')).toHaveCount(0);
  expect(errors).toEqual([]);
});

test("the minimap shows in Chase, Onboard and TV, and not in Overview", async ({ page }) => {
  await openScene(page, comparisonUrl);
  await expect(page.locator(".scene-minimap")).toHaveCount(0);
  for (const cam of ["follow1", "onboard2", "tv"]) {
    await page.goto(`${comparisonUrl}&cam=${cam}`);
    await expect(page.locator(".scene-minimap")).toBeVisible();
    await expect(page.locator(".scene-minimap .car")).toHaveCount(2);
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${comparisonUrl}&cam=follow1`);
  await expect(page.locator(".scene-minimap")).toHaveCount(0);
});

test("full screen takes the stage and the transport, and leaves again", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await openScene(page, comparisonUrl);
  await page.getByRole("button", { name: "Πλήρης οθόνη" }).click();
  await expect.poll(() => page.evaluate(() => document.fullscreenElement?.id)).toBe("replay-player");
  await expect(page.getByRole("slider", { name: "Πρόοδος γύρου" })).toBeVisible();
  await expect.poll(() => page.locator(".stage canvas").evaluate((node) => node.clientHeight)).toBeGreaterThan(600);
  await page.getByRole("button", { name: "Έξοδος από πλήρη οθόνη" }).click();
  await expect.poll(() => page.evaluate(() => document.fullscreenElement === null)).toBe(true);
});

test("the canvas is described, and the loading line is gone once it renders", async ({ page }) => {
  await openScene(page, comparisonUrl);
  await expect(page.locator(".scene-loading")).toHaveCount(0);
  const canvas = page.locator(".stage canvas");
  await expect(canvas).toHaveAttribute("role", "img");
  await expect(canvas).toHaveAttribute(
    "aria-label",
    /Τρισδιάστατη αναπαράσταση: Monza GP .*VER – NOR.*κάμερα Επισκόπηση/
  );
});
