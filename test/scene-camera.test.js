import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { PerspectiveCamera, Vector3 } from "three";
import { buildTimeIndex } from "../src/domain/timing.js";
import { camFor, nextCam, normalizeCam, parseCam } from "../src/scene/cameraModes.js";
import { fitDistance, pickTvCamera, placeTvCameras, springStep, tvFov, yawFor2D } from "../src/scene/cameraMath.js";
import { buildCentreline } from "../src/scene/trackGeometry.js";
import { createWorldFrame } from "../src/scene/world.js";

const suzuka = () => {
  const data = JSON.parse(readFileSync(new URL("../e2e/fixtures/suzuka-2025-q.json", import.meta.url), "utf8"));
  const raw = data.location[1];
  const lap = data.laps[1].find((item) => item.lap_number === data.lapNumbers[1]);
  const frame = createWorldFrame(raw);
  const times = buildTimeIndex(raw, lap.date_start, lap.lap_duration);
  return { frame, centreline: buildCentreline(raw.map(frame.toWorld), times) };
};

const cameraAt = (bounds, fov, aspect, pitch, yaw, distance) => {
  const camera = new PerspectiveCamera(fov, aspect, 1, 1e6);
  const polar = Math.PI / 2 - pitch;
  const target = new Vector3(0, bounds.height / 2, 0);
  camera.position.set(
    target.x + distance * Math.sin(polar) * Math.sin(yaw),
    target.y + distance * Math.cos(polar),
    target.z + distance * Math.sin(polar) * Math.cos(yaw)
  );
  camera.lookAt(target);
  camera.updateMatrixWorld();
  return camera;
};

const corners = (b) =>
  [-1, 1].flatMap((x) =>
    [0, 1].flatMap((y) => [-1, 1].map((z) => new Vector3((x * b.width) / 2, y * b.height, (z * b.depth) / 2)))
  );

test("fitDistance frames every corner with the margin on the tighter axis, wide or tall, tilted or top-down", () => {
  const bounds = { width: 1970, depth: 1015, height: 40 };
  for (const aspect of [1440 / 560, 390 / 560, 1]) {
    for (const pitch of [(55 * Math.PI) / 180, Math.PI / 2]) {
      const distance = fitDistance(bounds, 40, aspect, pitch, 0, 0.08);
      const camera = cameraAt(bounds, 40, aspect, pitch, 0, distance);
      const extent = Math.max(...corners(bounds).flatMap((p) => p.project(camera) && [Math.abs(p.x), Math.abs(p.y)]));
      assert.ok(Math.abs(extent - 0.92) < 0.005, `aspect ${aspect} pitch ${pitch}: ${extent}`);
    }
  }
});

test("yaw 0 puts world +x to the right and world +z down the page, as the 2D map does", () => {
  const bounds = { width: 100, depth: 100, height: 0 };
  // Not exactly straight down (the app's top view holds the polar angle at 0.0001), or lookAt has no up.
  const camera = cameraAt(bounds, 40, 1.5, Math.PI / 2 - 1e-4, yawFor2D(false), 300);
  const right = new Vector3(20, 0, 0).project(camera);
  const down = new Vector3(0, 0, 20).project(camera);
  assert.ok(right.x > 0.05 && Math.abs(right.y) < 1e-6);
  assert.ok(down.y < -0.05 && Math.abs(down.x) < 1e-6); // NDC y is up, so down the page is negative
});

