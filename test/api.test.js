import test from "node:test";
import assert from "node:assert/strict";
import { fetchJSON, REQUEST_TELEMETRY_KEY } from "../src/api.js";
import { loadDriverLapsAndStints, loadReplayStreams } from "../src/services/openf1.js";

function mockResponse(status, body) {
  return {
    status,
    ok: status >= 200 && status < 300,
    async json() {
      return body;
    },
  };
}

async function withMockedApiEnvironment(fn) {
  const originalFetch = globalThis.fetch;
  const originalTelemetry = globalThis[REQUEST_TELEMETRY_KEY];
  const originalNodeEnv = process.env.NODE_ENV;
  const originalDebug = console.debug;

  globalThis[REQUEST_TELEMETRY_KEY] = [];
  process.env.NODE_ENV = "development";
  console.debug = () => {};

  try {
    await fn();
  } finally {
    globalThis.fetch = originalFetch;
    if (originalTelemetry === undefined) delete globalThis[REQUEST_TELEMETRY_KEY];
    else globalThis[REQUEST_TELEMETRY_KEY] = originalTelemetry;
    if (originalNodeEnv === undefined) delete process.env.NODE_ENV;
    else process.env.NODE_ENV = originalNodeEnv;
    console.debug = originalDebug;
  }
}

test("fetchJSON records development request telemetry for cache misses and hits", async () => {
  await withMockedApiEnvironment(async () => {
    const responses = [[{ meeting_key: 1 }]];
    let fetchCount = 0;
    globalThis.fetch = async () => {
      fetchCount += 1;
      return mockResponse(200, responses[0]);
    };

    const first = await fetchJSON("/meetings", { year: 2099 }, { retries: 0 });
    const second = await fetchJSON("/meetings", { year: 2099 }, { retries: 0 });

    assert.deepEqual(first, responses[0]);
    assert.deepEqual(second, responses[0]);
    assert.equal(fetchCount, 1);
    assert.equal(globalThis[REQUEST_TELEMETRY_KEY].length, 2);
    assert.deepEqual(
      globalThis[REQUEST_TELEMETRY_KEY].map((entry) => ({
        endpoint: entry.endpoint,
        status: entry.status,
        retryCount: entry.retryCount,
        cacheHit: entry.cacheHit,
        cacheEnabled: entry.cacheEnabled,
        aborted: entry.aborted,
      })),
      [
        {
          endpoint: "/meetings",
          status: 200,
          retryCount: 0,
          cacheHit: false,
          cacheEnabled: true,
          aborted: false,
        },
        {
          endpoint: "/meetings",
          status: null,
          retryCount: 0,
          cacheHit: true,
          cacheEnabled: true,
          aborted: false,
        },
      ]
    );
    assert.match(globalThis[REQUEST_TELEMETRY_KEY][0].url, /\/meetings\?year=2099$/);
    assert.equal(typeof globalThis[REQUEST_TELEMETRY_KEY][0].durationMs, "number");
  });
});

test("fetchJSON records aborted development requests without calling fetch", async () => {
  await withMockedApiEnvironment(async () => {
    const controller = new AbortController();
    controller.abort();
    let fetchCount = 0;
    globalThis.fetch = async () => {
      fetchCount += 1;
      return mockResponse(200, []);
    };

    await assert.rejects(() => fetchJSON("/drivers", { session_key: 1 }, { signal: controller.signal }), {
      name: "AbortError",
    });

    assert.equal(fetchCount, 0);
    assert.equal(globalThis[REQUEST_TELEMETRY_KEY].length, 1);
    assert.deepEqual(
      {
        endpoint: globalThis[REQUEST_TELEMETRY_KEY][0].endpoint,
        status: globalThis[REQUEST_TELEMETRY_KEY][0].status,
        retryCount: globalThis[REQUEST_TELEMETRY_KEY][0].retryCount,
        cacheHit: globalThis[REQUEST_TELEMETRY_KEY][0].cacheHit,
        aborted: globalThis[REQUEST_TELEMETRY_KEY][0].aborted,
      },
      {
        endpoint: "/drivers",
        status: null,
        retryCount: 0,
        cacheHit: false,
        aborted: true,
      }
    );
  });
});

