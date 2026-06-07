import { MathUtils } from "three";
import { lerp } from "../helpers.js";

export function frameLerp(base, dt) {
  const clampedBase = MathUtils.clamp(base, 0, 0.999);
  return 1 - Math.pow(1 - clampedBase, Math.max(dt, 1 / 240) * 60);
}

export function isFollowCameraMode(cameraMode) {
  return cameraMode === "follow1" || cameraMode === "follow2";
}

export function updateReplayCameraTargets({
  cameraMode,
  p1,
  p2,
  progress,
  primaryPath,
  secondaryPath,
  fallbackPath,
  telemetry,
  curve,
  cinematicTime,
  sampleNoise,
  targetPosition,
  targetLook,
}) {
  if (!p1 || !p2) return;

  if (cameraMode === "follow1" || cameraMode === "follow2") {
    const target = cameraMode === "follow1" ? p1 : p2;
    const path = cameraMode === "follow1" ? primaryPath || fallbackPath : secondaryPath || fallbackPath;
    const ahead = lerp(path, Math.min(1, progress + 0.02));
    const dx = ahead.x - target.x;
    const dz = ahead.z - target.z;
    const len = Math.sqrt(dx * dx + dz * dz) || 1;
    const telNow = telemetry?.length ? telemetry[Math.floor(progress * (telemetry.length - 1))] : null;
    const braking = telNow?.brake > 0 ? 1 : 0;
    const shakeX = braking * sampleNoise(0) * 0.06;
    const shakeY = braking * sampleNoise(37) * 0.04;

    targetPosition.set(target.x - (dx / len) * 8 + shakeX, target.y + 4.5 + shakeY, target.z - (dz / len) * 8);
    targetLook.set(ahead.x + shakeX * 0.5, target.y + 0.3, ahead.z);
  } else if (cameraMode === "cinematic" && curve) {
    const cinematicProgress = (cinematicTime + progress * 0.3) % 1;
    const curvePoint = curve.getPointAt(cinematicProgress);
    const telNow = telemetry?.length ? telemetry[Math.floor(progress * (telemetry.length - 1))] : null;
    const brakingShake = telNow?.brake > 0 ? 0.06 : 0;

    targetPosition.set(
      curvePoint.x + 8 + sampleNoise(71) * brakingShake,
      curvePoint.y + 5,
      curvePoint.z + 8 + sampleNoise(149) * brakingShake
    );
    targetLook.set((p1.x + p2.x) / 2, (p1.y + p2.y) / 2, (p1.z + p2.z) / 2);
  }
}

export function updateManualCameraTargets({ cameraMode, controls, isPlaying, targetPosition, targetLook }) {
  let needsRender = false;

  if (cameraMode === "orbit") {
    if (!controls.drag && isPlaying) {
      controls.angle += 0.0008;
      needsRender = true;
    }
    targetPosition.set(
      Math.cos(controls.angle) * controls.dist * Math.cos(controls.pitch),
      controls.dist * Math.sin(controls.pitch),
      Math.sin(controls.angle) * controls.dist * Math.cos(controls.pitch)
    );
    targetLook.set(0, 0, 0);
  } else if (cameraMode === "top") {
    targetPosition.set(0, 65, 0.01);
    targetLook.set(0, 0, 0);
  }

  return needsRender;
}

export function applyCameraMotion({
  camera,
  targetPosition,
  targetLook,
  previousPosition,
  previousQuaternion,
  followCamera,
  deltaTime,
}) {
  previousPosition.copy(camera.position);
  previousQuaternion.copy(camera.quaternion);
  camera.position.lerp(targetPosition, frameLerp(followCamera ? 0.12 : 0.08, deltaTime));
  camera.lookAt(targetLook);
  return (
    camera.position.distanceToSquared(previousPosition) > 1e-6 ||
    1 - Math.abs(camera.quaternion.dot(previousQuaternion)) > 1e-6
  );
}
