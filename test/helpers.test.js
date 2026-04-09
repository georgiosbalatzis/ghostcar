import test from "node:test";
import assert from "node:assert/strict";
import { decodeURL, encodeURL, fmt, normalizeText } from "../src/helpers.js";

test("encodeURL and decodeURL preserve the extended comparison state", () => {
  const url = encodeURL({
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
  }, { baseURL: "https://example.com/ghostcar/" });

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
