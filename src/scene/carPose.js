import { surfaceAt } from "./trackGeometry.js";

// Where a car is and which way it points, at an instant. Pure maths on plain arrays.
//
// Position is the driver's own recorded line at the fraction the shared clock gives them (never lagged or
// eased). Heading is the direction of that line over ±HEADING_SPAN metres of the driver's own path. Height and
// pitch come from the road under the car, not from the driver's noisy GPS height.
const HEADING_SPAN = 4;
const OFF_ROAD = 20; // a road further than this from the car is not the one under it

/** A driver's dense world path ([{x, y, z}], evenly spaced by sample) with its cumulative distance. */
export function createDriverPath(points) {
  const cum = new Float64Array(points.length);
  for (let i = 1; i < points.length; i++) {
    cum[i] =
      cum[i - 1] +
      Math.hypot(points[i].x - points[i - 1].x, points[i].y - points[i - 1].y, points[i].z - points[i - 1].z);
  }
  return { points, cum, count: points.length, length: cum[points.length - 1] };
}

function pointAtIndex(path, index, out) {
  const i = Math.min(Math.floor(index), path.count - 2);
  const u = index - i;
  const a = path.points[i];
  const b = path.points[i + 1];
  out.x = a.x + u * (b.x - a.x);
  out.y = a.y + u * (b.y - a.y);
  out.z = a.z + u * (b.z - a.z);
  return out;
}

// Fractional index at a distance along the path (binary search on the cumulative distance).
function indexAtDistance(path, s) {
  const { cum, count } = path;
  if (s <= 0) return 0;
  if (s >= path.length) return count - 1;
  let lo = 0;
  let hi = count - 1;
  while (hi - lo > 1) {
    const mid = (lo + hi) >> 1;
    if (cum[mid] <= s) lo = mid;
    else hi = mid;
  }
  const span = cum[hi] - cum[lo];
  return lo + (span > 0 ? (s - cum[lo]) / span : 0);
}

const ahead = { x: 0, y: 0, z: 0 };
const behind = { x: 0, y: 0, z: 0 };

/** Position (x, y, z of the driver's own line) and heading (radians about +y, 0 = +z) at `fraction` of the path. */
export function poseAt(path, fraction, out = {}) {
  const index = Math.min(1, Math.max(0, fraction)) * (path.count - 1);
  pointAtIndex(path, index, out);
  const s =
    path.cum[Math.floor(index)] +
    (index - Math.floor(index)) *
      (path.cum[Math.min(Math.floor(index) + 1, path.count - 1)] - path.cum[Math.floor(index)]);
  pointAtIndex(path, indexAtDistance(path, s + HEADING_SPAN), ahead);
  pointAtIndex(path, indexAtDistance(path, s - HEADING_SPAN), behind);
  const dx = ahead.x - behind.x;
  const dz = ahead.z - behind.z;
  // A standing start has no direction yet: keep the last heading (0 the first time).
  if (dx * dx + dz * dz > 1e-6) out.heading = Math.atan2(dx, dz);
  else out.heading ??= 0;
  return out;
}

/**
 * Put a pose on the road: sets state.y and state.pitch from the centreline. `state.index` is the car's cursor,
 * so each frame is a small window search; after a jump (a scrub) the window misses the road and the whole
 * loop is searched once.
 */
export function placeOnRoad(centreline, pose, state) {
  state.surface ??= {};
  const surface = state.surface;
  surfaceAt(centreline, pose.x, pose.z, state.index ?? -1, surface, pose.y);
  if (surface.distance > OFF_ROAD && state.index >= 0) surfaceAt(centreline, pose.x, pose.z, -1, surface, pose.y);
  state.index = surface.index;
  state.y = surface.y;
  state.pitch = surface.pitch;
  return state;
}
