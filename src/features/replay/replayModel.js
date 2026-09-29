import { formatSessionLabel } from "../../constants.js";
import { getDistinctDriverColors, getDriverColor, getDriverFullName } from "../../domain/drivers.js";
import { getCompoundForLap } from "../../domain/laps.js";
import { buildTimeIndex } from "../../domain/timing.js";
import { fmt } from "../../helpers.js";

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
    // Seconds from lap start per sample: playback places each driver by their own clock.
    pathTimes: buildTimeIndex(streams[slot.slot].location, slot.lap?.date_start, Number(slot.lap?.lap_duration)),
    telTimes: buildTimeIndex(streams[slot.slot].telemetry, slot.lap?.date_start, Number(slot.lap?.lap_duration)),
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
    // Replay length in seconds: the slowest lap (or its last sample when a lap time is missing).
    duration: Math.max(1, ...drivers.map((driver) => driver.lapDuration || driver.pathTimes.at(-1) || 0)),
    // Final lap-time difference between the first two drivers (not a live gap).
    delta: first?.lapDuration && second?.lapDuration ? first.lapDuration - second.lapDuration : null,
  };
}

// The facts strip under the tabs: fastest lap, final difference, the sector with the largest swing and top
// speeds. With three or four drivers the difference and sectors compare the two fastest.
export function buildKeyFacts(model) {
  const ranked = model.drivers.filter((driver) => driver.lapDuration).sort((a, b) => a.lapDuration - b.lapDuration);
  const [fastest, second] = ranked;
  if (!fastest) return [];
  const facts = [
    { label: "Ταχύτερος", value: fastest.name, note: `${fmt(fastest.lapDuration)} · Γύρος ${fastest.lapNumber}` },
  ];
  if (second) {
    const gap = second.lapDuration - fastest.lapDuration;
    facts.push({
      label: "Τελική διαφορά",
      value: `${gap.toFixed(3)} s`,
      note: gap > 0 ? `${fastest.label} μπροστά από ${second.label}` : "ίδιος χρόνος",
    });
    const swings = [0, 1, 2].map((k) =>
      fastest.sectors[k] && second.sectors[k] ? second.sectors[k] - fastest.sectors[k] : null
    );
    const k = swings.reduce(
      (best, swing, index) => (swing != null && (best < 0 || Math.abs(swing) > Math.abs(swings[best])) ? index : best),
      -1
    );
    if (k >= 0 && swings[k]) {
      const gainer = swings[k] > 0 ? fastest : second;
      facts.push({
        label: "Μεγαλύτερο κέρδος",
        value: `Τομέας ${k + 1}`,
        note: `${gainer.label} −${Math.abs(swings[k]).toFixed(3)} s`,
      });
    }
  }
  const tops = model.drivers.map((driver) => ({
    driver,
    top: Math.round(Math.max(0, ...(driver.tel || []).map((sample) => sample.speed || 0))),
  }));
  const [best, ...rest] = [...tops].sort((a, b) => b.top - a.top);
  if (best.top > 0) {
    facts.push({
      label: "Μέγιστη ταχύτητα",
      value: `${best.top} km/h`,
      note: [best.driver.label, ...rest.map((item) => `${item.driver.label} ${item.top}`)].join(" · "),
    });
  }
  return facts;
}
