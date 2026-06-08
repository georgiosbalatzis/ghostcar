const API = "https://api.openf1.org/v1";
const RESPONSE_CACHE_MAX = 120;
export const REQUEST_TELEMETRY_KEY = "__f1OpenF1RequestTelemetry";
const REQUEST_TELEMETRY_MAX = 120;
const responseCache = new Map();

function createAbortError() {
  const error = new Error("Aborted");
  error.name = "AbortError";
  return error;
}

function sleep(ms, signal) {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(createAbortError());
      return;
    }
    const timer = setTimeout(() => {
      signal?.removeEventListener("abort", onAbort);
      resolve();
    }, ms);
    function onAbort() {
      clearTimeout(timer);
      reject(createAbortError());
    }
    signal?.addEventListener("abort", onAbort, { once: true });
  });
}

function nowMs() {
  return globalThis.performance?.now?.() ?? Date.now();
}

function isRequestTelemetryEnabled() {
  return Boolean(import.meta.env?.DEV) || (typeof process !== "undefined" && process.env?.NODE_ENV === "development");
}

function recordRequestTelemetry(entry) {
  if (!isRequestTelemetryEnabled()) return;

  const telemetry = Array.isArray(globalThis[REQUEST_TELEMETRY_KEY]) ? globalThis[REQUEST_TELEMETRY_KEY] : [];
  telemetry.push(entry);
  if (telemetry.length > REQUEST_TELEMETRY_MAX) telemetry.splice(0, telemetry.length - REQUEST_TELEMETRY_MAX);
  globalThis[REQUEST_TELEMETRY_KEY] = telemetry;
  globalThis.console?.debug?.("[OpenF1 request]", entry);
}

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
  const startMs = nowMs();
  const { retries = 2, signal, cache = true } = options;
  let url = "";
  let status = null;
  let retryCount = 0;
  let cacheHit = false;
  let aborted = false;

  try {
    if (signal?.aborted) throw createAbortError();
    const requestUrl = new URL(`${API}${ep}`);
    Object.entries(params).forEach(([k, v]) => {
      if (v != null && v !== "") requestUrl.searchParams.append(k, v);
    });
    url = requestUrl.toString();
    const cacheKey = cache ? getCacheKey(ep, params) : "";
    if (cache && responseCache.has(cacheKey)) {
      cacheHit = true;
      return responseCache.get(cacheKey);
    }
    for (let a = 0; a <= retries; a++) {
      retryCount = a;
      if (signal?.aborted) throw createAbortError();
      try {
        const r = await fetch(url, { signal });
        status = r.status;
        if (r.status === 429) {
          await sleep(1500 * (a + 1), signal);
          continue;
        }
        if (!r.ok) throw new Error(`API ${r.status}`);
        const data = await r.json();
        if (cache) storeCachedResponse(cacheKey, data);
        return data;
      } catch (e) {
        if (e?.name === "AbortError") throw e;
        if (a === retries) throw e;
        await sleep(800 * (a + 1), signal);
      }
    }
  } catch (error) {
    if (error?.name === "AbortError") aborted = true;
    throw error;
  } finally {
    recordRequestTelemetry({
      endpoint: ep,
      url,
      status,
      retryCount,
      durationMs: Math.round((nowMs() - startMs) * 10) / 10,
      cacheHit,
      cacheEnabled: Boolean(cache),
      aborted,
    });
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
