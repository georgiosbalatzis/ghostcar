// The scene's one world frame: metres. OpenF1 location samples are in decimetres, and every driver, the road
// and the start line are placed through the same frame (never a per-driver bounding box), so the same raw
// point is the same world point for everyone.
//
//   world x = ±(raw x − centre x) / 10   (mirrored by circuitFlip exactly as the 2D map's normalisation is)
//   world z = (raw y − centre y) / 10    (raw y down the page, as in 2D)
//   world y = relief × (raw z − lowest raw z) / 10   (elevation in metres; the lowest road point is 0)
const DECIMETRES_PER_METRE = 10;
export const GROUND_DROP = 1; // the ground sits this far below the lowest road point

export function createWorldFrame(reference, { flip = false, relief = 1 } = {}) {
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  let minZ = Infinity;
  let maxZ = -Infinity;
  for (const p of reference || []) {
    minX = Math.min(minX, p.x);
    maxX = Math.max(maxX, p.x);
    minY = Math.min(minY, p.y);
    maxY = Math.max(maxY, p.y);
    minZ = Math.min(minZ, p.z);
    maxZ = Math.max(maxZ, p.z);
  }
  if (!(maxX >= minX)) [minX, maxX, minY, maxY, minZ, maxZ] = [0, 0, 0, 0, 0, 0];
  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2;
  const sign = flip ? -1 : 1;
  const width = (maxX - minX) / DECIMETRES_PER_METRE;
  const depth = (maxY - minY) / DECIMETRES_PER_METRE;
  const height = (relief * (maxZ - minZ)) / DECIMETRES_PER_METRE;
  return {
    toWorld: (p) => ({
      x: (sign * (p.x - cx)) / DECIMETRES_PER_METRE,
      y: (relief * (p.z - minZ)) / DECIMETRES_PER_METRE,
      z: (p.y - cy) / DECIMETRES_PER_METRE,
    }),
    // The circuit's extent in metres. The horizontal centre is the world origin.
    bounds: { width, depth, height, diagonal: Math.hypot(width, depth, height) || 1 },
    groundY: -GROUND_DROP,
  };
}
