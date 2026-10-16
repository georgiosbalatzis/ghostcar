// Offline, article-specific analysis. Raw OpenF1 responses remain unchanged.
import assert from "node:assert/strict";
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { buildGapTrace, distanceAtTimeOnGrid, timeAtDistanceOnGrid } from "../src/domain/gap.js";
import { buildTimeIndex } from "../src/domain/timing.js";
import { buildReplayStreamRequests } from "../src/services/openf1.js";

export const studyDirectory = fileURLToPath(new URL("../docs/analysis/russell-baku-2026/", import.meta.url));
export const readRaw = async (name) => JSON.parse(await readFile(`${studyDirectory}/raw/${name}.json`, "utf8"));

export function validateSamples(samples, lap, kind) {
  assert.ok(samples.length >= 20, `${kind}: insufficient samples`);
  const times = samples.map((sample) => (Date.parse(sample.date) - Date.parse(lap.date_start)) / 1000);
  assert.ok(times.every(Number.isFinite), `${kind}: missing timestamps`);
  const gaps = times.slice(1).map((time, i) => time - times[i]);
  assert.ok(
    gaps.every((gap) => gap > 0),
    `${kind}: non-monotonic timestamps`
  );
  assert.ok(times[0] >= 0 && times.at(-1) <= lap.lap_duration, `${kind}: outside lap window`);
  assert.ok(times[0] <= 1 && lap.lap_duration - times.at(-1) <= 1, `${kind}: incomplete edges`);
  assert.ok(Math.max(...gaps) <= 2, `${kind}: sampling hole >2s`);
  assert.ok(samples.every((sample) => sample.driver_number === 63 && sample.session_key === 11373));
  const fields = kind === "location" ? ["x", "y", "z"] : ["speed", "throttle", "brake", "n_gear"];
  for (const field of fields) {
    assert.ok(
      samples.every((sample) => Number.isFinite(sample[field])),
      `${kind}: missing ${field}`
    );
  }
  return {
    count: samples.length,
    firstSeconds: times[0],
    lastSeconds: times.at(-1),
    finishMissingSeconds: lap.lap_duration - times.at(-1),
    maxGapSeconds: Math.max(...gaps),
    medianGapSeconds: [...gaps].sort((a, b) => a - b)[Math.floor(gaps.length / 2)],
    drsPresent: kind === "telemetry" ? samples.filter((sample) => Number.isFinite(sample.drs)).length : null,
  };
}

export function referenceGeometry(driver) {
  const xy = driver.path.map((p) => [p.x / 10, p.y / 10]);
  const cumulative = [0];
  for (let i = 1; i < xy.length; i++) {
    cumulative.push(cumulative.at(-1) + Math.hypot(xy[i][0] - xy[i - 1][0], xy[i][1] - xy[i - 1][1]));
  }
  const t = driver.pathTimes;
  const start = -t[0] * (cumulative[1] / (t[1] - t[0]));
  const end =
    cumulative.at(-1) +
    (driver.lapDuration - t.at(-1)) * ((cumulative.at(-1) - cumulative.at(-2)) / (t.at(-1) - t.at(-2)));
  return { xy, sampleDistances: cumulative.map((s) => s - start), length: end - start, start };
}

export function projectMarker(geometry, point) {
  let best = { residual: Infinity };
  for (let i = 0; i < geometry.xy.length - 1; i++) {
    const a = geometry.xy[i],
      b = geometry.xy[i + 1];
    const dx = b[0] - a[0],
      dy = b[1] - a[1];
    const u = Math.max(0, Math.min(1, ((point[0] - a[0]) * dx + (point[1] - a[1]) * dy) / (dx * dx + dy * dy)));
    const xy = [a[0] + u * dx, a[1] + u * dy];
    const residual = Math.hypot(point[0] - xy[0], point[1] - xy[1]);
    if (residual < best.residual)
      best = {
        distance: geometry.sampleDistances[i] + u * Math.hypot(dx, dy),
        residual,
        xy,
      };
  }
  return best;
}

export function incrementalGain(trace, length, start, end) {
  assert.ok(trace.reliable, trace.reason);
  const gain = (s) => timeAtDistanceOnGrid(trace, 1, s / length) - timeAtDistanceOnGrid(trace, 2, s / length);
  return gain(end) - gain(start);
}

