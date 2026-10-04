import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

test("npm test runs maintained tests without discovering scratchpad rewrite utilities", () => {
  const { scripts } = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
  assert.equal(scripts["test:unit"], scripts.test);
  const directory = mkdtempSync(join(tmpdir(), "ghostcar-discovery-"));
  try {
    mkdirSync(join(directory, "test"));
    mkdirSync(join(directory, "scratchpad"));
    writeFileSync(join(directory, "package.json"), JSON.stringify({ type: "module", scripts: { test: scripts.test } }));
    const source = 'import test from "node:test";\ntest("maintained fixture", () => {});\n';
    const vulnerable = join(directory, "test", "theme-init.test.js");
    writeFileSync(vulnerable, source);
    writeFileSync(join(directory, "test", "domain.test.js"), source);
    writeFileSync(
      join(directory, "scratchpad", "patch-theme-test.mjs"),
      'import { writeFileSync } from "node:fs";\n' +
        'writeFileSync("executed", "yes");\nwriteFileSync("test/theme-init.test.js", "rewritten");\n'
    );
    // Run as an independent npm invocation, not a child test process inheriting Node's runner context.
    const env = { ...process.env };
    delete env.NODE_TEST_CONTEXT;
    const result = spawnSync("npm", ["test"], {
      cwd: directory,
      env,
      encoding: "utf8",
      timeout: 30_000,
    });
    assert.equal(result.status, 0, result.stdout + result.stderr);
    assert.match(result.stdout, /(?:# |ℹ )tests 2\b/);
    assert.doesNotMatch(result.stdout, /scratchpad\//);
    assert.equal(existsSync(join(directory, "executed")), false);
    assert.equal(readFileSync(vulnerable, "utf8"), source);
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});
