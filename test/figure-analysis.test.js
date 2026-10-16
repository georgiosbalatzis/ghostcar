import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import {
  buildFigureAnalysis,
  channelValue,
  figureRange,
  gainAt,
  lapLabel,
  normalizeFigureOptions,
  projectLandmarks,
  turnBoundaries,
  boundaryAtDistance,
} from "../src/domain/figureAnalysis.js";
import { buildTimeIndex } from "../src/domain/timing.js";
import { decodeURL, encodeURL } from "../src/helpers.js";

const raw = async (name) =>
  JSON.parse(await readFile(new URL(`../docs/analysis/russell-baku-2026/raw/${name}.json`, import.meta.url)));
const laps = await raw("laps-russell");
const drivers = await Promise.all(
  [21, 25].map(async (number, index) => {
    const lap = laps.find((l) => l.lap_number === number),
      path = await raw(`lap-${number}-location`),
      tel = await raw(`lap-${number}-telemetry`);
    return {
      slot: index + 1,
      driverNumber: 63,
      label: "RUS",
      lapNumber: number,
      lapDuration: lap.lap_duration,
      sectors: [1, 2, 3].map((s) => lap[`duration_sector_${s}`]),
      path,
      tel,
      pathTimes: buildTimeIndex(path, lap.date_start, lap.lap_duration),
      telTimes: buildTimeIndex(tel, lap.date_start, lap.lap_duration),
    };
  })
);

test("publication figures preserve same-driver lap identities, gain sign and official finish", () => {
  const analysis = buildFigureAnalysis({ drivers });
  assert.equal(analysis.reliable, true, analysis.reason);
  assert.deepEqual(analysis.drivers.map(lapLabel), ["RUS · L21", "RUS · L25"]);
  assert.ok(Math.abs(analysis.length - 5960.616479759023) < 1e-6);
  assert.equal(gainAt(analysis, 0), 0);
  assert.ok(Math.abs(gainAt(analysis, analysis.length) - 1.187) < 1e-9);
  assert.ok(Math.abs(analysis.sectorGains.reduce((a, b) => a + b) - analysis.totalGain) < 1e-9);
  const chunks = [0, 1000, 2000, 3000, 4000, 5000, analysis.length];
  assert.ok(
    Math.abs(
      chunks.slice(1).reduce((sum, end, i) => sum + gainAt(analysis, end) - gainAt(analysis, chunks[i]), 0) -
        analysis.totalGain
    ) < 1e-9
  );
  // Third/fourth slots do not silently change the published A–B pair.
  assert.equal(buildFigureAnalysis({ drivers: [...drivers, { slot: 3 }] }).reliable, true);
});

test("figures refuse missing timing, coordinates, non-monotonic and sector-inconsistent positions", () => {
  const change = (patch) => ({ drivers: [{ ...drivers[0], ...patch }, drivers[1]] });
  assert.equal(buildFigureAnalysis(change({ sectors: [null, 1, 2] })).reliable, false);
  assert.equal(buildFigureAnalysis(change({ sectors: [30, 40, 33.713] })).reliable, false);
  const path = drivers[0].path;
  assert.equal(buildFigureAnalysis(change({ path: [{ ...path[0], date: null }, ...path.slice(1)] })).reliable, false);
  assert.equal(buildFigureAnalysis(change({ path: [{ ...path[0], x: null }, ...path.slice(1)] })).reliable, false);
  assert.equal(buildFigureAnalysis(change({ path: [...path].reverse() })).reliable, false);
});

test("missing DRS is not converted to off; missing measurements remain gaps", () => {
  assert.equal(channelValue({ drs: null }, "drs"), null);
  assert.equal(channelValue({}, "speed"), null);
  assert.equal(channelValue({ brake: 100 }, "brake"), 1);
  const analysis = buildFigureAnalysis({ drivers });
  assert.ok(analysis.telemetry.flat().every((s) => channelValue(s, "drs") === null));
  assert.ok(
    analysis.telemetry.every((samples) => samples.every((s, i) => !i || s.distance >= samples[i - 1].distance))
  );
});

test("embeddable figure URLs round-trip view, metre range and fixed mode; old embeds remain replay", () => {
  const encoded = encodeURL({
    year: 2026,
    mk: 1295,
    sk: 11373,
    d1: 63,
    d2: 63,
    l1: 21,
    l2: 25,
    embed: 1,
    figure: "telemetry",
    from: 4115,
    to: 5900,
    fixed: true,
  });
  const decoded = decodeURL(encoded);
  assert.deepEqual(normalizeFigureOptions(decoded), { figure: "telemetry", from: 4115, to: 5900, fixed: true });
  assert.equal(decoded.d1, decoded.d2);
  assert.equal(decodeURL("https://example.com/?embed=1").figure, null);
  assert.equal(decodeURL("https://example.com/?fig=unknown&from=NaN&to=-5").figure, null);
  assert.deepEqual(normalizeFigureOptions({ from: "Infinity", to: -1, fixed: "yes" }), {
    figure: null,
    from: null,
    to: null,
    fixed: false,
  });
  assert.deepEqual(figureRange({ from: 4000, to: 5000 }, 6000), [4000, 5000]);
  assert.deepEqual(figureRange({ from: 5000, to: 4000 }, 6000), [0, 6000]);
});

test("historical Baku landmarks are projected onto the current common reference", async () => {
  const analysis = buildFigureAnalysis({ drivers }),
    markers = await raw("circuit-markers");
  const corners = projectLandmarks(
    analysis,
    markers.corners.map((c) => ({ number: c.number, ...c.trackPosition }))
  );
  assert.equal(corners.length, 20);
  assert.ok(corners.every((c, i) => !i || c.distance > corners[i - 1].distance));
  assert.ok(Math.abs(corners.find((c) => c.number === 16).distance + 50 - 4114.6616) < 1);
  assert.ok(Math.abs(corners.find((c) => c.number === 20).distance + 50 - 5010.3619) < 1);
  const boundaries = turnBoundaries(corners, analysis.length);
  assert.equal(boundaries.length, 22);
  assert.equal(boundaries[0].id, "start");
  assert.equal(boundaries.at(-1).id, "finish");
  assert.ok(boundaries.every((b, i) => !i || b.distance > boundaries[i - 1].distance));
  assert.match(boundaries.find((b) => b.id === "turn-16").label, /έξοδος\*/);
  assert.equal(boundaryAtDistance(4114.7, boundaries).id, "turn-16");
  assert.equal(boundaryAtDistance(4115, boundaries).id, "custom", "Do not silently move old distance bounds");
  assert.equal(boundaryAtDistance(analysis.length, boundaries).id, "finish");
  assert.equal(turnBoundaries([], analysis.length).length, 2, "No invented turns for unmapped circuits");
});
