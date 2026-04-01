const API = "https://api.openf1.org/v1";

export async function fetchJSON(ep, params = {}, options = {}) {
  const { retries = 2, signal } = options;
  const url = new URL(`${API}${ep}`);
  Object.entries(params).forEach(([k, v]) => {
    if (v != null && v !== "") url.searchParams.append(k, v);
  });
  for (let a = 0; a <= retries; a++) {
    try {
      const r = await fetch(url.toString(), { signal });
      if (r.status === 429) { await new Promise((x) => setTimeout(x, 1500 * (a + 1))); continue; }
      if (!r.ok) throw new Error(`API ${r.status}`);
      return r.json();
    } catch (e) {
      if (e?.name === "AbortError") throw e;
      if (a === retries) throw e;
      await new Promise((x) => setTimeout(x, 800 * (a + 1)));
    }
  }
}

export const fetchMeetings = (y, options) => fetchJSON("/meetings", { year: y }, options);
export const fetchSessions = (mk, options) => fetchJSON("/sessions", { meeting_key: mk }, options);
export const fetchDrivers = (sk, options) => fetchJSON("/drivers", { session_key: sk }, options);
export const fetchLaps = (sk, dn, options) => fetchJSON("/laps", { session_key: sk, driver_number: dn }, options);
export const fetchStints = (sk, dn, options) => fetchJSON("/stints", { session_key: sk, driver_number: dn }, options);

export function fetchLocation(sk, dn, gt, lt, options) {
  const p = { session_key: sk, driver_number: dn };
  if (gt) p["date>"] = gt;
  if (lt) p["date<"] = lt;
  return fetchJSON("/location", p, options);
}

export function fetchCarData(sk, dn, gt, lt, options) {
  const p = { session_key: sk, driver_number: dn };
  if (gt) p["date>"] = gt;
  if (lt) p["date<"] = lt;
  return fetchJSON("/car_data", p, options);
}
