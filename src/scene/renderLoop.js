import { MathUtils, Quaternion, Vector3 } from "three";
import {
  applyCameraMotion,
  isFollowCameraMode,
  updateManualCameraTargets,
  updateReplayCameraTargets,
} from "./cameras.js";
import { fractionAtTime } from "../domain/timing.js";
import { updateCarsAndMarkers } from "./updateCars.js";

export function startSceneRenderLoop({
  sceneStateRef,
  renderer,
  scene,
  camera,
  trackPath,
  cameraModeRef,
  controls,
  inputControls,
  targetPosition,
  targetLook,
  shakeNoise,
  adaptiveQuality,
  isMob,
  isContextLost,
  onRenderError,
}) {
  const ACTIVE_MS = 0; // Let active playback run at the display refresh rate.
  const IDLE_MS = isMob ? 100 : 66;
  const HIDDEN_MS = 220;
  const prevCameraPos = new Vector3();
  const prevCameraQuat = new Quaternion();
  let lastFrameTime = 0;
  let lastProg = -1;
  let lastCamMode = cameraModeRef.current;
  let lastPlayState = false;
  let lastSceneVisible = false;
  let hasRendered = false;
  let lastSimTime = 0;
  let noiseFrame = 0;
  let cancelled = false;

  // Near, far and fog follow the camera's distance to what it looks at: a chase camera 12 m from a car and an
  // overview 2 km from the circuit both keep their depth precision. Returns true when they changed.
  function updateClipping() {
    const { diagonal } = sceneStateRef.current.world;
    const distance = camera.position.distanceTo(targetLook);
    const near = MathUtils.clamp(distance * 0.005, 0.3, 30);
    let changed = false;
    if (Math.abs(near - camera.near) > camera.near * 0.1) {
      camera.near = near;
      camera.far = Math.max(2000, diagonal * 6);
      camera.updateProjectionMatrix();
      changed = true;
    }
    const fog = scene.fog;
    const fogNear = distance + 0.6 * diagonal;
    if (fog && Math.abs(fog.near - fogNear) > 0.01 * fogNear) {
      fog.near = fogNear;
      fog.far = distance + 1.6 * diagonal;
      changed = true;
    }
    return changed;
  }

  function animate(now = performance.now()) {
    if (cancelled || isContextLost()) return;
    const sceneState = sceneStateRef.current;
    sceneState.fr = requestAnimationFrame(animate);
    const isSceneVisible = !document.hidden;
    const isPlaying = !!sceneState._playRef?.current;
    const isActive = !!(isPlaying || inputControls.isActive());
    const targetFrameMs = !isSceneVisible ? HIDDEN_MS : isActive ? ACTIVE_MS : IDLE_MS;
    if (targetFrameMs > 0 && now - lastFrameTime < targetFrameMs) return;
    const prevFrameTime = lastFrameTime;
    lastFrameTime = now;
    adaptiveQuality.recordFrame({ now, previousFrameTime: prevFrameTime, isSceneVisible });
    if (!isSceneVisible) {
      lastSceneVisible = false;
      lastSimTime = 0;
      return;
    }

    const dt = lastSimTime ? Math.min((now - lastSimTime) / 1000, 0.05) : 1 / 60;
    lastSimTime = now;
    noiseFrame = (noiseFrame + 1) & 255;
    const prog = sceneState._progRef?.current ?? 0;
    const progChanged = prog !== lastProg;
    // A seek while paused, a scrub or the loop restarting moves the cars in one step: their trails must start over.
    const jumped = progChanged && (!sceneState._playRef?.current || Math.abs(prog - lastProg) > 0.01);
    if (progChanged) lastProg = prog;
    // prog is the shared clock (share of the slowest lap); each car's position comes from its own timestamps.
    const timing = sceneState._timingRef?.current;
    const clock = prog * (timing?.duration || 0);
    const carProgress = [0, 1, 2, 3].map((slot) =>
      timing?.pathTimes[slot]?.length ? fractionAtTime(timing.pathTimes[slot], clock) : prog
    );
    const cameraMode = cameraModeRef.current;
    const playbackSpeed = Math.max(0.25, sceneState._speedRef?.current ?? 1);
    const followCamera = isFollowCameraMode(cameraMode);
    const sampleNoise = (offset = 0) => shakeNoise[(noiseFrame + offset) & 255];
    let needsRender =
      !hasRendered ||
      !!sceneState._dirty ||
      progChanged ||
      cameraMode !== lastCamMode ||
      isPlaying !== lastPlayState ||
      !lastSceneVisible;
    lastCamMode = cameraMode;
    lastPlayState = isPlaying;
    lastSceneVisible = true;
    if (isPlaying) {
      controls.cinT += 0.0003;
      needsRender = true;
    }

    const carUpdate = updateCarsAndMarkers({
      sceneState,
      trackPath,
      carProgress,
      jumped,
      isPlaying,
      deltaTime: dt,
      playbackSpeed,
      followCamera,
    });
    needsRender = needsRender || carUpdate.needsRender;

    updateReplayCameraTargets({
      cameraMode,
      p1: carUpdate.p1,
      p2: carUpdate.p2,
      progress: prog,
      carProgress,
      primaryPath: sceneState.paths[0],
      secondaryPath: sceneState.paths[1],
      fallbackPath: trackPath,
      telemetry: sceneState._telData1,
      curve: sceneState.curve,
      cinematicTime: controls.cinT,
      sampleNoise,
      targetPosition,
      targetLook,
    });
    needsRender =
      updateManualCameraTargets({
        cameraMode,
        controls,
        isPlaying,
        targetPosition,
        targetLook,
        world: sceneState.world,
        camera,
      }) || needsRender;
    needsRender =
      applyCameraMotion({
        camera,
        targetPosition,
        targetLook,
        previousPosition: prevCameraPos,
        previousQuaternion: prevCameraQuat,
        followCamera,
        deltaTime: dt,
      }) || needsRender;
    needsRender = updateClipping() || needsRender;
    if (!needsRender) return;
    try {
      renderer.render(scene, camera);
      hasRendered = true;
      sceneState._rendered = true;
      sceneState._dirty = false;
    } catch (error) {
      onRenderError(error);
    }
  }

  animate();

  return () => {
    cancelled = true;
    const sceneState = sceneStateRef.current;
    if (sceneState.fr) cancelAnimationFrame(sceneState.fr);
    sceneState.fr = null;
  };
}
