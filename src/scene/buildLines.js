import { Color } from "three";
import { Line2 } from "three/examples/jsm/lines/Line2.js";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry.js";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
import { surfaceAt } from "./trackGeometry.js";

const WIDTH = 0.4; // metres
const LIFT = 0.05; // metres above the road

/**
 * Each driver's whole recorded line, 0.4 m wide in their colour, just above the road. Positions come from the
 * driver's dense world path (the very line the car follows), heights from the road under each point. Built the
 * first time it is wanted; `setVisible` toggles it afterwards.
 */
export function buildRacingLines({ scene, driverPaths, centreline, colours, resolution }) {
  const surface = {};
  const lines = driverPaths.map((path, index) => {
    if (!path) return null;
    const positions = new Float32Array(path.count * 3);
    let hint = -1;
    path.points.forEach((p, i) => {
      surfaceAt(centreline, p.x, p.z, hint, surface, p.y);
      hint = surface.index;
      positions.set([p.x, surface.y + LIFT, p.z], i * 3);
    });
    const geometry = new LineGeometry();
    geometry.setPositions(positions);
    const material = new LineMaterial({
      color: new Color(colours[index]),
      linewidth: WIDTH,
      worldUnits: true,
      transparent: true,
      opacity: 0.9,
    });
    material.resolution.set(resolution.width, resolution.height);
    const line = new Line2(geometry, material);
    line.frustumCulled = false;
    line.renderOrder = 4;
    scene.add(line);
    return line;
  });
  return {
    setVisible: (visible) => lines.forEach((line) => line && (line.visible = visible)),
    restyle: (next) => lines.forEach((line, index) => line?.material.color.set(next[index])),
    setResolution: (width, height) => lines.forEach((line) => line?.material.resolution.set(width, height)),
  };
}
