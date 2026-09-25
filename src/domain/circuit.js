export const DEFAULT_CIRCUIT_INFO = { clockwise: true };

export const CIRCUIT_DATA = {
  bahrain: { clockwise: true },
  jeddah: { clockwise: false },
  melbourne: { clockwise: true },
  baku: { clockwise: false },
  miami: { clockwise: true },
  imola: { clockwise: false },
  monaco: { clockwise: true },
  barcelona: { clockwise: true },
  spielberg: { clockwise: true },
  montreal: { clockwise: true },
  silverstone: { clockwise: true },
  budapest: { clockwise: true },
  "spa-francorchamps": { clockwise: true },
  spa: { clockwise: true },
  zandvoort: { clockwise: true },
  monza: { clockwise: true },
  singapore: { clockwise: false },
  suzuka: { clockwise: true },
  lusail: { clockwise: true },
  austin: { clockwise: false },
  "mexico city": { clockwise: true },
  mexico: { clockwise: true },
  "sao paulo": { clockwise: false },
  "las vegas": { clockwise: false },
  "abu dhabi": { clockwise: true },
  shanghai: { clockwise: true },
  portimao: { clockwise: true },
  sochi: { clockwise: true },
  istanbul: { clockwise: false },
  mugello: { clockwise: true },
  nurburgring: { clockwise: true },
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
    clockwise: info.clockwise,
    area,
    flip: info.clockwise !== area < 0,
  };
}
