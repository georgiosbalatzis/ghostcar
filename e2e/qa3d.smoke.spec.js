import { readFileSync } from "node:fs";
import { expect, test } from "@playwright/test";
import { applyClockOffsets, buildGapTrace } from "../src/domain/gap.js";
import { buildReplayGeometry } from "../src/domain/replay.js";
import { fractionAtTime } from "../src/domain/timing.js";
import { buildReplayModel } from "../src/features/replay/replayModel.js";
import { smoothPath } from "../src/helpers.js";
import { createDriverPath, poseAt } from "../src/scene/carPose.js";
import { createWorldFrame } from "../src/scene/world.js";
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

// ─── Every camera mode renders, on both fixtures ───
const FAMILIES = [
  ["Overview and Top", ["orbit", "top"]],
  ["Chase", ["follow1", "follow2", "follow3", "follow4"]],
  ["Onboard", ["onboard1", "onboard2", "onboard3", "onboard4"]],
  ["TV, and the old cinematic link", ["tv", "cinematic"]],
];
for (const [fixture, url, circuit] of [
  ["Suzuka", suzukaUrl, "suzuka"],
  ["Monza, four drivers", fourDriverUrl, "monza"],
]) {
  for (const [family, cams] of FAMILIES) {
    test(`${family} render pixels without errors: ${fixture}`, async ({ page }) => {
      const errors = collectPageErrors(page);
      await setPreferences(page, { trackView: "3d" });
      await routeOpenF1(page, { circuit });
      for (const cam of cams) {
        await page.goto(`${url}&cam=${cam}`);
        const canvas = page.locator(".stage canvas").first();
        await expect(canvas).toBeVisible();
        await page.waitForFunction(() => window.__ghostcar3d?.ready === true);
        await expect.poll(() => canvasHasPixels(canvas), { message: `${cam} should draw` }).toBe(true);
      }
      expect(errors).toEqual([]);
    });
  }
}

// ─── The cars are where the shared clock puts them ───
// The same pipeline the page runs, in Node from the recorded data: the stage model, one world frame, the dense
// path of each driver, and the pose at the fraction of that driver's own timestamps.
function expectedPositions(progress) {
  const data = JSON.parse(readFileSync(new URL("./fixtures/suzuka-2025-q.json", import.meta.url), "utf8"));
  const numbers = [1, 4];
  const streams = Object.fromEntries(
    numbers.map((number, index) => [index + 1, { location: data.location[number], telemetry: data.telemetry[number] }])
  );
  const { trackPath, circuitFlip } = buildReplayGeometry(data.meeting, data.location[1]);
  const slots = numbers.map((number, index) => ({
    slot: index + 1,
    driver: data.drivers.find((driver) => driver.driver_number === number),
    lap: data.laps[number].find((lap) => lap.lap_number === data.lapNumbers[number]),
    stints: data.stints[number],
  }));
  const model = buildReplayModel({
    trackPath,
    circuitFlip,
    streams,
    meta: { year: data.year, meeting: data.meeting, session: data.session, slots },
  });
  const stage = applyClockOffsets(model, buildGapTrace(model));
  const frame = createWorldFrame(stage.drivers[0].path, { flip: circuitFlip });
  return stage.drivers.map((driver) => {
    const path = createDriverPath(smoothPath(driver.path.map(frame.toWorld), 2400));
    return poseAt(path, fractionAtTime(driver.pathTimes, progress * stage.duration));
  });
}

test("paused, every car is exactly where its own timestamps put it at the shared clock", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await setPreferences(page, { trackView: "3d" });
  await routeOpenF1(page, { circuit: "suzuka" });
  await page.goto(suzukaUrl);
  await page.waitForFunction(() => window.__ghostcar3d?.ready === true);
  for (const wanted of ["0.3", "0.72"]) {
    await timeline(page).fill(wanted);
    const progress = Number(await timeline(page).inputValue());
    await page.waitForTimeout(600);
    const actual = await page.evaluate(() =>
      window.__ghostcar3d.cars.filter(Boolean).map((car) => [car.position.x, car.position.z])
    );
    const expected = expectedPositions(progress);
    expect(actual).toHaveLength(2);
    actual.forEach(([x, z], index) => {
      // Metres: the pose is exact, so this is rounding, not tolerance for lag.
      expect(Math.abs(x - expected[index].x)).toBeLessThan(0.05);
      expect(Math.abs(z - expected[index].z)).toBeLessThan(0.05);
    });
  }
});

// ─── Name chips on both fixtures ───
for (const [fixture, url, circuit] of [
  ["Monza", comparisonUrl, "monza"],
  ["Suzuka", suzukaUrl, "suzuka"],
]) {
  for (const [width, height] of [
    [1440, 900],
    [390, 844],
  ]) {
    test(`Overview: name chips inside the stage and apart, ${fixture} at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height });
      await setPreferences(page, { trackView: "3d" });
      await routeOpenF1(page, { circuit });
      await page.goto(url);
      await page.waitForFunction(() => window.__ghostcar3d?.ready === true);
      await timeline(page).fill("0.5");
      await page.waitForTimeout(600);
      const layout = await page.evaluate(() => {
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
      expect(layout).toEqual({ count: 2, inside: true, overlap: false });
    });
  }
}
