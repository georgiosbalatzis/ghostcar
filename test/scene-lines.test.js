import test from "node:test";
import assert from "node:assert/strict";
import { smoothPath } from "../src/helpers.js";
import { buildRacingLines } from "../src/scene/buildLines.js";
import { createDriverPath } from "../src/scene/carPose.js";
import { buildCentreline } from "../src/scene/trackGeometry.js";

test("a racing line is the driver's own path, just above the road", () => {
  const ring = Array.from({ length: 120 }, (_, i) => {
    const a = (i / 120) * Math.PI * 2;
    return { x: Math.cos(a) * 400, y: 5, z: Math.sin(a) * 400 };
  });
  const centreline = buildCentreline(
    ring,
    ring.map((_, i) => i)
  );
  const driver = createDriverPath(smoothPath(ring, 600));
  const added = [];
  const set = buildRacingLines({
    scene: { add: (object) => added.push(object) },
    driverPaths: [driver, null],
    centreline,
    colours: ["#3671c6", "#ff8000"],
    resolution: { width: 800, height: 600 },
  });
  assert.equal(added.length, 1); // no line for a slot without a driver
  const line = added[0];
  const positions = line.geometry.attributes.instanceStart.data.array;
  // Segment k starts at path point k: the line runs exactly where the car does (x, z), at the road's height + 5 cm.
  for (const k of [0, 137, 300, 598]) {
    const point = driver.points[k];
    assert.ok(Math.abs(positions[k * 6] - point.x) < 1e-3);
    assert.ok(Math.abs(positions[k * 6 + 2] - point.z) < 1e-3);
    assert.ok(Math.abs(positions[k * 6 + 1] - (5 + 0.05)) < 0.3);
  }
  set.setVisible(false);
  assert.equal(line.visible, false);
  assert.equal(line.material.linewidth, 0.4);
});