// Retry backoff runs at once and is recorded, so these tests never wait 1.5 s or more on a real timer.
function recordSleeps(t) {
  const realSetTimeout = globalThis.setTimeout;
  const delays = [];
  t.mock.method(globalThis, "setTimeout", (callback, ms) => {
    delays.push(ms);
    return realSetTimeout(callback, 0);
  });
  return delays;
}

function respondWith(...responses) {
  const mock = { calls: 0 };
  globalThis.fetch = async () => {
    const response = responses[Math.min(mock.calls, responses.length - 1)];
    mock.calls += 1;
    if (response instanceof Error) throw response;
    return mockResponse(...response);
  };
  return mock;
}

const lastTelemetry = () => globalThis[REQUEST_TELEMETRY_KEY].at(-1);

test("fetchJSON returns an immediate success after one request and no backoff", async (t) => {
  await withMockedApiEnvironment(async () => {
    const delays = recordSleeps(t);
    const mock = respondWith([200, [{ lap_number: 1 }]]);

    assert.deepEqual(await fetchJSON("/laps", { session_key: 1001 }), [{ lap_number: 1 }]);
    assert.equal(mock.calls, 1);
    assert.deepEqual(delays, []);
  });
});

test("fetchJSON retries after HTTP 429 and returns the later success", async (t) => {
  await withMockedApiEnvironment(async () => {
    const delays = recordSleeps(t);
    const mock = respondWith([429], [200, [{ lap_number: 2 }]]);

    assert.deepEqual(await fetchJSON("/laps", { session_key: 1002 }), [{ lap_number: 2 }]);
    assert.equal(mock.calls, 2);
    assert.deepEqual(delays, [1500]);
    assert.equal(lastTelemetry().status, 200);
    assert.equal(lastTelemetry().retryCount, 1);
  });
});

test("fetchJSON rejects with API 429 when retries are exhausted, after a bounded number of requests", async (t) => {
  await withMockedApiEnvironment(async () => {
    const delays = recordSleeps(t);
    const mock = respondWith([429]);

    await assert.rejects(() => fetchJSON("/laps", { session_key: 1003 }), { message: "API 429" });

    assert.equal(mock.calls, 3);
    assert.deepEqual(delays, [1500, 3000], "no backoff after the final attempt");
    assert.equal(lastTelemetry().status, 429);
    assert.equal(lastTelemetry().retryCount, 2);
    assert.equal(lastTelemetry().aborted, false);
  });
});

test("fetchJSON with retries: 0 rejects on the first HTTP 429 without sleeping", async (t) => {
  await withMockedApiEnvironment(async () => {
    const delays = recordSleeps(t);
    const mock = respondWith([429]);

    await assert.rejects(() => fetchJSON("/laps", { session_key: 1004 }, { retries: 0 }), { message: "API 429" });

    assert.equal(mock.calls, 1);
    assert.deepEqual(delays, []);
  });
});

test("fetchJSON does not cache an exhausted 429, so the next call asks OpenF1 again", async (t) => {
  await withMockedApiEnvironment(async () => {
    recordSleeps(t);
    const mock = respondWith([429], [429], [429], [200, [{ lap_number: 3 }]]);

    await assert.rejects(() => fetchJSON("/laps", { session_key: 1005 }), { message: "API 429" });
    assert.deepEqual(await fetchJSON("/laps", { session_key: 1005 }), [{ lap_number: 3 }]);
    assert.equal(mock.calls, 4);
    assert.equal(lastTelemetry().cacheHit, false);
  });
});

