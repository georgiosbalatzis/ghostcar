import { CatmullRomCurve3, Vector3 } from "three";

// The road as data, in metres and without any three.js scene: a centreline resampled by arc length, its
// elevation smoothed, offset edges without folds, and a surface lookup for anything that drives on it.
// Point i of the centreline is s = i × spacing metres from the first sample of the reference lap.

const ARC_DIVISIONS = 16; // curve samples per reference sample when measuring arc length
const HALF_WINDOW = 40; // surfaceAt looks this many points either side of its hint

const wrap = (i, n) => ((i % n) + n) % n;

/**
 * @param points  reference lap in world metres [{x, y, z}]
 * @param times   seconds from the lap start for each point (same length)
 * @param spacing metres between centreline points; sigma metres of elevation smoothing
 */
export function buildCentreline(points, times, { spacing = 2, sigma = 15 } = {}) {
  const n = points.length;
  const curve = new CatmullRomCurve3(
    points.map((p) => new Vector3(p.x, p.y, p.z)),
    true,
    "centripetal"
  );
  curve.arcLengthDivisions = n * ARC_DIVISIONS;
  const lengths = curve.getLengths(n * ARC_DIVISIONS);
  const length = lengths[lengths.length - 1];
  // Arc length at each reference sample: sample k sits at curve parameter k / n.
  const rawArcs = Array.from({ length: n }, (_, k) => lengths[k * ARC_DIVISIONS]);

  const count = Math.max(8, Math.round(length / spacing));
  const step = length / count;
  const x = new Float64Array(count);
  const y = new Float64Array(count);
  const z = new Float64Array(count);
  const t = new Float64Array(count);
  const point = new Vector3();
  let k = 0;
  for (let i = 0; i < count; i++) {
    curve.getPointAt(i / count, point);
    x[i] = point.x;
    y[i] = point.y;
    z[i] = point.z;
    // The reference lap's own time at this point: linear between the samples on either side.
    const s = i * step;
    while (k < n - 2 && rawArcs[k + 1] <= s) k++;
    const span = rawArcs[k + 1] - rawArcs[k];
    const u = span > 0 ? Math.min(1, Math.max(0, (s - rawArcs[k]) / span)) : 0;
    t[i] = times[k] + u * (times[k + 1] - times[k]);
  }

  // Elevation is smoothed (a Gaussian, wrapped round the loop) so GPS noise does not ripple the road.
  const radius = Math.max(1, Math.round((3 * sigma) / step));
  const weights = Array.from({ length: 2 * radius + 1 }, (_, j) =>
    Math.exp(-0.5 * (((j - radius) * step) / sigma) ** 2)
  );
  const total = weights.reduce((a, b) => a + b, 0);
  const smoothY = new Float64Array(count);
  for (let i = 0; i < count; i++) {
    let sum = 0;
    for (let j = -radius; j <= radius; j++) sum += weights[j + radius] * y[wrap(i + j, count)];
    smoothY[i] = sum / total;
  }

  // Direction of travel and left normal in the ground plane.
  const tx = new Float64Array(count);
  const tz = new Float64Array(count);
  for (let i = 0; i < count; i++) {
    const dx = x[wrap(i + 1, count)] - x[wrap(i - 1, count)];
    const dz = z[wrap(i + 1, count)] - z[wrap(i - 1, count)];
    const len = Math.hypot(dx, dz) || 1;
    tx[i] = dx / len;
    tz[i] = dz / len;
  }
  const nx = tz.map((value) => -value);
  const nz = tx;

  return { count, spacing: step, length, x, y: smoothY, z, t, tx, tz, nx, nz, rawArcs, rawTimes: times, curve };
}

/**
 * The edge `offset` metres to the left of the centreline (negative: right). Where a tight bend would make the
 * offset edge run backwards, its vertices collapse onto the last valid one until it moves forward again, so
 * the ribbon never folds. Returns { x, y, z, collapsed }.
 */
