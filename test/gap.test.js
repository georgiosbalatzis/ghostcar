import assert from "node:assert/strict";
import test from "node:test";
import {
  buildGapTrace,
  distanceAtTimeOnGrid,
  dominanceSegments,
  sectorTicks,
  timeAtDistanceOnGrid,
} from "../src/domain/gap.js";
import { buildTimeIndex } from "../src/domain/timing.js";

const START = Date.parse("2025-09-06T14:00:00.000Z");

// A driver on a circular track. `angleAt(t)` gives the lap share covered at t seconds (0 → 1 over the lap);
// samples every `step` s from `offset`, like OpenF1 location, on a line of `radius` (a number, or a function
// of the lap share for a line that is wider in places).
// `clock` delays every timestamp, like a location feed whose clock runs behind the lap timing.
function driver({
  slot,
  label,
  lap,
  angleAt = (t) => t / lap,
  radius = 1000,
  offset = 0.1,
  step = 0.27,
  sectors,
  clock = 0,
}) {
  const path = [];
  for (let t = offset; t < lap; t += step) {
    const a = angleAt(t) * Math.PI * 2;
    const r = typeof radius === "function" ? radius(angleAt(t)) : radius;
    path.push({ date: new Date(START + (t + clock) * 1000).toISOString(), x: r * Math.cos(a), y: r * Math.sin(a) });
  }
  const pathTimes = buildTimeIndex(path, new Date(START).toISOString(), lap);
  return { slot, label, path, pathTimes, lapDuration: lap, sectors: sectors || [lap / 3, lap / 3, lap / 3] };
}
const model = (...drivers) => ({ drivers, duration: Math.max(...drivers.map((d) => d.lapDuration)) });

test("gap at the same point grows steadily between two constant-speed laps, across different lines", () => {
  const a = driver({ slot: 1, label: "VER", lap: 80 });
  // NOR: 0.5 s slower, differently timed samples, and a line up to 40 m wider through the first half only,
  // so a distance measured along NOR's own line would run ahead of VER's there.
  const wide = (share) => 1000 + (share < 0.5 ? 40 * Math.sin(share * 2 * Math.PI) : 0);
  const b = driver({ slot: 2, label: "NOR", lap: 80.5, radius: wide, offset: 0.2 });
  const trace = buildGapTrace(model(a, b));
  assert.equal(trace.reliable, true, trace.reason);
  assert.equal(trace.reference, 1);
  const gaps = trace.series[0].gaps;
  assert.equal(gaps[0], 0);
  assert.ok(Math.abs(gaps.at(-1) - 0.5) < 1e-9);
  // Constant speeds: the gap is linear in distance.
  for (const k of [100, 200, 300]) {
    const expected = 0.5 * trace.d[k];
    assert.ok(Math.abs(gaps[k] - expected) < 0.03, `at ${trace.d[k].toFixed(2)}: ${gaps[k]} vs ${expected}`);
  }
  assert.equal(trace.checks.length, 2);
  // Grid lookups invert each other: halfway along the lap, VER has run 40 s.
  assert.ok(Math.abs(timeAtDistanceOnGrid(trace, 1, 0.5) - 40) < 0.05);
  assert.ok(Math.abs(distanceAtTimeOnGrid(trace, 1, 40) - 0.5) < 0.001);
});

test("official sector times that disagree with the position data make the trace unreliable", () => {
  const a = driver({ slot: 1, label: "VER", lap: 80 });
  // S1 0.6 s too long, S2 correct: no single clock offset explains both lines.
  const b = driver({ slot: 2, label: "NOR", lap: 80.5, sectors: [27.433, 26.233, 26.834] });
  const trace = buildGapTrace(model(a, b));
  assert.equal(trace.reliable, false);
  assert.match(trace.reason, /τομέων \(Τ\d\)/);
  assert.deepEqual(dominanceSegments(trace), []);
});

test("a location clock that runs behind the lap timing is measured from the sector lines and removed", () => {
  const a = driver({ slot: 1, label: "VER", lap: 80 });
  const b = driver({ slot: 2, label: "NOR", lap: 80.5, clock: 0.15 });
  const trace = buildGapTrace(model(a, b));
  assert.equal(trace.reliable, true, trace.reason);
  assert.ok(Math.abs(trace.offsets[2] - 0.15) < 0.02, `offset ${trace.offsets[2]}`);
  const k = 200;
  assert.ok(Math.abs(trace.series[0].gaps[k] - 0.5 * trace.d[k]) < 0.03, `gap ${trace.series[0].gaps[k]}`);
  // Far beyond any plausible clock skew, the data is refused.
  const late = buildGapTrace(model(a, driver({ slot: 2, label: "NOR", lap: 80.5, clock: 0.9, offset: 0.05 })));
  assert.equal(late.reliable, false);
});

test("incomplete position data is refused before any calculation", () => {
  const a = driver({ slot: 1, label: "VER", lap: 80 });
  const b = driver({ slot: 2, label: "NOR", lap: 80.5 });
  b.path.splice(100, 12); // ~3 s without samples
  b.pathTimes.splice(100, 12);
  const trace = buildGapTrace(model(a, b));
  assert.equal(trace.reliable, false);
  assert.match(trace.reason, /^NOR: Κενό/);
  assert.equal(buildGapTrace(model(a)), null);
});

test("dominance gives each stretch to the driver who covers it faster", () => {
  // NOR is quicker in the first half and much slower in the second.
  const lapB = 81;
  const nor = (t) => (t < 38 ? t / 76 : 0.5 + (t - 38) / ((lapB - 38) * 2));
  const a = driver({ slot: 1, label: "VER", lap: 80 });
  // Its true sector ends (lap shares 1/3 and 2/3): 25.333 s and 52.333 s.
  const b = driver({ slot: 2, label: "NOR", lap: lapB, angleAt: nor, sectors: [76 / 3, 27, lapB - 157 / 3] });
  const trace = buildGapTrace(model(a, b));
  assert.equal(trace.reliable, true, trace.reason);
  const segments = dominanceSegments(trace);
  assert.deepEqual(
    segments.map((segment) => segment.slot),
    [2, 1]
  );
  assert.ok(Math.abs(segments[0].to - 0.5) < 0.05, `handover at ${segments[0].to}`);
  assert.equal(segments[0].from, 0);
  assert.equal(segments.at(-1).to, 1);
});

test("stretches where neither driver is clearly faster have no owner", () => {
  const a = driver({ slot: 1, label: "VER", lap: 80 });
  const b = driver({ slot: 2, label: "NOR", lap: 80.001, offset: 0.2 });
  const trace = buildGapTrace(model(a, b));
  assert.equal(trace.reliable, true, trace.reason);
  assert.deepEqual(dominanceSegments(trace), []);
});

test("sector ticks sit at the fastest driver's sector ends on the time axis", () => {
  const a = driver({ slot: 1, label: "VER", lap: 80, sectors: [26, 28, 26] });
  const b = driver({ slot: 2, label: "NOR", lap: 80.5 });
  assert.deepEqual(sectorTicks(model(a, b)), [26 / 80.5, 54 / 80.5]);
  assert.deepEqual(sectorTicks(model({ ...a, sectors: [null, 28, 26] }, b)), []);
});
