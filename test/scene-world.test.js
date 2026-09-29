import test from "node:test";
import assert from "node:assert/strict";
import { norm } from "../src/helpers.js";
import { createWorldFrame } from "../src/scene/world.js";

const lap = (scale, offsetX = 0) =>
  Array.from({ length: 200 }, (_, i) => {
    const a = (i / 200) * Math.PI * 2;
    return { x: offsetX + Math.cos(a) * scale, y: Math.sin(a) * scale * 0.6, z: 500 + Math.sin(a * 2) * 40 };
  });

test("the same raw point is the same world point for every driver", () => {
  const frame = createWorldFrame(lap(20000));
  // A second driver's own samples have other extremes; the frame is the reference's, so nothing shifts.
  const wide = lap(20500, 300);
  const p = wide[17];
  const a = frame.toWorld(p);
  const b = frame.toWorld({ ...p });
  assert.deepEqual(a, b);
  assert.notDeepEqual(createWorldFrame(wide).toWorld(p), a);
});

test("a raw path in decimetres measures its length in metres", () => {
  // 5807 m of circuit is 58,070 decimetres: a square of 14,517.5 per side.
  const side = 14517.5;
  const square = [];
  for (let i = 0; i <= 100; i++) square.push({ x: (i / 100) * side, y: 0, z: 0 });
  for (let i = 1; i <= 100; i++) square.push({ x: side, y: (i / 100) * side, z: 0 });
  for (let i = 1; i <= 100; i++) square.push({ x: side - (i / 100) * side, y: side, z: 0 });
  for (let i = 1; i <= 100; i++) square.push({ x: 0, y: side - (i / 100) * side, z: 0 });
  const frame = createWorldFrame(square);
  const world = square.map(frame.toWorld);
  let length = 0;
  for (let i = 1; i < world.length; i++) length += Math.hypot(world[i].x - world[i - 1].x, world[i].z - world[i - 1].z);
  assert.ok(Math.abs(length - 5807) < 1, `${length}`);
  assert.ok(Math.abs(frame.bounds.width - 1451.75) < 1e-6);
});

test("elevation is in metres above the lowest road point, and relief scales only it", () => {
  const path = lap(20000);
  const frame = createWorldFrame(path);
  const heights = path.map((p) => frame.toWorld(p).y);
  assert.equal(Math.min(...heights), 0);
  assert.ok(Math.abs(Math.max(...heights) - 8) < 0.1); // z spans 80 decimetres
  const tall = createWorldFrame(path, { relief: 3 });
  assert.ok(Math.abs(Math.max(...path.map((p) => tall.toWorld(p).y)) - 24) < 0.3);
  assert.equal(tall.toWorld(path[5]).x, frame.toWorld(path[5]).x);
  assert.equal(frame.groundY, -1);
});

test("orientation matches the 2D map's projection, flipped or not", () => {
  const path = lap(20000, 100);
  for (const flip of [false, true]) {
    const frame = createWorldFrame(path, { flip });
    const flat = norm(path, flip);
    for (const i of [3, 41, 90, 155]) {
      const w = frame.toWorld(path[i]);
      // norm(): x is screen right, z is screen down; both scaled by the same factor, so the signs must agree.
      assert.equal(Math.sign(w.x), Math.sign(flat[i].x));
      assert.equal(Math.sign(w.z), Math.sign(flat[i].z));
    }
  }
});
