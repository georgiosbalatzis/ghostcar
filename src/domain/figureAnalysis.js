import { buildGapTrace, distanceAtTimeOnGrid, timeAtDistanceOnGrid } from "./gap.js";

export const FIGURE_VIEWS = [
  { id: "map", label: "Χάρτης κέρδους / απώλειας" },
  { id: "delta", label: "Σωρευτική διαφορά χρόνου" },
  { id: "telemetry", label: "Τηλεμετρία τμήματος" },
];

export function normalizeFigureOptions(input = {}) {
  const distance = (value) =>
    value !== "" && value != null && Number.isFinite(Number(value)) && Number(value) >= 0 ? Number(value) : null;
  return {
    figure: FIGURE_VIEWS.some((view) => view.id === input.figure) ? input.figure : null,
    from: distance(input.from),
    to: distance(input.to),
    fixed: input.fixed === true || input.fixed === "1",
  };
}

export function figureRange(options, length) {
  const { from, to } = normalizeFigureOptions(options);
  const start = Math.min(from ?? 0, Math.max(0, length - 1));
  const end = Math.min(to ?? length, length);
  return end > start ? [start, end] : [0, length];
}

export function turnBoundaries(landmarks, length) {
  return [
    { id: "start", label: "Εκκίνηση", distance: 0 },
    ...landmarks
      .map((corner) => ({
        id: `turn-${corner.number}`,
        label: `T${corner.number} έξοδος*`,
        distance: Number((corner.distance + 50).toFixed(1)),
      }))
      .filter((boundary) => boundary.distance > 0 && boundary.distance < length),
    { id: "finish", label: "Τερματισμός", distance: length },
  ];
}

export function boundaryAtDistance(distance, boundaries) {
  return (
    boundaries.find((boundary) => Math.abs(boundary.distance - distance) < 0.051) || {
      id: "custom",
      label: `Προσαρμοσμένο όριο (${Number(distance.toFixed(1))} m)`,
      distance,
    }
  );
}

export function gainAt(analysis, distance) {
  const share = Math.max(0, Math.min(1, distance / analysis.length));
  return (
    timeAtDistanceOnGrid(analysis.trace, analysis.drivers[0].slot, share) -
    timeAtDistanceOnGrid(analysis.trace, analysis.drivers[1].slot, share)
  );
}

export const lapLabel = (driver) => `${driver.label} · L${driver.lapNumber}`;

function pointAt(path, fraction) {
  const index = Math.max(0, Math.min(1, fraction)) * (path.length - 1);
  const a = path[Math.floor(index)],
    b = path[Math.min(path.length - 1, Math.floor(index) + 1)];
  const f = index % 1;
  return { x: (a.x + (b.x - a.x) * f) / 10, y: (a.y + (b.y - a.y) * f) / 10 };
}

// The loaded model may contain a playback fallback for undated samples; publication figures refuse it.
export function buildFigureAnalysis(model) {
  const drivers = model?.drivers?.slice(0, 2) || [];
  const refuse = (reason) => ({ reliable: false, reason, drivers });
  if (drivers.length !== 2) return refuse("Χρειάζονται δύο φορτωμένοι γύροι.");
  for (const driver of drivers) {
    const sectors = driver.sectors || [];
    if (
      sectors.length !== 3 ||
      !sectors.every((s) => Number.isFinite(s) && s > 0) ||
      Math.abs(sectors.reduce((a, b) => a + b, 0) - driver.lapDuration) > 0.01
    ) {
      return refuse(`${lapLabel(driver)}: λείπουν συνεπείς επίσημοι χρόνοι τομέων.`);
    }
    const path = driver.path || [];
    if (
      driver.pathTimes?.length !== path.length ||
      !driver.pathTimes?.every((t, i) => Number.isFinite(t) && (!i || t > driver.pathTimes[i - 1])) ||
      path.some(
        (p, i) =>
          !Number.isFinite(p.x) ||
          !Number.isFinite(p.y) ||
          !Number.isFinite(Date.parse(p.date)) ||
          (i > 0 && Date.parse(p.date) <= Date.parse(path[i - 1].date))
      )
    ) {
      return refuse(`${lapLabel(driver)}: ελλιπή ή μη διαδοχικά δείγματα θέσης.`);
    }
  }
  const trace = buildGapTrace({ drivers }, { points: 2001 });
  if (!trace?.reliable) return refuse(trace?.reason || "Δεν επαρκούν τα δεδομένα θέσης.");
  const length = trace.lengthMeters;
  if (!(length > 0) || !Number.isFinite(length)) return refuse("Δεν προκύπτει έγκυρη κοινή απόσταση.");
  const [first, second] = drivers;
  const result = {
    reliable: true,
    trace,
    drivers,
    length,
    totalGain: first.lapDuration - second.lapDuration,
    sectorGains: first.sectors.map((s, i) => s - second.sectors[i]),
    grid: trace.d.map((d, i) => ({
      distance: d * length,
      gain: trace.times[first.slot][i] - trace.times[second.slot][i],
      ...pointAt(first.path, trace.trackFractions[i]),
    })),
  };
  const reference = drivers.find((driver) => driver.slot === trace.reference);
  result.sectors = [reference.sectors[0], reference.sectors[0] + reference.sectors[1]].map(
    (seconds) => distanceAtTimeOnGrid(trace, reference.slot, seconds) * length
  );
  result.telemetry = drivers.map((driver) =>
    (driver.tel || []).map((sample, i, all) => {
      const time = driver.telTimes?.[i];
      const origin = Date.parse(driver.path[0].date) - driver.pathTimes[0] * 1000;
      const validDate =
        Number.isFinite(Date.parse(sample.date)) &&
        Math.abs((Date.parse(sample.date) - origin) / 1000 - time) < 0.001 &&
        (!i || Date.parse(sample.date) > Date.parse(all[i - 1].date));
      return {
        ...sample,
        distance: validDate && Number.isFinite(time) ? distanceAtTimeOnGrid(trace, driver.slot, time) * length : null,
        hole: i > 0 && (!validDate || time - driver.telTimes[i - 1] > 2),
      };
    })
  );
  return result;
}

// Project labelled landmarks onto this comparison's measured reference; old landmark lengths are never reused.
export function projectLandmarks(analysis, landmarks) {
  if (!analysis.reliable) return [];
  const grid = analysis.grid;
  return landmarks
    .map((landmark) => {
      let best = { residual: Infinity };
      for (let i = 0; i < grid.length - 1; i++) {
        const a = grid[i],
          b = grid[i + 1],
          dx = b.x - a.x,
          dy = b.y - a.y;
        const u = Math.max(
          0,
          Math.min(1, ((landmark.x / 10 - a.x) * dx + (landmark.y / 10 - a.y) * dy) / (dx * dx + dy * dy || 1))
        );
        const residual = Math.hypot(landmark.x / 10 - a.x - u * dx, landmark.y / 10 - a.y - u * dy);
        if (residual < best.residual) best = { residual, distance: a.distance + u * (b.distance - a.distance) };
      }
      return { ...landmark, ...best };
    })
    .filter((landmark) => landmark.residual < 20);
}

export function channelValue(sample, channel) {
  if (!Number.isFinite(sample[channel])) return null;
  return channel === "brake" ? Number(sample.brake > 0) : sample[channel];
}
