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
  carProgress,
  primaryPath,
  secondaryPath,
  fallbackPath,
  curve,
  cinematicTime,
  targetPosition,
  targetLook,
}) {
  if (!p1 || !p2) return;

  if (cameraMode === "follow1" || cameraMode === "follow2") {
    const target = cameraMode === "follow1" ? p1 : p2;
    const path = cameraMode === "follow1" ? primaryPath || fallbackPath : secondaryPath || fallbackPath;
    // The followed car's own position; its telemetry is sampled at about the same share of its lap.
    const own = carProgress[cameraMode === "follow1" ? 0 : 1];
    const ahead = lerp(path, Math.min(1, own + 0.02));
    const dx = ahead.x - target.x;
    const dz = ahead.z - target.z;
    const len = Math.sqrt(dx * dx + dz * dz) || 1;
    targetPosition.set(target.x - (dx / len) * 12, target.y + 4, target.z - (dz / len) * 12);
    targetLook.set(ahead.x, target.y + 0.3, ahead.z);
  } else if (cameraMode === "cinematic" && curve) {
    const cinematicProgress = (cinematicTime + progress * 0.3) % 1;
    const curvePoint = curve.getPointAt(cinematicProgress);
    targetPosition.set(curvePoint.x + 60, curvePoint.y + 35, curvePoint.z + 60);
    targetLook.set((p1.x + p2.x) / 2, (p1.y + p2.y) / 2, (p1.z + p2.z) / 2);
  }
}

export function updateManualCameraTargets({
  cameraMode,
  controls,
  isPlaying,
  targetPosition,
  targetLook,
  world,
  camera,
}) {
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
    targetLook.set(0, world.height / 2, 0);
  } else if (cameraMode === "top") {
    // High enough that the whole circuit fits the stage, on either axis.
    const half = Math.tan(MathUtils.degToRad(camera.fov / 2));
    const fit = (Math.max(world.depth, world.width / camera.aspect) * 1.15) / (2 * half);
    targetPosition.set(0, world.height + fit, 0.01);
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
