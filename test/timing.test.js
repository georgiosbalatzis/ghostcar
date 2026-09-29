import assert from "node:assert/strict";
import test from "node:test";
import { buildTimeIndex, fractionAtTime } from "../src/domain/timing.js";

const at = (ms) => new Date(Date.parse("2025-09-06T14:00:00.000Z") + ms).toISOString();
const samples = (offsets) => offsets.map((ms) => ({ date: at(ms) }));

test("buildTimeIndex measures from the lap start when it matches the samples", () => {
  assert.deepEqual(buildTimeIndex(samples([150, 400, 1400]), at(0), 1.5), [0.15, 0.4, 1.4]);
});

test("buildTimeIndex falls back to the first sample for a missing or inconsistent lap start", () => {
  assert.deepEqual(buildTimeIndex(samples([500, 1500]), null, 1), [0, 1]);
  // A lap start a minute away belongs to other samples (stale or mismatched data).
  assert.deepEqual(buildTimeIndex(samples([500, 1500]), at(60_000), 1), [0, 1]);
});

test("buildTimeIndex spreads undated samples evenly over the lap", () => {
  assert.deepEqual(buildTimeIndex([{}, {}, {}], at(0), 80), [0, 40, 80]);
  assert.deepEqual(buildTimeIndex([], at(0), 80), []);
});

test("fractionAtTime maps time to a fractional sample position, clamped at both ends", () => {
  const times = [0, 1, 3, 4]; // uneven spacing between samples 1 and 2
  assert.equal(fractionAtTime(times, -1), 0);
  assert.equal(fractionAtTime(times, 0), 0);
  assert.equal(fractionAtTime(times, 1), 1 / 3);
  assert.equal(fractionAtTime(times, 2), 1.5 / 3);
  assert.equal(fractionAtTime(times, 4), 1);
  assert.equal(fractionAtTime(times, 99), 1);
  assert.equal(fractionAtTime([], 1), 0);
});

test("the faster lap reaches the line first on a shared clock", () => {
  const fast = buildTimeIndex(samples([0, 40_000, 80_000]), at(0), 80);
  const slow = buildTimeIndex(samples([0, 41_000, 82_000]), at(0), 82);
  assert.equal(fractionAtTime(fast, 80), 1);
  assert.ok(fractionAtTime(slow, 80) < 1);
  assert.equal(fractionAtTime(slow, 82), 1);
});
