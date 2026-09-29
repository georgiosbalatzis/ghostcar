import test from "node:test";
import assert from "node:assert/strict";
import {
  buildCentreline,
  offsetEdge,
  overpassMask,
  pointAtArc,
  startLine,
  surfaceAt,
} from "../src/scene/trackGeometry.js";

const circle = (radius, points = 120, y = () => 0, t0 = 0, lapTime = 40) =>
  Array.from({ length: points }, (_, i) => {
    const a = (i / points) * Math.PI * 2;
    return { x: Math.cos(a) * radius, y: y(a), z: Math.sin(a) * radius, time: t0 + (i / points) * lapTime };
  });

// A lemniscate: the road crosses itself at the origin, on the ground at a = 3π/2 and on a 10 m deck at a = π/2.
const figureEight = () =>
  Array.from({ length: 240 }, (_, i) => {
    const a = (i / 240) * Math.PI * 2;
    const d = 1 + Math.sin(a) ** 2;
    return { x: (300 * Math.cos(a)) / d, y: 5 * (1 + Math.sin(a)), z: (300 * Math.sin(a) * Math.cos(a)) / d, time: i };
  });

test("the resampled centreline keeps the path's length within half a percent", () => {
  const radius = 400;
  const pts = circle(radius);
  const c = buildCentreline(
    pts,
    pts.map((p) => p.time)
  );
  const exact = 2 * Math.PI * radius;
  assert.ok(Math.abs(c.length - exact) / exact < 0.005, `${c.length} vs ${exact}`);
  let walked = 0;
  for (let i = 0; i < c.count; i++) {
    const j = (i + 1) % c.count;
    walked += Math.hypot(c.x[j] - c.x[i], c.y[j] - c.y[i], c.z[j] - c.z[i]);
  }
  assert.ok(Math.abs(walked - c.length) / c.length < 0.005);
});

test("each centreline point carries the reference lap's time", () => {
  const pts = circle(400, 120, () => 0, 0, 90);
  const c = buildCentreline(
    pts,
    pts.map((p) => p.time)
  );
  assert.ok(Math.abs(c.t[Math.round(c.count / 2)] - 45) < 0.5);
  assert.ok(c.t[1] > c.t[0]);
});

test("offset edges never run backwards in a tight hairpin, and collapse only where they must", () => {
  const pts = circle(8, 90);
  const c = buildCentreline(
    pts,
    pts.map((p) => p.time),
    { spacing: 1 }
  );
  // Direction of travel round this circle: the inside is to the left or the right, so test both sides.
  let folded = 0;
  for (const offset of [6, 10, -6, -10]) {
    const edge = offsetEdge(c, offset);
    folded += edge.collapsed;
    for (let i = 1; i < c.count; i++) {
      const along = (edge.x[i] - edge.x[i - 1]) * c.tx[i] + (edge.z[i] - edge.z[i - 1]) * c.tz[i];
      assert.ok(along >= -1e-9, `offset ${offset} runs backwards at ${i}`);
    }
  }
  assert.ok(folded > 0, "the 10 m offset inside an 8 m radius has to collapse");
  // An open bend (radius 400 m) needs no collapsing at all.
  const wide = buildCentreline(
    circle(400),
    circle(400).map((p) => p.time)
  );
  assert.equal(offsetEdge(wide, 10).collapsed + offsetEdge(wide, -10).collapsed, 0);
});

test("surfaceAt keeps a car on its own level where the road crosses itself", () => {
  const pts = figureEight();
  const c = buildCentreline(
    pts,
    pts.map((p) => p.time),
    { sigma: 6 }
  );
  // Centreline indices closest to the origin: one on each level.
  const candidates = [...Array(c.count).keys()].filter((i) => Math.hypot(c.x[i], c.z[i]) < 4);
  const low = candidates.reduce((a, b) => (c.y[a] < c.y[b] ? a : b));
  const high = candidates.reduce((a, b) => (c.y[a] > c.y[b] ? a : b));
  assert.ok(c.y[high] - c.y[low] > 6, "the two passes are on different levels");
  assert.ok(Math.abs(surfaceAt(c, 0, 0, low).y - c.y[low]) < 1);
  assert.ok(Math.abs(surfaceAt(c, 0, 0, high).y - c.y[high]) < 1);
  // Without a hint the whole loop is searched; the car's own height picks the level at the crossing.
  assert.ok(Math.abs(surfaceAt(c, 0, 0, -1, {}, c.y[high]).y - c.y[high]) < 1);
  assert.ok(Math.abs(surfaceAt(c, 0, 0, -1, {}, c.y[low]).y - c.y[low]) < 1);
  // The overpass mask marks the deck, not the ground, near the crossing.
  const mask = overpassMask(c);
  assert.equal(mask[high], 1);
  assert.equal(mask[low], 0);
});

test("the start line sits one first-sample's distance before the first sample", () => {
  const radius = 500;
  const lapTime = 100;
  const pts = circle(radius, 200, () => 0, 0.5, lapTime); // first sample 0.5 s into the lap
  const c = buildCentreline(
    pts,
    pts.map((p) => p.time)
  );
  const speed = (2 * Math.PI * radius) / lapTime;
  const start = startLine(c);
  const first = pts[0];
  const distance = Math.hypot(start.x - first.x, start.z - first.z);
  assert.ok(Math.abs(distance - speed * 0.5) < 0.5, `${distance} vs ${speed * 0.5}`);
  // It is behind the first sample: going forward from the start line reaches the first sample.
  const along = (first.x - start.x) * start.tx + (first.z - start.z) * start.tz;
  assert.ok(along > 0);
});
