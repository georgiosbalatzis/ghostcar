import { fetchDrivers, fetchLaps, fetchMeetings, fetchSessions, fetchStints } from "../api.js";
import { uniqueDrivers } from "../domain/drivers.js";
import { bestLap } from "../domain/laps.js";
import { normalizeText } from "../helpers.js";

function normalizePresetMeetingName(value) {
  return normalizeText(value).replace(" grand prix", "");
}

export function findPresetMeeting(meetings, presetMeetingName) {
  const normalizedPresetMeeting = normalizePresetMeetingName(presetMeetingName);
  return meetings.find((meeting) => {
    const meetingName = normalizePresetMeetingName(meeting.meeting_name);
    return meetingName.includes(normalizedPresetMeeting) || normalizedPresetMeeting.includes(meetingName);
  });
}

function filterSupportedSessions(sessions, supportedSessionNames) {
  if (!supportedSessionNames?.length) return sessions;
  const supportedSessionNameSet = new Set(supportedSessionNames);
  return sessions.filter((session) => supportedSessionNameSet.has(session.session_name));
}

export async function loadPresetSelectorData(preset, { supportedSessionNames = [], onProgress } = {}, options = {}) {
  const requestOptions = { signal: options.signal };
  const allMeetings = await fetchMeetings(preset.year, requestOptions);
  const meetings = allMeetings.filter((meeting) => meeting.meeting_name);
  const meeting = findPresetMeeting(meetings, preset.meeting);
  if (!meeting) throw new Error(`Δεν βρέθηκε το Γκραν Πρι "${preset.meeting}"`);
  onProgress?.(10);

  const allSessions = await fetchSessions(meeting.meeting_key, requestOptions);
  const sessions = filterSupportedSessions(allSessions, supportedSessionNames);
  const session = sessions.find((item) => item.session_name === preset.session);
  if (!session) throw new Error("Δεν βρέθηκε σκέλος");
  onProgress?.(20);

  const allDrivers = await fetchDrivers(session.session_key, requestOptions);
  const drivers = uniqueDrivers(allDrivers);
  onProgress?.(30);

  const [laps1, laps2] = await Promise.all([
    fetchLaps(session.session_key, preset.d1, requestOptions),
    fetchLaps(session.session_key, preset.d2, requestOptions),
  ]);
  const fastestLap1 = bestLap(laps1);
  const fastestLap2 = bestLap(laps2);
  if (!fastestLap1 || !fastestLap2) throw new Error("Δεν βρέθηκαν έγκυροι γύροι");
  onProgress?.(45);

  const [stints1, stints2] = await Promise.all([
    fetchStints(session.session_key, preset.d1, requestOptions).catch(() => []),
    fetchStints(session.session_key, preset.d2, requestOptions).catch(() => []),
  ]);

  return {
    meetings,
    meeting,
    sessions,
    session,
    drivers,
    laps1,
    laps2,
    fastestLap1,
    fastestLap2,
    stints1,
    stints2,
  };
}
