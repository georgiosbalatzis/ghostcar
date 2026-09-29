import {
  BoxGeometry,
  BufferGeometry,
  Color,
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
import { arcAtFraction, brakeBand, dominanceBand, speedBand } from "./trackColouring.js";
import { buildCentreline, offsetEdge, overpassMask, pointAtArc, startLine } from "./trackGeometry.js";

// Schematic widths in metres (OpenF1 has no track width): the road is 12 m, with 4 m of run-off each side and
// a 0.25 m paint line just inside each road edge. These are drawn choices, not measurements.
const ROAD_HALF = 6;
const RUNOFF_HALF = 10;
const PAINT_WIDTH = 0.25;
const BAND_HALF = 3;

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

export function buildTrack({ scene, reference, groundY, theme, isMob }) {
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

  // The centre band shows one thing at a time (who is faster where, speed, braking) and changes without a
  // rebuild: setViz repaints its vertex colours. Six metres wide, on the middle of the road.
  const bandGeometry = stripGeometry([{ a: offsetEdge(c, BAND_HALF), b: offsetEdge(c, -BAND_HALF), normal: UP }]);
  bandGeometry.setAttribute("color", new Float32BufferAttribute(new Float32Array(c.count * 8), 4));
  const band = new Mesh(bandGeometry, createTrackOverlayMaterial());
  band.visible = false;
  scene.add(freezeObjectTransform(band));
  const linear = new Map();
  const linearOf = (hex) => {
    if (!linear.has(hex)) linear.set(hex, new Color(hex));
    const { r, g, b } = linear.get(hex);
    return [r, g, b];
  };
  let current = { mode: "normal", data: {} };
  let palette = theme;
  function paintBand() {
    const { mode, data } = current;
    let colours = null;
    if (mode === "normal") {
      const hexOf = (slot) => data.colours?.[slot];
      colours = data.dominance?.length
        ? dominanceBand(c, data.dominance, (slot) => (hexOf(slot) ? linearOf(hexOf(slot)) : null))
        : null;
    } else if (mode === "heatmap") {
      colours = speedBand(c, data.tel, data.telTimes, palette.ramp.map(linearOf));
    } else if (mode === "brake") {
      colours = brakeBand(c, data.tel, data.telTimes, linearOf(palette.signal));
    }
    band.visible = !!colours;
    if (!colours) return;
    const attribute = bandGeometry.attributes.color;
    attribute.array.set(colours);
    attribute.needsUpdate = true;
  }
  function setViz(mode, data) {
    current = { mode, data };
    paintBand();
  }

  // Sector lines, where the fastest driver crosses the official sector 1 and 2 lines (only given for a trusted gap
  // trace, like the dominance colours: OpenF1 has no sector positions of its own, and equal thirds would be false).
  // A thin neutral bar across the road per line; setSectors returns each line's centre for the chips.
  const sectorMaterial = createPaintMaterial(theme.ink);
  const sectorBars = [0, 1].map(() => {
    const bar = new Mesh(new PlaneGeometry(2 * (ROAD_HALF + 0.5), 0.5), sectorMaterial);
    bar.rotation.order = "YXZ";
    bar.rotation.x = -Math.PI / 2;
    bar.visible = false;
    scene.add(bar);
    return bar;
  });
  const sectorPoint = {};
  function setSectors(fractions) {
    return sectorBars.map((bar, index) => {
      const fraction = fractions[index];
      bar.visible = fraction !== undefined;
      if (!bar.visible) return null;
      pointAtArc(c, arcAtFraction(c, fraction), sectorPoint);
      bar.position.set(sectorPoint.x, sectorPoint.y + 0.03, sectorPoint.z);
      bar.rotation.y = Math.atan2(sectorPoint.tx, sectorPoint.tz);
      return { x: sectorPoint.x, y: sectorPoint.y, z: sectorPoint.z };
    });
  }

  // Theme change in place: recolour everything the palette touches.
  function applyTheme(next) {
    road.material.color.set(next.road);
    runoff.material.color.set(next.runoff);
    skirt.material.color.set(next.skirt);
    paint.material.color.set(next.paint);
    gantryMaterial.color.set(next.ink);
    stripMaterial.userData.draw(next.checkA, next.checkB);
    sectorMaterial.color.set(next.ink);
    palette = next;
    paintBand();
  }
  applyTheme(theme);

  return { centreline: c, curve: c.curve, start, band, setViz, setSectors, applyTheme };
}
