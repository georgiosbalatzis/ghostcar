import test from "node:test";
import assert from "node:assert/strict";
import { rankByY, stackOffsets } from "../src/scene/stacking.js";

test("rankByY counts the chips above each one", () => {
  assert.deepEqual(rankByY([{ y: 30 }, { y: 10 }, { y: 20 }]), [2, 0, 1]);
  assert.deepEqual(rankByY([{ y: 5 }]), [0]);
});

test("stackOffsets spreads chips that are close and leaves a lone chip beside its car", () => {
  const points = [
    { index: 0, x: 100, y: 100 },
    { index: 1, x: 105, y: 100 }, // right on top of the first
    { index: 2, x: 600, y: 300 }, // far away
  ];
  const [a, b, c] = stackOffsets(points);
  assert.equal(c, 0);
  assert.equal(Math.abs(a - b), 1); // one chip apart
  assert.equal(a + b, 0); // centred on the pair
  // Order by height, then by slot: the higher car's chip is higher.
  const [top, bottom] = stackOffsets([
    { index: 0, x: 10, y: 50 },
    { index: 1, x: 10, y: 20 },
  ]);
  assert.ok(bottom < top);
});
