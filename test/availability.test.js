import test from "node:test";
import assert from "node:assert/strict";
import { formatOpenF1YearOptionLabel, getOpenF1AvailabilityMessages } from "../src/domain/availability.js";

test("formatOpenF1YearOptionLabel marks partial OpenF1 seasons", () => {
  assert.equal(formatOpenF1YearOptionLabel(2026), "2026 (πρώιμα / μερικά)");
  assert.equal(formatOpenF1YearOptionLabel(2025), "2025");
});

test("getOpenF1AvailabilityMessages reports partial year and selected session caveats", () => {
  const messages = getOpenF1AvailabilityMessages({ year: 2026, sessionName: "Practice 2" });

  assert.equal(messages.length, 2);
  assert.equal(messages[0].id, "year-2026");
  assert.match(messages[0].text, /2026/);
  assert.equal(messages[1].id, "session-Practice 2");
  assert.match(messages[1].text, /δοκιμαστικά σκέλη/);
});

test("getOpenF1AvailabilityMessages stays quiet for complete years and qualifying", () => {
  assert.deepEqual(getOpenF1AvailabilityMessages({ year: 2025, sessionName: "Qualifying" }), []);
});

test("getOpenF1AvailabilityMessages reports sprint session caveats without generic race noise", () => {
  assert.match(getOpenF1AvailabilityMessages({ year: 2025, sessionName: "Sprint" })[0].text, /sprint σκέλη/);
  assert.deepEqual(getOpenF1AvailabilityMessages({ year: 2025, sessionName: "Race" }), []);
});