test("springStep settles on the target without overshoot and keeps its velocity", () => {
  const current = { x: 0, y: 0, z: 0 };
  const velocity = { x: 0, y: 0, z: 0 };
  const target = { x: 10, y: -4, z: 2 };
  let peak = 0;
  for (let i = 0; i < 240; i++) {
    springStep(current, target, velocity, 8, 1 / 60);
    peak = Math.max(peak, current.x);
  }
  assert.ok(peak <= 10 + 1e-9, "critically damped: no overshoot");
  assert.ok(Math.abs(current.x - 10) < 1e-3 && Math.abs(current.y + 4) < 1e-3);
  // A step is independent of how the time is sliced.
  const a = { x: 0, y: 0, z: 0 };
  const va = { x: 0, y: 0, z: 0 };
  const b = { x: 0, y: 0, z: 0 };
  const vb = { x: 0, y: 0, z: 0 };
  springStep(a, target, va, 8, 0.1);
  for (let i = 0; i < 10; i++) springStep(b, target, vb, 8, 0.01);
  assert.ok(Math.abs(a.x - b.x) < 1e-9);
});

test("camera modes: legacy cinematic is TV, unknown falls back, C cycles the families and keeps the driver", () => {
  assert.equal(normalizeCam("cinematic"), "tv");
  assert.equal(normalizeCam("nope"), null);
  assert.deepEqual(parseCam("follow3"), { family: "follow", slot: 3 });
  assert.deepEqual(parseCam("top"), { family: "top", slot: null });
  assert.equal(camFor("onboard", 2), "onboard2");
  assert.equal(camFor("tv", 2), "tv");
  const seen = [];
  let cam = "orbit";
  for (let i = 0; i < 5; i++) seen.push((cam = nextCam(cam, 3)));
  assert.deepEqual(seen, ["top", "follow3", "onboard3", "tv", "orbit"]);
});

test("TV stations at Suzuka keep 15 m clear of every road point and sit on the outside of bends", () => {
  const { centreline: c } = suzuka();
  const stations = placeTvCameras(c);
  assert.ok(stations.length >= 20);
  for (const station of stations) {
    let nearest = Infinity;
    for (let i = 0; i < c.count; i++) nearest = Math.min(nearest, Math.hypot(c.x[i] - station.x, c.z[i] - station.z));
    assert.ok(nearest >= 15, `station at ${station.s.toFixed(0)} m is ${nearest.toFixed(1)} m from the road`);
    assert.ok(station.y > c.y.reduce((a, b) => Math.min(a, b)));
  }
});

test("TV director over a Suzuka lap at 70 m/s: cuts are 2.5 s apart at least, and the car is never a speck", () => {
  const { centreline: c } = suzuka();
  const stations = placeTvCameras(c);
  const speed = 70;
  const dt = 0.05;
  let current = -1;
  let held = 0;
  let lastCut = -Infinity;
  let cuts = 0;
  let minSize = Infinity;
  for (let t = 0; t * speed < c.length; t += dt) {
    const s = t * speed;
    const index = c.count > 0 ? Math.floor(s / c.spacing) % c.count : 0;
    const pick = pickTvCamera(stations, s, current, held, c.length);
    if (pick !== current) {
      // The first cut follows the opening pick (a station right at the start line, which the car leaves at once);
      // every cut after it is a station's whole window.
      if (current >= 0) {
        if (cuts > 0)
          assert.ok(t - lastCut >= 2.5 - 1e-9, `cut after ${(t - lastCut).toFixed(2)} s at ${s.toFixed(0)} m`);
        cuts++;
      }
      current = pick;
      held = 0;
      lastCut = t;
    }
    held += dt;
    const st = stations[current];
    const distance = Math.hypot(st.x - c.x[index], st.y - c.y[index], st.z - c.z[index]);
    // A car 5.6 m long under the dynamic field of view, as a share of the stage height.
    minSize = Math.min(minSize, 5.63 / (2 * distance * Math.tan((tvFov(distance) * Math.PI) / 360)));
  }
  assert.ok(cuts >= 15, `${cuts} cuts`);
  assert.ok(minSize >= 0.04, `smallest car ${(minSize * 100).toFixed(1)}% of the stage`);
});

test("tvFov widens with distance, within 6° and 45°", () => {
  assert.equal(tvFov(5), 45);
  assert.equal(tvFov(5000), 6);
  assert.ok(tvFov(60) > tvFov(120));
});
