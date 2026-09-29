// Time gap at the same point on track, and who is faster where.
//
// Distance: every driver's location samples are projected onto one reference line (driver A's path), so a
// given distance is the same place for everyone even when their lines differ. Each driver is anchored at
// the start line at t = 0 and at the finish at t = lap time: OpenF1 samples start and end a fraction of a
// second inside the lap, and the ends are extrapolated from the reference's speed there.
//
// Trust: OpenF1 location is ~4 Hz, and its clock is not always aligned with the lap timing (a lap's
// `date_start` can be a tenth or two off). The official sector times are the ground truth: where the fastest
// driver crosses a sector line, the gap must match the sector-time difference. Each driver's constant clock
// offset (relative to the fastest) is estimated from those crossings and removed; the trace is only offered
// when the data is complete, the offset is small, and what remains agrees with every sector line.
import { fractionAtTime } from "./timing.js";

const MIN_SAMPLES = 20;
const MAX_HOLE_S = 2; // longest allowed stretch without a location sample
const MAX_EDGE_S = 1; // first and last samples must be this close to the lap start and end
const SECTOR_TOLERANCE_S = 0.1;
const MAX_OFFSET_S = 0.5; // a larger clock offset means the position data belongs to something else
const SEARCH_BACK = 4;
const DOMINANCE_MARGIN_S = 0.005; // a stretch belongs to a driver only when they are clearly faster there
const SEARCH_AHEAD = 80;

function cumulativeDistance(points) {
  const out = [0];
  for (let i = 1; i < points.length; i++) {
    out.push(out[i - 1] + Math.hypot(points[i].x - points[i - 1].x, points[i].y - points[i - 1].y));
  }
  return out;
}

// Distance along the reference polyline of the point nearest to `p`, searching forward from segment `from`
// (laps only move forward, and a forward window keeps the finish from snapping to the start).
function project(ref, cum, p, from) {
  let best = { s: cum[from], j: from, d2: Infinity };
  const last = Math.min(ref.length - 2, from + SEARCH_AHEAD);
  for (let j = Math.max(0, from - SEARCH_BACK); j <= last; j++) {
    const a = ref[j];
    const b = ref[j + 1];
    const vx = b.x - a.x;
    const vy = b.y - a.y;
    const len2 = vx * vx + vy * vy;
    const u = len2 ? Math.max(0, Math.min(1, ((p.x - a.x) * vx + (p.y - a.y) * vy) / len2)) : 0;
    const dx = a.x + u * vx - p.x;
    const dy = a.y + u * vy - p.y;
    const d2 = dx * dx + dy * dy;
    if (d2 < best.d2) best = { s: cum[j] + u * (cum[j + 1] - cum[j]), j, d2 };
  }
  return best;
}

function interpolate(xs, ys, x) {
  const n = xs.length;
  if (x <= xs[0]) return ys[0];
  if (x >= xs[n - 1]) return ys[n - 1];
  let lo = 0;
  let hi = n - 1;
  while (hi - lo > 1) {
    const mid = (lo + hi) >> 1;
    if (xs[mid] <= x) lo = mid;
    else hi = mid;
  }
  const span = xs[hi] - xs[lo];
  return ys[lo] + (span > 0 ? ((x - xs[lo]) / span) * (ys[hi] - ys[lo]) : 0);
}

/** Why a driver's samples cannot support a gap trace, or null when they can. */
function sampleIssue(driver) {
  const times = driver.pathTimes || [];
  if (!(driver.lapDuration > 0)) return "Λείπει ο χρόνος γύρου.";
  if ((driver.path?.length || 0) < MIN_SAMPLES || times.length < MIN_SAMPLES) return "Λίγα δείγματα θέσης.";
  if (times[0] > MAX_EDGE_S || driver.lapDuration - times.at(-1) > MAX_EDGE_S)
    return "Τα δείγματα δεν καλύπτουν όλο τον γύρο.";
  for (let i = 1; i < times.length; i++) if (times[i] - times[i - 1] > MAX_HOLE_S) return "Κενό στα δείγματα θέσης.";
  return null;
}

/**
 * Distance (0 at the start line, 1 at the finish) against time for one driver, on the reference line.
 * `ref` is { points, cum, start, finish } from the reference driver.
 */
function buildDistanceProfile(driver, ref) {
  const { path, pathTimes, lapDuration } = driver;
  const length = ref.finish - ref.start;
  const d = [0];
  const t = [0];
  let segment = 0;
  let previous = ref.start;
  for (let i = 0; i < path.length; i++) {
    if (!(pathTimes[i] > 0 && pathTimes[i] < lapDuration)) continue;
    let s;
    if (path === ref.points) s = ref.cum[i];
    else {
      const hit = project(ref.points, ref.cum, path[i], segment);
      segment = hit.j;
      s = hit.s;
    }
    previous = Math.min(ref.finish, Math.max(previous, s)); // forward only
    d.push((previous - ref.start) / length);
    t.push(pathTimes[i]);
  }
  d.push(1);
  t.push(lapDuration);
  return { d, t };
}

