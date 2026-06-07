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

function updateSectorMarkers({ sceneState, progress, now, isPlaying, hasRendered, lastSector }) {
  const curSector = progress < 0.333 ? 0 : progress < 0.666 ? 1 : 2;
  const sectorChanged = curSector !== lastSector;
  const nextSector = sectorChanged ? curSector : lastSector;
  const sectorMarkers = sceneState.sectorMarkers;

  if (sectorMarkers?.mesh && sectorMarkers?.defs?.length && (sectorChanged || isPlaying || !hasRendered)) {
    const markerDummy = sceneState._markerDummy || (sceneState._markerDummy = new Object3D());
    sectorMarkers.defs.forEach((marker, index) => {
      const pulse = marker.sector === curSector ? (isPlaying ? 1.12 + Math.sin(now * 0.006) * 0.08 : 1.12) : 0.82;
      markerDummy.position.copy(marker.position);
      markerDummy.rotation.set(-Math.PI / 2, 0, 0);
      markerDummy.scale.setScalar(marker.baseScale * pulse);
      markerDummy.updateMatrix();
      sectorMarkers.mesh.setMatrixAt(index, markerDummy.matrix);
    });
    sectorMarkers.mesh.instanceMatrix.needsUpdate = true;
    return { needsRender: true, lastSector: nextSector };
  }

  return { needsRender: false, lastSector: nextSector };
}

export function updateCarsAndMarkers({
  sceneState,
  trackPath,
  progress,
  progressChanged,
  isPlaying,
  deltaTime,
  playbackSpeed,
  followCamera,
  now,
  lastSector,
  hasRendered,
}) {
  const { car1, car2, tr1, tr2, spot1, spot2, deltaLine, deltaPos } = sceneState;
  if (!car1 || !car2 || !trackPath || trackPath.length < 2) {
    return { needsRender: false, lastSector, p1: null, p2: null };
  }

  let needsRender = false;
  const headingHelper = sceneState._headingHelper || (sceneState._headingHelper = new Object3D());
  const baseRotLerp = MathUtils.clamp(0.16 - playbackSpeed * 0.02, 0.08, 0.16);
  const rotationLerp = frameLerp(followCamera ? Math.min(baseRotLerp + 0.02, 0.18) : baseRotLerp, deltaTime);
  const positionLerp = frameLerp(MathUtils.clamp(0.34 - playbackSpeed * 0.04, 0.18, 0.34), deltaTime);

  const rawP1 = lerp(sceneState.n1?.length >= 2 ? sceneState.n1 : trackPath, progress);
  const rawP2 = lerp(sceneState.n2?.length >= 2 ? sceneState.n2 : trackPath, progress);
  const dist = Math.sqrt((rawP1.x - rawP2.x) ** 2 + (rawP1.z - rawP2.z) ** 2);
  const closeThreshold = 3.0;
  const maxOffset = 0.7;
  const proximity = Math.max(0, 1 - dist / closeThreshold);
  const lateralOffset = proximity * maxOffset;
  const shouldAdvanceTrail = isPlaying || progressChanged;

  const updateOptions = {
    fallbackPath: trackPath,
    progress,
    updateTrail: shouldAdvanceTrail,
    deltaTime,
    playbackSpeed,
    rotationLerp,
    positionLerp,
    headingHelper,
  };
  const p1 = updateCar({
    ...updateOptions,
    car: car1,
    trail: tr1,
    data: sceneState.n1,
    targetLateralOffset: lateralOffset,
  });
  const p2 = updateCar({
    ...updateOptions,
    car: car2,
    trail: tr2,
    data: sceneState.n2,
    targetLateralOffset: -lateralOffset,
  });
  needsRender = needsRender || p1.dirty || p2.dirty;

  if (sceneState.car3) {
    const p3 = updateCar({
      ...updateOptions,
      car: sceneState.car3,
      trail: sceneState.tr3,
      data: sceneState.n3,
      targetLateralOffset: lateralOffset * 0.5,
    });
    needsRender = needsRender || p3.dirty;
  }
  if (sceneState.car4) {
    const p4 = updateCar({
      ...updateOptions,
      car: sceneState.car4,
      trail: sceneState.tr4,
      data: sceneState.n4,
      targetLateralOffset: -lateralOffset * 0.5,
    });
    needsRender = needsRender || p4.dirty;
  }

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

  const markerUpdate = updateSectorMarkers({
    sceneState,
    progress,
    now,
    isPlaying,
    hasRendered,
    lastSector,
  });
  needsRender = needsRender || markerUpdate.needsRender;

  return { needsRender, lastSector: markerUpdate.lastSector, p1, p2 };
}
