import test from "node:test";
import assert from "node:assert/strict";
import {
  arcAtFraction,
  brakeBand,
  dominanceBand,
  sampleRamp,
  speedBand,
  speedRange,
} from "../src/scene/trackColouring.js";
import { buildCentreline } from "../src/scene/trackGeometry.js";

// A 60 s lap round a 300 m circle, sampled 200 times.
const lap = () => {
  const points = Array.from({ length: 200 }, (_, i) => {
    const a = (i / 200) * Math.PI * 2;
    return { x: Math.cos(a) * 300, y: 0, z: Math.sin(a) * 300 };
  });
  return buildCentreline(
    points,
    points.map((_, i) => (i / 199) * 60)
  );
};
const alphaAt = (band, i) => band[i * 8 + 3];

test("dominance fractions of the reference samples become the right stretch of road", () => {
  const c = lap();
  const blue = [0, 0, 1];
  const orange = [1, 0.5, 0];
  const band = dominanceBand(
    c,
    [
      { slot: 1, from: 0.25, to: 0.5 },
      { slot: 2, from: 0.75, to: 0.9 },
    ],
    (slot) => (slot === 1 ? blue : orange)
  );
  const painted = (colour) =>
    [...Array(c.count).keys()].filter(
      (i) => alphaAt(band, i) > 0 && band[i * 8] === colour[0] && band[i * 8 + 1] === colour[1]
    );
  const first = painted(blue);
  const second = painted(orange);
  assert.ok(Math.abs(first[0] * c.spacing - arcAtFraction(c, 0.25)) <= c.spacing);
  assert.ok(Math.abs(first.at(-1) * c.spacing - arcAtFraction(c, 0.5)) <= c.spacing);
  assert.ok(Math.abs(second[0] * c.spacing - arcAtFraction(c, 0.75)) <= c.spacing);
  // Contiguous, opaque enough to read, and nothing outside the segments.
  assert.equal(first.length, first.at(-1) - first[0] + 1);
  assert.ok(Math.abs(alphaAt(band, first[0]) - 0.85) < 1e-6);
  assert.equal(alphaAt(band, 0), 0);
  assert.equal(band.filter((_, k) => k % 8 === 3 && band[k] > 0).length, first.length + second.length);
});

test("no segments, no paint", () => {
  const c = lap();
  assert.ok(dominanceBand(c, [], () => [1, 1, 1]).every((value) => value === 0));
});

test("a braking window is painted where it happens, whatever the telemetry's own sample rate", () => {
  const c = lap();
  // car_data is a different rate from the location samples: about 3.7 Hz.
  const step = 0.27;
  const telTimes = Array.from({ length: Math.floor(60 / step) }, (_, i) => i * step);
  const tel = telTimes.map((t) => ({ speed: 200, brake: t >= 20 && t <= 24 ? 1 : 0 }));
  const band = brakeBand(c, tel, telTimes, [1, 0, 0]);
  const times = [...Array(c.count).keys()].filter((i) => alphaAt(band, i) > 0).map((i) => c.t[i]);
  const pointStep = 60 / c.count;
  assert.ok(times.length > 0);
  assert.ok(times[0] >= 20 - step - pointStep, `starts at ${times[0]}`);
  assert.ok(times.at(-1) <= 24 + step + pointStep, `ends at ${times.at(-1)}`);
  // The whole window, less a sample at each end, is covered.
  for (let t = 20 + step; t <= 24 - step; t += pointStep) {
    const i = Math.round(t / pointStep);
    assert.ok(alphaAt(band, i) > 0, `unpainted at ${t}`);
  }
  assert.equal(alphaAt(band, Math.round(10 / pointStep)), 0);
});

test("speed maps the lap's own 5th to 95th percentile onto the ramp, by time", () => {
  const c = lap();
  const telTimes = Array.from({ length: 300 }, (_, i) => (i / 299) * 60);
  // Speed climbs 100 to 300 km/h over the lap, with one glitch far above the rest.
  const tel = telTimes.map((t, i) => ({ speed: i === 5 ? 900 : 100 + (t / 60) * 200, brake: 0 }));
  const range = speedRange(tel);
  assert.ok(range.hi < 300 && range.lo > 100 && range.hi < 900);
  const ramp = [
    [0, 0, 0],
    [1, 1, 1],
  ];
  const band = speedBand(c, tel, telTimes, ramp);
  const shade = (i) => band[i * 8];
  assert.ok(shade(2) < shade(c.count / 2) && shade(c.count / 2) < shade(c.count - 3));
  assert.equal(speedBand(c, tel.slice(0, 4), telTimes.slice(0, 4), ramp), null);
});

test("sampleRamp blends between stops and clamps", () => {
  const ramp = [
    [0, 0, 0],
    [1, 0, 0],
    [1, 1, 0],
  ];
  assert.deepEqual(sampleRamp(ramp, 0.25), [0.5, 0, 0]);
  assert.deepEqual(sampleRamp(ramp, 2), [1, 1, 0]);
  assert.deepEqual(sampleRamp(ramp, -1), [0, 0, 0]);
});
