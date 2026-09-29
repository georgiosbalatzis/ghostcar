import { MathUtils, Object3D, Quaternion } from "three";
import { lerp } from "../helpers.js";
import { frameLerp } from "./cameras.js";

function updateCar({
  car,
  trail,
  data,
  fallbackPath,
  progress,
  targetLateralOffset,
  updateTrail,
  deltaTime,
  playbackSpeed,
  rotationLerp,
  positionLerp,
  headingHelper,
}) {
  let localDirty = false;
  const points = data?.length >= 2 ? data : fallbackPath;
  const point = lerp(points, progress);
  if (isNaN(point.x)) return { x: 0, y: 0, z: 0 };
  const aheadPoint = lerp(points, Math.min(1, progress + 0.01));

  let ox = 0;
  let oz = 0;
  const lateralState = car.userData.lateral || (car.userData.lateral = { offset: 0, velocity: 0 });
  lateralState.velocity += (targetLateralOffset - lateralState.offset) * 80 * deltaTime;
  lateralState.velocity -= lateralState.velocity * 14 * deltaTime;
  lateralState.offset += lateralState.velocity * deltaTime;
  if (
    Math.abs(lateralState.offset) < 1e-4 &&
    Math.abs(targetLateralOffset) < 1e-4 &&
    Math.abs(lateralState.velocity) < 1e-4
  ) {
    lateralState.offset = 0;
    lateralState.velocity = 0;
  }
  if (Math.abs(targetLateralOffset - lateralState.offset) > 1e-4 || Math.abs(lateralState.velocity) > 1e-4) {
    localDirty = true;
  }
  if (lateralState.offset !== 0) {
    const dx = aheadPoint.x - point.x;
    const dz = aheadPoint.z - point.z;
    const len = Math.sqrt(dx * dx + dz * dz) || 1;
    ox = (-dz / len) * lateralState.offset;
    oz = (dx / len) * lateralState.offset;
  }

  const tx = point.x + ox;
  const ty = point.y + 0.2;
  const tz = point.z + oz;
  if (!car.userData.pos) {
    car.userData.pos = { x: tx, y: ty, z: tz };
    localDirty = true;
  } else {
    const prevX = car.userData.pos.x;
    const prevY = car.userData.pos.y;
    const prevZ = car.userData.pos.z;
    car.userData.pos.x += (tx - car.userData.pos.x) * positionLerp;
    car.userData.pos.y += (ty - car.userData.pos.y) * positionLerp;
    car.userData.pos.z += (tz - car.userData.pos.z) * positionLerp;
    if (
      (car.userData.pos.x - prevX) ** 2 + (car.userData.pos.y - prevY) ** 2 + (car.userData.pos.z - prevZ) ** 2 >
      1e-6
    ) {
      localDirty = true;
    }
  }
  car.position.set(car.userData.pos.x, car.userData.pos.y, car.userData.pos.z);

  if (Math.abs(aheadPoint.x - point.x) + Math.abs(aheadPoint.z - point.z) > 0.0001 && !isNaN(aheadPoint.x)) {
    const fwdX = aheadPoint.x - point.x;
    const fwdZ = aheadPoint.z - point.z;
    const fLen = Math.sqrt(fwdX * fwdX + fwdZ * fwdZ);
    if (fLen > 0) {
      const nx = fwdX / fLen;
      const nz = fwdZ / fLen;
      if (!car.userData.fwd) {
        car.userData.fwd = { x: nx, z: nz };
      } else {
        const forwardLerp = frameLerp(MathUtils.clamp(0.18 - playbackSpeed * 0.025, 0.06, 0.18), deltaTime);
        car.userData.fwd.x += (nx - car.userData.fwd.x) * forwardLerp;
        car.userData.fwd.z += (nz - car.userData.fwd.z) * forwardLerp;
      }
      const prevQuat = car.userData.prevQuat || (car.userData.prevQuat = new Quaternion());
      prevQuat.copy(car.quaternion);
      headingHelper.position.copy(car.position);
      headingHelper.lookAt(point.x + ox + car.userData.fwd.x, point.y + 0.2, point.z + oz + car.userData.fwd.z);
      car.quaternion.slerp(headingHelper.quaternion, rotationLerp);
      if (1 - Math.abs(car.quaternion.dot(prevQuat)) > 1e-6) localDirty = true;
    }
  }

  if (trail && updateTrail) {
    const count = Math.min(trail.count + 1, trail.max);
    if (count > 1) {
      trail.positions.copyWithin(3, 0, (count - 1) * 3);
      trail.alphas.copyWithin(1, 0, count - 1);
    }
    trail.positions[0] = car.userData.pos.x;
    trail.positions[1] = car.userData.pos.y - 0.15;
    trail.positions[2] = car.userData.pos.z;
    for (let i = count - 1; i >= 1; i--) trail.alphas[i] *= 0.97;
    trail.alphas[0] = 1.0;
    trail.count = count;
    trail.mesh.geometry.attributes.position.needsUpdate = true;
    trail.mesh.geometry.attributes.alpha.needsUpdate = true;
    trail.mesh.geometry.setDrawRange(0, count);
    localDirty = true;
  }

  return { x: car.userData.pos.x, y: car.userData.pos.y - 0.2, z: car.userData.pos.z, dirty: localDirty };
}

