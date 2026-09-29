import { fractionAtTime } from "../domain/timing.js";
import { telAt } from "../helpers.js";

// What the track's centre band shows, as per-point colours. Pure: a centreline (see trackGeometry.js), the data,
// and colours as [r, g, b] in the renderer's linear space. Each result is a Float32Array of RGBA, two vertices
// (left and right of the band) per centreline point; alpha 0 leaves the road as it is.

const EMPTY_BAND = (c) => new Float32Array(c.count * 8);

function paint(band, i, [r, g, b], alpha) {
  band.set([r, g, b, alpha, r, g, b, alpha], i * 8);
}

/** Arc length (metres from the first sample) of the point at `fraction` of the reference driver's samples. */
export function arcAtFraction(c, fraction) {
  const last = c.rawArcs.length - 1;
  const index = Math.min(1, Math.max(0, fraction)) * last;
  const i = Math.min(Math.floor(index), last - 1);
  return c.rawArcs[i] + (index - i) * (c.rawArcs[i + 1] - c.rawArcs[i]);
}

/**
 * Who is faster where. `segments` are the gap trace's { slot, from, to }: fractions of the reference driver's
 * samples, which is what the centreline was built from, so they map straight to arc length.
 */
export function dominanceBand(c, segments, colourOf, alpha = 0.85) {
  const band = EMPTY_BAND(c);
  for (const { slot, from, to } of segments) {
    const colour = colourOf(slot);
    if (!colour) continue;
    const first = Math.ceil(arcAtFraction(c, from) / c.spacing);
    const last = Math.floor(arcAtFraction(c, to) / c.spacing);
    for (let i = first; i <= Math.min(last, c.count - 1); i++) paint(band, i, colour, alpha);
  }
  return band;
}

// The 5th and 95th percentile of the lap's speed: a spike or a pit-lane crawl does not stretch the scale.
export function speedRange(tel) {
  const speeds = (tel || []).map((sample) => sample.speed || 0).sort((a, b) => a - b);
  if (speeds.length < 10) return null;
  const at = (share) => speeds[Math.min(speeds.length - 1, Math.floor(share * (speeds.length - 1)))];
  const lo = at(0.05);
  const hi = at(0.95);
  return hi > lo ? { lo, hi } : null;
}

/** A colour along a ramp of [r, g, b] stops, t from 0 to 1. */
export function sampleRamp(stops, t) {
  const at = Math.min(1, Math.max(0, t)) * (stops.length - 1);
  const i = Math.min(Math.floor(at), stops.length - 2);
  const u = at - i;
  return stops[i].map((value, k) => value + (stops[i + 1][k] - value) * u);
}

/** The reference lap's speed along the road: each point reads the telemetry at its own time. */
export function speedBand(c, tel, telTimes, ramp, alpha = 0.85) {
  const range = speedRange(tel);
  if (!range) return null;
  const band = EMPTY_BAND(c);
  for (let i = 0; i < c.count; i++) {
    const { speed } = telAt(tel, fractionAtTime(telTimes, c.t[i]));
    paint(band, i, sampleRamp(ramp, (speed - range.lo) / (range.hi - range.lo)), alpha);
  }
  return band;
}

/** Where the reference driver has the brake on, by time; the road stays plain elsewhere. */
export function brakeBand(c, tel, telTimes, colour, alpha = 0.7) {
  if (!tel?.length) return null;
  const band = EMPTY_BAND(c);
  for (let i = 0; i < c.count; i++) {
    if (telAt(tel, fractionAtTime(telTimes, c.t[i])).brake > 0) paint(band, i, colour, alpha);
  }
  return band;
}
