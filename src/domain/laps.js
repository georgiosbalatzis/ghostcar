export function prepareLapSelectModel(laps) {
  const valid = (laps || []).filter((lap) => Number(lap.lap_duration) > 10);
  let fastestLapNumber = null;
  let fastestLapDuration = Infinity;

  for (const lap of valid) {
    const lapDuration = Number(lap.lap_duration);
    if (lapDuration < fastestLapDuration) {
      fastestLapDuration = lapDuration;
      fastestLapNumber = lap.lap_number;
    }
  }

  return {
    options: [...valid].sort((a, b) => Number(a.lap_duration) - Number(b.lap_duration)),
    fastestLapNumber,
  };
}

export function bestLap(laps) {
  const valid = (laps || []).filter((lap) => Number(lap.lap_duration) > 10 && lap.date_start);
  return valid.length ? valid.reduce((a, b) => (Number(a.lap_duration) < Number(b.lap_duration) ? a : b)) : null;
}

export function findLapByNumber(laps, lapNumber) {
  return (laps || []).find((lap) => lap.lap_number === lapNumber) || null;
}

export function getLapTimeRange(lap, fallbackDuration = 120) {
  if (!lap?.date_start) return null;
  const startTime = Date.parse(lap.date_start);
  if (!Number.isFinite(startTime)) return null;
  const lapDuration = Number(lap.lap_duration);
  const duration = Number.isFinite(lapDuration) && lapDuration > 0 ? lapDuration : fallbackDuration;
  return {
    start: lap.date_start,
    end: new Date(startTime + duration * 1000).toISOString(),
    duration,
  };
}

export function getCompoundForLap(stints, lapNumber) {
  if (!lapNumber) return null;
  return (
    (stints || [])
      .find((stint) => lapNumber >= stint.lap_start && lapNumber <= stint.lap_end)
      ?.compound?.toUpperCase() || null
  );
}