const timeAtDistance = (profile, distance) => interpolate(profile.d, profile.t, distance);

// A driver's samples `offset` seconds earlier; the start (0) and finish (lap time) anchors stay put.
function shiftProfile({ d, t }, offset) {
  const last = t.length - 1;
  const out = { d: [d[0]], t: [t[0]] };
  for (let i = 1; i < last; i++) {
    const time = t[i] - offset;
    if (time > out.t.at(-1) && time < t[last]) {
      out.d.push(d[i]);
      out.t.push(time);
    }
  }
  out.d.push(d[last]);
  out.t.push(t[last]);
  return out;
}
const distanceAtTime = (profile, time) => interpolate(profile.t, profile.d, time);

// Centred moving average; the ends stay exact (both drivers start together; the finish is the lap delta).
// Radius 5 of 400 points (~160 m) smooths ~4 Hz position noise without flattening a braking zone.
function smooth(values, radius = 5) {
  return values.map((value, i) => {
    if (i === 0 || i === values.length - 1) return value;
    const from = Math.max(0, i - radius);
    const to = Math.min(values.length - 1, i + radius);
    let sum = 0;
    for (let k = from; k <= to; k++) sum += values[k];
    return sum / (to - from + 1);
  });
}

/**
 * Gap trace of a replay model: for each driver, time at each point of a distance grid, and the gap to the
 * fastest driver. `reliable` is false (with a reason) when the data cannot support it; callers then hide
 * the gap chart and the dominance colours.
 */
export function buildGapTrace(model, { points = 400 } = {}) {
  const drivers = model?.drivers || [];
  if (drivers.length < 2) return null;
  const unreliable = (reason, extra = {}) => ({ reliable: false, reason, ...extra });

  for (const driver of drivers) {
    const issue = sampleIssue(driver);
    if (issue) return unreliable(`${driver.label}: ${issue}`);
  }

  // Reference line: driver A, whose path is also the replay's track geometry.
  const [first] = drivers;
  const refPoints = first.path;
  const refTimes = first.pathTimes;
  const cum = cumulativeDistance(refPoints);
  const n = refPoints.length;
  const speedStart = (cum[1] - cum[0]) / (refTimes[1] - refTimes[0] || 1);
  const speedEnd = (cum[n - 1] - cum[n - 2]) / (refTimes[n - 1] - refTimes[n - 2] || 1);
  const ref = {
    points: refPoints,
    cum,
    start: -Math.max(0, refTimes[0]) * speedStart,
    finish: cum[n - 1] + Math.max(0, first.lapDuration - refTimes[n - 1]) * speedEnd,
  };

  const profiles = Object.fromEntries(drivers.map((driver) => [driver.slot, buildDistanceProfile(driver, ref)]));
  const fastest = drivers.reduce((best, driver) => (driver.lapDuration < best.lapDuration ? driver : best));
  const others = drivers.filter((driver) => driver !== fastest);

  // Where the fastest driver crossed the sector 1 and 2 lines, and each other driver's gap there.
  const [f1, f2] = fastest.sectors || [];
  const lines = [f1, f1 + f2].map((time) =>
    time > 0 ? { time, d: distanceAtTime(profiles[fastest.slot], time) } : null
  );
  const sectorChecks = (driver) => {
    const [s1, s2] = driver.sectors || [];
    return [s1, s1 + s2]
      .map((official, index) => {
        const line = lines[index];
        if (!line || !(official > 0)) return null;
        const computed = timeAtDistance(profiles[driver.slot], line.d) - line.time;
        return { slot: driver.slot, sector: index + 1, expected: official - line.time, computed };
      })
      .filter(Boolean);
  };

  // Remove each driver's clock offset (mean sector error, needs two lines to leave a check), then re-check.
  const offsets = {};
  for (const driver of others) {
    const raw = sectorChecks(driver);
    const offset =
      raw.length >= 2 ? raw.reduce((sum, check) => sum + check.computed - check.expected, 0) / raw.length : 0;
    offsets[driver.slot] = offset;
    if (offset) profiles[driver.slot] = shiftProfile(profiles[driver.slot], offset);
  }
  const checks = others.flatMap(sectorChecks);
  const tooFar = others.find((driver) => Math.abs(offsets[driver.slot]) > MAX_OFFSET_S);
  const failed = checks.find((check) => Math.abs(check.computed - check.expected) > SECTOR_TOLERANCE_S);

  const grid = Array.from({ length: points }, (_, k) => k / (points - 1));
  const times = Object.fromEntries(
    drivers.map((driver) => [driver.slot, grid.map((d) => timeAtDistance(profiles[driver.slot], d))])
  );
  const series = others.map((driver) => ({
    slot: driver.slot,
    gaps: smooth(grid.map((_, k) => times[driver.slot][k] - times[fastest.slot][k])),
  }));

  // Driver A's samples on the same (offset-corrected) clock as `times`, so segments land where they belong.
  const firstTimes = offsets[first.slot]
    ? first.pathTimes.map((seconds) => seconds - offsets[first.slot])
    : first.pathTimes;
  const trace = {
    reliable: !tooFar && !failed,
    reason: tooFar
      ? `${tooFar.label}: τα δεδομένα θέσης δεν ευθυγραμμίζονται με τον χρονισμό.`
      : failed
        ? `Η θέση δεν συμφωνεί με τους χρόνους τομέων (Τ${failed.sector}).`
        : null,
    reference: fastest.slot,
    d: grid,
    times,
    series,
    checks,
    offsets,
    // Where each grid point falls on the replay's track geometry (driver A's samples), as a fraction.
    trackFractions: grid.map((_, k) => fractionAtTime(firstTimes, times[first.slot][k])),
  };
  return trace;
}

