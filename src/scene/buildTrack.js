import {
  BoxGeometry,
  BufferGeometry,
  Float32BufferAttribute,
  Group,
  Mesh,
  MeshStandardMaterial,
  PlaneGeometry,
} from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import {
  createPaintMaterial,
  createRoadMaterial,
  createStartStripMaterial,
  createTrackOverlayMaterial,
} from "./materials.js";
import { buildCentreline, offsetEdge, overpassMask, startLine } from "./trackGeometry.js";

// Schematic widths in metres (OpenF1 has no track width): the road is 12 m, with 4 m of run-off each side and
// a 0.25 m paint line just inside each road edge. These are drawn choices, not measurements.
const ROAD_HALF = 6;
const RUNOFF_HALF = 10;
const PAINT_WIDTH = 0.25;

function freezeObjectTransform(object) {
  object.updateMatrix();
  object.matrixAutoUpdate = false;
  return object;
}

// One indexed geometry from several ribbons. A strip is { a, b, normal(i), skip? }: two edges (arrays x, y, z
// of equal length, closed round the loop) and the normal of their vertices; `skip[i]` leaves quad i out.
function stripGeometry(strips) {
  const positions = [];
  const normals = [];
  const indices = [];
  let base = 0;
  for (const { a, b, normal, skip } of strips) {
    const n = a.x.length;
    for (let i = 0; i < n; i++) {
      const [nx, ny, nz] = normal(i);
      positions.push(a.x[i], a.y[i], a.z[i], b.x[i], b.y[i], b.z[i]);
      normals.push(nx, ny, nz, nx, ny, nz);
    }
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n;
      if (skip && (skip[i] || skip[j])) continue;
      indices.push(base + 2 * i, base + 2 * j, base + 2 * i + 1, base + 2 * i + 1, base + 2 * j, base + 2 * j + 1);
    }
    base += 2 * n;
  }
  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new Float32BufferAttribute(positions, 3));
  geometry.setAttribute("normal", new Float32BufferAttribute(normals, 3));
  geometry.setIndex(indices);
  return geometry;
}

const UP = () => [0, 1, 0];

