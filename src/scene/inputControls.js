export function attachInputControls({ canvas, controls, markDirty }) {
  let pinchDist = null;

  const markSceneDirty = () => {
    markDirty?.();
  };

  const onDown = (event) => {
    if (event.touches && event.touches.length === 2) {
      const dx = event.touches[0].clientX - event.touches[1].clientX;
      const dy = event.touches[0].clientY - event.touches[1].clientY;
      pinchDist = Math.sqrt(dx * dx + dy * dy);
      controls.drag = false;
      markSceneDirty();
      return;
    }
    controls.drag = true;
    controls.lx = event.clientX ?? event.touches?.[0]?.clientX ?? 0;
    controls.ly = event.clientY ?? event.touches?.[0]?.clientY ?? 0;
    markSceneDirty();
  };

  const onMove = (event) => {
    if (event.touches && event.touches.length === 2) {
      event.preventDefault();
      const dx = event.touches[0].clientX - event.touches[1].clientX;
      const dy = event.touches[0].clientY - event.touches[1].clientY;
      const newDist = Math.sqrt(dx * dx + dy * dy);
      if (pinchDist !== null) controls.dist = Math.max(15, Math.min(200, controls.dist * (pinchDist / newDist)));
      pinchDist = newDist;
      markSceneDirty();
      return;
    }
    if (!controls.drag) return;
    const x2 = event.clientX ?? event.touches?.[0]?.clientX ?? 0;
    const y2 = event.clientY ?? event.touches?.[0]?.clientY ?? 0;
    controls.angle += (x2 - controls.lx) * 0.005;
    controls.pitch = Math.max(0.1, Math.min(1.4, controls.pitch + (y2 - controls.ly) * 0.005));
    controls.lx = x2;
    controls.ly = y2;
    markSceneDirty();
  };

  const onUp = () => {
    controls.drag = false;
    pinchDist = null;
    markSceneDirty();
  };

  const onWheel = (event) => {
    controls.dist = Math.max(15, Math.min(200, controls.dist + event.deltaY * 0.05));
    markSceneDirty();
  };

  canvas.addEventListener("mousedown", onDown);
  canvas.addEventListener("mousemove", onMove);
  canvas.addEventListener("mouseup", onUp);
  canvas.addEventListener("mouseleave", onUp);
  canvas.addEventListener("wheel", onWheel, { passive: true });
  canvas.addEventListener("touchstart", onDown, { passive: false });
  canvas.addEventListener("touchmove", onMove, { passive: false });
  canvas.addEventListener("touchend", onUp);

  return {
    isActive: () => controls.drag || pinchDist !== null,
    cleanup: () => {
      canvas.removeEventListener("mousedown", onDown);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseup", onUp);
      canvas.removeEventListener("mouseleave", onUp);
      canvas.removeEventListener("wheel", onWheel);
      canvas.removeEventListener("touchstart", onDown);
      canvas.removeEventListener("touchmove", onMove);
      canvas.removeEventListener("touchend", onUp);
    },
  };
}
