import useScene from "../../hooks/useScene.js";

// Adapter from the replay model to the scene engine.
export default function SceneStage3D({
  containerRef,
  model,
  progRef,
  playRef,
  speedRef,
  cam,
  vizMode,
  isDark,
  onError,
}) {
  useScene(containerRef, { model, progRef, playRef, speedRef, cam, vizMode, isDark, onError });
  return null;
}
