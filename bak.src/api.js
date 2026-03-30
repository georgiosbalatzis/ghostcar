const API = "https://api.openf1.org/v1";

export async function fetchJSON(ep, params = {}, retries = 2) {
  const url = new URL(`${API}${ep}`);
  Object.entries(params).forEach(([k, v]) => {
    if (v != null && v !== "") url.searchParams.append(k, v);
  });
  for (let a = 0; a <= retries; a++) {
    try {
      const r = await fetch(url.toString());
      if (r.status === 429) { await new Promise((x) => setTimeout(x, 1500 * (a + 1))); continue; }
      if (!r.ok) throw new Error(`API ${r.status}`);
      return r.json();
    } catch (e) {
      if (a === retries) throw e;
      await new Promise((x) => setTimeout(x, 800 * (a + 1)));
    }
  }
}

export const fetchMeetings = (y) => fetchJSON("/meetings", { year: y });
export const fetchSessions = (mk) => fetchJSON("/sessions", { meeting_key: mk });
export const fetchDrivers = (sk) => fetchJSON("/drivers", { session_key: sk });
export const fetchLaps = (sk, dn) => fetchJSON("/laps", { session_key: sk, driver_number: dn });
export const fetchStints = (sk, dn) => fetchJSON("/stints", { session_key: sk, driver_number: dn });

export function fetchLocation(sk, dn, gt, lt) {
  const p = { session_key: sk, driver_number: dn };
  if (gt) p["date>"] = gt;
  if (lt) p["date<"] = lt;
  return fetchJSON("/location", p);
}

export function fetchCarData(sk, dn, gt, lt) {
  const p = { session_key: sk, driver_number: dn };
  if (gt) p["date>"] = gt;
  if (lt) p["date<"] = lt;
  return fetchJSON("/car_data", p);
}
