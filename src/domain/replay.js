import { norm } from "../helpers.js";
import { getCircuitReplayConfig } from "./circuit.js";

const PRIMARY_REPLAY_SLOTS = [1, 2];

export function getReplayDataIssue(streams, { minimumPoints = 5, requireTelemetry = true } = {}) {
  const bySlot = new Map((streams || []).map((stream) => [stream.slot, stream]));

  for (const slot of PRIMARY_REPLAY_SLOTS) {
    const location = bySlot.get(slot)?.location;
    if (!Array.isArray(location) || location.length === 0) {
      return { type: "missing-location", slot, points: 0, minimumPoints };
    }
    if (location.length < minimumPoints) {
      return { type: "insufficient-location", slot, points: location.length, minimumPoints };
    }
  }

  if (!requireTelemetry) return null;

  for (const slot of PRIMARY_REPLAY_SLOTS) {
    const telemetry = bySlot.get(slot)?.telemetry;
    if (!Array.isArray(telemetry) || telemetry.length === 0) {
      return { type: "missing-telemetry", slot };
    }
  }

  return null;
}

export function hasMinimumReplayData(streams, minimumPoints = 5) {
  return !getReplayDataIssue(streams, { minimumPoints, requireTelemetry: false });
}

export function buildReplayGeometry(meeting, referenceLocation) {
  const rawTrack = norm(referenceLocation);
  const circuit = getCircuitReplayConfig(meeting, rawTrack);

  return {
    circuitFlip: circuit.flip,
    circuitTurns: circuit.turns,
    trackPath: norm(referenceLocation, circuit.flip),
  };
}
