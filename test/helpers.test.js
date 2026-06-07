import test from "node:test";
import assert from "node:assert/strict";
import { decodeURL, encodeURL, fmt, normalizeText } from "../src/helpers.js";
import { prepareLapSelectModel } from "../src/domain/laps.js";

test("encodeURL and decodeURL preserve the extended comparison state", () => {
  const url = encodeURL(
    {
      year: 2025,
      mk: 1234,
      sk: 5678,
      d1: 81,
      d2: 4,
      d3: 16,
      l1: 14,
      l2: 15,
      l3: 11,
      numDrivers: 3,
      trackView: "2d",
      cam: "cinematic",
      vizMode: "heatmap",
      theme: "light",
      speed: 2,
      loop: true,
      tab: "stats",
    },
    { baseURL: "https://example.com/ghostcar/" }
  );

  const decoded = decodeURL(url);

  assert.equal(decoded.version, "2");
  assert.equal(decoded.year, "2025");
  assert.equal(decoded.mk, "1234");
  assert.equal(decoded.sk, "5678");
  assert.equal(decoded.d1, "81");
  assert.equal(decoded.d2, "4");
  assert.equal(decoded.d3, "16");
  assert.equal(decoded.l1, "14");
  assert.equal(decoded.l2, "15");
  assert.equal(decoded.l3, "11");
  assert.equal(decoded.numDrivers, "3");
  assert.equal(decoded.trackView, "2d");
  assert.equal(decoded.cam, "cinematic");
  assert.equal(decoded.vizMode, "heatmap");
  assert.equal(decoded.theme, "light");
  assert.equal(decoded.speed, "2");
  assert.equal(decoded.loop, "1");
  assert.equal(decoded.tab, "stats");
});

test("encodeURL and decodeURL preserve full four-driver embed state", () => {
  const url = encodeURL(
    {
      year: 2025,
      mk: 4321,
      sk: 8765,
      d1: 1,
      d2: 4,
      d3: 16,
      d4: 81,
      l1: 10,
      l2: 11,
      l3: 12,
      l4: 13,
      numDrivers: 4,
      trackView: "3d",
      cam: "follow1",
      vizMode: "brake",
      theme: "dark",
      speed: 0.5,
      loop: true,
      tab: "season",
      embed: 1,
    },
    { baseURL: "https://example.com/ghostcar/" }
  );

  const decoded = decodeURL(url);

  assert.equal(decoded.version, "2");
  assert.equal(decoded.year, "2025");
  assert.equal(decoded.mk, "4321");
  assert.equal(decoded.sk, "8765");
  assert.equal(decoded.d1, "1");
  assert.equal(decoded.d2, "4");
  assert.equal(decoded.d3, "16");
  assert.equal(decoded.d4, "81");
  assert.equal(decoded.l1, "10");
  assert.equal(decoded.l2, "11");
  assert.equal(decoded.l3, "12");
  assert.equal(decoded.l4, "13");
  assert.equal(decoded.numDrivers, "4");
  assert.equal(decoded.trackView, null);
  assert.equal(decoded.cam, "follow1");
  assert.equal(decoded.vizMode, "brake");
  assert.equal(decoded.theme, "dark");
  assert.equal(decoded.speed, "0.5");
  assert.equal(decoded.loop, "1");
  assert.equal(decoded.tab, "season");
  assert.equal(decoded.embed, "1");
});

test("decodeURL remains backward compatible with older shared links", () => {
  const decoded = decodeURL("https://example.com/ghostcar/?y=2024&mk=11&sk=22&d1=16&d2=1&l1=3&l2=4");

  assert.equal(decoded.version, "1");
  assert.equal(decoded.year, "2024");
  assert.equal(decoded.mk, "11");
  assert.equal(decoded.sk, "22");
  assert.equal(decoded.d1, "16");
  assert.equal(decoded.d2, "1");
  assert.equal(decoded.l1, "3");
  assert.equal(decoded.l2, "4");
});

test("normalizeText strips accents and collapses spacing", () => {
  assert.equal(normalizeText("  São   Paulo Grand   Prix "), "sao paulo grand prix");
});

test("fmt renders lap durations in minutes and milliseconds", () => {
  assert.equal(fmt(91.234), "1:31.234");
  assert.equal(fmt(0), "0:00.000");
});

test("prepareLapSelectModel filters invalid laps, sorts by duration, and marks fastest", () => {
  const model = prepareLapSelectModel([
    { lap_number: 1, lap_duration: 0 },
    { lap_number: 2, lap_duration: 91.5 },
    { lap_number: 3, lap_duration: 90.9 },
    { lap_number: 4, lap_duration: 130.2 },
    { lap_number: 5, lap_duration: 10 },
  ]);

  assert.deepEqual(
    model.options.map((lap) => lap.lap_number),
    [3, 2, 4]
  );
  assert.equal(model.fastestLapNumber, 3);
});

test("prepareLapSelectModel handles missing lap lists", () => {
  assert.deepEqual(prepareLapSelectModel(null), {
    options: [],
    fastestLapNumber: null,
  });
});
