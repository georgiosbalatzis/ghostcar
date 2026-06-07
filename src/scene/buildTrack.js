import {
  BufferGeometry,
  CatmullRomCurve3,
  CanvasTexture,
  CircleGeometry,
  Color,
  DynamicDrawUsage,
  Float32BufferAttribute,
  InstancedMesh,
  Line,
  LineSegments,
  Mesh,
  Object3D,
  Sprite,
  Vector3,
} from "three";
import {
  createSectorMarkerMaterial,
  createSpriteLabelMaterial,
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

export function buildTrack({ scene, tp, speedArr, brakeArr, vizMode, isDark, theme, isLowDetail, circuitTurns }) {
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

  const sColorHex = [0x00d26a, 0xffd700, 0xe10600];
  const edgeLineGroups = [];
  [leftEdgePts, rightEdgePts].forEach((edgePts) => {
    const totalPts = edgePts.length;
    for (let s = 0; s < 3; s++) {
      const start = Math.floor((s / 3) * totalPts);
      const end = Math.min(Math.floor(((s + 1) / 3) * totalPts) + 1, totalPts);
      const sectorPts = edgePts.slice(start, end);
      if (sectorPts.length > 1) edgeLineGroups.push({ points: sectorPts, color: sColorHex[s] });
    }
  });
  const edgeLines = buildColoredLineSegments(edgeLineGroups, 0.6);
  if (edgeLines) scene.add(freezeObjectTransform(edgeLines));

  const sColors = [0x00d26a, 0xffd700, 0xe10600];
  const sColorCSS = ["#00d26a", "#ffd700", "#e10600"];
  const sectorDividerGroups = [];
  const sectorMarkerDefs = [];
  let sectorMarkers = null;
  [0, 0.33, 0.66].forEach((t, i) => {
    const sp = curve.getPointAt(t);
    const tan2 = curve.getTangentAt(t);
    const perp2 = new Vector3(-tan2.z, 0, tan2.x).normalize();
    const L2 = sp.clone().add(perp2.clone().multiplyScalar(trackW / 2 + 0.3));
    const R2 = sp.clone().sub(perp2.clone().multiplyScalar(trackW / 2 + 0.3));
    L2.y += 0.03;
    R2.y += 0.03;
    sectorDividerGroups.push({ points: [L2, R2], color: sColors[i] });
    [-1, 1].forEach((side) => {
      const off = perp2.clone().multiplyScalar(side * (trackW / 2 + 0.15));
      sectorMarkerDefs.push({
        position: new Vector3(sp.x + off.x, sp.y + 0.04, sp.z + off.z),
        sector: i,
        color: sColors[i],
        baseScale: isLowDetail ? 0.18 : 0.25,
      });
    });
    if (!isLowDetail) {
      const cv = document.createElement("canvas");
      cv.width = 64;
      cv.height = 32;
      const ctx = cv.getContext("2d");
      ctx.fillStyle = sColorCSS[i];
      ctx.globalAlpha = 0.85;
      ctx.beginPath();
      ctx.roundRect(0, 0, 64, 32, 6);
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.fillStyle = "#fff";
      ctx.font = "bold 20px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(`S${i + 1}`, 32, 17);
      const tex = new CanvasTexture(cv);
      const label = new Sprite(createSpriteLabelMaterial(tex));
      const labelOff = perp2.clone().multiplyScalar(trackW / 2 + 1.8);
      label.position.set(sp.x + labelOff.x, sp.y + 1.0, sp.z + labelOff.z);
      label.scale.set(1.0, 0.5, 1);
      scene.add(freezeObjectTransform(label));
    }
  });
  const sectorDividers = buildColoredLineSegments(sectorDividerGroups, 0.7);
  if (sectorDividers) scene.add(freezeObjectTransform(sectorDividers));
  if (sectorMarkerDefs.length) {
    const markerGeometry = new CircleGeometry(isLowDetail ? 0.18 : 0.25, isLowDetail ? 10 : 16);
    const markerMaterial = createSectorMarkerMaterial(isLowDetail);
    const markerMesh = new InstancedMesh(markerGeometry, markerMaterial, sectorMarkerDefs.length);
    markerMesh.instanceMatrix.setUsage(DynamicDrawUsage);
    const markerDummy = new Object3D();
    sectorMarkerDefs.forEach((marker, index) => {
      markerDummy.position.copy(marker.position);
      markerDummy.rotation.set(-Math.PI / 2, 0, 0);
      markerDummy.scale.setScalar(marker.baseScale);
      markerDummy.updateMatrix();
      markerMesh.setMatrixAt(index, markerDummy.matrix);
      markerMesh.setColorAt(index, new Color(marker.color));
    });
    markerMesh.instanceMatrix.needsUpdate = true;
    if (markerMesh.instanceColor) markerMesh.instanceColor.needsUpdate = true;
    scene.add(markerMesh);
    sectorMarkers = { mesh: markerMesh, defs: sectorMarkerDefs };
  }

  const corners = [];
  const cSamp = 250;
  for (let i = 0; i < cSamp - 2; i++) {
    const t0 = i / cSamp;
    const t1 = (i + 1) / cSamp;
    const t2 = (i + 2) / cSamp;
    const p0 = curve.getPointAt(t0);
    const p1c = curve.getPointAt(t1);
    const p2c = curve.getPointAt(t2);
    const cross = Math.abs((p1c.x - p0.x) * (p2c.z - p1c.z) - (p1c.z - p0.z) * (p2c.x - p1c.x));
    if (cross > 0.12 && (corners.length === 0 || Math.abs(t1 - corners[corners.length - 1].t) > 0.035)) {
      corners.push({ t: t1, p: p1c });
    }
  }
  if (!isLowDetail) {
    corners.slice(0, circuitTurns).forEach((c, i) => {
      const cv = document.createElement("canvas");
      cv.width = 48;
      cv.height = 48;
      const ctx = cv.getContext("2d");
      ctx.fillStyle = "rgba(225,6,0,0.75)";
      ctx.beginPath();
      ctx.arc(24, 24, 20, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#fff";
      ctx.font = "bold 22px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(`${i + 1}`, 24, 25);
      const tex = new CanvasTexture(cv);
      const sp = new Sprite(createSpriteLabelMaterial(tex));
      const tan3 = curve.getTangentAt(c.t);
      const perp3 = new Vector3(-tan3.z, 0, tan3.x).normalize();
      const off = perp3.clone().multiplyScalar(trackW / 2 + 1.5);
      sp.position.set(c.p.x + off.x, c.p.y + 1.5, c.p.z + off.z);
      sp.scale.set(1.3, 1.3, 1);
      scene.add(freezeObjectTransform(sp));
    });
  }

  const sf = curve.getPointAt(0);
  const sfTan = curve.getTangentAt(0);
  const sfPerp = new Vector3(-sfTan.z, 0, sfTan.x).normalize();
  const sfL = sf.clone().add(sfPerp.clone().multiplyScalar(trackW / 2));
  sfL.y += 0.03;
  const sfR = sf.clone().sub(sfPerp.clone().multiplyScalar(trackW / 2));
  sfR.y += 0.03;
  scene.add(freezeObjectTransform(new Line(new BufferGeometry().setFromPoints([sfL, sfR]), createStartLineMaterial())));

  return { curve, seg, sectorMarkers };
}
