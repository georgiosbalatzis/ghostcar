import { MathUtils } from "three";

// Camera maths without a scene: framing, the 2D orientation, a critically damped spring and the TV director.

/**
 * Distance from the look target at which the whole circuit fits the stage with `margin` (a share of the stage)
 * to spare on the tighter axis. `bounds` is { width, depth, height } centred on x and z and standing on y = 0;
 * the camera looks at (0, height / 2, 0) from elevation `pitch` (radians above the horizon) and azimuth `yaw`.
 * Every corner of the box has to project inside the frame; each is one linear condition on the distance.
 */
export function fitDistance(bounds, fovDeg, aspect, pitch, yaw, margin = 0.08) {
  const tanY = Math.tan(MathUtils.degToRad(fovDeg) / 2) * (1 - margin);
  const tanX = tanY * aspect;
  // View direction (camera to target) and the camera's right and up axes.
  const polar = Math.PI / 2 - pitch;
  const away = [Math.sin(polar) * Math.sin(yaw), Math.cos(polar), Math.sin(polar) * Math.cos(yaw)];
  const forward = away.map((value) => -value);
  const sideways = [-forward[2], 0, forward[0]]; // forward × (0, 1, 0)
  const length = Math.hypot(...sideways);
  // Straight down there is no horizon: right is then the azimuth's own direction.
  const right = length > 1e-6 ? sideways.map((value) => value / length) : [Math.cos(yaw), 0, -Math.sin(yaw)];
  const up = [
    right[1] * forward[2] - right[2] * forward[1],
    right[2] * forward[0] - right[0] * forward[2],
    right[0] * forward[1] - right[1] * forward[0],
  ];
  let distance = 0;
  for (const sx of [-1, 1]) {
    for (const sy of [-0.5, 0.5]) {
      for (const sz of [-1, 1]) {
        const p = [(sx * bounds.width) / 2, sy * bounds.height, (sz * bounds.depth) / 2];
        const dot = (axis) => p[0] * axis[0] + p[1] * axis[1] + p[2] * axis[2];
        const depthAlong = dot(forward);
        // |x| ≤ tanX (d + depth) and |y| ≤ tanY (d + depth)  ⇒  d ≥ |x| / tan − depth
        distance = Math.max(distance, Math.abs(dot(right)) / tanX - depthAlong, Math.abs(dot(up)) / tanY - depthAlong);
      }
    }
  }
  return distance;
}

/**
 * The yaw (camera azimuth about +y) at which the screen matches the 2D map: right is world +x and down the page is
 * world +z. The circuit flip is already in the world frame's x (as it is in 2D's normalisation), so it is 0 for
 * both.
 */
export function yawFor2D() {
  return 0;
}

/**
 * One step of a critically damped spring for a vector: `current` and `velocity` ({x, y, z}) are updated in
 * place toward `target`. `omega` is the stiffness (1 / omega is about the time constant, in seconds).
 */
export function springStep(current, target, velocity, omega, dt) {
  const decay = Math.exp(-omega * dt);
  // Three axes written out: a loop over ["x", "y", "z"] would build an array every frame.
  let offset = current.x - target.x;
  let impulse = (velocity.x + omega * offset) * dt;
  current.x = target.x + (offset + impulse) * decay;
  velocity.x = (velocity.x - omega * impulse) * decay;
  offset = current.y - target.y;
  impulse = (velocity.y + omega * offset) * dt;
  current.y = target.y + (offset + impulse) * decay;
  velocity.y = (velocity.y - omega * impulse) * decay;
  offset = current.z - target.z;
  impulse = (velocity.z + omega * offset) * dt;
  current.z = target.z + (offset + impulse) * decay;
  velocity.z = (velocity.z - omega * impulse) * decay;
}

export const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

const wrap = (value, length) => ((value % length) + length) % length;

/**
 * Trackside TV camera stations every `spacing` metres of road. On a bend a station is on the outside of it (the
 * side the car swings toward), on a straight they alternate sides. Each is pushed out from the centreline until
 * it clears every road point by 15 m, so a camera never stands on the tarmac or in another stretch of road.
 * Returns [{ s, x, y, z }] with y the camera height.
 */
export function placeTvCameras(c, { spacing = 250, offset = 30, height = 8 } = {}) {
  const stations = [];
  const count = Math.max(1, Math.round(c.length / spacing));
  const reach = 50 / c.spacing;
  for (let k = 0; k < count; k++) {
    const s = (k * c.length) / count;
    const i = Math.round(s / c.spacing) % c.count;
    const before = wrap(Math.round(i - reach), c.count);
    const after = wrap(Math.round(i + reach), c.count);
    // Which way the road turns over ±50 m: the change of direction, along the left normal.
    const turn = (c.tx[after] - c.tx[before]) * c.nx[i] + (c.tz[after] - c.tz[before]) * c.nz[i];
    const bend = Math.abs(turn) > 0.035; // about 2°
    const outside = bend ? (turn > 0 ? -1 : 1) : k % 2 ? 1 : -1;
    let best = null;
    for (const side of [outside, -outside]) {
      for (const distance of [offset, offset * 1.5, offset * 2, offset * 3]) {
        const x = c.x[i] + c.nx[i] * side * distance;
        const z = c.z[i] + c.nz[i] * side * distance;
        let nearest = Infinity;
        for (let j = 0; j < c.count; j++) nearest = Math.min(nearest, Math.hypot(c.x[j] - x, c.z[j] - z));
        if (!best || nearest > best.nearest) best = { x, z, nearest };
        if (nearest >= 15) break;
      }
      if (best.nearest >= 15) break;
    }
    stations.push({ s, x: best.x, y: c.y[i] + height, z: best.z });
  }
  return stations;
}

const WINDOW_BEHIND = 60;
const WINDOW_AHEAD = 220;
const HOLD_SECONDS = 2.5;

/**
 * The station to use while the car is at arc length `focusS`: the nearest one ahead of it (up to 220 m, or 60 m
 * behind). The current station is kept for at least 2.5 s and while the car is still in its window, so the
 * picture cuts calmly.
 */
export function pickTvCamera(stations, focusS, currentIndex, heldFor, length) {
  const ahead = (station) => {
    const d = wrap(station.s - focusS + length / 2, length) - length / 2;
    return d;
  };
  const inWindow = (station) => {
    const d = ahead(station);
    return d >= -WINDOW_BEHIND && d <= WINDOW_AHEAD;
  };
  if (currentIndex >= 0 && heldFor < HOLD_SECONDS && inWindow(stations[currentIndex])) return currentIndex;
  let best = -1;
  let bestDistance = Infinity;
  stations.forEach((station, index) => {
    const d = ahead(station);
    if (d >= -WINDOW_BEHIND && d < bestDistance) {
      best = index;
      bestDistance = d;
    }
  });
  return best >= 0 ? best : Math.max(0, currentIndex);
}

/** Vertical field of view (degrees) that shows about 14 m at the subject's distance, between 6° and 45°. */
export const tvFov = (distance) =>
  MathUtils.clamp(MathUtils.radToDeg(2 * Math.atan(14 / (2 * Math.max(1, distance)))), 6, 45);