export function offsetEdge(c, offset) {
  const x = new Float64Array(c.count);
  const z = new Float64Array(c.count);
  let lastX = c.x[0] + c.nx[0] * offset;
  let lastZ = c.z[0] + c.nz[0] * offset;
  x[0] = lastX;
  z[0] = lastZ;
  let collapsed = 0;
  for (let i = 1; i < c.count; i++) {
    const candX = c.x[i] + c.nx[i] * offset;
    const candZ = c.z[i] + c.nz[i] * offset;
    if ((candX - lastX) * c.tx[i] + (candZ - lastZ) * c.tz[i] > 0) {
      lastX = candX;
      lastZ = candZ;
    } else {
      collapsed++;
    }
    x[i] = lastX;
    z[i] = lastZ;
  }
  return { x, y: c.y, z, collapsed };
}

/**
 * For each centreline point, whether the road passes over a lower road there (a bridge). Skirts under a
 * deck would cut through the road below, so they are left out where this is true.
 */
export function overpassMask(c, { reach = 14, drop = 1, minGap = 150 } = {}) {
  const cell = reach;
  const grid = new Map();
  const key = (cx, cz) => `${cx},${cz}`;
  for (let i = 0; i < c.count; i++) {
    const id = key(Math.floor(c.x[i] / cell), Math.floor(c.z[i] / cell));
    if (!grid.has(id)) grid.set(id, []);
    grid.get(id).push(i);
  }
  const gap = Math.ceil(minGap / c.spacing);
  const mask = new Uint8Array(c.count);
  for (let i = 0; i < c.count; i++) {
    const cx = Math.floor(c.x[i] / cell);
    const cz = Math.floor(c.z[i] / cell);
    search: for (let dx = -1; dx <= 1; dx++) {
      for (let dz = -1; dz <= 1; dz++) {
        for (const k of grid.get(key(cx + dx, cz + dz)) || []) {
          const apart = Math.abs(k - i);
          if (Math.min(apart, c.count - apart) < gap) continue;
          if (Math.hypot(c.x[k] - c.x[i], c.z[k] - c.z[i]) < reach && c.y[k] < c.y[i] - drop) {
            mask[i] = 1;
            break search;
          }
        }
      }
    }
  }
  return mask;
}

/**
 * The road under (x, z): height and pitch. `hint` is a centreline index (a car's last one); with it the search
 * is a window of ±40 points, which is O(1) and keeps a car on its own level where the road crosses itself.
 * Without a hint the whole loop is searched. Writes into `out` when given.
 */
export function surfaceAt(c, px, pz, hint = -1, out = {}) {
  const from = hint >= 0 ? hint - HALF_WINDOW : 0;
  const to = hint >= 0 ? hint + HALF_WINDOW : c.count - 1;
  let best = Infinity;
  for (let raw = from; raw <= to; raw++) {
    const i = wrap(raw, c.count);
    const j = wrap(i + 1, c.count);
    const vx = c.x[j] - c.x[i];
    const vz = c.z[j] - c.z[i];
    const len2 = vx * vx + vz * vz;
    const u = len2 ? Math.max(0, Math.min(1, ((px - c.x[i]) * vx + (pz - c.z[i]) * vz) / len2)) : 0;
    const dx = c.x[i] + u * vx - px;
    const dz = c.z[i] + u * vz - pz;
    const d2 = dx * dx + dz * dz;
    if (d2 < best) {
      best = d2;
      out.index = i;
      out.y = c.y[i] + u * (c.y[j] - c.y[i]);
      out.pitch = Math.atan2(c.y[j] - c.y[i], Math.sqrt(len2) || 1);
    }
  }
  return out;
}

/** The centreline at arc length `s` metres (wrapped): position and direction of travel. */
export function pointAtArc(c, s, out = {}) {
  const f = wrap(s, c.length) / c.spacing;
  const i = Math.floor(f) % c.count;
  const j = (i + 1) % c.count;
  const u = f - Math.floor(f);
  out.x = c.x[i] + u * (c.x[j] - c.x[i]);
  out.y = c.y[i] + u * (c.y[j] - c.y[i]);
  out.z = c.z[i] + u * (c.z[j] - c.z[i]);
  out.tx = c.tx[i];
  out.tz = c.tz[i];
  return out;
}

/**
 * Where the lap starts. OpenF1 samples begin a fraction of a second inside the lap, so the start line is
 * that far back along the path, at the speed of the first two samples (the idea gap.js uses too).
 */
export function startLine(c, out = {}) {
  const [a, b] = c.rawTimes;
  const speed = (c.rawArcs[1] - c.rawArcs[0]) / (b - a || 1);
  return pointAtArc(c, -c.rawTimes[0] * speed, out);
}
