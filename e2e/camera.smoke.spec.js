import { expect, test } from "@playwright/test";
import {
  canvasHasPixels,
  collectPageErrors,
  comparisonUrl,
  fourDriverUrl,
  routeOpenF1,
  setPreferences,
  suzukaUrl,
  timeline,
} from "./fixtures.js";

async function openScene(page, url, { circuit = "monza", view = "3d" } = {}) {
  await setPreferences(page, { trackView: view });
  await routeOpenF1(page, { circuit });
  await page.goto(url);
  if (view === "3d") {
    await expect(page.locator(".stage canvas").first()).toBeVisible();
    await page.waitForFunction(() => window.__ghostcar3d?.ready === true);
  }
}

const menu = async (page) => page.getByRole("button", { name: "Επιλογές προβολής" }).click();
const camera = (page, name) => page.getByRole("menuitemradio", { name, exact: true });

// How much of the stage the circuit's bounding box fills: 1 is the edge of the frame.
const framing = (page) =>
  page.evaluate(() => {
    const { camera: cam, world } = window.__ghostcar3d;
    const Vector = cam.position.constructor;
    let extent = 0;
    for (const x of [-1, 1])
      for (const y of [0, 1])
        for (const z of [-1, 1]) {
          const p = new Vector((x * world.width) / 2, y * world.height, (z * world.depth) / 2).project(cam);
          extent = Math.max(extent, Math.abs(p.x), Math.abs(p.y));
        }
    return extent;
  });

for (const [name, url, circuit] of [
  ["Suzuka", suzukaUrl, "suzuka"],
  ["Monza", comparisonUrl, "monza"],
]) {
  for (const [width, height] of [
    [1440, 900],
    [390, 844],
  ]) {
    test(`Overview and Top frame ${name} at ${width}px with a margin`, async ({ page }) => {
      await page.setViewportSize({ width, height });
      await openScene(page, url, { circuit });
      // The circuit fills the stage on the tighter axis with about 8% to spare.
      expect(await framing(page)).toBeGreaterThan(0.85);
      expect(await framing(page)).toBeLessThan(0.97);
      await menu(page);
      await camera(page, "Κάτοψη").click();
      await page.waitForTimeout(1200);
      expect(await framing(page)).toBeGreaterThan(0.85);
      expect(await framing(page)).toBeLessThan(0.97);
    });
  }
}

test("Top view has the 2D map's orientation", async ({ page }) => {
  const errors = collectPageErrors(page);
  await openScene(page, suzukaUrl, { circuit: "suzuka", view: "2d" });
  await timeline(page).fill("0.5");
  const flat = await page.evaluate(() => {
    const centre = (node) => {
      const box = node.getBoundingClientRect();
      return { x: box.x + box.width / 2, y: box.y + box.height / 2 };
    };
    const start = centre(document.querySelector(".track-map__start"));
    const car = centre(document.querySelector(".car"));
    return { x: car.x - start.x, y: car.y - start.y };
  });
  await page.getByRole("button", { name: "3D", exact: true }).click();
  await page.waitForFunction(() => window.__ghostcar3d?.ready === true);
  await menu(page);
  await camera(page, "Κάτοψη").click();
  await page.waitForTimeout(1200);
  const solid = await page.evaluate(() => {
    const { camera: cam, cars, start } = window.__ghostcar3d;
    const Vector = cam.position.constructor;
    const box = document.querySelector(".stage canvas").getBoundingClientRect();
    const pixel = (p) => {
      const n = new Vector(p.x, p.y, p.z).project(cam);
      return { x: (n.x * 0.5 + 0.5) * box.width, y: (-n.y * 0.5 + 0.5) * box.height };
    };
    const a = pixel(start);
    const b = pixel(cars[0].position);
    return { x: b.x - a.x, y: b.y - a.y };
  });
  const angle = (v) => (Math.atan2(v.y, v.x) * 180) / Math.PI;
  const difference = Math.abs(((angle(flat) - angle(solid) + 540) % 360) - 180);
  expect(difference).toBeLessThan(5);
  expect(errors).toEqual([]);
});

test("old and new camera links open the matching mode", async ({ page }) => {
  await setPreferences(page, { trackView: "3d" });
  await routeOpenF1(page);
  for (const [cam, family, driver] of [
    ["cinematic", "Τηλεοπτική", null],
    ["follow2", "Ακολούθηση", "NOR"],
    ["top", "Κάτοψη", null],
    ["onboard1", "Onboard", "VER"],
  ]) {
    await page.goto(`${comparisonUrl}&cam=${cam}`);
    await expect(page.locator(".stage canvas").first()).toBeVisible();
    await menu(page);
    await expect(camera(page, family)).toHaveAttribute("aria-checked", "true");
    if (driver)
      await expect(page.getByRole("menuitemradio", { name: driver, exact: true })).toHaveAttribute(
        "aria-checked",
        "true"
      );
    await page.keyboard.press("Escape");
  }
});

