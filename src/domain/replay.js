import { norm } from "../helpers.js";
import { getCircuitReplayConfig } from "./circuit.js";

export function hasMinimumReplayData(streams, minimumPoints = 5) {
  const bySlot = new Map((streams || []).map((stream) => [stream.slot, stream]));
  return [1, 2].every((slot) => bySlot.get(slot)?.location?.length >= minimumPoints);
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