export function buildTrack({ scene, reference, groundY, speedArr, brakeArr, vizMode, theme, isMob }) {
  const c = buildCentreline(reference.points, reference.times, { spacing: isMob ? 4 : 2 });
  const edges = {
    left: offsetEdge(c, ROAD_HALF),
    right: offsetEdge(c, -ROAD_HALF),
    outerLeft: offsetEdge(c, RUNOFF_HALF),
    outerRight: offsetEdge(c, -RUNOFF_HALF),
    paintLeft: offsetEdge(c, ROAD_HALF - PAINT_WIDTH),
    paintRight: offsetEdge(c, -(ROAD_HALF - PAINT_WIDTH)),
  };
  const ground = (edge) => ({ x: edge.x, y: new Float64Array(c.count).fill(groundY), z: edge.z });

  const roadGeometry = stripGeometry([{ a: edges.left, b: edges.right, normal: UP }]);
  const road = new Mesh(roadGeometry, createRoadMaterial(theme.road));
  const runoff = new Mesh(
    stripGeometry([
      { a: edges.outerLeft, b: edges.left, normal: UP },
      { a: edges.right, b: edges.outerRight, normal: UP },
    ]),
    createRoadMaterial(theme.runoff)
  );
  // The skirt drops from the outer edge of the run-off to the ground, so the road reads as a raised deck. It is
  // left out under a bridge, where it would cut through the road below.
  const overpass = overpassMask(c);
  const skirt = new Mesh(
    stripGeometry([
      {
        a: edges.outerLeft,
        b: ground(edges.outerLeft),
        normal: (i) => [c.nx[i], 0, c.nz[i]],
        skip: overpass,
      },
      {
        a: edges.outerRight,
        b: ground(edges.outerRight),
        normal: (i) => [-c.nx[i], 0, -c.nz[i]],
        skip: overpass,
      },
    ]),
    createRoadMaterial(theme.skirt)
  );
  const paint = new Mesh(
    stripGeometry([
      { a: edges.paintLeft, b: edges.left, normal: UP },
      { a: edges.right, b: edges.paintRight, normal: UP },
    ]),
    createPaintMaterial(theme.paint)
  );
  [road, runoff, skirt, paint].forEach((mesh) => scene.add(freezeObjectTransform(mesh)));

  // Start/finish: a chequered strip across the road and a gantry, where the lap starts.
  const start = startLine(c);
  const startGroup = new Group();
  startGroup.position.set(start.x, start.y, start.z);
  startGroup.rotation.y = Math.atan2(start.tx, start.tz);
  const stripMaterial = createStartStripMaterial();
  const strip = new Mesh(new PlaneGeometry(2 * ROAD_HALF, 1.2), stripMaterial);
  strip.rotation.x = -Math.PI / 2;
  const gantryParts = [
    new BoxGeometry(0.3, 7, 0.3).translate(-ROAD_HALF - 1.5, 3.5, 0),
    new BoxGeometry(0.3, 7, 0.3).translate(ROAD_HALF + 1.5, 3.5, 0),
    new BoxGeometry(2 * ROAD_HALF + 3.3, 0.6, 0.5).translate(0, 6.9, 0),
  ];
  const gantryMaterial = new MeshStandardMaterial({ color: theme.ink, roughness: 0.8, metalness: 0 });
  const gantry = new Mesh(mergeGeometries(gantryParts), gantryMaterial);
  startGroup.add(strip, gantry);
  scene.add(freezeObjectTransform(startGroup));

  // The colouring overlay is the one part that changes without a rebuild: setViz swaps it in place.
  let overlay = null;
  function makeOverlay(mode, { speedArr: speeds = [], brakeArr: brakes = [] }) {
    const source = mode === "heatmap" ? speeds : mode === "brake" ? brakes : [];
    if (source.length <= 10) return null;
    const colors = new Float32Array(c.count * 2 * 3);
    for (let i = 0; i < c.count; i++) {
      const t = i / (c.count - 1);
      const si = Math.min(Math.floor(t * (source.length - 1)), source.length - 1);
      let r;
      let g;
      let b;
      if (mode === "heatmap") {
        const ratio = Math.max(0, Math.min(1, (source[si] - 50) / 300));
        if (ratio < 0.25) [r, g, b] = [0, ratio * 4, 1];
        else if (ratio < 0.5) [r, g, b] = [0, 1, 1 - (ratio - 0.25) * 4];
        else if (ratio < 0.75) [r, g, b] = [(ratio - 0.5) * 4, 1, 0];
        else [r, g, b] = [1, 1 - (ratio - 0.75) * 4, 0];
      } else {
        let brake = 0;
        for (let w = -2; w <= 2; w++) brake += source[Math.max(0, Math.min(source.length - 1, si + w))];
        brake /= 5;
        [r, g, b] = brake > 0.3 ? [0.9, 0.05, 0.05] : [0, 0.15, 0.08];
      }
      for (let side = 0; side < 2; side++) colors.set([r, g, b], (i * 2 + side) * 3);
    }
    const geometry = roadGeometry.clone();
    geometry.setAttribute("color", new Float32BufferAttribute(colors, 3));
    return freezeObjectTransform(new Mesh(geometry, createTrackOverlayMaterial(mode === "heatmap" ? 0.55 : 0.6)));
  }
  function setViz(mode, data) {
    if (overlay) {
      scene.remove(overlay);
      overlay.geometry.dispose();
      overlay.material.dispose();
    }
    overlay = makeOverlay(mode, data);
    if (overlay) scene.add(overlay);
  }
  setViz(vizMode, { speedArr, brakeArr });

  // Theme change in place: recolour everything the palette touches.
  function applyTheme(next) {
    road.material.color.set(next.road);
    runoff.material.color.set(next.runoff);
    skirt.material.color.set(next.skirt);
    paint.material.color.set(next.paint);
    gantryMaterial.color.set(next.ink);
    stripMaterial.userData.draw(next.checkA, next.checkB);
  }
  applyTheme(theme);

  return { centreline: c, curve: c.curve, setViz, applyTheme };
}