/**
 * The replay model with each driver's position timestamps corrected by the clock offset the trace measured, so
 * the cars on the stage line up with the official timing too. Only for a reliable trace; otherwise unchanged.
 */
export function applyClockOffsets(model, trace) {
  const offsets = trace?.reliable ? trace.offsets : null;
  if (!model || !offsets || !Object.values(offsets).some(Boolean)) return model;
  return {
    ...model,
    drivers: model.drivers.map((driver) =>
      offsets[driver.slot]
        ? { ...driver, pathTimes: driver.pathTimes.map((seconds) => seconds - offsets[driver.slot]) }
        : driver
    ),
  };
}

// On a trace's grid: where (0–1 of the lap distance) a driver is at `time`, and when they pass `distance`.
export const distanceAtTimeOnGrid = (trace, slot, time) => interpolate(trace.times[slot], trace.d, time);
export const timeAtDistanceOnGrid = (trace, slot, distance) => interpolate(trace.d, trace.times[slot], distance);

/**
 * Who is faster where: the lap split into `buckets` stretches, each owned by the driver who covers it in the
 * least time, by at least DOMINANCE_MARGIN_S; closer stretches have no owner and are left out. Neighbours with
 * the same owner are merged. `from`/`to` are fractions of the track geometry.
 */
export function dominanceSegments(trace, buckets = 48) {
  if (!trace?.reliable) return [];
  const slots = Object.keys(trace.times).map(Number);
  const last = trace.d.length - 1;
  const segments = [];
  for (let b = 0; b < buckets; b++) {
    const k0 = Math.round((b / buckets) * last);
    const k1 = Math.round(((b + 1) / buckets) * last);
    const spent = slots
      .map((slot) => ({ slot, time: trace.times[slot][k1] - trace.times[slot][k0] }))
      .sort((a, b) => a.time - b.time);
    const owner = spent[1].time - spent[0].time >= DOMINANCE_MARGIN_S ? spent[0].slot : null;
    const previous = segments.at(-1);
    if (previous && previous.slot === owner && previous.to === trace.trackFractions[k0]) {
      previous.to = trace.trackFractions[k1];
    } else if (owner !== null) {
      segments.push({ slot: owner, from: trace.trackFractions[k0], to: trace.trackFractions[k1] });
    }
  }
  return segments;
}

/** Sector lines on the time axis: the fastest driver's sector 1 and 2 ends, as fractions of the replay. */
export function sectorTicks(model) {
  const drivers = model?.drivers || [];
  const timed = drivers.filter((driver) => driver.lapDuration > 0);
  if (!timed.length || !(model.duration > 0)) return [];
  const fastest = timed.reduce((best, driver) => (driver.lapDuration < best.lapDuration ? driver : best));
  const [s1, s2] = fastest.sectors || [];
  if (!(s1 > 0) || !(s2 > 0)) return [];
  return [s1 / model.duration, (s1 + s2) / model.duration];
}

/**
 * Where on the replay's track geometry (fractions of driver A's samples) the fastest driver crosses the sector 1
 * and sector 2 lines: from the official sector times, read on the same distance grid as the gap chart. Only for a
 * trace that can be trusted; otherwise no lines.
 */
export function sectorTrackFractions(trace, model) {
  if (!trace?.reliable) return [];
  const fastest = model?.drivers?.find((driver) => driver.slot === trace.reference);
  const [s1, s2] = fastest?.sectors || [];
  if (!(s1 > 0) || !(s2 > 0)) return [];
  const last = trace.d.length - 1;
  return [s1, s1 + s2].map(
    (seconds) => trace.trackFractions[Math.round(distanceAtTimeOnGrid(trace, trace.reference, seconds) * last)]
  );
}
