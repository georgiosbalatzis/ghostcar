import { Vector3 } from "three";
import { stackOffsetsInto } from "./stacking.js";

// Driver name chips over the 3D view. The chips are DOM (the 2D map's own `.car` / `.car__label`), positioned every
// rendered frame by writing their transforms directly: no React state per frame. Nothing here allocates per frame
// but the transform strings of chips that moved.

const EDGE_INSET = 12;
const ANCHOR_HEIGHT = 1.6; // metres above the car
const anchor = new Vector3();
const inView = new Vector3();

/**
 * @param layer  the `.scene-labels` element: one `[data-index]` chip per driver, in slot order
 * @param cars   the car groups (null where a slot has none)
 * @returns { update({ hiddenIndex, width, height }), setSectors(points), dispose() }
 */
export function createLabels({ layer, camera, cars }) {
  const chips = cars.map((_, index) => layer?.querySelector(`[data-index="${index}"]`) ?? null);
  // What each chip shows now, so a frame only touches what changed.
  const shown = chips.map(() => ({ x: NaN, y: NaN, opacity: -1, stack: NaN, flip: null, edge: null, angle: NaN }));
  // One reusable slot per car for the frame's projected points.
  const points = cars.map((_, index) => ({ index, x: 0, y: 0, outside: false, angle: 0 }));
  const stacks = new Array(cars.length).fill(0);
  let count = 0;
  // Sector-line chips: world points set by setSectors, one `[data-sector]` element each.
  const sectorChips = [0, 1].map((index) => layer?.querySelector(`[data-sector="${index}"]`) ?? null);
  const sectorShown = sectorChips.map(() => ({ x: NaN, y: NaN, opacity: -1 }));
  let sectorPoints = [];

  // Screen position of a world point, and whether it is behind the camera (the projection then mirrors).
  function project(point, lift, width, height, out) {
    anchor.set(point.x, point.y + lift, point.z);
    out.behind = inView.copy(anchor).applyMatrix4(camera.matrixWorldInverse).z > 0;
    anchor.project(camera);
    out.x = (anchor.x * 0.5 + 0.5) * width;
    out.y = (-anchor.y * 0.5 + 0.5) * height;
  }
  const screen = { x: 0, y: 0, behind: false };

  function place(chip, last, x, y, opacity) {
    if (x !== last.x || y !== last.y) {
      chip.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0)`;
      last.x = x;
      last.y = y;
    }
    if (opacity !== last.opacity) {
      chip.style.opacity = opacity ? "1" : "0";
      last.opacity = opacity;
    }
  }

  function updateSectors(width, height) {
    for (let index = 0; index < sectorChips.length; index++) {
      const chip = sectorChips[index];
      if (!chip) continue;
      const point = sectorPoints[index];
      let visible = false;
      if (point) {
        project(point, 1, width, height, screen);
        visible = !screen.behind && screen.x > 0 && screen.x < width && screen.y > 0 && screen.y < height;
      }
      const last = sectorShown[index];
      if (visible) place(chip, last, screen.x, screen.y, 1);
      else if (last.opacity !== 0) {
        chip.style.opacity = "0";
        last.opacity = 0;
      }
    }
  }

  function write(index, x, y, opacity, stack, flip, edge, angle) {
    const chip = chips[index];
    const last = shown[index];
    place(chip, last, x, y, opacity);
    if (stack !== last.stack) chip.style.setProperty("--stack", String((last.stack = stack)));
    if (flip !== last.flip) chip.classList.toggle("car--flip", (last.flip = flip));
    if (edge !== last.edge) chip.classList.toggle("scene-label--edge", (last.edge = edge));
    if (angle !== last.angle) chip.style.setProperty("--angle", `${(last.angle = angle)}deg`);
  }

  function update({ hiddenIndex, width, height }) {
    updateSectors(width, height);
    count = 0;
    for (let index = 0; index < cars.length; index++) {
      const car = cars[index];
      if (!chips[index]) continue;
      if (!car || !car.visible || index === hiddenIndex) {
        write(index, -9999, 0, 0, 0, false, false, 0);
        continue;
      }
      project(car.position, ANCHOR_HEIGHT, width, height, screen);
      let { x, y } = screen;
      // Behind the camera the projection mirrors: keep the direction, so the chip still points the right way.
      if (screen.behind) {
        x = width - x;
        y = height - y;
      }
      const outside =
        screen.behind || x < EDGE_INSET || x > width - EDGE_INSET || y < EDGE_INSET || y > height - EDGE_INSET;
      let angle = 0;
      if (outside) {
        // Pinned inside the stage edge, with an arrow toward the car.
        const dx = x - width / 2;
        const dy = y - height / 2;
        const scale = Math.min(
          (width / 2 - EDGE_INSET) / (Math.abs(dx) || 1e-6),
          (height / 2 - EDGE_INSET) / (Math.abs(dy) || 1e-6),
          1
        );
        angle = (Math.atan2(dy, dx) * 180) / Math.PI;
        x = width / 2 + dx * scale;
        y = height / 2 + dy * scale;
      }
      const point = points[count++];
      point.index = index;
      point.x = x;
      point.y = y;
      point.outside = outside;
      point.angle = angle;
    }
    stackOffsetsInto(points, count, stacks);
    for (let k = 0; k < count; k++) {
      const point = points[k];
      // Near the right edge the chip goes on the left, so it stays inside the stage.
      write(
        point.index,
        point.x,
        point.y,
        1,
        Math.round(stacks[k] * 100) / 100,
        point.x > width * 0.7,
        point.outside,
        point.angle
      );
    }
  }

  return {
    update,
    setSectors: (next) => {
      sectorPoints = next;
    },
    dispose: () => {},
  };
}
