export const DEFAULT_CIRCUIT_INFO = { turns: 20, clockwise: true };

export const CIRCUIT_DATA = {
  bahrain: { turns: 15, clockwise: true },
  jeddah: { turns: 27, clockwise: false },
  melbourne: { turns: 16, clockwise: true },
  baku: { turns: 20, clockwise: false },
  miami: { turns: 19, clockwise: true },
  imola: { turns: 19, clockwise: false },
  monaco: { turns: 19, clockwise: true },
  barcelona: { turns: 16, clockwise: true },
  spielberg: { turns: 10, clockwise: true },
  montreal: { turns: 14, clockwise: true },
  silverstone: { turns: 18, clockwise: true },
  budapest: { turns: 14, clockwise: true },
  "spa-francorchamps": { turns: 19, clockwise: true },
  spa: { turns: 19, clockwise: true },
  zandvoort: { turns: 14, clockwise: true },
  monza: { turns: 11, clockwise: true },
  singapore: { turns: 19, clockwise: false },
  suzuka: { turns: 18, clockwise: true },
  lusail: { turns: 16, clockwise: true },
  austin: { turns: 20, clockwise: false },
  "mexico city": { turns: 17, clockwise: true },
  mexico: { turns: 17, clockwise: true },
  "sao paulo": { turns: 15, clockwise: false },
  "las vegas": { turns: 17, clockwise: false },
  "abu dhabi": { turns: 16, clockwise: true },
  shanghai: { turns: 16, clockwise: true },
  portimao: { turns: 15, clockwise: true },
  sochi: { turns: 18, clockwise: true },
  istanbul: { turns: 14, clockwise: false },
  mugello: { turns: 15, clockwise: true },
  nurburgring: { turns: 15, clockwise: true },
};

function normalizeCircuitKey(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export function getCircuitInfo(meeting) {
  if (!meeting) return DEFAULT_CIRCUIT_INFO;
  const key = normalizeCircuitKey(meeting.circuit_short_name || "");
  const name = normalizeCircuitKey(meeting.meeting_name || "")
    .replace(/\s*grand\s*prix\s*/, "")
    .trim();

  if (key && CIRCUIT_DATA[key]) return CIRCUIT_DATA[key];
  for (const [circuitKey, circuitInfo] of Object.entries(CIRCUIT_DATA)) {
    if (key && (key.includes(circuitKey) || circuitKey.includes(key))) return circuitInfo;
  }

  if (name && CIRCUIT_DATA[name]) return CIRCUIT_DATA[name];
  for (const [circuitKey, circuitInfo] of Object.entries(CIRCUIT_DATA)) {
    if (name && (name.includes(circuitKey) || circuitKey.includes(name))) return circuitInfo;
  }

  return DEFAULT_CIRCUIT_INFO;
}

export function calculateTrackArea(points) {
  if (!points?.length) return 0;
  let area = 0;
  for (let i = 0; i < points.length; i++) {
    const nextIndex = (i + 1) % points.length;
    area += points[i].x * points[nextIndex].z - points[nextIndex].x * points[i].z;
  }
  return area;
}

export function getCircuitReplayConfig(meeting, normalizedTrack) {
  const info = getCircuitInfo(meeting);
  const area = calculateTrackArea(normalizedTrack);
  return {
    turns: info.turns,
    clockwise: info.clockwise,
    area,
    flip: info.clockwise !== area < 0,
  };
}
