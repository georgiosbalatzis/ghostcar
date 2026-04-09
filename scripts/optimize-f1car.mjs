import { readFile, rename, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { NodeIO } from "@gltf-transform/core";
import { EXTMeshoptCompression, KHRMeshQuantization } from "@gltf-transform/extensions";
import { dedup, meshopt, prune, quantize } from "@gltf-transform/functions";
import { MeshoptDecoder, MeshoptEncoder } from "meshoptimizer";

const rootDir = process.cwd();
const modelPath = path.resolve(rootDir, "public", "f1car.glb");
const tempPath = `${modelPath}.tmp`;

function formatBytes(bytes) {
  if (!Number.isFinite(bytes)) return "0 B";
  const units = ["B", "kB", "MB"];
  let size = bytes;
  let unitIndex = 0;
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex += 1;
  }
  return `${size.toFixed(unitIndex === 0 ? 0 : 1)} ${units[unitIndex]}`;
}

const io = new NodeIO()
  .registerExtensions([EXTMeshoptCompression, KHRMeshQuantization])
  .registerDependencies({
    "meshopt.decoder": MeshoptDecoder,
    "meshopt.encoder": MeshoptEncoder,
  });

await MeshoptEncoder.ready;

const beforeStat = await stat(modelPath);
const document = await io.read(modelPath);

await document.transform(
  dedup(),
  prune(),
  quantize(),
  meshopt({ encoder: MeshoptEncoder }),
);

const optimizedBytes = await io.writeBinary(document);
await writeFile(tempPath, optimizedBytes);

const [beforeBytes, afterBytes] = await Promise.all([
  readFile(modelPath),
  readFile(tempPath),
]);

if (beforeBytes.equals(afterBytes)) {
  await rm(tempPath, { force: true });
  console.log(`f1car.glb already optimized (${formatBytes(beforeStat.size)})`);
  process.exit(0);
}

if (afterBytes.byteLength >= beforeBytes.byteLength) {
  await rm(tempPath, { force: true });
  console.log(
    `Kept existing f1car.glb: ${formatBytes(beforeStat.size)} <= ${formatBytes(afterBytes.byteLength)}`
  );
  process.exit(0);
}

await rename(tempPath, modelPath);

const afterStat = await stat(modelPath);
const savedBytes = beforeStat.size - afterStat.size;
const savedPct = beforeStat.size > 0 ? (savedBytes / beforeStat.size) * 100 : 0;

console.log(
  `Optimized f1car.glb: ${formatBytes(beforeStat.size)} -> ${formatBytes(afterStat.size)} (${savedPct.toFixed(1)}% smaller)`
);
