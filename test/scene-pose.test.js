import test from "node:test";
import assert from "node:assert/strict";
import { smoothPath } from "../src/helpers.js";
import { createDriverPath, placeOnRoad, poseAt } from "../src/scene/carPose.js";
import { buildCentreline } from "../src/scene/trackGeometry.js";

const RADIUS = 500;
const ring = (samples) =>
  Array.from({ length: samples }, (_, i) => {
    const a = (i / samples) * Math.PI * 2;
    return { x: Math.cos(a) * RADIUS, y: 0, z: Math.sin(a) * RADIUS };
  });

// A driver's samples resampled the way the scene does it, then walked at constant speed.
const path = createDriverPath(smoothPath(ring(200), 2400));

test("a constant-speed lap round a circle puts the car on the circle, pointing along it", () => {
  for (const fraction of [0.1, 0.25, 0.5, 0.73, 0.9]) {
    const pose = poseAt(path, fraction);
    // The samples cover 199/200 of the circle: fraction f is at angle f × 199/200 × 2π.
    const a = fraction * (199 / 200) * Math.PI * 2;
    assert.ok(
      Math.hypot(pose.x - Math.cos(a) * RADIUS, pose.z - Math.sin(a) * RADIUS) < 0.05,
      `position at ${fraction}`
    );
    // Direction of travel is (−sin a, cos a); heading is atan2(dx, dz).
    const expected = Math.atan2(-Math.sin(a), Math.cos(a));
    const error = Math.abs(Math.atan2(Math.sin(pose.heading - expected), Math.cos(pose.heading - expected)));
    assert.ok((error * 180) / Math.PI < 1, `heading at ${fraction}: ${error}`);
  }
});

test("heading at a standstill keeps the last direction instead of snapping", () => {
  const still = createDriverPath(Array.from({ length: 50 }, () => ({ x: 1, y: 0, z: 1 })));
  const pose = { heading: 1.25 };
  poseAt(still, 0.5, pose);
  assert.equal(pose.heading, 1.25);
});

test("placeOnRoad takes height from the road and finds it again after a jump", () => {
  // A ring that climbs 10 m over the lap, and a driver whose own recorded height is 3 m too high.
  const climbing = ring(200).map((p, i) => ({ ...p, y: (i / 200) * 10 }));
  const c = buildCentreline(
    climbing,
    climbing.map((_, i) => i),
    { sigma: 4 }
  );
  const state = {};
  const driver = createDriverPath(
    smoothPath(
      climbing.map((p) => ({ ...p, y: p.y + 3 })),
      2400
    )
  );
  const early = poseAt(driver, 0.2);
  placeOnRoad(c, early, state);
  const roadY = state.y;
  assert.ok(Math.abs(roadY - (early.y - 3)) < 0.6, `road ${roadY} vs driver ${early.y}`);
  assert.ok(state.pitch > 0, "climbing");
  // Scrub to the other side of the lap: the cursor window misses, so the whole loop is searched.
  const late = poseAt(driver, 0.75);
  placeOnRoad(c, late, state);
  assert.ok(Math.abs(state.y - (late.y - 3)) < 0.6, `after jump ${state.y} vs ${late.y - 3}`);
});
