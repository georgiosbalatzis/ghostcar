import {
  BufferGeometry,
  CatmullRomCurve3,
  Color,
  Float32BufferAttribute,
  Line,
  LineSegments,
  Mesh,
  Vector3,
} from "three";
import {
  createStartLineMaterial,
  createTrackOverlayMaterial,
  createTrackRibbonMaterial,
  createVertexColorLineMaterial,
} from "./materials.js";

function freezeObjectTransform(object) {
  if (!object) return object;
  object.updateMatrix();
  object.matrixAutoUpdate = false;
  return object;
}

function buildColoredLineSegments(groups, opacity = 1) {
  const positions = [];
  const colors = [];
  const color = new Color();
  groups.forEach(({ points, color: lineColor }) => {
    if (!points || points.length < 2) return;
    color.set(lineColor);
    for (let i = 0; i < points.length - 1; i++) {
      const a = points[i];
      const b = points[i + 1];
      positions.push(a.x, a.y, a.z, b.x, b.y, b.z);
      colors.push(color.r, color.g, color.b, color.r, color.g, color.b);
    }
  });
  if (!positions.length) return null;
  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new Float32BufferAttribute(positions, 3));
  geometry.setAttribute("color", new Float32BufferAttribute(colors, 3));
  return new LineSegments(geometry, createVertexColorLineMaterial(opacity));
}

