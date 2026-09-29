import { Vector3 } from "three";
import { stackOffsets } from "./stacking.js";

// Driver name chips over the 3D view. The chips are DOM (the 2D map's own `.car` / `.car__label`), positioned every
// rendered frame by writing their transforms directly: no React state per frame.

const EDGE_INSET = 12;
const ANCHOR_HEIGHT = 1.6; // metres above the car
const anchor = new Vector3();

/**
 * @param layer  the `.scene-labels` element: one `[data-index]` chip per driver, in slot order
 * @param cars   the car groups (null where a slot has none)
 * @returns { update({ hiddenIndex, width, height }), dispose() }
 */
export function createLabels({ layer, camera, cars }) {
  const chips = cars.map((_, index) => layer?.querySelector(`[data-index="${index}"]`) ?? null);
  const shown = chips.map(() => ({ transform: "", opacity: "", stack: "", flip: false, edge: false, angle: "" }));
  const points = [];
  // Sector-line chips: world points set by setSectors, one `[data-sector]` element each.
  const sectorChips = [0, 1].map((index) => layer?.querySelector(`[data-sector="${index}"]`) ?? null);
  let sectorPoints = [];
  const sectorAnchor = new Vector3();

  function write(index, next) {
    const chip = chips[index];
    const last = shown[index];
    if (next.transform !== last.transform) chip.style.transform = last.transform = next.transform;
    if (next.opacity !== last.opacity) chip.style.opacity = last.opacity = next.opacity;
    if (next.stack !== last.stack) chip.style.setProperty("--stack", (last.stack = next.stack));
    if (next.flip !== last.flip) chip.classList.toggle("car--flip", (last.flip = next.flip));
    if (next.edge !== last.edge) chip.classList.toggle("scene-label--edge", (last.edge = next.edge));
    if (next.angle !== last.angle) chip.style.setProperty("--angle", (last.angle = next.angle));
  }

  function updateSectors(width, height) {
    sectorChips.forEach((chip, index) => {
      if (!chip) return;
      const point = sectorPoints[index];
      let visible = false;
      if (point) {
        sectorAnchor.set(point.x, point.y + 1, point.z);
        const behind = sectorAnchor.clone().applyMatrix4(camera.matrixWorldInverse).z > 0;
        sectorAnchor.project(camera);
        const x = (sectorAnchor.x * 0.5 + 0.5) * width;
        const y = (-sectorAnchor.y * 0.5 + 0.5) * height;
        visible = !behind && x > 0 && x < width && y > 0 && y < height;
        if (visible) chip.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0)`;
      }
      chip.style.opacity = visible ? "1" : "0";
    });
  }

  function update({ hiddenIndex = -1, width, height }) {
    updateSectors(width, height);
    points.length = 0;
    cars.forEach((car, index) => {
      if (!chips[index]) return;
      if (!car || !car.visible || index === hiddenIndex) {
        write(index, {
          transform: "translate3d(-9999px,0,0)",
          opacity: "0",
          stack: "0",
          flip: false,
          edge: false,
          angle: "0deg",
        });
        return;
      }
      anchor.copy(car.position);
      anchor.y += ANCHOR_HEIGHT;
      // Behind the camera the projection mirrors: keep the direction, so the chip still points the right way.
      const behind = anchor.clone().applyMatrix4(camera.matrixWorldInverse).z > 0;
      anchor.project(camera);
      let x = (anchor.x * 0.5 + 0.5) * width;
      let y = (-anchor.y * 0.5 + 0.5) * height;
      if (behind) {
        x = width - x;
        y = height - y;
      }
      const outside = behind || x < EDGE_INSET || x > width - EDGE_INSET || y < EDGE_INSET || y > height - EDGE_INSET;
      let angle = "0deg";
      if (outside) {
        // Pinned inside the stage edge, with an arrow toward the car.
        const dx = x - width / 2;
        const dy = y - height / 2;
        const scale = Math.min(
          (width / 2 - EDGE_INSET) / (Math.abs(dx) || 1e-6),
          (height / 2 - EDGE_INSET) / (Math.abs(dy) || 1e-6)
        );
        angle = `${(Math.atan2(dy, dx) * 180) / Math.PI}deg`;
        x = width / 2 + dx * Math.min(1, scale);
        y = height / 2 + dy * Math.min(1, scale);
      }
      points.push({ index, x, y, outside, angle });
    });
    const stacks = stackOffsets(points);
    points.forEach((point, k) => {
      write(point.index, {
        transform: `translate3d(${point.x.toFixed(1)}px,${point.y.toFixed(1)}px,0)`,
        opacity: "1",
        stack: stacks[k].toFixed(2),
        // Near the right edge the chip goes on the left, so it stays inside the stage.
        flip: point.x > width * 0.7,
        edge: point.outside,
        angle: point.angle,
      });
    });
  }

  return {
    update,
    setSectors: (next) => {
      sectorPoints = next;
    },
    dispose: () => {},
  };
}