export async function analyzeStudy() {
  const [laps, control, markers] = await Promise.all([
    readRaw("laps-russell"),
    readRaw("race-control"),
    readRaw("circuit-markers"),
  ]);
  const selected = [21, 25].map((number) => laps.find((lap) => lap.lap_number === number));
  assert.deepEqual(
    selected.map((lap) => lap.lap_duration),
    [103.713, 102.526],
    "Lap identity changed: review source"
  );
  const drivers = [],
    quality = [];
  for (const [i, lap] of selected.entries()) {
    const [path, tel] = await Promise.all([
      readRaw(`lap-${lap.lap_number}-location`),
      readRaw(`lap-${lap.lap_number}-telemetry`),
    ]);
    const sectors = [1, 2, 3].map((k) => lap[`duration_sector_${k}`]);
    assert.ok(
      sectors.every((s) => Number.isFinite(s) && s > 0),
      "Missing official sectors"
    );
    assert.ok(Math.abs(sectors.reduce((a, b) => a + b) - lap.lap_duration) < 0.001, "Sector sum disagrees");
    quality.push({
      lap: lap.lap_number,
      location: validateSamples(path, lap, "location"),
      telemetry: validateSamples(tel, lap, "telemetry"),
    });
    drivers.push({
      slot: i + 1,
      driverNumber: 63,
      label: `RUS L${lap.lap_number}`,
      lap,
      lapDuration: lap.lap_duration,
      sectors,
      path,
      tel,
      pathTimes: buildTimeIndex(path, lap.date_start, lap.lap_duration),
      telTimes: buildTimeIndex(tel, lap.date_start, lap.lap_duration),
    });
  }
  const trace = buildGapTrace({ drivers }, { points: 2001 });
  assert.equal(trace.reliable, true, trace.reason);
  assert.equal(trace.checks.length, 2);
  assert.ok(trace.checks.every((c) => Math.abs(c.computed - c.expected) <= 0.1));
  const geometry = referenceGeometry(drivers[0]);
  const corners = markers.corners.map((corner) => ({
    number: corner.number,
    ...projectMarker(geometry, [corner.trackPosition.x / 10, corner.trackPosition.y / 10]),
  }));
  assert.ok(
    corners.every((c) => c.residual < 20),
    "Historical corner map does not match current geometry"
  );
  assert.ok(
    corners.every((c, i) => !i || c.distance > corners[i - 1].distance),
    "Corner order disagrees"
  );
  // The marker service returns a 2022 map even for /2026. These are declared exit proxies,
  // not surveyed 2026 corner exits: marker +50m, with a +0..100m sensitivity interval.
  const exits = [16, 20].map((n) => ({
    corner: n,
    marker: corners.find((c) => c.number === n).distance,
    distance: corners.find((c) => c.number === n).distance + 50,
    approximate: true,
  }));
  const length = geometry.length;
  const gain = (s) => incrementalGain(trace, length, 0, s);
  const totalGain = drivers[0].lapDuration - drivers[1].lapDuration;
  assert.ok(Math.abs(gain(length) - totalGain) < 1e-9);
  const sectorDistances = [drivers[1].sectors[0], drivers[1].sectors[0] + drivers[1].sectors[1]].map(
    (t) => distanceAtTimeOnGrid(trace, 2, t) * length
  );
  const bounds = [
    0,
    ...[2, 4, 6, 7, 12, 14, 15].map((n) => corners.find((c) => c.number === n).distance + 50),
    exits[0].distance,
    exits[1].distance,
    length,
  ];
  const names = [
    "Start–T2 exit*",
    "T2 exit*–T4 exit*",
    "T4 exit*–T6 exit*",
    "T6 exit*–T7 exit*",
    "T7 exit*–T12 exit* (castle)",
    "T12 exit*–T14 exit*",
    "T14 exit*–T15 exit*",
    "T15 exit*–T16 exit*",
    "T16 exit*–T20 exit*",
    "T20 exit*–finish",
  ];
  const segments = names
    .map((name, i) => ({
      name,
      start: bounds[i],
      end: bounds[i + 1],
      gain: incrementalGain(trace, length, bounds[i], bounds[i + 1]),
      cumulative: gain(bounds[i + 1]),
    }))
    .map((segment) => ({ ...segment, percent: (100 * segment.gain) / totalGain }));
  assert.ok(Math.abs(segments.reduce((sum, segment) => sum + segment.gain, 0) - totalGain) < 1e-9);
  for (const exit of exits) {
    exit.gain = totalGain - gain(exit.distance);
    exit.percent = (exit.gain / totalGain) * 100;
    const sensitivity = Array.from({ length: 101 }, (_, offset) => totalGain - gain(exit.marker + offset));
    exit.sensitivity = [Math.min(...sensitivity), Math.max(...sensitivity)];
  }
  // Use unsmoothed grid times for arithmetic. gap.js's smoothed display series is not used.
  const grid = trace.d.map((d, i) => ({
    distance: d * length,
    first: trace.times[1][i],
    third: trace.times[2][i],
    gain: trace.times[1][i] - trace.times[2][i],
  }));
  const telemetry = drivers.map((driver) =>
    driver.tel.map((sample, i) => ({
      ...sample,
      elapsed: driver.telTimes[i],
      distance: distanceAtTimeOnGrid(trace, driver.slot, driver.telTimes[i]) * length,
    }))
  );
  const q3start = control.find((r) => r.qualifying_phase === 3 && r.message === "SESSION STARTED");
  const q3laps = laps.filter((lap) => Date.parse(lap.date_start) >= Date.parse(q3start.date));
  const deletions = control.filter((r) => /DELETED/.test(r.message) && /CAR 63\b/.test(r.message));
  assert.equal(deletions.length, 0, "Russell lap deletions require review");
  const requests = buildReplayStreamRequests(
    11373,
    drivers.map((d) => ({ slot: d.slot, driverNumber: 63, lap: d.lap }))
  );
  assert.equal(requests.length, 2);
  assert.notEqual(requests[0].range.start, requests[1].range.start);
  const swappedDrivers = [
    { ...drivers[1], slot: 1 },
    { ...drivers[0], slot: 2 },
  ];
  const swapped = buildGapTrace({ drivers: swappedDrivers }, { points: 2001 });
  assert.equal(swapped.reliable, true, swapped.reason);
  const swappedGeometry = referenceGeometry(swappedDrivers[0]);
  const referenceSensitivity = exits.map((exit) => {
    const corner = markers.corners.find((c) => c.number === exit.corner);
    const s = projectMarker(swappedGeometry, [corner.trackPosition.x / 10, corner.trackPosition.y / 10]).distance + 50;
    return { corner: exit.corner, gain: totalGain + incrementalGain(swapped, swappedGeometry.length, 0, s) };
  });
  return {
    sessionKey: 11373,
    driverNumber: 63,
    selected,
    q3start,
    q3laps,
    totalGain,
    quality,
    officialSectorGains: drivers[0].sectors.map((s, i) => s - drivers[1].sectors[i]),
    sectorDistances,
    geometry,
    corners,
    markerYear: markers.year,
    exits,
    segments,
    grid,
    telemetry,
    traceChecks: trace.checks,
    clockOffsets: trace.offsets,
    referenceSensitivity,
  };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = await analyzeStudy();
  await writeFile(`${studyDirectory}/analysis.json`, JSON.stringify(result, null, 2) + "\n");
  await writeFile(
    `${studyDirectory}/segments.csv`,
    "segment,start_m,end_m,gain_s,percent,cumulative_s\n" +
      result.segments.map((s) => [s.name, s.start, s.end, s.gain, s.percent, s.cumulative].join(",")).join("\n") +
      "\n"
  );
  console.log(
    JSON.stringify(
      {
        totalGain: result.totalGain,
        length: result.geometry.length,
        sectors: result.officialSectorGains,
        exits: result.exits,
        segments: result.segments,
        corners: result.corners.map(({ number, distance, residual }) => ({ number, distance, residual })),
        referenceSensitivity: result.referenceSensitivity,
        quality: result.quality,
      },
      null,
      2
    )
  );
}