export function buildTrack({ scene, tp, speedArr, brakeArr, vizMode, isDark, theme }) {
  const curve = new CatmullRomCurve3(
    tp.map((p) => new Vector3(p.x, p.y, p.z)),
    true
  );
  const seg = Math.min(tp.length * 3, 800);
  const trackW = 2.0;

  const curvePts = curve.getPoints(seg);
  const ribbonPos = [];
  const ribbonNorm = [];
  const ribbonIdx = [];
  const leftEdgePts = [];
  const rightEdgePts = [];
  const tangents = curvePts.map((_, i) => {
    const next = curvePts[(i + 1) % curvePts.length];
    const prev = curvePts[(i - 1 + curvePts.length) % curvePts.length];
    return new Vector3(next.x - prev.x, 0, next.z - prev.z).normalize();
  });
  for (let i = 0; i < curvePts.length; i++) {
    const p = curvePts[i];
    const tan = tangents[i];
    const perp = new Vector3(-tan.z, 0, tan.x);
    const L = new Vector3(p.x + (perp.x * trackW) / 2, p.y, p.z + (perp.z * trackW) / 2);
    const Ri = new Vector3(p.x - (perp.x * trackW) / 2, p.y, p.z - (perp.z * trackW) / 2);
    ribbonPos.push(L.x, L.y, L.z, Ri.x, Ri.y, Ri.z);
    ribbonNorm.push(0, 1, 0, 0, 1, 0);
    leftEdgePts.push(new Vector3(L.x, L.y + 0.02, L.z));
    rightEdgePts.push(new Vector3(Ri.x, Ri.y + 0.02, Ri.z));
    if (i < curvePts.length - 1) {
      const v = i * 2;
      ribbonIdx.push(v, v + 2, v + 1, v + 1, v + 2, v + 3);
    }
  }
  const ribbonGeo = new BufferGeometry();
  ribbonGeo.setAttribute("position", new Float32BufferAttribute(ribbonPos, 3));
  ribbonGeo.setAttribute("normal", new Float32BufferAttribute(ribbonNorm, 3));
  ribbonGeo.setIndex(ribbonIdx);
  scene.add(freezeObjectTransform(new Mesh(ribbonGeo, createTrackRibbonMaterial({ isDark, theme }))));

  if (vizMode === "heatmap" && speedArr.length > 10) {
    const heatColors = new Float32Array(curvePts.length * 2 * 3);
    for (let i = 0; i < curvePts.length; i++) {
      const t = i / (curvePts.length - 1);
      const si = Math.min(Math.floor(t * (speedArr.length - 1)), speedArr.length - 1);
      const ratio = Math.max(0, Math.min(1, (speedArr[si] - 50) / 300));
      let r;
      let g;
      let b;
      if (ratio < 0.25) {
        r = 0;
        g = ratio * 4;
        b = 1;
      } else if (ratio < 0.5) {
        r = 0;
        g = 1;
        b = 1 - (ratio - 0.25) * 4;
      } else if (ratio < 0.75) {
        r = (ratio - 0.5) * 4;
        g = 1;
        b = 0;
      } else {
        r = 1;
        g = 1 - (ratio - 0.75) * 4;
        b = 0;
      }
      const vi = i * 2;
      heatColors[vi * 3] = r;
      heatColors[vi * 3 + 1] = g;
      heatColors[vi * 3 + 2] = b;
      heatColors[(vi + 1) * 3] = r;
      heatColors[(vi + 1) * 3 + 1] = g;
      heatColors[(vi + 1) * 3 + 2] = b;
    }
    const heatGeo = ribbonGeo.clone();
    heatGeo.setAttribute("color", new Float32BufferAttribute(heatColors, 3));
    const heatMesh = new Mesh(heatGeo, createTrackOverlayMaterial(0.55));
    heatMesh.position.y += 0.01;
    scene.add(freezeObjectTransform(heatMesh));
  }

  if (vizMode === "brake" && brakeArr.length > 10) {
    const brakeColors = new Float32Array(curvePts.length * 2 * 3);
    for (let i = 0; i < curvePts.length; i++) {
      const t = i / (curvePts.length - 1);
      const si = Math.min(Math.floor(t * (brakeArr.length - 1)), brakeArr.length - 1);
      let brakeVal = 0;
      for (let w = -2; w <= 2; w++) {
        const wi = Math.max(0, Math.min(brakeArr.length - 1, si + w));
        brakeVal += brakeArr[wi];
      }
      brakeVal /= 5;
      const r = brakeVal > 0.3 ? 0.9 : 0.0;
      const g = brakeVal > 0.3 ? 0.05 : 0.15;
      const b = brakeVal > 0.3 ? 0.05 : 0.08;
      const vi = i * 2;
      brakeColors[vi * 3] = r;
      brakeColors[vi * 3 + 1] = g;
      brakeColors[vi * 3 + 2] = b;
      brakeColors[(vi + 1) * 3] = r;
      brakeColors[(vi + 1) * 3 + 1] = g;
      brakeColors[(vi + 1) * 3 + 2] = b;
    }
    const brakeGeo = ribbonGeo.clone();
    brakeGeo.setAttribute("color", new Float32BufferAttribute(brakeColors, 3));
    const brakeMesh = new Mesh(brakeGeo, createTrackOverlayMaterial(0.6));
    brakeMesh.position.y += 0.01;
    scene.add(freezeObjectTransform(brakeMesh));
  }

  // Neutral track edges. Sector boundaries and turn numbers are not drawn: OpenF1 does not provide
  // their positions, and equal-thirds sectors or curvature-detected "turns" would imply false data.
  const edgeColor = isDark ? 0x5a6062 : 0x8f8a80;
  const edgeLines = buildColoredLineSegments(
    [leftEdgePts, rightEdgePts].map((points) => ({ points, color: edgeColor })),
    0.8
  );
  if (edgeLines) scene.add(freezeObjectTransform(edgeLines));

  const sf = curve.getPointAt(0);
  const sfTan = curve.getTangentAt(0);
  const sfPerp = new Vector3(-sfTan.z, 0, sfTan.x).normalize();
  const sfL = sf.clone().add(sfPerp.clone().multiplyScalar(trackW / 2));
  sfL.y += 0.03;
  const sfR = sf.clone().sub(sfPerp.clone().multiplyScalar(trackW / 2));
  sfR.y += 0.03;
  scene.add(freezeObjectTransform(new Line(new BufferGeometry().setFromPoints([sfL, sfR]), createStartLineMaterial())));

  return { curve, seg, sectorMarkers: null };
}
