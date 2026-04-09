const API = "https://api.openf1.org/v1";
const RESPONSE_CACHE_MAX = 120;
const responseCache = new Map();

function getCacheKey(ep, params) {
  const query = new URLSearchParams();
  Object.entries(params)
    .filter(([, value]) => value != null && value !== "")
    .sort(([a], [b]) => a.localeCompare(b))
    .forEach(([key, value]) => query.append(key, value));
  return `${ep}?${query.toString()}`;
}

function storeCachedResponse(key, value) {
  if (responseCache.has(key)) responseCache.delete(key);
  responseCache.set(key, value);
  if (responseCache.size <= RESPONSE_CACHE_MAX) return;
  const oldestKey = responseCache.keys().next().value;
  if (oldestKey) responseCache.delete(oldestKey);
}

export async function fetchJSON(ep, params = {}, options = {}) {
  const { retries = 2, signal, cache = true } = options;
  const url = new URL(`${API}${ep}`);
  Object.entries(params).forEach(([k, v]) => {
    if (v != null && v !== "") url.searchParams.append(k, v);
  });
  const cacheKey = cache ? getCacheKey(ep, params) : "";
  if (cache && responseCache.has(cacheKey)) return responseCache.get(cacheKey);
  for (let a = 0; a <= retries; a++) {
    try {
      const r = await fetch(url.toString(), { signal });
      if (r.status === 429) { await new Promise((x) => setTimeout(x, 1500 * (a + 1))); continue; }
      if (!r.ok) throw new Error(`API ${r.status}`);
      const data = await r.json();
      if (cache) storeCachedResponse(cacheKey, data);
      return data;
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
  return fetchJSON("/location", p, { ...options, cache: options?.cache ?? false });
}

export function fetchCarData(sk, dn, gt, lt, options) {
  const p = { session_key: sk, driver_number: dn };
  if (gt) p["date>"] = gt;
  if (lt) p["date<"] = lt;
  return fetchJSON("/car_data", p, { ...options, cache: options?.cache ?? false });
}
