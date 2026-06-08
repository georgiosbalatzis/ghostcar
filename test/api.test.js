import test from "node:test";
import assert from "node:assert/strict";
import { fetchJSON, REQUEST_TELEMETRY_KEY } from "../src/api.js";

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