test("fetchJSON retries a network failure and rejects with the original error", async (t) => {
  await withMockedApiEnvironment(async () => {
    const delays = recordSleeps(t);
    const failure = new TypeError("Failed to fetch");
    const mock = respondWith(failure);

    await assert.rejects(
      () => fetchJSON("/laps", { session_key: 1006 }),
      (error) => error === failure
    );

    assert.equal(mock.calls, 3);
    assert.deepEqual(delays, [800, 1600]);
    assert.equal(lastTelemetry().status, null);
  });
});

test("fetchJSON does not retry a request aborted in flight", async (t) => {
  await withMockedApiEnvironment(async () => {
    const delays = recordSleeps(t);
    const abort = new Error("Aborted");
    abort.name = "AbortError";
    const mock = respondWith(abort);

    await assert.rejects(() => fetchJSON("/laps", { session_key: 1007 }), { name: "AbortError" });

    assert.equal(mock.calls, 1);
    assert.deepEqual(delays, []);
    assert.equal(lastTelemetry().aborted, true);
  });
});

test("fetchJSON stops retrying when aborted during a 429", async (t) => {
  await withMockedApiEnvironment(async () => {
    recordSleeps(t);
    const controller = new AbortController();
    let calls = 0;
    globalThis.fetch = async () => {
      calls += 1;
      controller.abort();
      return mockResponse(429);
    };

    await assert.rejects(() => fetchJSON("/laps", { session_key: 1008 }, { signal: controller.signal }), {
      name: "AbortError",
    });

    assert.equal(calls, 1);
    assert.equal(lastTelemetry().aborted, true);
  });
});

test("a replay load rejects on exhausted 429s instead of reporting missing location data", async (t) => {
  await withMockedApiEnvironment(async () => {
    recordSleeps(t);
    respondWith([429]);
    const lap = { date_start: "2025-09-06T14:00:00.000Z", lap_duration: 80 };

    await assert.rejects(
      () =>
        loadReplayStreams({
          sessionKey: 1009,
          drivers: [
            { slot: 1, driverNumber: 1, lap },
            { slot: 2, driverNumber: 4, lap },
          ],
        }),
      { message: "API 429" }
    );
  });
});

test("optional stints degrade to an empty list on exhausted 429s while laps still load", async (t) => {
  await withMockedApiEnvironment(async () => {
    recordSleeps(t);
    const laps = [{ lap_number: 4 }];
    globalThis.fetch = async (url) =>
      new URL(url).pathname.endsWith("/stints") ? mockResponse(429) : mockResponse(200, laps);

    assert.deepEqual(await loadDriverLapsAndStints(1010, 1), { laps, stints: [] });
  });
});

test("fetchJSON stays silent outside development request telemetry", async () => {
  const originalFetch = globalThis.fetch;
  const originalTelemetry = globalThis[REQUEST_TELEMETRY_KEY];
  const originalNodeEnv = process.env.NODE_ENV;
  const originalDebug = console.debug;
  let debugCount = 0;

  globalThis[REQUEST_TELEMETRY_KEY] = [];
  process.env.NODE_ENV = "production";
  console.debug = () => {
    debugCount += 1;
  };
  globalThis.fetch = async () => mockResponse(200, [{ session_key: 1 }]);

  try {
    await fetchJSON("/sessions", { meeting_key: 2099 }, { retries: 0 });

    assert.equal(globalThis[REQUEST_TELEMETRY_KEY].length, 0);
    assert.equal(debugCount, 0);
  } finally {
    globalThis.fetch = originalFetch;
    if (originalTelemetry === undefined) delete globalThis[REQUEST_TELEMETRY_KEY];
    else globalThis[REQUEST_TELEMETRY_KEY] = originalTelemetry;
    if (originalNodeEnv === undefined) delete process.env.NODE_ENV;
    else process.env.NODE_ENV = originalNodeEnv;
    console.debug = originalDebug;
  }
});
