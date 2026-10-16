import assert from "node:assert/strict";
import test from "node:test";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { analyzeStudy, incrementalGain, readRaw, validateSamples } from "../scripts/analyze-russell-baku-2026.mjs";
import { resolveRestoredDrivers } from "../src/hooks/useComparisonSelectors.js";
import { buildGapTrace } from "../src/domain/gap.js";
import { buildTimeIndex } from "../src/domain/timing.js";
import { buildReplayStreamRequests, loadReplayStreams } from "../src/services/openf1.js";

const study = await analyzeStudy();

test("frozen OpenF1 and circuit-marker responses match their captured SHA-256 hashes", async () => {
  const manifest = await readRaw("manifest");
  for (const entry of manifest) {
    const bytes = await readFile(new URL(`../docs/analysis/russell-baku-2026/raw/${entry.file}`, import.meta.url));
    assert.equal(createHash("sha256").update(bytes).digest("hex"), entry.sha256, entry.file);
  }
});

test("Baku identity: Russell's three Q3 push laps are L21, L23, L25; L20 is also a completed timed lap", () => {
  assert.equal(study.q3start.qualifying_phase, 3);
  assert.deepEqual(
    study.q3laps.map((lap) => lap.lap_number),
    [19, 20, 21, 22, 23, 24, 25, 26]
  );
  assert.deepEqual(
    study.q3laps.filter((lap) => [21, 23, 25].includes(lap.lap_number)).map((lap) => lap.lap_duration),
    [103.713, 103.037, 102.526]
  );
  assert.equal(study.q3laps.find((lap) => lap.lap_number === 20).lap_duration, 113.262);
  assert.ok(study.selected.every((lap) => lap.driver_number === 63 && !lap.is_pit_out_lap));
  assert.equal(study.selected[0].date_start, "2026-09-25T12:54:43.257000+00:00");
  assert.equal(study.selected[1].date_start, "2026-09-25T13:02:17.911000+00:00");
});

test("same-driver URL restore and stream requests preserve separate lap identities", async () => {
  const drivers = await readRaw("drivers");
  const restored = resolveRestoredDrivers({ d1: "63", d2: "63", numDrivers: "2" }, drivers);
  assert.deepEqual(restored.driverNumbers, [63, 63, null, null]);
  assert.deepEqual(restored.missingDrivers, []);
  const requests = buildReplayStreamRequests(
    11373,
    study.selected.map((lap, i) => ({ slot: i + 1, driverNumber: 63, lap }))
  );
  assert.deepEqual(
    requests.map((r) => r.slot),
    [1, 2]
  );
  assert.notEqual(requests[0].range.start, requests[1].range.start);
  assert.notEqual(requests[0].range.end, requests[1].range.end);
});

test("same-driver loader retrieves both real lap streams independently without a cache collision", async () => {
  const originalFetch = globalThis.fetch;
  const urls = [];
  globalThis.fetch = async (url) => {
    const parsed = new URL(url);
    urls.push(parsed.toString());
    assert.equal(parsed.searchParams.get("driver_number"), "63");
    const lap = study.selected.find((candidate) => candidate.date_start === parsed.searchParams.get("date>"));
    assert.ok(lap, "Unknown lap timestamp");
    const kind = parsed.pathname.endsWith("/location") ? "location" : "telemetry";
    return new Response(JSON.stringify(await readRaw(`lap-${lap.lap_number}-${kind}`)), { status: 200 });
  };
  try {
    const streams = await loadReplayStreams({
      sessionKey: 11373,
      drivers: study.selected.map((lap, i) => ({ slot: i + 1, driverNumber: 63, lap })),
    });
    assert.equal(new Set(urls).size, 4);
    assert.deepEqual(
      streams.map((s) => s.location.length),
      [397, 389]
    );
    assert.deepEqual(
      streams.map((s) => s.telemetry.length),
      [370, 388]
    );
    assert.notEqual(streams[0].location[0].date, streams[1].location[0].date);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("shared-distance gain sign, finish, official sectors and non-overlapping segments reconcile", () => {
  assert.ok(Math.abs(study.totalGain - 1.187) < 1e-9);
  assert.ok(Math.abs(study.grid.at(-1).gain - study.totalGain) < 1e-9);
  assert.equal(study.grid[0].gain, 0);
  assert.ok(Math.abs(study.officialSectorGains.reduce((a, b) => a + b) - study.totalGain) < 1e-9);
  assert.ok(Math.abs(study.segments.reduce((sum, s) => sum + s.gain, 0) - study.totalGain) < 1e-9);
  assert.ok(study.traceChecks.every((check) => Math.abs(check.computed - check.expected) < 0.1));
  assert.ok(study.exits.every((exit, i) => Math.abs(exit.gain - study.referenceSensitivity[i].gain) < 0.001));
  assert.ok(study.corners.every((corner, i) => !i || corner.distance > study.corners[i - 1].distance));
  assert.equal(study.markerYear, 2022, "Do not silently describe historical corner markers as 2026 surveying");
});

test("missing channels, dates, reversed timestamps and missing coverage are rejected; missing DRS stays missing", async () => {
  const lap = study.selected[0],
    location = await readRaw("lap-21-location"),
    telemetry = await readRaw("lap-21-telemetry");
  assert.equal(validateSamples(telemetry, lap, "telemetry").drsPresent, 0);
  assert.ok(telemetry.every((sample) => sample.drs === null));
  assert.throws(() => validateSamples(location.slice(20), lap, "location"), /incomplete edges/);
  assert.throws(() => validateSamples([...location].reverse(), lap, "location"), /non-monotonic/);
  assert.throws(
    () => validateSamples([{ ...location[0], date: null }, ...location.slice(1)], lap, "location"),
    /timestamps/
  );
  assert.throws(
    () => validateSamples([{ ...location[0], x: null }, ...location.slice(1)], lap, "location"),
    /missing x/
  );
  assert.throws(
    () => validateSamples([{ ...telemetry[0], speed: null }, ...telemetry.slice(1)], lap, "telemetry"),
    /missing speed/
  );
  assert.throws(() => incrementalGain({ reliable: false, reason: "missing data" }, 6000, 0, 100), /missing data/);
  const drivers = await Promise.all(
    study.selected.map(async (selected, i) => {
      const path = await readRaw(`lap-${selected.lap_number}-location`);
      return {
        slot: i + 1,
        label: "RUS",
        path: i ? path.slice(30) : path,
        pathTimes: buildTimeIndex(i ? path.slice(30) : path, selected.date_start, selected.lap_duration),
        lapDuration: selected.lap_duration,
        sectors: [1, 2, 3].map((k) => selected[`duration_sector_${k}`]),
      };
    })
  );
  assert.equal(buildGapTrace({ drivers }).reliable, false);
});