export function updateCarsAndMarkers({
  sceneState,
  trackPath,
  carProgress,
  jumped,
  isPlaying,
  deltaTime,
  playbackSpeed,
  followCamera,
}) {
  const { cars, trails, paths, spot1, spot2, deltaLine, deltaPos } = sceneState;
  if (!cars?.[0] || !cars[1] || !trackPath || trackPath.length < 2) {
    return { needsRender: false, p1: null, p2: null };
  }

  let needsRender = false;
  const headingHelper = sceneState._headingHelper || (sceneState._headingHelper = new Object3D());
  const baseRotLerp = MathUtils.clamp(0.16 - playbackSpeed * 0.02, 0.08, 0.16);
  const rotationLerp = frameLerp(followCamera ? Math.min(baseRotLerp + 0.02, 0.18) : baseRotLerp, deltaTime);
  const positionLerp = frameLerp(MathUtils.clamp(0.34 - playbackSpeed * 0.04, 0.18, 0.34), deltaTime);

  // carProgress: each car's own position (fraction of its samples) at the shared clock.
  const rawP1 = lerp(paths[0]?.length >= 2 ? paths[0] : trackPath, carProgress[0]);
  const rawP2 = lerp(paths[1]?.length >= 2 ? paths[1] : trackPath, carProgress[1]);
  const dist = Math.sqrt((rawP1.x - rawP2.x) ** 2 + (rawP1.z - rawP2.z) ** 2);
  const closeThreshold = 3.0;
  const maxOffset = 0.7;
  const proximity = Math.max(0, 1 - dist / closeThreshold);
  const lateralOffset = proximity * maxOffset;
  // Trails are the path just driven, so they only grow during playback. After a jump they are cleared: otherwise a
  // single point recorded mid-glide stays behind as a stray dot (the "two coloured dots" of earlier versions).
  if (jumped) {
    for (const trail of trails) {
      if (!trail?.count) continue;
      trail.count = 0;
      trail.mesh.geometry.setDrawRange(0, 0);
      needsRender = true;
    }
  }
  const shouldAdvanceTrail = isPlaying && !jumped;

  const updateOptions = {
    fallbackPath: trackPath,
    updateTrail: shouldAdvanceTrail,
    deltaTime,
    playbackSpeed,
    rotationLerp,
    positionLerp,
    headingHelper,
  };
  // Slots 1 and 2 pass on either side when close; slots 3 and 4 half as far.
  const lateralTargets = [lateralOffset, -lateralOffset, lateralOffset * 0.5, -lateralOffset * 0.5];
  const poses = cars.map((car, slot) =>
    car
      ? updateCar({
          ...updateOptions,
          car,
          progress: carProgress[slot],
          trail: trails[slot],
          data: paths[slot],
          targetLateralOffset: lateralTargets[slot],
        })
      : null
  );
  const [p1, p2] = poses;
  needsRender = needsRender || poses.some((pose) => pose?.dirty);

  if (spot1) spot1.position.set(p1.x, p1.y + 12, p1.z);
  if (spot2) spot2.position.set(p2.x, p2.y + 12, p2.z);
  if (deltaLine && deltaPos) {
    deltaPos[0] = p1.x;
    deltaPos[1] = p1.y + 0.5;
    deltaPos[2] = p1.z;
    deltaPos[3] = p2.x;
    deltaPos[4] = p2.y + 0.5;
    deltaPos[5] = p2.z;
    deltaLine.geometry.attributes.position.needsUpdate = true;
    const gap = Math.sqrt((p1.x - p2.x) ** 2 + (p1.z - p2.z) ** 2);
    deltaLine.material.opacity = Math.min(0.6, gap * 0.08);
  }

  return { needsRender, p1, p2 };
}
