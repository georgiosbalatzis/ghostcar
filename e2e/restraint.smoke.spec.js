import { expect, test } from "@playwright/test";
import { collectPageErrors, comparisonUrl, routeOpenF1, setPreferences, suzukaUrl, timeline } from "./fixtures.js";

async function openScene(page, url, { circuit = "monza", cam } = {}) {
  await setPreferences(page, { trackView: "3d" });
  await routeOpenF1(page, { circuit });
  await page.goto(cam ? `${url}&cam=${cam}` : url);
  await expect(page.locator(".stage canvas").first()).toBeVisible();
  await page.waitForFunction(() => window.__ghostcar3d?.ready === true);
}

const frames = (page) => page.evaluate(() => window.__ghostcar3d.info().render.frame);
const position = (page) => page.evaluate(() => window.__ghostcar3d.camera.position.toArray());
const menu = (page) => page.getByRole("button", { name: "Επιλογές προβολής" }).click();

for (const cam of ["orbit", "top", "follow1", "onboard1", "tv"]) {
  test(`nothing is drawn while paused and untouched: ${cam}`, async ({ page }) => {
    await openScene(page, suzukaUrl, { circuit: "suzuka", cam });
    await timeline(page).fill("0.4");
    // The camera and its damping take a moment to settle (longer on a busy machine): wait for a quiet second.
    await expect
      .poll(
        async () => {
          const before = await frames(page);
          await page.waitForTimeout(1000);
          return (await frames(page)) === before;
        },
        { timeout: 20_000 }
      )
      .toBe(true);
    const before = await frames(page);
    await page.waitForTimeout(2000);
    expect(await frames(page)).toBe(before);
  });
}

test("the Overview never turns by itself while playing", async ({ page }) => {
  await openScene(page, comparisonUrl);
  const before = await position(page);
  await page.getByRole("button", { name: "Αναπαραγωγή" }).click();
  await page.waitForTimeout(1500);
  await page.getByRole("button", { name: "Παύση" }).click();
  expect(await position(page)).toEqual(before);
});

test("with reduced motion the camera arrives at once", async ({ page }) => {
  const errors = collectPageErrors(page);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await openScene(page, comparisonUrl);
  await menu(page);
  await page.getByRole("menuitemradio", { name: "Ακολούθηση" }).click();
  await page.waitForTimeout(250);
  // A 0.7 s tween would still be far away from the car after a quarter of a second.
  const gap = await page.evaluate(() => {
    const { camera, cars } = window.__ghostcar3d;
    return camera.position.distanceTo(cars[0].position);
  });
  expect(gap).toBeLessThan(20);
  expect(errors).toEqual([]);
});

test("the lowest quality tier hides the tails and the first drops nothing that matters", async ({ page }) => {
  await openScene(page, comparisonUrl);
  await timeline(page).fill("0.3");
  await page.getByRole("button", { name: "Αναπαραγωγή" }).click();
  await page.waitForTimeout(600);
  const tailsShown = () =>
    page.evaluate(() => window.__ghostcar3d.tails.filter(Boolean).map((tail) => tail.line.visible));
  expect(await tailsShown()).toEqual([true, true]);
  await page.evaluate(() => window.__ghostcar3d.setQuality(1));
  await page.waitForTimeout(300);
  expect(await tailsShown()).toEqual([true, true]);
  await page.evaluate(() => window.__ghostcar3d.setQuality(2));
  await page.waitForTimeout(300);
  expect(await tailsShown()).toEqual([false, false]);
  await page.getByRole("button", { name: "Παύση" }).click();
});
