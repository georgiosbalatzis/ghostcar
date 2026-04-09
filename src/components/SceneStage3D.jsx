import useScene from "../hooks/useScene.js";

export default function SceneStage3D({
  containerRef,
  tp,
  l1,
  l2,
  progRef,
  playRef,
  c1,
  c2,
  cam,
  lab1,
  lab2,
  telData1,
  vizMode,
  isDark,
  l3,
  l4,
  c3,
  c4,
  lab3,
  lab4,
  onError,
  circuitFlip,
  circuitTurns,
  enabled,
  visible,
}) {
  useScene(containerRef, tp, l1, l2, progRef, playRef, c1, c2, cam, lab1, lab2, telData1, vizMode, isDark, l3, l4, c3, c4, lab3, lab4, onError, circuitFlip, circuitTurns, enabled, visible);
  return null;
}