test("Chase lands behind the driver while playing, and the tail of switching is smooth", async ({ page }) => {
  const errors = collectPageErrors(page);
  await openScene(page, comparisonUrl);
  await timeline(page).fill("0.2");
  await page.getByRole("button", { name: "Αναπαραγωγή" }).click();
  await menu(page);
  await camera(page, "Ακολούθηση").click();
  await page.waitForTimeout(1600);
  const gap = await page.evaluate(() => {
    const { camera: cam, cars } = window.__ghostcar3d;
    return cam.position.distanceTo(cars[0].position);
  });
  expect(gap).toBeGreaterThan(6);
  expect(gap).toBeLessThan(20);
  await page.getByRole("button", { name: "Παύση" }).click();
  expect(errors).toEqual([]);
});

test("a plain wheel scrolls the page; Ctrl and wheel zoom the camera", async ({ page }) => {
  await openScene(page, comparisonUrl);
  const distance = () =>
    page.evaluate(() => {
      const { camera: cam, controls } = window.__ghostcar3d;
      return cam.position.distanceTo(controls.target);
    });
  const before = await distance();
  await page.locator(".stage canvas").scrollIntoViewIfNeeded();
  const box = await page.locator(".stage canvas").boundingBox();
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  const scrollBefore = await page.evaluate(() => window.scrollY);
  await page.mouse.wheel(0, 300);
  // The hint shows for about a second: look for it first.
  await expect(page.locator(".scene-hint")).toHaveText("Ctrl/⌘ + κύλιση για ζουμ");
  await page.waitForTimeout(400);
  expect(await page.evaluate(() => window.scrollY)).toBeGreaterThan(scrollBefore);
  expect(Math.abs((await distance()) - before) / before).toBeLessThan(0.01);

  await page.locator(".stage canvas").scrollIntoViewIfNeeded();
  const box2 = await page.locator(".stage canvas").boundingBox();
  await page.mouse.move(box2.x + box2.width / 2, box2.y + box2.height / 2);
  await page.keyboard.down("Control");
  await page.mouse.wheel(0, -300);
  await page.keyboard.up("Control");
  await expect.poll(async () => Math.abs((await distance()) - before) / before).toBeGreaterThan(0.05);
});

test("keys 1–4 pick the driver, C cycles the families and keeps them, F refits", async ({ page }) => {
  const errors = collectPageErrors(page);
  await openScene(page, fourDriverUrl);
  await page.keyboard.press("3");
  await menu(page);
  await expect(camera(page, "Ακολούθηση")).toHaveAttribute("aria-checked", "true");
  await expect(page.getByRole("menuitemradio", { name: "LEC", exact: true })).toHaveAttribute("aria-checked", "true");
  await page.keyboard.press("Escape");
  await page.keyboard.press("c");
  await menu(page);
  await expect(camera(page, "Onboard")).toHaveAttribute("aria-checked", "true");
  await expect(page.getByRole("menuitemradio", { name: "LEC", exact: true })).toHaveAttribute("aria-checked", "true");
  await page.keyboard.press("Escape");
  await page.keyboard.press("c");
  await menu(page);
  await expect(camera(page, "Τηλεοπτική")).toHaveAttribute("aria-checked", "true");
  await page.keyboard.press("Escape");
  await page.keyboard.press("f");
  await page.waitForTimeout(300);
  expect(errors).toEqual([]);
});

test("double-clicking a car chases it", async ({ page }) => {
  await openScene(page, comparisonUrl);
  await page.locator(".stage canvas").scrollIntoViewIfNeeded();
  const point = await page.evaluate(() => window.__ghostcar3d.project(1));
  const box = await page.locator(".stage canvas").boundingBox();
  await page.mouse.dblclick(box.x + point.x, box.y + point.y);
  await menu(page);
  await expect(camera(page, "Ακολούθηση")).toHaveAttribute("aria-checked", "true");
});

test("the TV camera runs a lap on Suzuka without errors", async ({ page }) => {
  const errors = collectPageErrors(page);
  await openScene(page, `${suzukaUrl}&cam=tv`, { circuit: "suzuka" });
  await page.getByLabel("Ταχύτητα αναπαραγωγής").selectOption("4");
  await page.getByRole("button", { name: "Αναπαραγωγή" }).click();
  await page.waitForTimeout(3000);
  expect(await canvasHasPixels(page.locator(".stage canvas").first())).toBe(true);
  await page.getByRole("button", { name: "Παύση" }).click();
  expect(errors).toEqual([]);
});
