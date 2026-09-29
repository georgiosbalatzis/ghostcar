// Real-time playback. The replay clock runs in seconds from the start of the lap; each driver's samples carry
// OpenF1 timestamps, so a driver is placed by their own time, and the faster lap reaches the line first.
// Consumers still index samples by fraction (0–1 of the array), so the result of a lookup is a fraction.

// Lap starts further than this from the first sample are treated as inconsistent data.
const LAP_START_TOLERANCE_MS = 2000;

/**
 * Seconds from the lap start for each sample, from OpenF1 `date`.
 * Uses the lap's `date_start` when it matches the samples; otherwise the first sample is time zero.
 * Samples without usable dates are spread evenly over the lap duration.
 */
export function buildTimeIndex(samples, lapStartIso, lapDuration) {
  const count = samples?.length || 0;
  if (!count) return [];
  const dates = samples.map((sample) => Date.parse(sample?.date));
  if (dates.some((date) => !Number.isFinite(date))) {
    const span = lapDuration > 0 ? lapDuration : count - 1;
    return samples.map((_, index) => (count > 1 ? (index / (count - 1)) * span : 0));
  }
  const lapStart = Date.parse(lapStartIso);
  const origin =
    Number.isFinite(lapStart) && Math.abs(dates[0] - lapStart) <= LAP_START_TOLERANCE_MS ? lapStart : dates[0];
  return dates.map((date) => (date - origin) / 1000);
}

/** Fractional sample position (0–1) at time `t` seconds; before the first sample 0, after the last 1. */
export function fractionAtTime(times, t) {
  const count = times?.length || 0;
  if (count < 2) return 0;
  if (!(t > times[0])) return 0;
  if (t >= times[count - 1]) return 1;
  let lo = 0;
  let hi = count - 1;
  while (hi - lo > 1) {
    const mid = (lo + hi) >> 1;
    if (times[mid] <= t) lo = mid;
    else hi = mid;
  }
  const span = times[hi] - times[lo];
  return (lo + (span > 0 ? (t - times[lo]) / span : 0)) / (count - 1);
}
