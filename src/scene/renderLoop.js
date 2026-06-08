import { Quaternion, Vector3 } from "three";
import {
  applyCameraMotion,
  isFollowCameraMode,
  updateManualCameraTargets,
  updateReplayCameraTargets,
} from "./cameras.js";
import { updateCarsAndMarkers } from "./updateCars.js";

export function startSceneRenderLoop({
  sceneStateRef,
  renderer,
  scene,
  camera,
  trackPath,
  cameraModeRef,
  visibleRef,
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
  let lastSector = -1;
  let lastCamMode = cameraModeRef.current;
  let lastPlayState = false;
  let lastSceneVisible = false;
  let hasRendered = false;
  let lastSimTime = 0;
  let noiseFrame = 0;
  let cancelled = false;

  function animate(now = performance.now()) {
    if (cancelled || isContextLost()) return;
    const sceneState = sceneStateRef.current;
    sceneState.fr = requestAnimationFrame(animate);
    const isSceneVisible = visibleRef.current && !document.hidden;
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
    if (progChanged) lastProg = prog;
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
      progress: prog,
      progressChanged: progChanged,
      isPlaying,
      deltaTime: dt,
      playbackSpeed,
      followCamera,
      now,
      lastSector,
      hasRendered,
    });
    needsRender = needsRender || carUpdate.needsRender;
    lastSector = carUpdate.lastSector;

    updateReplayCameraTargets({
      cameraMode,
      p1: carUpdate.p1,
      p2: carUpdate.p2,
      progress: prog,
      primaryPath: sceneState.n1,
      secondaryPath: sceneState.n2,
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
    if (!needsRender) return;
    if (sceneState._starMat && !sceneState._starFrozen) sceneState._starMat.uniforms.uTime.value = now * 0.001;
    try {
      renderer.render(scene, camera);
      hasRendered = true;
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
