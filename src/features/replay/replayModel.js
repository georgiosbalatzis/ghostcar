import { formatSessionLabel } from "../../constants.js";
import { getDistinctDriverColors, getDriverColor, getDriverFullName } from "../../domain/drivers.js";
import { getCompoundForLap } from "../../domain/laps.js";

const FALLBACK_COLORS = ["#4488ff", "#ff4488", "#44cc44", "#ffaa00"];

export function formatMeetingShort(name) {
  return String(name || "").replace(/Grand Prix/g, "GP");
}

// Pure view model of a loaded replay. Built from the load-time snapshot (replay.meta) and the
// streams that actually arrived, so it never reflects unapplied selector edits.
export function buildReplayModel(replay) {
  if (!replay?.trackPath || !replay.meta) return null;
  const { meta, streams } = replay;
  const loaded = meta.slots.filter((slot) => streams[slot.slot]?.location?.length >= 2);
  const colors = getDistinctDriverColors(
    loaded.map((slot) => getDriverColor(slot.driver, FALLBACK_COLORS[slot.slot - 1]))
  );
  const drivers = loaded.map((slot, index) => ({
    slot: slot.slot,
    driverNumber: slot.driver?.driver_number ?? null,
    label: slot.driver?.name_acronym || `Ο${slot.slot}`,
    name: getDriverFullName(slot.driver) || slot.driver?.name_acronym || `Οδηγός ${slot.slot}`,
    team: slot.driver?.team_name || "",
    color: colors[index],
    lapNumber: slot.lap?.lap_number ?? null,
    lapDuration: Number(slot.lap?.lap_duration) || null,
    sectors: [1, 2, 3].map((sector) => Number(slot.lap?.[`duration_sector_${sector}`]) || null),
    compound: getCompoundForLap(slot.stints, slot.lap?.lap_number),
    path: streams[slot.slot].location,
    tel: streams[slot.slot].telemetry,
  }));
  const timed = drivers.filter((driver) => driver.lapDuration);
  const fastest = timed.length ? Math.min(...timed.map((driver) => driver.lapDuration)) : null;
  drivers.forEach((driver) => {
    driver.gap = driver.lapDuration && fastest ? driver.lapDuration - fastest : null;
  });
  const [first, second] = drivers;
  return {
    year: meta.year,
    meeting: meta.meeting,
    session: meta.session,
    meetingName: formatMeetingShort(meta.meeting?.meeting_name),
    sessionLabel: formatSessionLabel(meta.session?.session_name),
    trackPath: replay.trackPath,
    circuitFlip: replay.circuitFlip,
    drivers,
    // Final lap-time difference between the first two drivers (not a live gap).
    delta: first?.lapDuration && second?.lapDuration ? first.lapDuration - second.lapDuration : null,
  };
}
