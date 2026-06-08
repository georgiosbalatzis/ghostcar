import { fetchCarData, fetchLaps, fetchLocation, fetchStints } from "../api.js";
import { getLapTimeRange } from "../domain/laps.js";

export async function loadDriverLapsAndStints(sessionKey, driverNumber, options = {}) {
  const [laps, stints] = await Promise.all([
    fetchLaps(sessionKey, driverNumber, options),
    fetchStints(sessionKey, driverNumber, options).catch(() => []),
  ]);

  return { laps, stints };
}

export function buildReplayStreamRequests(sessionKey, drivers) {
  return (drivers || [])
    .map((driver) => {
      const range = getLapTimeRange(driver.lap);
      if (!range) return null;
      return {
        slot: driver.slot,
        sessionKey,
        driverNumber: driver.driverNumber,
        lap: driver.lap,
        range,
      };
    })
    .filter(Boolean);
}

export async function loadReplayStreams({ sessionKey, drivers, onProgress, progress = {} }, options = {}) {
  const requests = buildReplayStreamRequests(sessionKey, drivers);
  const primarySlots = new Set([1, 2]);
  const primaryRequestCount = requests.filter((request) => primarySlots.has(request.slot)).length;

  if (primaryRequestCount < 2) {
    throw new Error("Δεν υπάρχουν διαθέσιμα timestamps γύρου.");
  }

  const requestOptions = { signal: options.signal };

  onProgress?.(progress.locations ?? 20);
  const locations = await Promise.all(
    requests.map((request) =>
      fetchLocation(request.sessionKey, request.driverNumber, request.range.start, request.range.end, requestOptions)
    )
  );

  onProgress?.(progress.telemetry ?? 55);
  const telemetry = await Promise.all(
    requests.map((request) =>
      fetchCarData(request.sessionKey, request.driverNumber, request.range.start, request.range.end, requestOptions)
    )
  );

  return requests.map((request, index) => ({
    ...request,
    location: locations[index],
    telemetry: telemetry[index],
  }));
}
