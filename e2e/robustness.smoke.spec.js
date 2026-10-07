import { expect, test } from "@playwright/test";
import { collectPageErrors, comparisonUrl, fourDriverUrl, routeOpenF1, setPreferences, trackMap } from "./fixtures.js";

async function openScene(page, url) {
  await setPreferences(page, { trackView: "3d" });
  await routeOpenF1(page);
  await page.goto(url);
  await expect(page.locator(".stage canvas").first()).toBeVisible();
  await page.waitForFunction(() => window.__ghostcar3d?.ready === true);
}

test("a frame with four drivers in Chase stays inside the draw-call and triangle budget", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await openScene(page, `${fourDriverUrl}&cam=follow1`);
  const { calls, triangles } = await page.evaluate(() => {
    const { calls: c, triangles: t } = window.__ghostcar3d.info().render;
    return { calls: c, triangles: t };
  });
  console.log(`4 drivers, Chase, 1440x900: ${calls} draw calls, ${triangles} triangles`);
  expect(calls).toBeGreaterThan(0);
  expect(calls).toBeLessThanOrEqual(90);
  expect(triangles).toBeLessThanOrEqual(250_000);
});

test("?debug3d=1 logs what a frame costs every 5 s, and nothing logs without it", async ({ page }) => {
  const logs = [];
  page.on("console", (message) => message.text().startsWith("[3D]") && logs.push(message.text()));
  await openScene(page, `${comparisonUrl}&debug3d=1`);
  await expect.poll(() => logs.length, { timeout: 12_000 }).toBeGreaterThan(0);
  expect(logs[0]).toMatch(/^\[3D\] \d+ draw calls, \d+ triangles$/);

  const quiet = await page.context().newPage();
  const quietLogs = [];
  quiet.on("console", (message) => message.text().startsWith("[3D]") && quietLogs.push(message.text()));
  await setPreferences(quiet, { trackView: "3d" });
  await routeOpenF1(quiet);
  await quiet.goto(comparisonUrl);
  await quiet.waitForFunction(() => window.__ghostcar3d?.ready === true);
  await quiet.waitForTimeout(6500);
  expect(quietLogs).toEqual([]);
});

test("switching between 2D and 3D ten times leaves nothing behind", async ({ page }) => {
  // Ten fresh software-rendered WebGL scenes can exceed the ordinary one-scene test budget.
  test.setTimeout(120_000);
  const errors = collectPageErrors(page);
  // Every WebGL context the page makes, and every one that is given up.
  await page.addInitScript(() => {
    window.__contexts = { made: 0, lost: 0 };
    const getContext = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (type, ...rest) {
      const context = getContext.call(this, type, ...rest);
      if (context && /webgl/.test(type) && !this.__counted) {
        this.__counted = true;
        window.__contexts.made++;
        this.addEventListener("webglcontextlost", () => window.__contexts.lost++);
      }
      return context;
    };
  });
  await openScene(page, comparisonUrl);
  const memory = () => page.evaluate(() => ({ ...window.__ghostcar3d.info().memory }));
  const first = await memory();
  for (let i = 0; i < 10; i++) {
    await page.getByRole("button", { name: "2D", exact: true }).click();
    await expect(trackMap(page)).toBeVisible();
    await page.getByRole("button", { name: "3D", exact: true }).click();
    await page.waitForFunction(() => window.__ghostcar3d?.ready === true);
  }
  const last = await memory();
  expect(Math.abs(last.geometries - first.geometries)).toBeLessThanOrEqual(2);
  expect(Math.abs(last.textures - first.textures)).toBeLessThanOrEqual(2);
  // Old contexts are released as their scene goes, so only the current one is alive.
  await expect
    .poll(() => page.evaluate(() => window.__contexts.made - window.__contexts.lost), { timeout: 5000 })
    .toBeLessThanOrEqual(1);
  expect(errors).toEqual([]);
});

test("a lost WebGL context continues in 2D with the discreet message", async ({ page }) => {
  await openScene(page, comparisonUrl);
  await page.evaluate(() => window.__ghostcar3d.loseContext());
  await expect(trackMap(page)).toBeVisible();
  await expect(page.getByRole("status").filter({ hasText: "Συνέχεια σε 2D" })).toBeVisible();
});
