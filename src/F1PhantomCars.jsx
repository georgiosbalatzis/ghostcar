import { useState, useEffect, useRef, useCallback, useMemo, memo } from "react";
import * as THREE from "three";
import { F1_DARK, F1_LIGHT, TIRE_COLORS, TEAM_COLORS, getTeamColor, PRESETS, CAM_MODES, CAM_LABELS } from "./constants.js";
import { fetchJSON, fetchMeetings, fetchSessions, fetchDrivers, fetchLaps, fetchStints, fetchLocation, fetchCarData } from "./api.js";
import { lerp, norm, telAt, bestLap, useIsMobile, ds, fmt, encodeURL, decodeURL } from "./helpers.js";

let F1 = F1_DARK;

// ─── Three.js Scene ───
function useScene(ref, tp, l1, l2, prog, c1, c2, cam, lab1, lab2, telData1, vizMode, isDark) {
  const R = useRef({}); const CS = useRef({ angle: 0, pitch: 0.6, dist: 55, drag: false, lx: 0, ly: 0, cinT: 0 }); const cmRef = useRef(cam);
  const camTargetPos = useRef(new THREE.Vector3(40, 30, 40));
  const camTargetLook = useRef(new THREE.Vector3(0, 0, 0));
  const n1 = useMemo(() => l1 ? norm(l1) : null, [l1]); const n2 = useMemo(() => l2 ? norm(l2) : null, [l2]);
  const speedArr = useMemo(() => telData1?.map((t) => t.speed || 0) || [], [telData1]);

  useEffect(() => {
    const el = ref.current; if (!el || !tp || tp.length < 10) return;
    if (R.current.ren) { R.current.ren.dispose(); if (el.contains(R.current.ren.domElement)) el.removeChild(R.current.ren.domElement); }
    if (R.current.fr) cancelAnimationFrame(R.current.fr);
    const w = el.clientWidth, h = el.clientHeight;
    const scene = new THREE.Scene();
    const T = isDark ? F1_DARK : F1_LIGHT;
    scene.background = new THREE.Color(T.sceneBg);
    scene.fog = new THREE.Fog(T.sceneBg, 120, 350);
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 500);
    const ren = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
    ren.setSize(w, h); ren.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    el.appendChild(ren.domElement);

    // Lighting — brighter for light mode
    scene.add(new THREE.AmbientLight(0xdddde8, isDark ? 0.7 : 1.2));
    const sun = new THREE.DirectionalLight(0xffffff, isDark ? 1.0 : 1.4); sun.position.set(40, 80, 30); scene.add(sun);
    scene.add(new THREE.HemisphereLight(isDark ? 0xbbc4dd : 0xeeeeff, isDark ? 0x333340 : 0x889988, isDark ? 0.4 : 0.6));

    // Ground
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(400, 400),
      new THREE.MeshLambertMaterial({ color: T.groundColor })
    );
    ground.rotation.x = -Math.PI / 2; ground.position.y = -0.2; scene.add(ground);

    // ─── Skybox: gradient dome ───
    const skyGeo = new THREE.SphereGeometry(180, 32, 16);
    const skyColors = new Float32Array(skyGeo.attributes.position.count * 3);
    for (let i = 0; i < skyGeo.attributes.position.count; i++) {
      const y = skyGeo.attributes.position.getY(i);
      const t = Math.max(0, Math.min(1, (y + 10) / 190));
      // Dark bottom → deep blue middle → navy top
      skyColors[i * 3] = 0.06 + t * 0.04;
      skyColors[i * 3 + 1] = 0.06 + t * 0.07;
      skyColors[i * 3 + 2] = 0.1 + t * 0.12;
    }
    skyGeo.setAttribute("color", new THREE.Float32BufferAttribute(skyColors, 3));
    const sky = new THREE.Mesh(skyGeo, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide, fog: false }));
    scene.add(sky);

    // ─── Track curve ───
    const curve = new THREE.CatmullRomCurve3(tp.map((p) => new THREE.Vector3(p.x, p.y, p.z)), true);
    const seg = Math.min(tp.length * 3, 800);
    const trackW = 2.0;

    // ─── Build smooth flat ribbon ───
    const curvePts = curve.getPoints(seg);
    const ribbonPos = [], ribbonNorm = [], ribbonIdx = [];
    const leftEdgePts = [], rightEdgePts = [];
    // Smooth tangents by averaging neighbors
    const tangents = curvePts.map((_, i) => {
      const next = curvePts[(i + 1) % curvePts.length];
      const prev = curvePts[(i - 1 + curvePts.length) % curvePts.length];
      return new THREE.Vector3(next.x - prev.x, 0, next.z - prev.z).normalize();
    });
    for (let i = 0; i < curvePts.length; i++) {
      const p = curvePts[i], tan = tangents[i];
      const perp = new THREE.Vector3(-tan.z, 0, tan.x);
      const L = new THREE.Vector3(p.x + perp.x * trackW / 2, p.y, p.z + perp.z * trackW / 2);
      const Ri = new THREE.Vector3(p.x - perp.x * trackW / 2, p.y, p.z - perp.z * trackW / 2);
      ribbonPos.push(L.x, L.y, L.z, Ri.x, Ri.y, Ri.z);
      ribbonNorm.push(0, 1, 0, 0, 1, 0);
      leftEdgePts.push(new THREE.Vector3(L.x, L.y + 0.02, L.z));
      rightEdgePts.push(new THREE.Vector3(Ri.x, Ri.y + 0.02, Ri.z));
      if (i < curvePts.length - 1) {
        const v = i * 2;
        ribbonIdx.push(v, v + 2, v + 1, v + 1, v + 2, v + 3);
      }
    }
    const ribbonGeo = new THREE.BufferGeometry();
    ribbonGeo.setAttribute("position", new THREE.Float32BufferAttribute(ribbonPos, 3));
    ribbonGeo.setAttribute("normal", new THREE.Float32BufferAttribute(ribbonNorm, 3));
    ribbonGeo.setIndex(ribbonIdx);

    // Track surface
    const trackMesh = new THREE.Mesh(ribbonGeo, new THREE.MeshStandardMaterial({
      color: T.trackColor, roughness: 0.8, metalness: 0.1, side: THREE.DoubleSide
    }));
    scene.add(trackMesh);

    // ─── Speed heatmap overlay ───
    if (vizMode === "heatmap" && speedArr.length > 10) {
      const heatColors = new Float32Array((curvePts.length * 2) * 3);
      for (let i = 0; i < curvePts.length; i++) {
        const t = i / (curvePts.length - 1);
        const si = Math.min(Math.floor(t * (speedArr.length - 1)), speedArr.length - 1);
        const ratio = Math.max(0, Math.min(1, (speedArr[si] - 50) / 300));
        let r, g, b;
        if (ratio < 0.25) { r = 0; g = ratio * 4; b = 1; }
        else if (ratio < 0.5) { r = 0; g = 1; b = 1 - (ratio - 0.25) * 4; }
        else if (ratio < 0.75) { r = (ratio - 0.5) * 4; g = 1; b = 0; }
        else { r = 1; g = 1 - (ratio - 0.75) * 4; b = 0; }
        const vi = i * 2;
        heatColors[vi * 3] = r; heatColors[vi * 3 + 1] = g; heatColors[vi * 3 + 2] = b;
        heatColors[(vi + 1) * 3] = r; heatColors[(vi + 1) * 3 + 1] = g; heatColors[(vi + 1) * 3 + 2] = b;
      }
      const heatGeo = ribbonGeo.clone();
      heatGeo.setAttribute("color", new THREE.Float32BufferAttribute(heatColors, 3));
      const heatMesh = new THREE.Mesh(heatGeo, new THREE.MeshBasicMaterial({
        vertexColors: true, transparent: true, opacity: 0.55, side: THREE.DoubleSide, depthWrite: false
      }));
      heatMesh.position.y += 0.01; scene.add(heatMesh);
    }

    // ─── White edge lines ───
    const edgeMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.55 });
    scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(leftEdgePts), edgeMat));
    scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(rightEdgePts), edgeMat));

    // ─── Sector markers — colored lines + LED panels ───
    const sColors = [0x00d26a, 0xffd700, 0xe10600];
    const sectorPanels = [];
    [0, 0.33, 0.66].forEach((t, i) => {
      const sp = curve.getPointAt(t);
      const tan2 = curve.getTangentAt(t);
      const perp2 = new THREE.Vector3(-tan2.z, 0, tan2.x).normalize();
      const L2 = sp.clone().add(perp2.clone().multiplyScalar(trackW / 2 + 0.3));
      const R2 = sp.clone().sub(perp2.clone().multiplyScalar(trackW / 2 + 0.3));
      L2.y += 0.03; R2.y += 0.03;
      scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([L2, R2]), new THREE.LineBasicMaterial({ color: sColors[i], linewidth: 2 })));
      // LED panel boards on both sides
      [-1, 1].forEach((side) => {
        const panelGeo = new THREE.BoxGeometry(0.15, 1.2, 2.0);
        const panelMat = new THREE.MeshStandardMaterial({ color: sColors[i], emissive: sColors[i], emissiveIntensity: 0.3, transparent: true, opacity: 0.7 });
        const panel = new THREE.Mesh(panelGeo, panelMat);
        const off = perp2.clone().multiplyScalar(side * (trackW / 2 + 0.8));
        panel.position.set(sp.x + off.x, sp.y + 0.6, sp.z + off.z);
        panel.lookAt(sp.x, sp.y + 0.6, sp.z);
        scene.add(panel);
        sectorPanels.push({ mesh: panel, sector: i });
      });
    });

    // ─── Corner numbers ───
    const corners = []; const cSamp = 250;
    for (let i = 0; i < cSamp - 2; i++) {
      const t0 = i / cSamp, t1 = (i + 1) / cSamp, t2 = (i + 2) / cSamp;
      const p0 = curve.getPointAt(t0), p1c = curve.getPointAt(t1), p2c = curve.getPointAt(t2);
      const cross = Math.abs((p1c.x - p0.x) * (p2c.z - p1c.z) - (p1c.z - p0.z) * (p2c.x - p1c.x));
      if (cross > 0.12 && (corners.length === 0 || Math.abs(t1 - corners[corners.length - 1].t) > 0.035))
        corners.push({ t: t1, p: p1c });
    }
    corners.slice(0, 20).forEach((c, i) => {
      const cv = document.createElement("canvas"); cv.width = 48; cv.height = 48;
      const ctx = cv.getContext("2d");
      ctx.fillStyle = "rgba(225,6,0,0.75)"; ctx.beginPath(); ctx.arc(24, 24, 20, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#fff"; ctx.font = "bold 22px sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillText(`${i + 1}`, 24, 25);
      const tex = new THREE.CanvasTexture(cv);
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false }));
      const tan3 = curve.getTangentAt(c.t);
      const perp3 = new THREE.Vector3(-tan3.z, 0, tan3.x).normalize();
      const off = perp3.clone().multiplyScalar(trackW / 2 + 1.5);
      sp.position.set(c.p.x + off.x, c.p.y + 1.5, c.p.z + off.z);
      sp.scale.set(1.3, 1.3, 1); scene.add(sp);
    });

    // ─── Start/finish — simple white line ───
    const sf = curve.getPointAt(0), sfTan = curve.getTangentAt(0);
    const sfPerp = new THREE.Vector3(-sfTan.z, 0, sfTan.x).normalize();
    const sfL = sf.clone().add(sfPerp.clone().multiplyScalar(trackW / 2)); sfL.y += 0.03;
    const sfR = sf.clone().sub(sfPerp.clone().multiplyScalar(trackW / 2)); sfR.y += 0.03;
    scene.add(new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([sfL, sfR]),
      new THREE.LineBasicMaterial({ color: 0xffffff })
    ));

    // ─── F1 Car factory — smooth sculpted model ───
    function makeCar(color, label, isGhost) {
      const g = new THREE.Group();
      const col = new THREE.Color(color);
      const alpha = isGhost ? 0.5 : 1;
      const emI = isGhost ? 0.45 : 0.2;
      const bodyMat = new THREE.MeshPhongMaterial({ color: col, emissive: col, emissiveIntensity: emI, specular: 0x444444, shininess: 80, transparent: isGhost, opacity: alpha });
      const darkMat = new THREE.MeshPhongMaterial({ color: 0x111111, shininess: 30, transparent: isGhost, opacity: alpha });
      const carbonMat = new THREE.MeshPhongMaterial({ color: 0x1a1a1a, shininess: 50, transparent: isGhost, opacity: alpha });
      const tireMat = new THREE.MeshPhongMaterial({ color: 0x151515, shininess: 10, transparent: isGhost, opacity: alpha });
      const hubMat = new THREE.MeshPhongMaterial({ color: col, emissive: col, emissiveIntensity: 0.15, specular: 0xffffff, shininess: 120, transparent: isGhost, opacity: alpha });
      const s = 0.55; // scale

      // ─── Body: smooth extruded profile using CatmullRom tube ───
      const bodyCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 0.12 * s, 2.0 * s),   // nose tip
        new THREE.Vector3(0, 0.13 * s, 1.5 * s),   // nose mid
        new THREE.Vector3(0, 0.15 * s, 1.0 * s),   // front
        new THREE.Vector3(0, 0.18 * s, 0.5 * s),   // cockpit front
        new THREE.Vector3(0, 0.22 * s, 0.1 * s),   // cockpit
        new THREE.Vector3(0, 0.28 * s, -0.1 * s),  // airbox
        new THREE.Vector3(0, 0.24 * s, -0.5 * s),  // engine
        new THREE.Vector3(0, 0.2 * s, -0.9 * s),   // rear
        new THREE.Vector3(0, 0.18 * s, -1.1 * s),  // tail
      ]);
      const bodyTube = new THREE.TubeGeometry(bodyCurve, 32, 0.12 * s, 8, false);
      const bodyMesh = new THREE.Mesh(bodyTube, bodyMat);
      g.add(bodyMesh);

      // ─── Nose tip (smooth tapered cone) ───
      const noseGeo = new THREE.ConeGeometry(0.08 * s, 0.6 * s, 12);
      noseGeo.rotateX(-Math.PI / 2);
      const nose = new THREE.Mesh(noseGeo, bodyMat);
      nose.position.set(0, 0.12 * s, 2.3 * s); g.add(nose);

      // ─── Airbox (smooth rounded box) ───
      const airGeo = new THREE.CylinderGeometry(0.08 * s, 0.1 * s, 0.22 * s, 8);
      const air = new THREE.Mesh(airGeo, bodyMat);
      air.position.set(0, 0.38 * s, 0); g.add(air);

      // ─── Cockpit opening ───
      const cpGeo = new THREE.SphereGeometry(0.1 * s, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.5);
      const cp = new THREE.Mesh(cpGeo, darkMat);
      cp.position.set(0, 0.22 * s, 0.2 * s); cp.scale.set(1.2, 0.6, 2.0); g.add(cp);

      // ─── Halo (smooth titanium) ───
      const haloMat2 = new THREE.MeshPhongMaterial({ color: 0x555555, specular: 0xffffff, shininess: 200, transparent: isGhost, opacity: alpha });
      const haloRing = new THREE.Mesh(new THREE.TorusGeometry(0.16 * s, 0.016 * s, 8, 24, Math.PI), haloMat2);
      haloRing.rotation.z = Math.PI; haloRing.position.set(0, 0.32 * s, 0.22 * s); g.add(haloRing);
      const haloPillar = new THREE.Mesh(new THREE.CylinderGeometry(0.012 * s, 0.015 * s, 0.32 * s, 8), haloMat2);
      haloPillar.rotation.x = -0.18; haloPillar.position.set(0, 0.3 * s, 0.42 * s); g.add(haloPillar);

      // ─── Sidepods (smooth capsules) ───
      [-1, 1].forEach((side) => {
        const spCurve = new THREE.CatmullRomCurve3([
          new THREE.Vector3(side * 0.28 * s, 0.14 * s, 0.4 * s),
          new THREE.Vector3(side * 0.34 * s, 0.16 * s, 0.1 * s),
          new THREE.Vector3(side * 0.33 * s, 0.14 * s, -0.3 * s),
          new THREE.Vector3(side * 0.25 * s, 0.12 * s, -0.6 * s),
        ]);
        const spTube = new THREE.TubeGeometry(spCurve, 16, 0.07 * s, 8, false);
        g.add(new THREE.Mesh(spTube, bodyMat));
      });

      // ─── Floor (thin smooth slab) ───
      const flGeo = new THREE.BoxGeometry(0.85 * s, 0.015 * s, 2.8 * s);
      flGeo.translate(0, 0.04 * s, 0.3 * s);
      g.add(new THREE.Mesh(flGeo, carbonMat));

      // ─── Front wing (smooth curved elements) ───
      const fwShape = new THREE.Shape();
      fwShape.moveTo(-0.48 * s, 0); fwShape.quadraticCurveTo(0, -0.015 * s, 0.48 * s, 0);
      fwShape.lineTo(0.48 * s, 0.008 * s); fwShape.quadraticCurveTo(0, 0.02 * s, -0.48 * s, 0.008 * s);
      fwShape.closePath();
      const fwGeo = new THREE.ExtrudeGeometry(fwShape, { depth: 0.16 * s, bevelEnabled: true, bevelThickness: 0.005 * s, bevelSize: 0.005 * s, bevelSegments: 3 });
      const fw = new THREE.Mesh(fwGeo, bodyMat);
      fw.position.set(0, 0.06 * s, 2.0 * s); g.add(fw);
      // Front wing endplates (smooth)
      [-1, 1].forEach((side) => {
        const epGeo = new THREE.BoxGeometry(0.008 * s, 0.07 * s, 0.2 * s);
        const ep = new THREE.Mesh(epGeo, bodyMat);
        ep.position.set(side * 0.48 * s, 0.065 * s, 2.08 * s); g.add(ep);
      });

      // ─── Rear wing (smooth with DRS flap) ───
      const rwGeo = new THREE.BoxGeometry(0.5 * s, 0.012 * s, 0.1 * s);
      const rw = new THREE.Mesh(rwGeo, bodyMat);
      rw.position.set(0, 0.47 * s, -1.0 * s); g.add(rw);
      // DRS flap
      const drsGeo = new THREE.BoxGeometry(0.44 * s, 0.01 * s, 0.05 * s);
      const drs = new THREE.Mesh(drsGeo, bodyMat);
      drs.position.set(0, 0.51 * s, -1.02 * s); drs.rotation.x = -0.2; g.add(drs);
      // Endplates (smooth rounded)
      [-1, 1].forEach((side) => {
        const repGeo = new THREE.BoxGeometry(0.008 * s, 0.16 * s, 0.14 * s);
        const rep = new THREE.Mesh(repGeo, bodyMat);
        rep.position.set(side * 0.25 * s, 0.43 * s, -1.0 * s); g.add(rep);
      });
      // Pylons
      [-1, 1].forEach((side) => {
        const pylGeo = new THREE.CylinderGeometry(0.006 * s, 0.008 * s, 0.16 * s, 6);
        const pyl = new THREE.Mesh(pylGeo, carbonMat);
        pyl.position.set(side * 0.1 * s, 0.34 * s, -0.96 * s); g.add(pyl);
      });

      // ─── Rear light ───
      const rlMat = new THREE.MeshBasicMaterial({ color: 0xff2200, transparent: true, opacity: 0.8 });
      const rl = new THREE.Mesh(new THREE.BoxGeometry(0.2 * s, 0.025 * s, 0.01 * s), rlMat);
      rl.position.set(0, 0.19 * s, -1.12 * s); g.add(rl);

      // ─── Wheels (smooth, high-segment) ───
      const wR = 0.16 * s, wW = 0.08 * s;
      [{ x: 0.38, z: 1.5 }, { x: -0.38, z: 1.5 }, { x: 0.42, z: -0.65 }, { x: -0.42, z: -0.65 }].forEach((wPos) => {
        const tGeo = new THREE.CylinderGeometry(wR, wR, wW, 24);
        tGeo.rotateZ(Math.PI / 2);
        const tire = new THREE.Mesh(tGeo, tireMat);
        tire.position.set(wPos.x * s, wR, wPos.z * s); g.add(tire);
        // Smooth hub
        const hGeo = new THREE.CylinderGeometry(wR * 0.5, wR * 0.5, wW + 0.008 * s, 16);
        hGeo.rotateZ(Math.PI / 2);
        const hub = new THREE.Mesh(hGeo, hubMat);
        hub.position.set(wPos.x * s, wR, wPos.z * s); g.add(hub);
      });

      // ─── Shadow + glow ───
      const shadowMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.2, side: THREE.DoubleSide, depthWrite: false });
      const shadow = new THREE.Mesh(new THREE.CircleGeometry(1.2 * s, 24), shadowMat);
      shadow.rotation.x = -Math.PI / 2; shadow.position.y = 0.01; g.add(shadow);
      const glowMat = new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: isGhost ? 0.05 : 0.025, side: THREE.DoubleSide, depthWrite: false });
      const glowMesh = new THREE.Mesh(new THREE.CircleGeometry(1.4 * s, 16), glowMat);
      glowMesh.rotation.x = -Math.PI / 2; glowMesh.position.set(0, 0.005, 0); g.add(glowMesh);
      // Light
      const carLight = new THREE.PointLight(col, isGhost ? 0.5 : 0.25, 8);
      carLight.position.set(0, 0.35 * s, 0); g.add(carLight);

      // ─── Label ───
      if (label) {
        const cv = document.createElement("canvas"); cv.width = 160; cv.height = 56; const ctx = cv.getContext("2d");
        ctx.fillStyle = color; ctx.globalAlpha = 0.9;
        ctx.beginPath(); const r2 = 6; ctx.moveTo(r2, 0); ctx.lineTo(160 - r2, 0); ctx.quadraticCurveTo(160, 0, 160, r2); ctx.lineTo(160, 56 - r2); ctx.quadraticCurveTo(160, 56, 160 - r2, 56); ctx.lineTo(r2, 56); ctx.quadraticCurveTo(0, 56, 0, 56 - r2); ctx.lineTo(0, r2); ctx.quadraticCurveTo(0, 0, r2, 0); ctx.fill();
        ctx.fillStyle = "#fff"; ctx.globalAlpha = 0.15; ctx.fillRect(0, 0, 6, 56);
        ctx.globalAlpha = 1; ctx.fillStyle = "#fff"; ctx.font = "bold 30px sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillText(label, 80, 30);
        const tex2 = new THREE.CanvasTexture(cv);
        const sp2 = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex2, transparent: true, depthWrite: false }));
        sp2.position.set(0, 0.85 * s, 0); sp2.scale.set(2.2, 0.8, 1); g.add(sp2);
      }
      return g;
    }
    const car1 = makeCar(c1, lab1, false); const car2 = makeCar(c2, lab2, true);
    scene.add(car1); scene.add(car2);

    // ─── Spotlight cone following each car ───
    const spot1 = new THREE.SpotLight(new THREE.Color(c1), 0.6, 25, Math.PI / 6, 0.5, 1);
    spot1.position.set(0, 12, 0); scene.add(spot1);
    const spot2 = new THREE.SpotLight(new THREE.Color(c2), 0.4, 25, Math.PI / 6, 0.5, 1);
    spot2.position.set(0, 12, 0); scene.add(spot2);

    // ─── Delta bar: line connecting two cars ───
    const deltaGeo = new THREE.BufferGeometry();
    const deltaPos = new Float32Array(6); // 2 points x 3 components
    deltaGeo.setAttribute("position", new THREE.Float32BufferAttribute(deltaPos, 3));
    const deltaMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 });
    const deltaLine = new THREE.Line(deltaGeo, deltaMat);
    deltaLine.frustumCulled = false;
    scene.add(deltaLine);

    // ─── Racing line (smooth center path, slightly offset) ───
    const racingLinePts = curve.getPoints(seg);
    const rlGeo = new THREE.BufferGeometry().setFromPoints(racingLinePts);
    const rlLine = new THREE.Line(rlGeo, new THREE.LineBasicMaterial({ color: 0x44aaff, transparent: true, opacity: 0.12 }));
    rlLine.position.y += 0.015; scene.add(rlLine);

    // ─── Fading tire marks (ribbon trails that fade to transparent) ───
    function makeTrail(color, ghost) {
      const max = 120, pos = new Float32Array(max * 3);
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      // Per-vertex opacity via color alpha
      const alphas = new Float32Array(max); alphas.fill(0);
      geo.setAttribute("alpha", new THREE.BufferAttribute(alphas, 1));
      geo.setDrawRange(0, 0);
      const mat = new THREE.ShaderMaterial({
        transparent: true, depthWrite: false,
        uniforms: { uColor: { value: new THREE.Color(color) } },
        vertexShader: `attribute float alpha; varying float vAlpha; void main() { vAlpha = alpha; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_PointSize = 3.0; }`,
        fragmentShader: `uniform vec3 uColor; varying float vAlpha; void main() { gl_FragColor = vec4(uColor, vAlpha * ${ghost ? "0.3" : "0.55"}); }`,
      });
      const points = new THREE.Points(geo, mat);
      scene.add(points);
      return { mesh: points, positions: pos, alphas, max, count: 0 };
    }
    const tr1 = makeTrail(c1, false), tr2 = makeTrail(c2, true);

    R.current = { scene, camera, ren, car1, car2, tr1, tr2, n1, n2, curve, spot1, spot2, deltaLine, deltaPos, sectorPanels, fr: null };

    const cs = CS.current;
    const onDown = (e) => { cs.drag = true; cs.lx = e.clientX ?? e.touches?.[0]?.clientX ?? 0; cs.ly = e.clientY ?? e.touches?.[0]?.clientY ?? 0; };
    const onMove = (e) => { if (!cs.drag) return; const x2 = e.clientX ?? e.touches?.[0]?.clientX ?? 0, y2 = e.clientY ?? e.touches?.[0]?.clientY ?? 0; cs.angle += (x2 - cs.lx) * 0.005; cs.pitch = Math.max(0.1, Math.min(1.4, cs.pitch + (y2 - cs.ly) * 0.005)); cs.lx = x2; cs.ly = y2; };
    const onUp = () => { cs.drag = false; };
    const onWheel = (e) => { cs.dist = Math.max(15, Math.min(200, cs.dist + e.deltaY * 0.05)); };
    const de = ren.domElement;
    de.addEventListener("mousedown", onDown); de.addEventListener("mousemove", onMove); de.addEventListener("mouseup", onUp); de.addEventListener("mouseleave", onUp);
    de.addEventListener("wheel", onWheel, { passive: true }); de.addEventListener("touchstart", onDown, { passive: true }); de.addEventListener("touchmove", onMove, { passive: true }); de.addEventListener("touchend", onUp);

    function animate() {
      R.current.fr = requestAnimationFrame(animate); cs.cinT += 0.0003;
      const cm = cmRef.current;
      if (cm === "orbit") {
        if (!cs.drag) cs.angle += 0.0008;
        camTargetPos.current.set(Math.cos(cs.angle) * cs.dist * Math.cos(cs.pitch), cs.dist * Math.sin(cs.pitch), Math.sin(cs.angle) * cs.dist * Math.cos(cs.pitch));
        camTargetLook.current.set(0, 0, 0);
      } else if (cm === "top") {
        camTargetPos.current.set(0, 65, 0.01);
        camTargetLook.current.set(0, 0, 0);
      }
      camera.position.lerp(camTargetPos.current, 0.08);
      camera.lookAt(camTargetLook.current);
      ren.render(scene, camera);
    }
    animate();

    let rt; const onR = () => { clearTimeout(rt); rt = setTimeout(() => { if (!el) return; camera.aspect = el.clientWidth / el.clientHeight; camera.updateProjectionMatrix(); ren.setSize(el.clientWidth, el.clientHeight); }, 100); };
    window.addEventListener("resize", onR);
    return () => { window.removeEventListener("resize", onR); de.removeEventListener("mousedown", onDown); de.removeEventListener("mousemove", onMove); de.removeEventListener("mouseup", onUp); de.removeEventListener("mouseleave", onUp); de.removeEventListener("wheel", onWheel); de.removeEventListener("touchstart", onDown); de.removeEventListener("touchmove", onMove); de.removeEventListener("touchend", onUp); cancelAnimationFrame(R.current.fr); ren.dispose(); if (el.contains(ren.domElement)) el.removeChild(ren.domElement); };
  }, [tp, c1, c2, lab1, lab2, vizMode, speedArr, isDark]);

  useEffect(() => { R.current.n1 = n1; }, [n1]); useEffect(() => { R.current.n2 = n2; }, [n2]); useEffect(() => { cmRef.current = cam; }, [cam]);

  useEffect(() => {
    const { car1, car2, tr1, tr2, camera: cam2, spot1: sp1, spot2: sp2, deltaLine: dL, deltaPos: dP } = R.current; if (!car1 || !car2 || !tp || tp.length < 2) return; const cs = CS.current;
    function upd(car, trail, data, t) { const pts = data?.length >= 2 ? data : tp; const p = lerp(pts, t); if (isNaN(p.x) || isNaN(p.y) || isNaN(p.z)) return { x: 0, y: 0, z: 0 }; car.position.set(p.x, p.y + 0.2, p.z); const p2 = lerp(pts, Math.min(1, t + 0.005)); if (Math.abs(p2.x - p.x) + Math.abs(p2.z - p.z) > 0.001 && !isNaN(p2.x)) car.lookAt(p2.x, p.y + 0.2, p2.z);
      if (trail) {
        const c = Math.min(trail.count + 1, trail.max);
        for (let i = (c - 1) * 3; i >= 3; i -= 3) { trail.positions[i] = trail.positions[i - 3]; trail.positions[i + 1] = trail.positions[i - 2]; trail.positions[i + 2] = trail.positions[i - 1]; }
        trail.positions[0] = p.x; trail.positions[1] = p.y + 0.05; trail.positions[2] = p.z;
        // Fade alphas
        for (let i = c - 1; i >= 1; i--) trail.alphas[i] = trail.alphas[i - 1] * 0.97;
        trail.alphas[0] = 1.0;
        trail.count = c;
        trail.mesh.geometry.attributes.position.needsUpdate = true;
        trail.mesh.geometry.attributes.alpha.needsUpdate = true;
        trail.mesh.geometry.setDrawRange(0, c);
      }
      return p; }
    const p1 = upd(car1, tr1, R.current.n1, prog); const p2 = upd(car2, tr2, R.current.n2, prog);
    // Spotlights follow cars
    if (sp1) { sp1.position.set(p1.x, p1.y + 12, p1.z); sp1.target = car1; }
    if (sp2) { sp2.position.set(p2.x, p2.y + 12, p2.z); sp2.target = car2; }
    // Delta bar between cars
    if (dL && dP) {
      dP[0] = p1.x; dP[1] = p1.y + 0.5; dP[2] = p1.z;
      dP[3] = p2.x; dP[4] = p2.y + 0.5; dP[5] = p2.z;
      dL.geometry.attributes.position.needsUpdate = true;
      // Color: green if car1 ahead, red if behind (based on distance along track)
      const gap = Math.sqrt((p1.x - p2.x) ** 2 + (p1.z - p2.z) ** 2);
      dL.material.opacity = Math.min(0.6, gap * 0.08);
    }
    // Pulse sector LED panels based on current sector
    const curSector = prog < 0.333 ? 0 : prog < 0.666 ? 1 : 2;
    if (R.current.sectorPanels) {
      R.current.sectorPanels.forEach((sp) => {
        sp.mesh.material.emissiveIntensity = sp.sector === curSector ? 0.8 + Math.sin(Date.now() * 0.006) * 0.2 : 0.2;
        sp.mesh.material.opacity = sp.sector === curSector ? 0.9 : 0.5;
      });
    }
    if (cam2) { const cm = cmRef.current; if (cm === "follow1" || cm === "follow2") { const tgt = cm === "follow1" ? p1 : p2; const pts = cm === "follow1" ? (R.current.n1 || tp) : (R.current.n2 || tp); const ah = lerp(pts, Math.min(1, prog + 0.02)); const dx = ah.x - tgt.x, dz = ah.z - tgt.z, len = Math.sqrt(dx * dx + dz * dz) || 1;
      // Camera shake on braking — derive from telemetry
      const telNow = telData1?.length ? telData1[Math.floor(prog * (telData1.length - 1))] : null;
      const braking = telNow?.brake > 0 ? 1 : 0;
      const shakeX = braking * (Math.random() - 0.5) * 0.12;
      const shakeY = braking * (Math.random() - 0.5) * 0.08;
      camTargetPos.current.set(tgt.x - (dx / len) * 8 + shakeX, tgt.y + 4.5 + shakeY, tgt.z - (dz / len) * 8); camTargetLook.current.set(ah.x + shakeX * 0.5, tgt.y + 0.3, ah.z);
    } else if (cm === "cinematic" && R.current.curve) { const cinT2 = (cs.cinT + prog * 0.3) % 1; const cp = R.current.curve.getPointAt(cinT2);
      const telNow2 = telData1?.length ? telData1[Math.floor(prog * (telData1.length - 1))] : null;
      const shk = telNow2?.brake > 0 ? 0.06 : 0;
      camTargetPos.current.set(cp.x + 8 + (Math.random() - 0.5) * shk, cp.y + 5, cp.z + 8 + (Math.random() - 0.5) * shk); camTargetLook.current.set((p1.x + p2.x) / 2, (p1.y + p2.y) / 2, (p1.z + p2.z) / 2); } }
  }, [prog, tp, cam]);
}

// ─── Mini-map ───
const MiniMap = memo(function MM({ tp, l1, l2, prog, c1, c2 }) {
  const ref = useRef(null); const nn1 = useMemo(() => l1 ? norm(l1) : null, [l1]); const nn2 = useMemo(() => l2 ? norm(l2) : null, [l2]);
  useEffect(() => {
    const c = ref.current; if (!c || !tp?.length) return; const ctx = c.getContext("2d"), s = c.width, pad = 14;
    ctx.clearRect(0, 0, s, s); ctx.fillStyle = F1.overlay; ctx.beginPath(); ctx.moveTo(8,0); ctx.lineTo(s-8,0); ctx.quadraticCurveTo(s,0,s,8); ctx.lineTo(s,s-8); ctx.quadraticCurveTo(s,s,s-8,s); ctx.lineTo(8,s); ctx.quadraticCurveTo(0,s,0,s-8); ctx.lineTo(0,8); ctx.quadraticCurveTo(0,0,8,0); ctx.fill();
    let mnX = Infinity, mxX = -Infinity, mnZ = Infinity, mxZ = -Infinity;
    for (const p of tp) { if (p.x < mnX) mnX = p.x; if (p.x > mxX) mxX = p.x; if (p.z < mnZ) mnZ = p.z; if (p.z > mxZ) mxZ = p.z; }
    const range = Math.max(mxX - mnX, mxZ - mnZ) || 1;
    const proj = (p) => ({ x: pad + ((p.x - mnX) / range) * (s - pad * 2), y: pad + ((p.z - mnZ) / range) * (s - pad * 2) });
    ctx.strokeStyle = "rgba(225,6,0,0.3)"; ctx.lineWidth = 2.5; ctx.beginPath(); tp.forEach((p, i) => { const pp = proj(p); i === 0 ? ctx.moveTo(pp.x, pp.y) : ctx.lineTo(pp.x, pp.y); }); ctx.closePath(); ctx.stroke();
    function dot(data, color) { const pts = data?.length >= 2 ? data : tp; const pt = lerp(pts, prog); const pp = proj(pt); ctx.fillStyle = color; ctx.shadowColor = color; ctx.shadowBlur = 8; ctx.beginPath(); ctx.arc(pp.x, pp.y, 5, 0, Math.PI * 2); ctx.fill(); ctx.shadowBlur = 0; }
    dot(nn1, c1); dot(nn2, c2);
  }, [tp, prog, l1, l2, c1, c2]);
  return <canvas ref={ref} width={150} height={150} style={{ width: 150, height: 150, borderRadius: 8 }} />;
});

// ─── SVG Telemetry Chart with playback cursor ───
const TelChart = memo(function TC({ data1, data2, color1, color2, maxVal, h: ch, prog, label, fillColor }) {
  if (!data1?.length && !data2?.length) return null;
  const H = ch || 45, W = 300;
  function buildPath(data) {
    if (!data?.length) return "";
    const step = Math.max(1, Math.floor(data.length / 150));
    let d = "";
    for (let i = 0; i < data.length; i += step) {
      const x = (i / (data.length - 1)) * W;
      const y = H - 2 - ((data[i] || 0) / maxVal) * (H - 4);
      d += (i === 0 ? "M" : "L") + `${x},${y}`;
    }
    return d;
  }
  const path1 = buildPath(data1), path2 = buildPath(data2);
  return (
    <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={{ borderRadius: 3, background: F1.cardBg, display: "block", marginBottom: 2 }}>
      {path1 && <><path d={path1 + `L${W},${H}L0,${H}Z`} fill={fillColor || `${color1}10`} /><path d={path1} fill="none" stroke={color1} strokeWidth="1.5" opacity="0.7" /></>}
      {path2 && <><path d={path2 + `L${W},${H}L0,${H}Z`} fill={`${color2}08`} /><path d={path2} fill="none" stroke={color2} strokeWidth="1.2" opacity="0.5" strokeDasharray="3,2" /></>}
      {prog !== undefined && <line x1={prog * W} y1="0" x2={prog * W} y2={H} stroke="#fff" strokeWidth="1" opacity="0.5" />}
      {prog !== undefined && data1?.length && (() => {
        const idx = Math.floor(prog * (data1.length - 1));
        const val = data1[idx] || 0;
        const y = H - 2 - (val / maxVal) * (H - 4);
        return <circle cx={prog * W} cy={y} r="2.5" fill={color1} opacity="0.9" />;
      })()}
      {prog !== undefined && data2?.length && (() => {
        const idx = Math.floor(prog * (data2.length - 1));
        const val = data2[idx] || 0;
        const y = H - 2 - (val / maxVal) * (H - 4);
        return <circle cx={prog * W} cy={y} r="2" fill={color2} opacity="0.7" />;
      })()}
    </svg>
  );
});

// ─── F1 TV Live Timing Map View ───
const LiveMap = memo(function LM({ tp, l1, l2, prog, c1, c2, di1, di2, li1, li2, ct1, ct2, delta, tel1, tel2 }) {
  const ref = useRef(null);
  const nn1 = useMemo(() => l1 ? norm(l1) : null, [l1]);
  const nn2 = useMemo(() => l2 ? norm(l2) : null, [l2]);

  useEffect(() => {
    const c = ref.current; if (!c || !tp?.length) return;
    const ctx = c.getContext("2d");
    const W = c.width, H = c.height;
    ctx.clearRect(0, 0, W, H);

    // Background — deep dark with subtle gradient
    const bg = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, W * 0.6);
    bg.addColorStop(0, "#0e0e1a"); bg.addColorStop(1, "#060610");
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

    // Projection
    let mnX = Infinity, mxX = -Infinity, mnZ = Infinity, mxZ = -Infinity;
    for (const p of tp) { if (p.x < mnX) mnX = p.x; if (p.x > mxX) mxX = p.x; if (p.z < mnZ) mnZ = p.z; if (p.z > mxZ) mxZ = p.z; }
    const pad = 80;
    const scale = Math.min((W - pad * 2) / (mxX - mnX || 1), (H - pad * 2 - 140) / (mxZ - mnZ || 1));
    const cx = W / 2, cy = H / 2 - 20;
    const proj = (p) => ({ x: cx + (p.x - (mnX + mxX) / 2) * scale, y: cy + (p.z - (mnZ + mxZ) / 2) * scale });

    // ─── Track glow (wide, dim) ───
    ctx.strokeStyle = "rgba(255,255,255,0.04)"; ctx.lineWidth = 22; ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.beginPath(); tp.forEach((p, i) => { const pp = proj(p); i === 0 ? ctx.moveTo(pp.x, pp.y) : ctx.lineTo(pp.x, pp.y); }); ctx.closePath(); ctx.stroke();

    // ─── Track sectors (colored bands) ───
    const sectorColors = ["#00d26a", "#ffd700", "#e10600"];
    ctx.lineWidth = 10; ctx.lineCap = "round";
    for (let s = 0; s < 3; s++) {
      const start = Math.floor((s / 3) * tp.length), end = Math.floor(((s + 1) / 3) * tp.length);
      ctx.strokeStyle = sectorColors[s] + "35";
      ctx.beginPath();
      for (let i = start; i <= end && i < tp.length; i++) {
        const pp = proj(tp[i]); i === start ? ctx.moveTo(pp.x, pp.y) : ctx.lineTo(pp.x, pp.y);
      }
      ctx.stroke();
    }

    // ─── Track center line ───
    ctx.strokeStyle = "rgba(255,255,255,0.12)"; ctx.lineWidth = 2.5;
    ctx.beginPath(); tp.forEach((p, i) => { const pp = proj(p); i === 0 ? ctx.moveTo(pp.x, pp.y) : ctx.lineTo(pp.x, pp.y); }); ctx.closePath(); ctx.stroke();

    // ─── Sector labels ───
    [0, 0.33, 0.66].forEach((t, i) => {
      const pp = proj(tp[Math.floor(t * (tp.length - 1))]);
      ctx.fillStyle = sectorColors[i]; ctx.font = "bold 11px sans-serif"; ctx.textAlign = "center";
      ctx.fillText(`S${i + 1}`, pp.x, pp.y - 18);
    });

    // ─── Start/finish ───
    const sfP = proj(tp[0]);
    ctx.save(); ctx.strokeStyle = "#fff"; ctx.lineWidth = 3; ctx.setLineDash([4, 3]);
    ctx.beginPath(); ctx.moveTo(sfP.x - 14, sfP.y); ctx.lineTo(sfP.x + 14, sfP.y); ctx.stroke(); ctx.restore();

    // ─── Driver trail + dot ───
    function drawDriver(data, color, name, speed, isGhost) {
      const pts = data?.length >= 2 ? data : tp;
      const pt = lerp(pts, prog); const pp = proj(pt);
      // Speed trail (20 points, colored by speed)
      ctx.lineWidth = 5; ctx.lineCap = "round";
      for (let i = 20; i >= 1; i--) {
        const t2 = Math.max(0, prog - i * 0.002);
        const t3 = Math.max(0, prog - (i - 1) * 0.002);
        const p2 = proj(lerp(pts, t2)), p3 = proj(lerp(pts, t3));
        const alpha = (1 - i / 20) * 0.6;
        ctx.strokeStyle = color + Math.round(alpha * 255).toString(16).padStart(2, "0");
        ctx.beginPath(); ctx.moveTo(p2.x, p2.y); ctx.lineTo(p3.x, p3.y); ctx.stroke();
      }
      // Pulsing outer halo
      const pulse = 0.8 + Math.sin(Date.now() * 0.005) * 0.2;
      ctx.shadowColor = color; ctx.shadowBlur = 20 * pulse;
      ctx.fillStyle = color; ctx.globalAlpha = 0.3;
      ctx.beginPath(); ctx.arc(pp.x, pp.y, 14 * pulse, 0, Math.PI * 2); ctx.fill();
      ctx.globalAlpha = 1;
      // Main dot
      ctx.fillStyle = color;
      ctx.beginPath(); ctx.arc(pp.x, pp.y, isGhost ? 8 : 10, 0, Math.PI * 2); ctx.fill();
      ctx.shadowBlur = 0;
      // White center
      ctx.fillStyle = "#fff";
      ctx.beginPath(); ctx.arc(pp.x, pp.y, 3.5, 0, Math.PI * 2); ctx.fill();
      // Name + speed above
      ctx.fillStyle = color; ctx.font = "bold 14px sans-serif"; ctx.textAlign = "center";
      ctx.fillText(name || "???", pp.x, pp.y - 20);
      ctx.fillStyle = "#aaa"; ctx.font = "bold 11px sans-serif";
      ctx.fillText(Math.round(speed || 0) + " km/h", pp.x, pp.y - 34);
    }
    drawDriver(nn1, c1, di1?.name_acronym, ct1?.speed, false);
    drawDriver(nn2, c2, di2?.name_acronym, ct2?.speed, true);

    // ─── Top bar ───
    const barH = 50;
    ctx.fillStyle = "rgba(6,6,16,0.92)"; ctx.fillRect(0, 0, W, barH);
    ctx.fillStyle = "#E10600"; ctx.fillRect(0, barH - 2, W, 2);
    ctx.fillStyle = "#fff"; ctx.font = "bold 18px sans-serif"; ctx.textAlign = "center";
    ctx.fillText("LIVE TIMING", W / 2, 22);
    ctx.fillStyle = "#666"; ctx.font = "11px sans-serif";
    ctx.fillText("LAP COMPARISON • F1 STORIES", W / 2, 40);

    // ─── Lap progress bar ───
    const prgY = barH + 6, prgH = 4;
    ctx.fillStyle = "#1a1a2e"; ctx.fillRect(40, prgY, W - 80, prgH);
    // Sector colors in progress bar
    for (let s = 0; s < 3; s++) {
      const sx = 40 + (s / 3) * (W - 80), sw = (1 / 3) * (W - 80);
      if (prog > s / 3) {
        const fill = Math.min(1, (prog - s / 3) * 3);
        ctx.fillStyle = sectorColors[s] + "88";
        ctx.fillRect(sx, prgY, sw * fill, prgH);
      }
    }
    // Progress marker
    ctx.fillStyle = "#fff";
    ctx.fillRect(40 + prog * (W - 80) - 1, prgY - 2, 3, prgH + 4);

    // ─── Driver tower cards (bottom) ───
    const cardH = 95, cardW = (W - 40) / 2, cardY = H - cardH - 12;
    [{ x: 12, co: c1, di: di1, ct: ct1, li: li1, pos: "1" },
     { x: cardW + 28, co: c2, di: di2, ct: ct2, li: li2, pos: "2" }].forEach((d) => {
      // Card
      ctx.fillStyle = "rgba(8,8,20,0.93)";
      ctx.beginPath(); ctx.roundRect(d.x, cardY, cardW, cardH, 6); ctx.fill();
      ctx.strokeStyle = d.co + "44"; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.roundRect(d.x, cardY, cardW, cardH, 6); ctx.stroke();
      // Color top bar
      ctx.fillStyle = d.co; ctx.fillRect(d.x + 1, cardY + 1, cardW - 2, 3);
      // Position number
      ctx.fillStyle = d.co; ctx.font = "bold 24px sans-serif"; ctx.textAlign = "left";
      ctx.fillText(d.pos, d.x + 12, cardY + 32);
      // Driver name
      ctx.fillStyle = "#fff"; ctx.font = "bold 18px sans-serif";
      ctx.fillText(d.di?.name_acronym || "???", d.x + 40, cardY + 32);
      // Speed
      ctx.fillStyle = "#fff"; ctx.font = "bold 30px sans-serif";
      ctx.fillText(Math.round(d.ct?.speed || 0), d.x + 12, cardY + 68);
      ctx.fillStyle = "#555"; ctx.font = "11px sans-serif";
      ctx.fillText("KM/H", d.x + 90, cardY + 68);
      // Lap time
      ctx.fillStyle = "#888"; ctx.font = "bold 13px sans-serif";
      ctx.fillText(d.li?.lap_duration ? fmt(d.li.lap_duration) : "--:--.---", d.x + 12, cardY + 86);
      // Throttle bar
      const bx = d.x + cardW - 55;
      ctx.fillStyle = "#1a1a2e"; ctx.fillRect(bx, cardY + 14, 10, 45);
      ctx.fillStyle = "#00d26a";
      ctx.fillRect(bx, cardY + 14 + 45 - (d.ct?.throttle || 0) * 0.45, 10, (d.ct?.throttle || 0) * 0.45);
      // Brake bar
      ctx.fillStyle = "#1a1a2e"; ctx.fillRect(bx + 16, cardY + 14, 10, 45);
      if (d.ct?.brake > 0) { ctx.fillStyle = "#E10600"; ctx.fillRect(bx + 16, cardY + 14, 10, 45); }
      // Labels
      ctx.fillStyle = "#555"; ctx.font = "7px sans-serif"; ctx.textAlign = "center";
      ctx.fillText("THR", bx + 5, cardY + 70); ctx.fillText("BRK", bx + 21, cardY + 70);
      // Gear
      ctx.fillStyle = "#fff"; ctx.font = "bold 20px sans-serif";
      ctx.fillText(d.ct?.n_gear ?? d.ct?.gear ?? "—", bx + 38, cardY + 50);
      ctx.fillStyle = "#555"; ctx.font = "8px sans-serif";
      ctx.fillText("GEAR", bx + 38, cardY + 62);
    });

    // ─── Delta badge ───
    if (delta !== null) {
      const dx = W / 2, dy = cardY - 20;
      ctx.fillStyle = "rgba(6,6,16,0.95)";
      ctx.beginPath(); ctx.roundRect(dx - 65, dy - 24, 130, 44, 8); ctx.fill();
      ctx.strokeStyle = "#E1060055"; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.roundRect(dx - 65, dy - 24, 130, 44, 8); ctx.stroke();
      ctx.fillStyle = "#666"; ctx.font = "bold 9px sans-serif"; ctx.textAlign = "center";
      ctx.fillText("INTERVAL", dx, dy - 12);
      ctx.fillStyle = delta > 0 ? "#E10600" : "#00d26a"; ctx.font = "bold 24px sans-serif";
      ctx.fillText((delta > 0 ? "+" : "") + delta.toFixed(3) + "s", dx, dy + 14);
    }

  }, [tp, l1, l2, prog, c1, c2, di1, di2, li1, li2, ct1, ct2, delta, tel1, tel2]);

  return <canvas ref={ref} width={900} height={900} style={{ width: "100%", height: "100%", display: "block" }} />;
});

// ─── Sector Delta ───
const SD = memo(function SD({ s, t1, t2, c1, c2 }) {
  const d = t1 && t2 ? t1 - t2 : null; const sC = [F1.green, F1.yellow, F1.red];
  return (<div style={{ flex: 1, padding: "5px 8px", background: F1.cardBg, borderRadius: 4, borderTop: `2px solid ${sC[s - 1]}` }}>
    <div style={{ fontSize: 9, color: F1.textMuted, fontFamily: F1.mono, textTransform: "uppercase", letterSpacing: "0.1em" }}>Sector {s}</div>
    <div style={{ display: "flex", justifyContent: "space-between", marginTop: 3 }}>
      <span style={{ fontSize: 12, color: c1, fontFamily: F1.mono, fontWeight: 600 }}>{t1 ? t1.toFixed(3) : "—"}</span>
      <span style={{ fontSize: 12, color: c2, fontFamily: F1.mono, fontWeight: 600 }}>{t2 ? t2.toFixed(3) : "—"}</span>
    </div>
    {d !== null && <div style={{ fontSize: 11, fontWeight: 700, color: d > 0 ? F1.red : F1.green, fontFamily: F1.mono, textAlign: "center", marginTop: 2 }}>{d > 0 ? "+" : ""}{d.toFixed(3)}</div>}
  </div>);
});

// ═══════════════════════════════════════════
export default function App({ embed }) {
  const mob = useIsMobile();
  const [isDark, setIsDark] = useState(() => { try { return localStorage.getItem("f1s-theme") !== "light"; } catch { return true; } });
  F1 = isDark ? F1_DARK : F1_LIGHT;
  const toggleTheme = useCallback(() => { setIsDark((d) => { const next = !d; try { localStorage.setItem("f1s-theme", next ? "dark" : "light"); } catch {} return next; }); }, []);
  const [year, setYear] = useState(2026);
  const [mts, setMts] = useState([]); const [selMt, setSelMt] = useState(null);
  const [sess, setSess] = useState([]); const [selSe, setSelSe] = useState(null);
  const [drvs, setDrvs] = useState([]); const [d1, setD1] = useState(null); const [d2, setD2] = useState(null);
  const [sl1, setSl1] = useState(null); const [sl2, setSl2] = useState(null);
  const [laps1, setLaps1] = useState([]); const [laps2, setLaps2] = useState([]);
  const [loc1, setLoc1] = useState(null); const [loc2, setLoc2] = useState(null);
  const [tel1, setTel1] = useState(null); const [tel2, setTel2] = useState(null);
  const [tp, setTp] = useState(null);
  const [st1, setSt1] = useState([]); const [st2, setSt2] = useState([]);
  const [prog, setProg] = useState(0); const [play, setPlay] = useState(false); const [spd, setSpd] = useState(1); const [loop, setLoop] = useState(false);
  const [cam, setCam] = useState("orbit");
  const [vizMode, setVizMode] = useState("normal");
  const [showKeys, setShowKeys] = useState(false);
  const [showTour, setShowTour] = useState(() => { try { return !localStorage.getItem("f1s-toured"); } catch { return true; } });
  const [tourStep, setTourStep] = useState(0);
  const [showMap, setShowMap] = useState(false);
  const [showH2H, setShowH2H] = useState(false);
  const [h2hData, setH2hData] = useState(null);
  const [showreel, setShowreel] = useState(false);
  const showreelRef = useRef(false);
  const [countdown, setCountdown] = useState(null); // null | 5,4,3,2,1,0
  const [gallery, setGallery] = useState(() => { try { return JSON.parse(localStorage.getItem("f1s-gallery") || "[]"); } catch { return []; } });
  const [showGallery, setShowGallery] = useState(false);
  const [showEmbed, setShowEmbed] = useState(false);
  const touchRef = useRef({ sx: 0, sy: 0 });
  const [loading, setLoading] = useState(""); const [ldPct, setLdPct] = useState(undefined); const [err, setErr] = useState("");
  const [showTel, setShowTel] = useState(true); const [mobTab, setMobTab] = useState("3d");
  const [showPresets, setShowPresets] = useState(false); const [showStats, setShowStats] = useState(false); const [showLaps, setShowLaps] = useState(false);
  const [shareMsg, setShareMsg] = useState("");
  const cRef = useRef(null); const rafRef = useRef(null); const ltRef = useRef(null); const urlLoaded = useRef(false);
  const autoLoadRef = useRef(false);
  const presetActiveRef = useRef(false);

  const di1 = drvs.find((x) => x.driver_number === d1), di2 = drvs.find((x) => x.driver_number === d2);
  const co1 = di1 ? getTeamColor(di1.team_name) : "#4488ff", co2 = di2 ? getTeamColor(di2.team_name) : "#ff4488";
  const li1 = laps1.find((l) => l.lap_number === sl1), li2 = laps2.find((l) => l.lap_number === sl2);
  const delta = li1?.lap_duration && li2?.lap_duration ? li1.lap_duration - li2.lap_duration : null;
  const el1 = li1?.lap_duration ? prog * li1.lap_duration : 0, el2 = li2?.lap_duration ? prog * li2.lap_duration : 0;
  const tire1 = st1.find((s) => sl1 >= s.lap_start && sl1 <= s.lap_end)?.compound?.toUpperCase();
  const tire2 = st2.find((s) => sl2 >= s.lap_start && sl2 <= s.lap_end)?.compound?.toUpperCase();
  const ms = mob ? 200 : 400;
  const s1 = useMemo(() => ds(tel1?.map((t) => t.speed || 0), ms), [tel1, ms]); const s2 = useMemo(() => ds(tel2?.map((t) => t.speed || 0), ms), [tel2, ms]);
  const t1 = useMemo(() => ds(tel1?.map((t) => t.throttle || 0), ms), [tel1, ms]); const t2 = useMemo(() => ds(tel2?.map((t) => t.throttle || 0), ms), [tel2, ms]);
  const b1 = useMemo(() => ds(tel1?.map((t) => (t.brake > 0 ? 100 : 0)), ms), [tel1, ms]); const b2 = useMemo(() => ds(tel2?.map((t) => (t.brake > 0 ? 100 : 0)), ms), [tel2, ms]);
  const ct1 = telAt(tel1, prog), ct2 = telAt(tel2, prog);
  const topS1 = useMemo(() => tel1 ? Math.max(...tel1.map((t) => t.speed || 0)) : 0, [tel1]);
  const topS2 = useMemo(() => tel2 ? Math.max(...tel2.map((t) => t.speed || 0)) : 0, [tel2]);
  const avgS1 = useMemo(() => tel1?.length ? tel1.reduce((a, t) => a + (t.speed || 0), 0) / tel1.length : 0, [tel1]);
  const avgS2 = useMemo(() => tel2?.length ? tel2.reduce((a, t) => a + (t.speed || 0), 0) / tel2.length : 0, [tel2]);

  // Data loading — guarded to not fire during preset load
  useEffect(() => { if (presetActiveRef.current) return; setLoading("Loading..."); setErr(""); fetchMeetings(year).then((d) => { setMts(d.filter((m) => m.meeting_name)); setSelMt(null); setSelSe(null); setSess([]); setDrvs([]); setD1(null); setD2(null); setTp(null); setLoading(""); }).catch((e) => { setErr(e.message); setLoading(""); }); }, [year]);
  useEffect(() => { if (!selMt || presetActiveRef.current) return; setLoading("Loading sessions..."); fetchSessions(selMt.meeting_key).then((d) => { setSess(d.filter((s) => ["Qualifying","Race","Sprint","Sprint Qualifying","Sprint Shootout","Practice 1","Practice 2","Practice 3"].includes(s.session_name))); setSelSe(null); setDrvs([]); setD1(null); setD2(null); setTp(null); setLoading(""); }).catch((e) => { setErr(e.message); setLoading(""); }); }, [selMt]);
  useEffect(() => { if (!selSe || presetActiveRef.current) return; setLoading("Loading drivers..."); fetchDrivers(selSe.session_key).then((d) => { const seen = new Set(); setDrvs(d.filter((x) => { if (seen.has(x.driver_number)) return false; seen.add(x.driver_number); return true; })); setD1(null); setD2(null); setTp(null); setLoading(""); }).catch((e) => { setErr(e.message); setLoading(""); }); }, [selSe]);
  useEffect(() => { if (presetActiveRef.current) return; if (selSe && d1) { fetchLaps(selSe.session_key, d1).then((l) => { setLaps1(l); setSl1(null); }).catch(() => setLaps1([])); fetchStints(selSe.session_key, d1).then(setSt1).catch(() => setSt1([])); } }, [selSe, d1]);
  useEffect(() => { if (presetActiveRef.current) return; if (selSe && d2) { fetchLaps(selSe.session_key, d2).then((l) => { setLaps2(l); setSl2(null); }).catch(() => setLaps2([])); fetchStints(selSe.session_key, d2).then(setSt2).catch(() => setSt2([])); } }, [selSe, d2]);
  useEffect(() => { if (laps1.length && !sl1) { const f = bestLap(laps1); if (f) setSl1(f.lap_number); } }, [laps1]);
  useEffect(() => { if (laps2.length && !sl2) { const f = bestLap(laps2); if (f) setSl2(f.lap_number); } }, [laps2]);

  // URL restore
  useEffect(() => { if (urlLoaded.current) return; const u = decodeURL(); if (u.year && u.mk) { urlLoaded.current = true; setYear(Number(u.year)); } }, []);
  useEffect(() => { const u = decodeURL(); if (u.mk && mts.length && !selMt) { const m = mts.find((x) => String(x.meeting_key) === u.mk); if (m) setSelMt(m); } }, [mts]);
  useEffect(() => { const u = decodeURL(); if (u.sk && sess.length && !selSe) { const s = sess.find((x) => String(x.session_key) === u.sk); if (s) setSelSe(s); } }, [sess]);
  useEffect(() => { const u = decodeURL(); if (u.d1 && u.d2 && drvs.length && !d1 && !d2) { setD1(Number(u.d1)); setD2(Number(u.d2)); } }, [drvs]);
  useEffect(() => { const u = decodeURL(); if (u.l1 && laps1.length && !sl1) setSl1(Number(u.l1)); }, [laps1]);
  useEffect(() => { const u = decodeURL(); if (u.l2 && laps2.length && !sl2) setSl2(Number(u.l2)); }, [laps2]);

  const loadData = useCallback(async () => {
    if (!selSe || !d1 || !d2 || !sl1 || !sl2) return; setLoading("Fetching telemetry..."); setErr(""); setLdPct(0);
    try {
      const sk = selSe.session_key; const la1 = laps1.find((l) => l.lap_number === sl1), la2 = laps2.find((l) => l.lap_number === sl2);
      if (!la1?.date_start || !la2?.date_start) { setErr("Lap timing unavailable."); setLoading(""); return; }
      const e1 = new Date(new Date(la1.date_start).getTime() + (la1.lap_duration || 120) * 1000).toISOString();
      const e2 = new Date(new Date(la2.date_start).getTime() + (la2.lap_duration || 120) * 1000).toISOString();
      setLdPct(20); const [lo1, lo2] = await Promise.all([fetchLocation(sk, d1, la1.date_start, e1), fetchLocation(sk, d2, la2.date_start, e2)]);
      setLdPct(60); const [ca1, ca2] = await Promise.all([fetchCarData(sk, d1, la1.date_start, e1), fetchCarData(sk, d2, la2.date_start, e2)]);
      if (lo1.length < 5 || lo2.length < 5) { setErr("Insufficient data."); setLoading(""); setLdPct(undefined); return; }
      setLoc1(lo1); setLoc2(lo2); setTel1(ca1); setTel2(ca2); setTp(norm(lo1)); setProg(0); setPlay(false);
      setLdPct(100); setTimeout(() => { setLoading(""); setLdPct(undefined); }, 300);
    } catch (e) { setErr(e.message); setLoading(""); setLdPct(undefined); }
  }, [selSe, d1, d2, sl1, sl2, laps1, laps2]);

  const loadPreset = useCallback(async (pr) => {
    setShowPresets(false); setLoading("Loading preset..."); setErr(""); setLdPct(0);
    presetActiveRef.current = true;
    try {
      // 1. Fetch meetings
      const allMts = await fetchMeetings(pr.year);
      const filteredMts = allMts.filter((x) => x.meeting_name);
      const mt = filteredMts.find((x) => x.meeting_name && x.meeting_name.toLowerCase().includes(pr.meeting.toLowerCase().replace(" grand prix", "").trim()));
      if (!mt) throw new Error(`Meeting "${pr.meeting}" not found for ${pr.year}`);
      setLdPct(10);

      // 2. Fetch sessions
      const allSess = await fetchSessions(mt.meeting_key);
      const filteredSess = allSess.filter((s) => ["Qualifying","Race","Sprint","Sprint Qualifying","Sprint Shootout","Practice 1","Practice 2","Practice 3"].includes(s.session_name));
      const se = filteredSess.find((s) => s.session_name === pr.session);
      if (!se) throw new Error(`Session "${pr.session}" not found`);
      setLdPct(20);

      // 3. Fetch drivers
      const allDrvs = await fetchDrivers(se.session_key);
      const seen = new Set();
      const uniqueDrvs = allDrvs.filter((x) => { if (seen.has(x.driver_number)) return false; seen.add(x.driver_number); return true; });
      setLdPct(30);

      // 4. Fetch laps for both drivers
      const [l1Data, l2Data] = await Promise.all([fetchLaps(se.session_key, pr.d1), fetchLaps(se.session_key, pr.d2)]);
      const fast1 = bestLap(l1Data), fast2 = bestLap(l2Data);
      if (!fast1 || !fast2) throw new Error("No valid laps found for these drivers");
      setLdPct(45);

      // 5. Fetch stints
      const [st1Data, st2Data] = await Promise.all([
        fetchStints(se.session_key, pr.d1).catch(() => []),
        fetchStints(se.session_key, pr.d2).catch(() => [])
      ]);

      // 6. Set ALL state at once
      setYear(pr.year); setMts(filteredMts); setSelMt(mt);
      setSess(filteredSess); setSelSe(se);
      setDrvs(uniqueDrvs); setD1(pr.d1); setD2(pr.d2);
      setLaps1(l1Data); setLaps2(l2Data);
      setSl1(fast1.lap_number); setSl2(fast2.lap_number);
      setSt1(st1Data); setSt2(st2Data);
      setLdPct(50);

      // 7. Fetch location + telemetry directly
      setLoading("Fetching telemetry...");
      const sk = se.session_key;
      const end1 = new Date(new Date(fast1.date_start).getTime() + (fast1.lap_duration || 120) * 1000).toISOString();
      const end2 = new Date(new Date(fast2.date_start).getTime() + (fast2.lap_duration || 120) * 1000).toISOString();

      setLdPct(60);
      const [lo1, lo2] = await Promise.all([fetchLocation(sk, pr.d1, fast1.date_start, end1), fetchLocation(sk, pr.d2, fast2.date_start, end2)]);
      setLdPct(80);
      const [ca1, ca2] = await Promise.all([fetchCarData(sk, pr.d1, fast1.date_start, end1), fetchCarData(sk, pr.d2, fast2.date_start, end2)]);

      if (lo1.length < 5 || lo2.length < 5) throw new Error("Insufficient location data for these laps");

      setLoc1(lo1); setLoc2(lo2); setTel1(ca1); setTel2(ca2);
      setTp(norm(lo1)); setProg(0); setPlay(false);
      setLdPct(100);
      setTimeout(() => { setLoading(""); setLdPct(undefined); presetActiveRef.current = false; }, 300);
    } catch (e) {
      setErr(e.message); setLoading(""); setLdPct(undefined);
      presetActiveRef.current = false;
    }
  }, []);

  const share = useCallback(() => { if (!selMt || !selSe) return; const url = encodeURL({ year, mk: selMt.meeting_key, sk: selSe.session_key, d1, d2, l1: sl1, l2: sl2 }); navigator.clipboard?.writeText(url).then(() => { setShareMsg("Copied!"); setTimeout(() => setShareMsg(""), 2000); }); window.history.replaceState(null, "", url.split(window.location.origin)[1]); }, [year, selMt, selSe, d1, d2, sl1, sl2]);

  useScene(cRef, tp, loc1, loc2, prog, co1, co2, cam, di1?.name_acronym || "", di2?.name_acronym || "", tel1, vizMode, isDark);

  // Playback with countdown
  const startWithCountdown = useCallback(() => {
    if (prog < 0.01 && tp && !play) {
      setCountdown(5);
      let c = 5;
      const iv = setInterval(() => {
        c--;
        setCountdown(c);
        if (c <= 0) { clearInterval(iv); setCountdown(null); setPlay(true); }
      }, 600);
    } else {
      setPlay(!play);
    }
  }, [prog, tp, play]);
  useEffect(() => { if (!play) { ltRef.current = null; if (rafRef.current) cancelAnimationFrame(rafRef.current); return; } function tick(ts) { if (!ltRef.current) ltRef.current = ts; const dt = (ts - ltRef.current) / 1000; ltRef.current = ts; setProg((p) => { const n = p + dt * 0.015 * spd; if (n >= 1) { if (loop) return 0; setPlay(false); return 1; } return n; }); rafRef.current = requestAnimationFrame(tick); } rafRef.current = requestAnimationFrame(tick); return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); }; }, [play, spd, loop]);

  // Keys
  const lastLeftRef = useRef(0);
  useEffect(() => { const h = (e) => { if (e.target.tagName === "SELECT" || e.target.tagName === "INPUT") return; if (e.key === "?" || (e.shiftKey && e.code === "Slash")) { setShowKeys((k) => !k); return; } if (e.code === "Escape") { setShowKeys(false); setShowTour(false); return; } if (e.code === "Space") { e.preventDefault(); if (tp) startWithCountdown(); } if (e.code === "KeyR") { setProg(0); setPlay(false); } if (e.code === "KeyT") setShowTel((s) => !s); if (e.code === "KeyC") setCam((m) => CAM_MODES[(CAM_MODES.indexOf(m) + 1) % CAM_MODES.length]); if (e.code === "KeyL") setLoop((l) => !l); if (e.code === "ArrowRight") setProg((p) => Math.min(1, p + 0.01)); if (e.code === "ArrowLeft") { const now = Date.now(); if (now - lastLeftRef.current < 300) { setProg((p) => Math.max(0, p - 0.05)); } else { setProg((p) => Math.max(0, p - 0.01)); } lastLeftRef.current = now; } }; window.addEventListener("keydown", h); return () => window.removeEventListener("keydown", h); }, [tp, startWithCountdown]);

  // Mobile swipe gestures — left/right = scrub, up/down = toggle map
  useEffect(() => {
    if (!mob || !tp) return;
    let sx = 0, sy = 0;
    const onTS = (e) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; };
    const onTE = (e) => {
      const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) setProg((p) => Math.max(0, Math.min(1, p + (dx > 0 ? 0.03 : -0.03))));
      else if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 60) setShowMap((m) => !m);
    };
    document.addEventListener("touchstart", onTS, { passive: true });
    document.addEventListener("touchend", onTE, { passive: true });
    return () => { document.removeEventListener("touchstart", onTS); document.removeEventListener("touchend", onTE); };
  }, [mob, tp]);

  // Save comparison to gallery
  const saveToGallery = useCallback(() => {
    if (!di1 || !di2 || !selMt || !li1 || !li2) return;
    const entry = { id: Date.now(), d1n: di1.name_acronym, d2n: di2.name_acronym, gp: selMt.meeting_name, year, delta: delta?.toFixed(3), t1: fmt(li1.lap_duration), t2: fmt(li2.lap_duration), c1: co1, c2: co2, url: encodeURL({ year, mk: selMt.meeting_key, sk: selSe?.session_key, d1, d2, l1: sl1, l2: sl2 }) };
    const newG = [entry, ...gallery].slice(0, 20);
    setGallery(newG);
    try { localStorage.setItem("f1s-gallery", JSON.stringify(newG)); } catch {}
  }, [di1, di2, selMt, selSe, li1, li2, delta, co1, co2, year, d1, d2, sl1, sl2, gallery]);

  // Social card generator
  const generateSocialCard = useCallback(() => {
    const cv = document.createElement("canvas"); cv.width = 1200; cv.height = 630;
    const ctx = cv.getContext("2d");
    // Background
    ctx.fillStyle = "#15151e"; ctx.fillRect(0, 0, 1200, 630);
    ctx.fillStyle = "#E10600"; ctx.fillRect(0, 0, 1200, 6);
    // Title
    ctx.fillStyle = "#fff"; ctx.font = "bold 42px sans-serif"; ctx.textAlign = "center";
    ctx.fillText("GHOST CAR LAB", 600, 80);
    ctx.fillStyle = "#E10600"; ctx.font = "bold 20px sans-serif";
    ctx.fillText("f1stories.gr", 600, 115);
    // GP name
    ctx.fillStyle = "#888"; ctx.font = "24px sans-serif";
    ctx.fillText(selMt?.meeting_name || "", 600, 160);
    // VS
    ctx.fillStyle = co1; ctx.font = "bold 72px sans-serif"; ctx.textAlign = "right";
    ctx.fillText(di1?.name_acronym || "D1", 530, 310);
    ctx.fillStyle = "#E10600"; ctx.font = "bold 36px sans-serif"; ctx.textAlign = "center";
    ctx.fillText("VS", 600, 310);
    ctx.fillStyle = co2; ctx.font = "bold 72px sans-serif"; ctx.textAlign = "left";
    ctx.fillText(di2?.name_acronym || "D2", 670, 310);
    // Times
    ctx.fillStyle = co1; ctx.font = "bold 32px sans-serif"; ctx.textAlign = "right";
    ctx.fillText(fmt(li1?.lap_duration), 530, 380);
    ctx.fillStyle = co2; ctx.font = "bold 32px sans-serif"; ctx.textAlign = "left";
    ctx.fillText(fmt(li2?.lap_duration), 670, 380);
    // Delta
    if (delta !== null) {
      ctx.fillStyle = delta > 0 ? "#E10600" : "#00d26a"; ctx.font = "bold 48px sans-serif"; ctx.textAlign = "center";
      ctx.fillText((delta > 0 ? "+" : "") + delta.toFixed(3) + "s", 600, 470);
    }
    // Footer
    ctx.fillStyle = "#333"; ctx.fillRect(0, 570, 1200, 60);
    ctx.fillStyle = "#888"; ctx.font = "16px sans-serif"; ctx.textAlign = "center";
    ctx.fillText("Powered by F1 Stories • f1stories.gr/ghostcar", 600, 600);
    // Download
    const a = document.createElement("a"); a.href = cv.toDataURL("image/png"); a.download = `f1stories-${di1?.name_acronym}-vs-${di2?.name_acronym}.png`; a.click();
  }, [di1, di2, selMt, li1, li2, delta, co1, co2]);

  // Backdrop + modals
  const modBg = (showPresets || showStats || showLaps || showKeys || showH2H || showGallery || showEmbed) && <div onClick={() => { setShowPresets(false); setShowStats(false); setShowLaps(false); setShowKeys(false); setShowH2H(false); setShowGallery(false); setShowEmbed(false); }} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 99, backdropFilter: "blur(4px)" }} />;

  const presetsModal = showPresets && (<div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: F1.carbon, border: `1px solid ${F1.red}33`, borderRadius: 12, padding: 0, zIndex: 100, width: mob ? "95%" : 460, maxHeight: "80vh", display: "flex", flexDirection: "column", animation: "fadeIn .2s", overflow: "hidden" }}>
    <div style={{ display: "flex", alignItems: "center", padding: "16px 20px", borderBottom: `1px solid ${F1.borderLight}` }}>
      <div>
        <div style={{ fontWeight: 900, fontSize: 16, fontFamily: F1.sans, letterSpacing: "0.05em" }}>MEMORABLE BATTLES</div>
        <div style={{ fontSize: 10, color: F1.textMuted, marginTop: 2 }}>20 iconic qualifying & race comparisons</div>
      </div>
      <button onClick={() => setShowPresets(false)} style={{ marginLeft: "auto", padding: "4px 10px" }}>✕</button>
    </div>
    <div style={{ overflowY: "auto", padding: "12px 20px 20px", flex: 1 }}>
      {["2025", "2024", "2023"].map((yr) => {
        const items = PRESETS.filter((p) => p.cat === yr);
        if (!items.length) return null;
        return (<div key={yr} style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 11, fontWeight: 900, color: F1.red, letterSpacing: "0.12em", marginBottom: 8, fontFamily: F1.mono, borderBottom: `1px solid ${F1.red}22`, paddingBottom: 4 }}>{yr} SEASON</div>
          {items.map((p, i) => (
            <button key={i} onClick={() => loadPreset(p)} style={{ display: "block", width: "100%", textAlign: "left", padding: "10px 12px", marginBottom: 4, fontSize: 12, fontFamily: F1.mono, borderLeft: `3px solid ${F1.red}`, lineHeight: 1.4 }}>
              {p.label}
            </button>
          ))}
        </div>);
      })}
    </div>
  </div>);

  // Extra computed stats
  const minSpd1 = useMemo(() => tel1?.length ? Math.min(...tel1.filter(t => t.speed > 5).map(t => t.speed)) : 0, [tel1]);
  const minSpd2 = useMemo(() => tel2?.length ? Math.min(...tel2.filter(t => t.speed > 5).map(t => t.speed)) : 0, [tel2]);
  const fullThr1 = useMemo(() => tel1?.length ? (tel1.filter(t => t.throttle >= 95).length / tel1.length * 100) : 0, [tel1]);
  const fullThr2 = useMemo(() => tel2?.length ? (tel2.filter(t => t.throttle >= 95).length / tel2.length * 100) : 0, [tel2]);
  const brkPct1 = useMemo(() => tel1?.length ? (tel1.filter(t => t.brake > 0).length / tel1.length * 100) : 0, [tel1]);
  const brkPct2 = useMemo(() => tel2?.length ? (tel2.filter(t => t.brake > 0).length / tel2.length * 100) : 0, [tel2]);
  const coastPct1 = useMemo(() => tel1?.length ? (tel1.filter(t => t.throttle < 5 && t.brake === 0).length / tel1.length * 100) : 0, [tel1]);
  const coastPct2 = useMemo(() => tel2?.length ? (tel2.filter(t => t.throttle < 5 && t.brake === 0).length / tel2.length * 100) : 0, [tel2]);
  const drsCnt1 = useMemo(() => { if (!tel1?.length) return 0; let c = 0; for (let i = 1; i < tel1.length; i++) if (tel1[i].drs >= 10 && tel1[i-1].drs < 10) c++; return c; }, [tel1]);
  const drsCnt2 = useMemo(() => { if (!tel2?.length) return 0; let c = 0; for (let i = 1; i < tel2.length; i++) if (tel2[i].drs >= 10 && tel2[i-1].drs < 10) c++; return c; }, [tel2]);
  const maxRpm1 = useMemo(() => tel1?.length ? Math.max(...tel1.map(t => t.rpm || 0)) : 0, [tel1]);
  const maxRpm2 = useMemo(() => tel2?.length ? Math.max(...tel2.map(t => t.rpm || 0)) : 0, [tel2]);

  const statsModal = showStats && tp && (<div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: F1.carbon, border: `1px solid ${F1.red}33`, borderRadius: 12, padding: 0, zIndex: 100, width: mob ? "95%" : 480, maxHeight: "85vh", display: "flex", flexDirection: "column", animation: "fadeIn .2s", overflow: "hidden" }}>
    <div style={{ display: "flex", alignItems: "center", padding: "16px 20px", borderBottom: `1px solid ${F1.borderLight}` }}>
      <div>
        <div style={{ fontWeight: 900, fontSize: 16, fontFamily: F1.sans, letterSpacing: "0.05em" }}>LAP ANALYSIS</div>
        <div style={{ fontSize: 10, color: F1.textMuted, marginTop: 2 }}>Detailed telemetry comparison</div>
      </div>
      <button onClick={() => {
        // Generate a text-based report and download
        const rows = [
          `F1 STORIES — GHOST CAR LAB REPORT`,
          `${selMt?.meeting_name || ""} ${year} — ${selSe?.session_name || ""}`,
          `${di1?.name_acronym || "D1"} vs ${di2?.name_acronym || "D2"}`,
          ``,
          `LAP TIME:    ${li1?.lap_duration ? fmt(li1.lap_duration) : "—"}  vs  ${li2?.lap_duration ? fmt(li2.lap_duration) : "—"}  Δ ${li1?.lap_duration && li2?.lap_duration ? (li1.lap_duration - li2.lap_duration > 0 ? "+" : "") + (li1.lap_duration - li2.lap_duration).toFixed(3) + "s" : "—"}`,
          `TOP SPEED:   ${Math.round(topS1)} km/h  vs  ${Math.round(topS2)} km/h`,
          `AVG SPEED:   ${Math.round(avgS1)} km/h  vs  ${Math.round(avgS2)} km/h`,
          `SECTOR 1:    ${li1?.duration_sector_1?.toFixed(3) || "—"}  vs  ${li2?.duration_sector_1?.toFixed(3) || "—"}`,
          `SECTOR 2:    ${li1?.duration_sector_2?.toFixed(3) || "—"}  vs  ${li2?.duration_sector_2?.toFixed(3) || "—"}`,
          `SECTOR 3:    ${li1?.duration_sector_3?.toFixed(3) || "—"}  vs  ${li2?.duration_sector_3?.toFixed(3) || "—"}`,
          `FULL THROTTLE: ${fullThr1.toFixed(1)}%  vs  ${fullThr2.toFixed(1)}%`,
          `BRAKING:     ${brkPct1.toFixed(1)}%  vs  ${brkPct2.toFixed(1)}%`,
          `COASTING:    ${coastPct1.toFixed(1)}%  vs  ${coastPct2.toFixed(1)}%`,
          `TYRE:        ${tire1 || "—"}  vs  ${tire2 || "—"}`,
          ``,
          `Generated by f1stories.gr/ghostcar`,
        ];
        const blob = new Blob([rows.join("\n")], { type: "text/plain" });
        const a = document.createElement("a"); a.href = URL.createObjectURL(blob);
        a.download = `f1stories-report-${di1?.name_acronym || "D1"}-vs-${di2?.name_acronym || "D2"}.txt`; a.click();
      }} style={{ padding: "4px 10px", fontSize: 10 }}>📄 EXPORT</button>
      <button onClick={() => setShowStats(false)} style={{ marginLeft: "auto", padding: "4px 10px" }}>✕</button>
    </div>
    <div style={{ overflowY: "auto", padding: "0 20px 20px" }}>
    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, fontFamily: F1.mono }}>
      <thead><tr style={{ color: F1.textMuted, fontSize: 10, letterSpacing: "0.1em" }}><th style={{ textAlign: "left", padding: "10px 8px 6px", borderBottom: `1px solid ${F1.red}22` }}>METRIC</th><th style={{ textAlign: "center", padding: "10px 8px 6px", color: co1, borderBottom: `2px solid ${co1}44` }}>{di1?.name_acronym || "D1"}</th><th style={{ textAlign: "center", padding: "10px 8px 6px", color: co2, borderBottom: `2px solid ${co2}44` }}>{di2?.name_acronym || "D2"}</th><th style={{ textAlign: "center", padding: "10px 8px 6px", color: F1.textMuted, borderBottom: `1px solid ${F1.borderLight}`, width: 50 }}>Δ</th></tr></thead>
      <tbody>{[
        { m: "LAP TIME", v1: li1?.lap_duration ? fmt(li1.lap_duration) : "—", v2: li2?.lap_duration ? fmt(li2.lap_duration) : "—", d: li1?.lap_duration && li2?.lap_duration ? (li1.lap_duration - li2.lap_duration) : null, unit: "s" },
        { m: "TOP SPEED", v1: Math.round(topS1), v2: Math.round(topS2), d: topS1 - topS2, unit: "", inv: true },
        { m: "AVG SPEED", v1: Math.round(avgS1), v2: Math.round(avgS2), d: avgS1 - avgS2, unit: "", inv: true },
        { m: "MIN SPEED", v1: Math.round(minSpd1), v2: Math.round(minSpd2), d: minSpd1 - minSpd2, unit: "", inv: true },
        { m: "SECTOR 1", v1: li1?.duration_sector_1?.toFixed(3) || "—", v2: li2?.duration_sector_1?.toFixed(3) || "—", d: li1?.duration_sector_1 && li2?.duration_sector_1 ? li1.duration_sector_1 - li2.duration_sector_1 : null, unit: "s" },
        { m: "SECTOR 2", v1: li1?.duration_sector_2?.toFixed(3) || "—", v2: li2?.duration_sector_2?.toFixed(3) || "—", d: li1?.duration_sector_2 && li2?.duration_sector_2 ? li1.duration_sector_2 - li2.duration_sector_2 : null, unit: "s" },
        { m: "SECTOR 3", v1: li1?.duration_sector_3?.toFixed(3) || "—", v2: li2?.duration_sector_3?.toFixed(3) || "—", d: li1?.duration_sector_3 && li2?.duration_sector_3 ? li1.duration_sector_3 - li2.duration_sector_3 : null, unit: "s" },
        { m: "FULL THROTTLE", v1: `${fullThr1.toFixed(1)}%`, v2: `${fullThr2.toFixed(1)}%`, d: fullThr1 - fullThr2, unit: "%", inv: true },
        { m: "BRAKING", v1: `${brkPct1.toFixed(1)}%`, v2: `${brkPct2.toFixed(1)}%`, d: brkPct1 - brkPct2, unit: "%" },
        { m: "COASTING", v1: `${coastPct1.toFixed(1)}%`, v2: `${coastPct2.toFixed(1)}%`, d: coastPct1 - coastPct2, unit: "%" },
        { m: "DRS OPENS", v1: drsCnt1, v2: drsCnt2, d: null, unit: "" },
        { m: "MAX RPM", v1: maxRpm1 ? Math.round(maxRpm1).toLocaleString() : "—", v2: maxRpm2 ? Math.round(maxRpm2).toLocaleString() : "—", d: null, unit: "" },
        { m: "TYRE", v1: tire1 || "—", v2: tire2 || "—", d: null, unit: "" },
      ].map((r) => {
        // Determine who's better for highlighting
        const better = r.d !== null ? (r.inv ? (r.d > 0 ? 1 : r.d < 0 ? 2 : 0) : (r.d < 0 ? 1 : r.d > 0 ? 2 : 0)) : 0;
        return (<tr key={r.m} style={{ borderBottom: `1px solid ${F1.borderLight}` }}>
          <td style={{ padding: "7px 8px", color: F1.textDim, letterSpacing: "0.04em", fontSize: 10 }}>{r.m}</td>
          <td style={{ padding: "7px 8px", textAlign: "center", fontWeight: 700, color: better === 1 ? co1 : F1.text, background: better === 1 ? `${co1}08` : "transparent" }}>{r.v1}</td>
          <td style={{ padding: "7px 8px", textAlign: "center", fontWeight: 700, color: better === 2 ? co2 : F1.text, background: better === 2 ? `${co2}08` : "transparent" }}>{r.v2}</td>
          <td style={{ padding: "7px 8px", textAlign: "center", fontSize: 10, color: r.d !== null ? (r.d > 0 ? (r.inv ? F1.green : F1.red) : r.d < 0 ? (r.inv ? F1.red : F1.green) : F1.textMuted) : F1.textMuted }}>
            {r.d !== null ? `${r.d > 0 ? "+" : ""}${typeof r.d === "number" ? (Math.abs(r.d) < 1 ? r.d.toFixed(3) : Math.round(r.d)) : r.d}` : "—"}
          </td>
        </tr>);
      })}</tbody>
    </table>
    </div>
  </div>);

  const lapsModal = showLaps && (<div style={{ position: "fixed", top: 0, right: 0, bottom: 0, width: mob ? "100%" : 380, background: F1.carbon, borderLeft: `1px solid ${F1.red}22`, zIndex: 100, display: "flex", flexDirection: "column", animation: "fadeIn .2s" }}>
    <div style={{ display: "flex", alignItems: "center", padding: "14px 16px", borderBottom: `1px solid ${F1.borderLight}` }}><span style={{ fontWeight: 700, fontSize: 14, fontFamily: F1.sans, letterSpacing: "0.05em" }}>LAP TIMES</span><button onClick={() => setShowLaps(false)} style={{ marginLeft: "auto" }}>✕</button></div>
    <div style={{ flex: 1, overflowY: "auto", padding: 14 }}>
      {[{ lab: di1?.name_acronym || "D1", col: co1, laps: laps1, sel: sl1, set: setSl1 }, { lab: di2?.name_acronym || "D2", col: co2, laps: laps2, sel: sl2, set: setSl2 }].map((drv) => {
        const vl = drv.laps.filter((l) => l.lap_duration > 10); const best = vl.length ? Math.min(...vl.map((l) => l.lap_duration)) : 0; const worst = vl.length ? Math.max(...vl.map((l) => l.lap_duration)) : 0;
        return (<div key={drv.lab} style={{ marginBottom: 18 }}><div style={{ fontSize: 12, fontWeight: 700, color: drv.col, marginBottom: 8, fontFamily: F1.mono, letterSpacing: "0.1em", borderLeft: `3px solid ${drv.col}`, paddingLeft: 8 }}>{drv.lab}</div>
          {vl.sort((a, b) => a.lap_duration - b.lap_duration).map((l) => { const pct = worst > best ? (l.lap_duration - best) / (worst - best) : 0; return (<div key={l.lap_number} onClick={() => drv.set(l.lap_number)} style={{ display: "flex", gap: 8, alignItems: "center", padding: "5px 8px", borderRadius: 4, cursor: "pointer", background: l.lap_number === drv.sel ? `${drv.col}18` : "transparent", borderLeft: l.lap_number === drv.sel ? `2px solid ${drv.col}` : "2px solid transparent", marginBottom: 2, fontSize: 12, fontFamily: F1.mono }}>
            <span style={{ width: 30, color: F1.textMuted }}>L{l.lap_number}</span>
            <span style={{ fontWeight: l.lap_duration === best ? 800 : 400, color: l.lap_duration === best ? F1.green : F1.text }}>{fmt(l.lap_duration)}</span>
            {l.lap_duration === best && <span style={{ fontSize: 9, color: F1.green, fontWeight: 700, background: `${F1.green}15`, padding: "1px 5px", borderRadius: 3 }}>P1</span>}
            <div style={{ marginLeft: "auto", width: 36, height: 3, background: F1.borderLight, borderRadius: 2, overflow: "hidden" }}><div style={{ height: "100%", width: `${(1 - pct) * 100}%`, background: pct < 0.1 ? F1.green : pct > 0.7 ? F1.red : F1.yellow, borderRadius: 2 }} /></div>
          </div>); })}
        </div>);
      })}
    </div>
  </div>);

  // ─── Screenshot ───
  const takeScreenshot = useCallback(() => {
    const el = cRef.current; if (!el) return;
    const canvas = el.querySelector("canvas"); if (!canvas) return;
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a"); a.href = url; a.download = `f1stories-ghost-${Date.now()}.png`; a.click();
  }, []);

  // ─── Head-to-Head fetch ───
  const loadH2H = useCallback(async () => {
    if (!d1 || !d2) return;
    setShowH2H(true); setH2hData(null);
    try {
      const allMts = await fetchMeetings(year);
      const validMts = allMts.filter((m) => m.meeting_name);
      const results = [];
      // Process in small batches with delays to avoid rate limits
      for (let i = 0; i < validMts.length && results.length < 12; i++) {
        const mt = validMts[i];
        try {
          // Add delay every 3 requests to stay under rate limit
          if (i > 0 && i % 3 === 0) await new Promise((r) => setTimeout(r, 1200));
          const ss = await fetchSessions(mt.meeting_key);
          const q = ss.find((s) => s.session_name === "Qualifying");
          if (!q) continue;
          await new Promise((r) => setTimeout(r, 400)); // small delay between session + lap calls
          const [l1d, l2d] = await Promise.all([fetchLaps(q.session_key, d1), fetchLaps(q.session_key, d2)]);
          const b1 = bestLap(l1d), b2 = bestLap(l2d);
          if (b1 && b2) {
            results.push({ gp: mt.meeting_name?.replace("Grand Prix", "GP"), t1: b1.lap_duration, t2: b2.lap_duration });
            setH2hData([...results]); // Update progressively
          }
        } catch (e) {
          // If rate limited, wait longer and continue
          if (String(e).includes("429")) await new Promise((r) => setTimeout(r, 3000));
        }
      }
      if (results.length === 0) setH2hData([]);
    } catch (e) { setH2hData([]); }
  }, [year, d1, d2]);

  // ─── Showreel auto-play ───
  useEffect(() => {
    if (!showreel) { showreelRef.current = false; return; }
    showreelRef.current = true;
    let idx = 0;
    async function next() {
      if (!showreelRef.current || idx >= PRESETS.length) { setShowreel(false); return; }
      await loadPreset(PRESETS[idx]);
      setPlay(true);
      idx++;
      setTimeout(() => { setPlay(false); if (showreelRef.current) next(); }, 12000);
    }
    next();
    return () => { showreelRef.current = false; };
  }, [showreel, loadPreset]);

  // ─── Keyboard shortcuts modal ───
  const keysModal = showKeys && (<div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: F1.carbon, border: `1px solid ${F1.red}33`, borderRadius: 12, padding: 24, zIndex: 100, width: mob ? "92%" : 380, animation: "fadeIn .2s" }}>
    <div style={{ display: "flex", alignItems: "center", marginBottom: 16 }}>
      <span style={{ fontWeight: 900, fontSize: 16, fontFamily: F1.sans, letterSpacing: "0.05em" }}>KEYBOARD SHORTCUTS</span>
      <button onClick={() => setShowKeys(false)} style={{ marginLeft: "auto" }}>✕</button>
    </div>
    {[["Space", "Play / Pause"], ["R", "Reset to start"], ["T", "Toggle telemetry"], ["C", "Cycle camera mode"], ["L", "Toggle loop"], ["← →", "Scrub ±1%"], ["←← (double-tap)", "Rewind 5%"], ["D", "Toggle theme"], ["?", "This overlay"], ["Esc", "Close overlays"]].map(([k, d]) => (
      <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: `1px solid ${F1.borderLight}` }}>
        <kbd style={{ background: F1.cardBg, padding: "2px 8px", borderRadius: 3, fontFamily: F1.mono, fontSize: 11, fontWeight: 700, color: F1.red, border: `1px solid ${F1.border}` }}>{k}</kbd>
        <span style={{ fontSize: 12, color: F1.textDim }}>{d}</span>
      </div>
    ))}
  </div>);

  // ─── Onboarding tour ───
  const TOUR = [
    { text: "Welcome to Ghost Car Lab! Compare F1 laps in 3D with real telemetry.", pos: "center" },
    { text: "Select a year, Grand Prix, session, and two drivers to compare.", pos: "top" },
    { text: "Or click ⚡ PRESETS for instant iconic battle comparisons.", pos: "top-right" },
    { text: "Use the playback bar to scrub through the lap. Space = play/pause.", pos: "bottom" },
    { text: "Switch camera modes: Free orbit, Chase D1/D2, Helicopter, Cinematic.", pos: "top-left" },
    { text: "Open STATS for detailed analysis, LAPS to browse all lap times.", pos: "top-right" },
    { text: "Press ? anytime to see keyboard shortcuts. Enjoy! 🏁", pos: "center" },
  ];
  const tourOverlay = showTour && (<div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)" }}>
    <div style={{ background: F1.carbon, border: `1px solid ${F1.red}44`, borderRadius: 12, padding: 28, maxWidth: 420, width: "90%", textAlign: "center", animation: "fadeIn .3s" }}>
      <div style={{ fontSize: 11, color: F1.red, fontWeight: 900, letterSpacing: "0.15em", marginBottom: 12 }}>STEP {tourStep + 1} OF {TOUR.length}</div>
      <div style={{ fontSize: 15, color: F1.text, lineHeight: 1.6, marginBottom: 20 }}>{TOUR[tourStep].text}</div>
      <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
        {tourStep > 0 && <button onClick={() => setTourStep((s) => s - 1)} style={{ padding: "6px 16px", fontSize: 11 }}>← BACK</button>}
        {tourStep < TOUR.length - 1 ? (
          <button onClick={() => setTourStep((s) => s + 1)} className="f1-btn" style={{ padding: "6px 20px", fontSize: 11 }}>NEXT →</button>
        ) : (
          <button onClick={() => { setShowTour(false); try { localStorage.setItem("f1s-toured", "1"); } catch {} }} className="f1-btn" style={{ padding: "6px 20px", fontSize: 11 }}>GOT IT 🏁</button>
        )}
      </div>
      <button onClick={() => { setShowTour(false); try { localStorage.setItem("f1s-toured", "1"); } catch {} }} style={{ marginTop: 12, fontSize: 10, color: F1.textMuted, background: "transparent", border: "none", cursor: "pointer" }}>Skip tour</button>
    </div>
  </div>);

  // ─── Head-to-Head modal ───
  const h2hModal = showH2H && (<div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: F1.carbon, border: `1px solid ${F1.red}33`, borderRadius: 12, padding: 0, zIndex: 100, width: mob ? "95%" : 480, maxHeight: "80vh", display: "flex", flexDirection: "column", animation: "fadeIn .2s", overflow: "hidden" }}>
    <div style={{ display: "flex", alignItems: "center", padding: "16px 20px", borderBottom: `1px solid ${F1.borderLight}` }}>
      <div>
        <div style={{ fontWeight: 900, fontSize: 16, fontFamily: F1.sans }}>HEAD-TO-HEAD {year}</div>
        <div style={{ fontSize: 10, color: F1.textMuted }}>{di1?.name_acronym || "D1"} vs {di2?.name_acronym || "D2"} — Qualifying</div>
      </div>
      <button onClick={() => setShowH2H(false)} style={{ marginLeft: "auto" }}>✕</button>
    </div>
    <div style={{ overflowY: "auto", padding: "12px 20px 20px" }}>
      {!h2hData ? <div style={{ textAlign: "center", padding: 20, color: F1.textDim, fontSize: 12 }}>Fetching qualifying data across GPs<span style={{ animation: "pulse 1s infinite" }}>...</span><br/><span style={{ fontSize: 10, color: F1.textMuted, marginTop: 4, display: "block" }}>This may take 15-30 seconds (API rate limits)</span></div> : h2hData.length === 0 ? <div style={{ textAlign: "center", padding: 20, color: F1.textDim }}>No qualifying data found for these drivers in {year}</div> : (<>
        <svg width="100%" height={h2hData.length * 32 + 20} viewBox={`0 0 300 ${h2hData.length * 32 + 20}`} style={{ display: "block" }}>
          {h2hData.map((r, i) => {
            const d = r.t1 - r.t2; const maxD = Math.max(...h2hData.map((x) => Math.abs(x.t1 - x.t2))) || 1;
            const barW = Math.abs(d) / maxD * 100;
            const y = i * 32 + 16;
            return (<g key={i}>
              <text x="2" y={y + 4} fill={F1.textDim} fontSize="9" fontFamily="sans-serif">{r.gp}</text>
              <rect x={150} y={y - 5} width={d < 0 ? barW : 0} height={10} fill={co1} opacity="0.7" rx="2" transform={d < 0 ? `translate(${-barW},0)` : ""} />
              <rect x={150} y={y - 5} width={d > 0 ? barW : 0} height={10} fill={co2} opacity="0.7" rx="2" />
              <text x={150} y={y + 4} textAnchor="middle" fill={F1.text} fontSize="8" fontWeight="700" fontFamily="sans-serif">{d > 0 ? "+" : ""}{d.toFixed(3)}</text>
            </g>);
          })}
        </svg>
        <div style={{ display: "flex", justifyContent: "center", gap: 16, marginTop: 8, fontSize: 11, fontFamily: F1.mono }}>
          <span style={{ color: co1, fontWeight: 700 }}>{di1?.name_acronym}: {h2hData.filter((r) => r.t1 < r.t2).length}</span>
          <span style={{ color: F1.textMuted }}>wins</span>
          <span style={{ color: co2, fontWeight: 700 }}>{di2?.name_acronym}: {h2hData.filter((r) => r.t2 < r.t1).length}</span>
        </div>
      </>)}
    </div>
  </div>);

  return (
    <div style={{ width: "100%", minHeight: "100vh", background: F1.carbon, color: F1.text, fontFamily: F1.sans, overflow: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700;900&family=Barlow+Condensed:wght@400;500;600;700&display=swap');
        @keyframes fadeIn{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.6}}
        @keyframes redline{0%{background-position:0 0}100%{background-position:200px 0}}
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:${F1.red}44;border-radius:2px}
        select,button{font-family:${F1.sans}}
        select{background:${F1.inputBg};color:${F1.text};border:1px solid ${F1.border};border-radius:4px;padding:5px 8px;font-size:12px;cursor:pointer;outline:none;transition:border-color .15s;font-weight:600;letter-spacing:0.02em}
        select:hover,select:focus{border-color:${F1.red}88}
        button{background:${F1.cardBg};color:${F1.text};border:1px solid ${F1.border};border-radius:4px;padding:5px 12px;font-size:12px;cursor:pointer;outline:none;transition:all .12s;font-weight:600}
        button:hover{border-color:${F1.red}88;background:${F1.carbonMid}}
        .f1-btn{background:${F1.red};border-color:${F1.red};color:#fff;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;font-size:11px}
        .f1-btn:hover{background:${F1.redDark}}
        .f1-btn:disabled{opacity:.4;cursor:not-allowed}
        input[type="range"]{cursor:pointer}
        input[type="range"]::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;background:${F1.red};border-radius:50%;cursor:pointer;border:2px solid #fff}
      `}</style>

      {modBg}{presetsModal}{statsModal}{lapsModal}{keysModal}{h2hModal}{tourOverlay}

      {/* ─── F1 Lights Countdown Overlay ─── */}
      {countdown !== null && (<div style={{ position: "fixed", inset: 0, zIndex: 300, background: "rgba(0,0,0,0.85)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div style={{ display: "flex", gap: 16, marginBottom: 32 }}>
          {[1, 2, 3, 4, 5].map((n) => (
            <div key={n} style={{ width: 40, height: 40, borderRadius: "50%", background: countdown <= (6 - n) ? "#E10600" : F1.cardBg, boxShadow: countdown <= (6 - n) ? "0 0 20px #E10600, 0 0 40px #E1060066" : "none", transition: "all 0.3s", border: `2px solid ${F1.border}` }} />
          ))}
        </div>
        <div style={{ fontSize: countdown === 0 ? 72 : 96, fontWeight: 900, color: countdown === 0 ? "#00d26a" : "#fff", fontFamily: F1.mono, letterSpacing: "-0.02em", textShadow: countdown === 0 ? "0 0 30px #00d26a" : "none" }}>
          {countdown === 0 ? "GO!" : countdown}
        </div>
      </div>)}

      {/* ─── Gallery Modal ─── */}
      {showGallery && (<div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: F1.carbon, border: `1px solid ${F1.red}33`, borderRadius: 12, padding: 0, zIndex: 100, width: mob ? "95%" : 500, maxHeight: "80vh", display: "flex", flexDirection: "column", animation: "fadeIn .2s", overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", padding: "16px 20px", borderBottom: `1px solid ${F1.borderLight}` }}>
          <span style={{ fontWeight: 900, fontSize: 16, fontFamily: F1.sans }}>COMPARISON GALLERY</span>
          <button onClick={() => setShowGallery(false)} style={{ marginLeft: "auto" }}>✕</button>
        </div>
        <div style={{ overflowY: "auto", padding: "12px 20px 20px" }}>
          {gallery.length === 0 ? <div style={{ textAlign: "center", padding: 20, color: F1.textDim, fontSize: 12 }}>No saved comparisons yet. Click 💾 SAVE after loading a comparison.</div> : gallery.map((g) => (
            <div key={g.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", marginBottom: 4, background: F1.cardBg, borderRadius: 6, cursor: "pointer", borderLeft: `3px solid ${g.c1}` }} onClick={() => { window.location.href = g.url; setShowGallery(false); }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700, fontFamily: F1.mono }}>
                  <span style={{ color: g.c1 }}>{g.d1n}</span> <span style={{ color: F1.textMuted }}>vs</span> <span style={{ color: g.c2 }}>{g.d2n}</span>
                </div>
                <div style={{ fontSize: 10, color: F1.textDim, marginTop: 2 }}>{g.gp?.replace("Grand Prix", "GP")} {g.year}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 11, fontFamily: F1.mono, color: F1.textDim }}>{g.t1} / {g.t2}</div>
                <div style={{ fontSize: 13, fontWeight: 900, fontFamily: F1.mono, color: parseFloat(g.delta) > 0 ? F1.red : F1.green }}>{parseFloat(g.delta) > 0 ? "+" : ""}{g.delta}s</div>
              </div>
            </div>
          ))}
          {gallery.length > 0 && <button onClick={() => { setGallery([]); try { localStorage.removeItem("f1s-gallery"); } catch {} }} style={{ marginTop: 8, fontSize: 10, color: F1.textMuted }}>Clear all</button>}
        </div>
      </div>)}

      {/* ─── Integration Hub Modal ─── */}
      {showEmbed && (<div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: F1.carbon, border: `1px solid ${F1.red}33`, borderRadius: 12, padding: 0, zIndex: 100, width: mob ? "95%" : 560, maxHeight: "85vh", display: "flex", flexDirection: "column", animation: "fadeIn .2s", overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", padding: "16px 20px", borderBottom: `1px solid ${F1.borderLight}` }}>
          <div><div style={{ fontWeight: 900, fontSize: 16 }}>INTEGRATION HUB</div><div style={{ fontSize: 10, color: F1.textMuted }}>Embed, share & publish on f1stories.gr</div></div>
          <button onClick={() => setShowEmbed(false)} style={{ marginLeft: "auto" }}>✕</button>
        </div>
        <div style={{ overflowY: "auto", padding: "16px 20px 20px" }}>
          {/* 1. Embed iframe */}
          <div style={{ marginBottom: 18 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: F1.red, letterSpacing: "0.08em", marginBottom: 6 }}>EMBED IFRAME</div>
            <div style={{ fontSize: 10, color: F1.textDim, marginBottom: 6 }}>Paste in any HTML page or CMS. Shows the full 3D viewer with minimal chrome.</div>
            <textarea id="ta-embed" readOnly value={`<iframe src="${encodeURL({ year, mk: selMt?.meeting_key, sk: selSe?.session_key, d1, d2, l1: sl1, l2: sl2 })}&embed=1" width="100%" height="650" frameborder="0" style="border-radius:12px;border:1px solid #E1060033;background:#15151e" allowfullscreen loading="lazy"></iframe>`} style={{ width: "100%", height: 70, background: F1.inputBg, color: F1.text, border: `1px solid ${F1.border}`, borderRadius: 6, padding: 8, fontFamily: F1.mono, fontSize: 10, resize: "none" }} onClick={(e) => e.target.select()} />
            <button onClick={() => { document.getElementById("ta-embed")?.select(); document.execCommand("copy"); }} className="f1-btn" style={{ marginTop: 6, padding: "5px 14px", fontSize: 10 }}>COPY</button>
          </div>

          {/* 2. Blog widget */}
          <div style={{ marginBottom: 18 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: F1.red, letterSpacing: "0.08em", marginBottom: 6 }}>BLOG WIDGET</div>
            <div style={{ fontSize: 10, color: F1.textDim, marginBottom: 6 }}>A compact card for f1stories.gr blog posts. Shows drivers, delta, and a CTA button.</div>
            {(() => {
              const widgetUrl = encodeURL({ year, mk: selMt?.meeting_key, sk: selSe?.session_key, d1, d2, l1: sl1, l2: sl2 });
              const widgetHtml = `<div style="max-width:480px;margin:20px auto;background:#15151e;border-radius:12px;border:1px solid #E1060033;overflow:hidden;font-family:'Titillium Web',sans-serif;color:#e8e8f0">
  <div style="padding:4px 16px;background:#E10600;display:flex;align-items:center;gap:8px">
    <span style="font-size:11px;font-weight:700;letter-spacing:0.1em;color:#fff">🏎️ GHOST CAR LAB</span>
    <span style="margin-left:auto;font-size:9px;color:#fffa">f1stories.gr</span>
  </div>
  <div style="padding:16px 20px">
    <div style="font-size:13px;color:#888;margin-bottom:8px">${selMt?.meeting_name || "Grand Prix"} ${year}</div>
    <div style="display:flex;align-items:center;justify-content:center;gap:12px;margin:12px 0">
      <div style="text-align:center">
        <div style="font-size:28px;font-weight:900;color:${co1}">${di1?.name_acronym || "D1"}</div>
        <div style="font-size:14px;color:#aaa">${fmt(li1?.lap_duration)}</div>
      </div>
      <div style="font-size:14px;font-weight:900;color:#E10600;letter-spacing:0.1em">VS</div>
      <div style="text-align:center">
        <div style="font-size:28px;font-weight:900;color:${co2}">${di2?.name_acronym || "D2"}</div>
        <div style="font-size:14px;color:#aaa">${fmt(li2?.lap_duration)}</div>
      </div>
    </div>
    ${delta !== null ? `<div style="text-align:center;font-size:24px;font-weight:900;color:${delta > 0 ? "#E10600" : "#00d26a"};margin:8px 0">${delta > 0 ? "+" : ""}${delta.toFixed(3)}s</div>` : ""}
    <a href="${widgetUrl}" target="_blank" style="display:block;text-align:center;background:#E10600;color:#fff;padding:10px;border-radius:6px;font-weight:700;font-size:12px;text-decoration:none;letter-spacing:0.08em;margin-top:12px">VIEW IN 3D →</a>
  </div>
</div>`;
              return (<>
                {/* Preview */}
                <div style={{ border: `1px solid ${F1.borderLight}`, borderRadius: 8, padding: 8, marginBottom: 6 }} dangerouslySetInnerHTML={{ __html: widgetHtml }} />
                <textarea id="ta-widget" readOnly value={widgetHtml} style={{ width: "100%", height: 60, background: F1.inputBg, color: F1.text, border: `1px solid ${F1.border}`, borderRadius: 6, padding: 8, fontFamily: F1.mono, fontSize: 9, resize: "none" }} onClick={(e) => e.target.select()} />
                <button onClick={() => { document.getElementById("ta-widget")?.select(); document.execCommand("copy"); }} className="f1-btn" style={{ marginTop: 6, padding: "5px 14px", fontSize: 10 }}>COPY WIDGET HTML</button>
              </>);
            })()}
          </div>

          {/* 3. Full article generator */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: F1.red, letterSpacing: "0.08em", marginBottom: 6 }}>GENERATE BLOG ARTICLE</div>
            <div style={{ fontSize: 10, color: F1.textDim, marginBottom: 8 }}>Download a complete blog-ready HTML page with stats, analysis text, and embedded 3D viewer.</div>
            <button onClick={() => {
              const url = encodeURL({ year, mk: selMt?.meeting_key, sk: selSe?.session_key, d1, d2, l1: sl1, l2: sl2 });
              const d1n = di1?.name_acronym || "D1", d2n = di2?.name_acronym || "D2";
              const gpName = selMt?.meeting_name || "Grand Prix";
              const sessName = selSe?.session_name || "Session";
              const winner = delta !== null ? (delta < 0 ? d1n : d2n) : "N/A";
              const loser = delta !== null ? (delta < 0 ? d2n : d1n) : "N/A";
              const gap = delta !== null ? Math.abs(delta).toFixed(3) : "0.000";
              const article = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${d1n} vs ${d2n} — ${gpName} ${year} | F1 Stories Ghost Car Lab</title>
  <meta name="description" content="${d1n} vs ${d2n} qualifying lap comparison at the ${gpName} ${year}. ${winner} was ${gap}s faster. Full 3D analysis with telemetry data.">
  <meta property="og:title" content="${d1n} vs ${d2n} — ${gpName} ${year}">
  <meta property="og:description" content="${winner} beat ${loser} by ${gap}s in ${sessName}. Interactive 3D ghost car comparison.">
  <meta property="og:image" content="https://f1stories.gr/images/logo.png">
  <meta property="og:url" content="${url}">
  <meta name="twitter:card" content="summary_large_image">
  <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700;900&display=swap" rel="stylesheet">
  <style>
    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:'Titillium Web',sans-serif;background:#0e0e16;color:#e8e8f0;max-width:800px;margin:0 auto;padding:20px}
    h1{font-size:32px;font-weight:900;margin-bottom:4px}
    .meta{font-size:14px;color:#8b8ba0;margin-bottom:24px}
    .delta{font-size:48px;font-weight:900;text-align:center;margin:24px 0}
    .stats{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin:24px 0}
    .stat{background:rgba(25,25,38,0.85);border-radius:8px;padding:14px;text-align:center}
    .stat-label{font-size:10px;color:#8b8ba0;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:4px}
    .stat-val{font-size:20px;font-weight:900}
    .analysis{line-height:1.8;font-size:15px;color:#bbb;margin:24px 0}
    .cta{display:block;background:#E10600;color:#fff;text-align:center;padding:16px;border-radius:8px;font-weight:700;font-size:14px;text-decoration:none;letter-spacing:0.05em;margin:24px 0}
    .cta:hover{background:#B30500}
    .footer{text-align:center;padding:20px;color:#505068;font-size:12px;border-top:1px solid #222}
    .footer a{color:#E10600;text-decoration:none}
  </style>
</head>
<body>
  <a href="https://f1stories.gr" style="display:flex;align-items:center;gap:8px;text-decoration:none;margin-bottom:24px">
    <img src="https://f1stories.gr/images/logo.png" alt="F1 Stories" style="height:36px">
    <div><div style="font-size:18px;font-weight:900;color:#fff">F1 STORIES</div><div style="font-size:9px;color:#8b8ba0;letter-spacing:0.12em">GHOST CAR LAB</div></div>
  </a>

  <h1><span style="color:${co1}">${d1n}</span> vs <span style="color:${co2}">${d2n}</span></h1>
  <div class="meta">${gpName} ${year} — ${sessName}</div>

  <div class="delta" style="color:${delta > 0 ? "#E10600" : "#00d26a"}">${delta > 0 ? "+" : ""}${delta?.toFixed(3) || "0.000"}s</div>

  <div class="stats">
    <div class="stat"><div class="stat-label">${d1n} Lap</div><div class="stat-val" style="color:${co1}">${fmt(li1?.lap_duration)}</div></div>
    <div class="stat"><div class="stat-label">Gap</div><div class="stat-val" style="color:${delta > 0 ? "#E10600" : "#00d26a"}">${gap}s</div></div>
    <div class="stat"><div class="stat-label">${d2n} Lap</div><div class="stat-val" style="color:${co2}">${fmt(li2?.lap_duration)}</div></div>
    <div class="stat"><div class="stat-label">${d1n} Top Speed</div><div class="stat-val">${Math.round(topS1)} km/h</div></div>
    <div class="stat"><div class="stat-label">Avg Δ</div><div class="stat-val">${Math.round(Math.abs(avgS1 - avgS2))} km/h</div></div>
    <div class="stat"><div class="stat-label">${d2n} Top Speed</div><div class="stat-val">${Math.round(topS2)} km/h</div></div>
    ${li1?.duration_sector_1 ? `<div class="stat"><div class="stat-label">S1</div><div class="stat-val">${li1.duration_sector_1.toFixed(3)}</div></div>` : ""}
    ${li1?.duration_sector_2 ? `<div class="stat"><div class="stat-label">S2</div><div class="stat-val">${li1.duration_sector_2.toFixed(3)}</div></div>` : ""}
    ${li1?.duration_sector_3 ? `<div class="stat"><div class="stat-label">S3</div><div class="stat-val">${li1.duration_sector_3.toFixed(3)}</div></div>` : ""}
  </div>

  <div class="analysis">
    <p><strong>${winner}</strong> took ${sessName === "Race" ? "the faster race lap" : "pole position"} at the <strong>${gpName} ${year}</strong>, beating <strong>${loser}</strong> by just <strong>${gap} seconds</strong>.</p>
    <p style="margin-top:12px">${d1n} posted a best time of <strong>${fmt(li1?.lap_duration)}</strong> while ${d2n} managed <strong>${fmt(li2?.lap_duration)}</strong>. ${Math.round(topS1) > Math.round(topS2) ? d1n + " had the higher top speed at " + Math.round(topS1) + " km/h versus " + Math.round(topS2) + " km/h" : d2n + " had the edge on top speed with " + Math.round(topS2) + " km/h compared to " + Math.round(topS1) + " km/h"}.</p>
    <p style="margin-top:12px">Use the interactive 3D comparison below to see exactly where the time was gained and lost around the circuit.</p>
  </div>

  <iframe src="${url}&embed=1" width="100%" height="600" frameborder="0" style="border-radius:12px;border:1px solid #E1060033;background:#15151e" allowfullscreen loading="lazy"></iframe>

  <a href="${url}" class="cta" target="_blank">OPEN FULL GHOST CAR LAB →</a>

  <div class="footer">
    <p>Powered by <a href="https://f1stories.gr">F1 Stories</a> • Data from OpenF1 API</p>
    <p style="margin-top:4px">© ${new Date().getFullYear()} F1 Stories. All rights reserved.</p>
  </div>
</body>
</html>`;
              const blob = new Blob([article], { type: "text/html" });
              const a = document.createElement("a");
              a.href = URL.createObjectURL(blob);
              a.download = `f1stories-${d1n}-vs-${d2n}-${gpName.replace(/\s+/g, "-")}-${year}.html`;
              a.click();
            }} className="f1-btn" style={{ padding: "8px 20px", fontSize: 11 }}>📄 DOWNLOAD ARTICLE HTML</button>
          </div>
        </div>
      </div>)}

      {/* ─── HEADER — F1 Stories branded ─── */}
      {!embed && <div style={{ display: "flex", alignItems: "stretch", borderBottom: `2px solid ${F1.red}`, background: `linear-gradient(180deg, ${F1.carbonLight} 0%, ${F1.carbon} 100%)`, zIndex: 10, position: "relative" }}>
        <div style={{ width: mob ? 4 : 5, background: F1.red, flexShrink: 0 }} />
        <div style={{ display: "flex", alignItems: "center", gap: mob ? 8 : 16, padding: mob ? "8px 10px" : "0 20px", flex: 1, flexWrap: "wrap", minHeight: mob ? "auto" : 48 }}>
          {/* Logo + brand */}
          <a href="https://f1stories.gr/" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <img src="https://f1stories.gr/images/logo.png" alt="F1 Stories" style={{ height: mob ? 28 : 34, width: "auto" }} onError={(e) => { e.target.style.display = "none"; }} />
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span style={{ fontSize: mob ? 14 : 18, fontWeight: 900, color: F1.text, letterSpacing: "0.03em" }}>F1 STORIES</span>
              <span style={{ fontSize: mob ? 8 : 9, fontWeight: 400, color: F1.textMuted, letterSpacing: "0.12em", textTransform: "uppercase" }}>Ghost Car Lab</span>
            </div>
          </a>
          {/* Nav links */}
          {!mob && <div style={{ display: "flex", gap: 4, marginLeft: 8 }}>
            {[{ label: "Blog", href: "https://f1stories.gr/blog-module/blog/index.html" }, { label: "YouTube", href: "https://www.youtube.com/@F1_Stories_Original" }, { label: "Standings", href: "https://f1stories.gr/standings/" }].map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: 10, color: F1.textDim, textDecoration: "none", padding: "3px 8px", borderRadius: 3, fontWeight: 600, letterSpacing: "0.05em", transition: "color 0.15s" }}
                onMouseEnter={(e) => e.target.style.color = "#fff"} onMouseLeave={(e) => e.target.style.color = F1.textDim}>{l.label.toUpperCase()}</a>
            ))}
          </div>}
          {/* GP name */}
          {selMt && <span style={{ fontSize: 11, color: F1.textDim, fontWeight: 600, letterSpacing: "0.05em", marginLeft: mob ? 0 : 8 }}>{selMt.meeting_name?.replace("Grand Prix", "GP")} {year}</span>}
          {/* Actions */}
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 5 }}>
            <button onClick={() => setShowPresets(true)} style={{ fontSize: 10, padding: "4px 10px", letterSpacing: "0.05em" }}>⚡ PRESETS</button>
            {selSe && <button onClick={share} style={{ fontSize: 10, padding: "4px 10px" }}>{shareMsg || "SHARE"}</button>}
            {tp && <button onClick={() => setShowStats(true)} style={{ fontSize: 10, padding: "4px 10px" }}>STATS</button>}
            {tp && <button onClick={() => setShowLaps(true)} style={{ fontSize: 10, padding: "4px 10px" }}>LAPS</button>}
            {tp && d1 && d2 && <button onClick={loadH2H} style={{ fontSize: 10, padding: "4px 10px" }}>H2H</button>}
            {tp && <button onClick={saveToGallery} style={{ fontSize: 10, padding: "4px 10px" }} title="Save to gallery">💾</button>}
            <button onClick={() => setShowGallery(true)} style={{ fontSize: 10, padding: "4px 10px" }} title="Gallery">📂</button>
            {tp && <button onClick={generateSocialCard} style={{ fontSize: 10, padding: "4px 10px" }} title="Social card">🖼️</button>}
            {tp && selSe && <button onClick={() => setShowEmbed(true)} style={{ fontSize: 10, padding: "4px 10px" }} title="Embed">{"</>"}</button>}
            {tp && <button onClick={takeScreenshot} style={{ fontSize: 10, padding: "4px 10px" }} title="Screenshot">📸</button>}
            {!mob && <button onClick={() => setShowreel((s) => !s)} style={{ fontSize: 10, padding: "4px 10px", background: showreel ? `${F1.red}33` : F1.cardBg, borderColor: showreel ? F1.red : F1.border }} title="Auto-play showreel">{showreel ? "⏹" : "🎬"}</button>}
            <button onClick={toggleTheme} style={{ fontSize: 10, padding: "4px 10px", letterSpacing: "0.05em" }}>{isDark ? "☀️" : "🌙"}</button>
            {!mob && <button onClick={() => setShowKeys(true)} style={{ fontSize: 10, padding: "4px 8px", fontFamily: F1.mono, fontWeight: 900 }}>?</button>}
          </div>
        </div>
      </div>}

      {/* ─── SELECTORS ─── */}
      {!embed && <div style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center", padding: mob ? "8px 10px" : "8px 18px", borderBottom: `1px solid ${F1.borderLight}`, background: F1.carbonLight }}>
        <select value={year} onChange={(e) => setYear(Number(e.target.value))}>{[2026,2025,2024,2023].map((y) => <option key={y} value={y}>{y}</option>)}</select>
        <select value={selMt?.meeting_key || ""} onChange={(e) => setSelMt(mts.find((m) => m.meeting_key === Number(e.target.value)) || null)} style={{ minWidth: mob ? 110 : 155 }}><option value="">Grand Prix</option>{mts.map((m) => <option key={m.meeting_key} value={m.meeting_key}>{m.meeting_name}</option>)}</select>
        <select value={selSe?.session_key || ""} onChange={(e) => setSelSe(sess.find((s) => s.session_key === Number(e.target.value)) || null)} disabled={!sess.length} style={{ minWidth: mob ? 85 : 115 }}><option value="">Session</option>{sess.map((s) => <option key={s.session_key} value={s.session_key}>{s.session_name}</option>)}</select>
        {!mob && <div style={{ width: 1, height: 20, background: `${F1.red}33` }} />}
        <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
          <div style={{ width: 3, height: 18, background: co1, borderRadius: 1 }} />
          <select value={d1 || ""} onChange={(e) => { setD1(Number(e.target.value)); setSl1(null); setLaps1([]); }} disabled={!drvs.length} style={{ minWidth: mob ? 68 : 100 }}><option value="">Driver 1</option>{drvs.map((x) => <option key={x.driver_number} value={x.driver_number}>{x.name_acronym || `#${x.driver_number}`}</option>)}</select>
          {laps1.length > 0 && <select value={sl1 || ""} onChange={(e) => setSl1(Number(e.target.value))} style={{ width: mob ? 56 : 72 }}><option value="">Lap</option>{laps1.filter((l) => l.lap_duration > 10).map((l) => <option key={l.lap_number} value={l.lap_number}>L{l.lap_number}</option>)}</select>}
        </div>
        <span style={{ color: F1.red, fontSize: 11, fontWeight: 900, letterSpacing: "0.1em" }}>VS</span>
        <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
          <div style={{ width: 3, height: 18, background: co2, borderRadius: 1 }} />
          <select value={d2 || ""} onChange={(e) => { setD2(Number(e.target.value)); setSl2(null); setLaps2([]); }} disabled={!drvs.length} style={{ minWidth: mob ? 68 : 100 }}><option value="">Driver 2</option>{drvs.map((x) => <option key={x.driver_number} value={x.driver_number}>{x.name_acronym || `#${x.driver_number}`}</option>)}</select>
          {laps2.length > 0 && <select value={sl2 || ""} onChange={(e) => setSl2(Number(e.target.value))} style={{ width: mob ? 56 : 72 }}><option value="">Lap</option>{laps2.filter((l) => l.lap_duration > 10).map((l) => <option key={l.lap_number} value={l.lap_number}>L{l.lap_number}</option>)}</select>}
        </div>
        <button className="f1-btn" onClick={loadData} disabled={!d1 || !d2 || !sl1 || !sl2 || !!loading}>{loading ? "..." : "COMPARE"}</button>
      </div>}

      {!embed && err && <div style={{ padding: "8px 18px", background: `${F1.red}11`, borderBottom: `1px solid ${F1.red}22`, fontSize: 12, color: F1.red, display: "flex", alignItems: "center", gap: 8 }}><span style={{ flex: 1 }}>{err}</span><button onClick={() => setErr("")} style={{ padding: "2px 8px", fontSize: 10 }}>✕</button></div>}
      {!embed && loading && <div style={{ padding: "8px 18px", borderBottom: `1px solid ${F1.borderLight}` }}><div style={{ fontSize: 11, color: F1.textDim, fontFamily: F1.mono, marginBottom: 4 }}>{loading}</div>{ldPct !== undefined && <div style={{ height: 2, background: F1.borderLight, borderRadius: 1, overflow: "hidden" }}><div style={{ height: "100%", width: `${ldPct}%`, background: F1.red, borderRadius: 1, transition: "width .3s" }} /></div>}</div>}

      {!embed && mob && tp && <div style={{ display: "flex", borderBottom: `1px solid ${F1.borderLight}` }}>{["3d","telemetry"].map((tab) => <button key={tab} onClick={() => setMobTab(tab)} style={{ flex: 1, borderRadius: 0, borderBottom: mobTab === tab ? `2px solid ${F1.red}` : "2px solid transparent", background: mobTab === tab ? F1.cardBg : "transparent", fontWeight: mobTab === tab ? 700 : 400, fontSize: 11, padding: "7px 0", letterSpacing: "0.08em", textTransform: "uppercase" }}>{tab === "3d" ? "Track" : "Telemetry"}</button>)}</div>}

      {/* ─── MAIN ─── */}
      <div style={{ display: "flex", flexDirection: mob ? "column" : "row", height: embed ? "100vh" : (mob ? "auto" : `calc(100vh - ${tp ? 175 : 130}px)`) }}>
        {(!mob || mobTab === "3d") && (
          <div style={{ flex: 1, position: "relative", minHeight: mob ? "50vh" : "auto" }}>
            <div ref={cRef} style={{ width: "100%", height: "100%", background: F1.carbon, cursor: "grab", minHeight: mob ? "50vh" : "auto" }} />

            {/* Camera mode */}
            {tp && <div style={{ position: "absolute", top: 10, left: 10, zIndex: 2, display: "flex", gap: 3 }}>
              {CAM_MODES.map((m) => <button key={m} onClick={() => { setCam(m); setShowMap(false); }} style={{ padding: "3px 8px", fontSize: 9, letterSpacing: "0.05em", textTransform: "uppercase", background: cam === m && !showMap ? F1.red : F1.overlay, color: cam === m && !showMap ? "#fff" : F1.textDim, borderColor: cam === m && !showMap ? F1.red : F1.borderLight, fontWeight: 700 }}>{CAM_LABELS[m]}</button>)}
              <button onClick={() => setShowMap((m) => !m)} style={{ padding: "3px 8px", fontSize: 9, letterSpacing: "0.05em", textTransform: "uppercase", background: showMap ? "#0088ff" : F1.overlay, color: showMap ? "#fff" : F1.textDim, borderColor: showMap ? "#0088ff" : F1.borderLight, fontWeight: 700 }}>📡 MAP</button>
              <div style={{ width: 1, height: 16, background: F1.borderLight }} />
              <button onClick={() => setVizMode((v) => v === "normal" ? "heatmap" : "normal")} style={{ padding: "3px 8px", fontSize: 9, letterSpacing: "0.05em", textTransform: "uppercase", background: vizMode === "heatmap" ? "#0088ff" : F1.overlay, color: vizMode === "heatmap" ? "#fff" : F1.textDim, borderColor: vizMode === "heatmap" ? "#0088ff" : F1.borderLight, fontWeight: 700 }}>🌡 Speed</button>
            </div>}

            {/* Mini-map */}
            {tp && !mob && !showMap && <div style={{ position: "absolute", top: 44, left: 10, zIndex: 2 }}><MiniMap tp={tp} l1={loc1} l2={loc2} prog={prog} c1={co1} c2={co2} /></div>}

            {/* F1 TV Live Map overlay */}
            {showMap && tp && (
              <div style={{ position: "absolute", inset: 0, zIndex: 4, background: F1.carbon }}>
                <LiveMap tp={tp} l1={loc1} l2={loc2} prog={prog} c1={co1} c2={co2} di1={di1} di2={di2} li1={li1} li2={li2} ct1={ct1} ct2={ct2} delta={delta} tel1={tel1} tel2={tel2} />
              </div>
            )}

            {/* Delta badge — F1 broadcast style */}
            {delta !== null && tp && (
              <div style={{ position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)", zIndex: 2, animation: "fadeIn .4s" }}>
                <div style={{ background: F1.overlay, backdropFilter: "blur(8px)", borderRadius: 6, padding: mob ? "6px 16px" : "8px 24px", border: `1px solid ${F1.red}33`, display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ fontSize: 8, color: F1.textMuted, letterSpacing: "0.15em", fontWeight: 700, textTransform: "uppercase" }}>Interval</div>
                  <div style={{ fontSize: mob ? 20 : 28, fontWeight: 900, fontFamily: F1.mono, color: delta > 0 ? F1.red : F1.green, lineHeight: 1.1 }}>
                    {delta > 0 ? "+" : ""}{delta.toFixed(3)}<span style={{ fontSize: "0.5em", opacity: 0.7 }}>s</span>
                  </div>
                  <div style={{ display: "flex", gap: 16, marginTop: 3 }}>
                    <span style={{ fontSize: 10, color: co1, fontFamily: F1.mono, fontWeight: 700 }}>{di1?.name_acronym} {fmt(li1?.lap_duration)}</span>
                    <span style={{ fontSize: 10, color: co2, fontFamily: F1.mono, fontWeight: 700 }}>{di2?.name_acronym} {fmt(li2?.lap_duration)}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Sectors */}
            {tp && li1 && li2 && <div style={{ position: "absolute", bottom: 6, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 4, zIndex: 2, maxWidth: "95%" }}>
              <SD s={1} t1={li1.duration_sector_1} t2={li2.duration_sector_1} c1={co1} c2={co2} />
              <SD s={2} t1={li1.duration_sector_2} t2={li2.duration_sector_2} c1={co1} c2={co2} />
              <SD s={3} t1={li1.duration_sector_3} t2={li2.duration_sector_3} c1={co1} c2={co2} />
            </div>}

            {!tp && !loading && <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", textAlign: "center", animation: "fadeIn .6s", padding: 20 }}>
              <img src="https://f1stories.gr/images/logo.png" alt="" style={{ height: 60, marginBottom: 16, opacity: 0.6 }} onError={(e) => { e.target.style.display = "none"; }} />
              <div style={{ fontSize: mob ? 14 : 18, fontWeight: 900, color: "#fff", marginBottom: 4, letterSpacing: "0.04em" }}>GHOST CAR LAB</div>
              <div style={{ fontSize: 11, color: F1.red, fontWeight: 600, marginBottom: 14, letterSpacing: "0.1em" }}>by F1 STORIES</div>
              <div style={{ fontSize: 12, color: F1.textDim, maxWidth: 360, lineHeight: 1.6 }}>Compare qualifying laps in 3D with real telemetry data. Select a Grand Prix, session & two drivers — or try ⚡ Presets.</div>
              <div style={{ marginTop: 18, display: "flex", gap: 8, justifyContent: "center" }}>
                <button onClick={() => setShowPresets(true)} className="f1-btn" style={{ padding: "8px 20px", fontSize: 12 }}>⚡ QUICK START</button>
                <a href="https://f1stories.gr/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 11, color: F1.textDim, textDecoration: "none", padding: "8px 14px", border: `1px solid ${F1.border}`, borderRadius: 4, fontWeight: 600 }}>f1stories.gr →</a>
              </div>
            </div>}
          </div>
        )}

        {/* Telemetry */}
        {((!mob && showTel && tp) || (mob && mobTab === "telemetry" && tp)) && (
          <div style={{ width: mob ? "100%" : 310, borderLeft: mob ? "none" : `1px solid ${F1.borderLight}`, background: F1.panelBg, display: "flex", flexDirection: "column", maxHeight: mob ? "55vh" : "auto", animation: "fadeIn .2s" }}>
            <div style={{ padding: mob ? 10 : 14, overflowY: "auto", flex: 1 }}>
              {/* ─── Speedometer gauges ─── */}
              <div style={{ display: "flex", gap: 6, marginBottom: 10 }}>
                {[{ di: di1, co: co1, ct: ct1, tire: tire1 }, { di: di2, co: co2, ct: ct2, tire: tire2 }].map((x, i) => (
                  <div key={i} style={{ flex: 1, background: F1.cardBg, borderRadius: 6, padding: "8px 8px 6px", borderTop: `3px solid ${x.co}`, position: "relative", textAlign: "center" }}>
                    <div style={{ fontSize: 12, fontWeight: 900, color: x.co, fontFamily: F1.mono, letterSpacing: "0.05em" }}>{x.di?.name_acronym || "—"}</div>
                    {/* Circular speedometer */}
                    <svg width="90" height="55" viewBox="0 0 90 55" style={{ margin: "4px auto 2px" }}>
                      <path d="M 10 50 A 35 35 0 0 1 80 50" fill="none" stroke={F1.border} strokeWidth="4" strokeLinecap="round" />
                      <path d="M 10 50 A 35 35 0 0 1 80 50" fill="none" stroke={x.co} strokeWidth="4" strokeLinecap="round"
                        strokeDasharray={`${(Math.min(x.ct.speed, 360) / 360) * 110} 110`} />
                      <text x="45" y="42" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="900" fontFamily={F1.mono}>{Math.round(x.ct.speed)}</text>
                      <text x="45" y="52" textAnchor="middle" fill={F1.textMuted} fontSize="7" fontFamily={F1.mono}>KM/H</text>
                    </svg>
                    {/* Throttle/Brake pedal bars */}
                    <div style={{ display: "flex", gap: 3, justifyContent: "center", marginTop: 2 }}>
                      <div style={{ width: 28, textAlign: "center" }}>
                        <div style={{ height: 20, width: 6, margin: "0 auto", background: F1.border, borderRadius: 2, position: "relative", overflow: "hidden" }}>
                          <div style={{ position: "absolute", bottom: 0, width: "100%", height: `${x.ct.throttle}%`, background: F1.green, borderRadius: 2, transition: "height 0.1s" }} />
                        </div>
                        <div style={{ fontSize: 7, color: F1.textMuted, fontFamily: F1.mono, marginTop: 1 }}>THR</div>
                      </div>
                      <div style={{ width: 28, textAlign: "center" }}>
                        <div style={{ height: 20, width: 6, margin: "0 auto", background: F1.border, borderRadius: 2, position: "relative", overflow: "hidden" }}>
                          <div style={{ position: "absolute", bottom: 0, width: "100%", height: x.ct.brake > 0 ? "100%" : "0%", background: F1.red, borderRadius: 2, transition: "height 0.1s" }} />
                        </div>
                        <div style={{ fontSize: 7, color: F1.textMuted, fontFamily: F1.mono, marginTop: 1 }}>BRK</div>
                      </div>
                      <div style={{ width: 28, textAlign: "center" }}>
                        <div style={{ fontSize: 16, fontWeight: 900, color: "#fff", fontFamily: F1.mono, lineHeight: "20px" }}>{x.ct.n_gear ?? x.ct.gear ?? "—"}</div>
                        <div style={{ fontSize: 7, color: F1.textMuted, fontFamily: F1.mono, marginTop: 1 }}>GEAR</div>
                      </div>
                    </div>
                    {x.tire && <div style={{ position: "absolute", top: 6, right: 6, display: "flex", alignItems: "center", gap: 2 }}><div style={{ width: 6, height: 6, borderRadius: "50%", background: TIRE_COLORS[x.tire] || "#888" }} /><span style={{ fontSize: 8, fontFamily: F1.mono, color: F1.textMuted }}>{x.tire}</span></div>}
                    {x.ct.drs >= 10 && <div style={{ position: "absolute", bottom: 4, right: 6, fontSize: 8, fontWeight: 700, color: F1.green, fontFamily: F1.mono, background: `${F1.green}15`, padding: "1px 4px", borderRadius: 2, animation: "pulse 1s infinite" }}>DRS</div>}
                  </div>
                ))}
              </div>
              {/* ─── Elevation profile ─── */}
              {tp && (
                <div style={{ marginBottom: 10 }}>
                  <div style={{ fontSize: 10, color: F1.textMuted, fontFamily: F1.mono, letterSpacing: "0.1em", marginBottom: 3, fontWeight: 700 }}>ELEVATION</div>
                  <svg width="100%" height="40" viewBox="0 0 300 40" preserveAspectRatio="none" style={{ borderRadius: 3, background: F1.cardBg }}>
                    {(() => {
                      const ys = tp.map((p) => p.y); const minY = Math.min(...ys), maxY = Math.max(...ys);
                      const range = maxY - minY || 1; const step = Math.max(1, Math.floor(tp.length / 150));
                      let d = ""; for (let i = 0; i < tp.length; i += step) { const x = (i / (tp.length - 1)) * 300; const y = 38 - ((ys[i] - minY) / range) * 34; d += (i === 0 ? "M" : "L") + `${x},${y}`; }
                      return (<><path d={d + `L300,40L0,40Z`} fill={`${F1.red}15`} /><path d={d} fill="none" stroke={F1.red} strokeWidth="1.5" opacity="0.6" />
                        <line x1={prog * 300} y1="0" x2={prog * 300} y2="40" stroke="#fff" strokeWidth="1" opacity="0.5" /></>);
                    })()}
                  </svg>
                </div>
              )}
              {/* ─── Cumulative sector delta (F1 TV style) ─── */}
              {li1 && li2 && li1.duration_sector_1 && li2.duration_sector_1 && (() => {
                const s1d = li1.duration_sector_1, s2d = li1.duration_sector_2, s3d = li1.duration_sector_3;
                const s1d2 = li2.duration_sector_1, s2d2 = li2.duration_sector_2, s3d2 = li2.duration_sector_3;
                const d1c = s1d - s1d2;
                const d2c = d1c + (s2d - s2d2);
                const d3c = d2c + (s3d - s3d2);
                const pts = [0, d1c, d2c, d3c];
                const maxA = Math.max(...pts.map(Math.abs)) || 0.5;
                return (<div style={{ marginBottom: 10 }}>
                  <div style={{ fontSize: 10, color: F1.textMuted, fontFamily: F1.mono, letterSpacing: "0.1em", marginBottom: 3, fontWeight: 700 }}>LAP DELTA</div>
                  <svg width="100%" height="50" viewBox="0 0 300 50" preserveAspectRatio="none" style={{ borderRadius: 3, background: F1.cardBg, display: "block" }}>
                    <line x1="0" y1="25" x2="300" y2="25" stroke={F1.textMuted} strokeWidth="0.5" opacity="0.3" />
                    {pts.map((v, i) => {
                      const x = (i / 3) * 280 + 10;
                      const y = 25 - (v / maxA) * 20;
                      return (<g key={i}>
                        {i > 0 && <line x1={(i - 1) / 3 * 280 + 10} y1={25 - (pts[i - 1] / maxA) * 20} x2={x} y2={y} stroke={v < 0 ? co1 : co2} strokeWidth="2" />}
                        <circle cx={x} cy={y} r="3" fill={v < 0 ? co1 : v > 0 ? co2 : F1.textMuted} />
                        {i > 0 && <text x={x} y={y < 25 ? y - 6 : y + 12} textAnchor="middle" fill={F1.text} fontSize="7" fontFamily="sans-serif" fontWeight="700">{v > 0 ? "+" : ""}{v.toFixed(3)}</text>}
                      </g>);
                    })}
                    {["S1", "S2", "S3", "END"].map((l, i) => (
                      <text key={l} x={i / 3 * 280 + 10} y="48" textAnchor="middle" fill={F1.textMuted} fontSize="7" fontFamily="sans-serif">{l}</text>
                    ))}
                    <text x="295" y="10" textAnchor="end" fill={co1} fontSize="7">{di1?.name_acronym}</text>
                    <text x="295" y="45" textAnchor="end" fill={co2} fontSize="7">{di2?.name_acronym}</text>
                  </svg>
                </div>);
              })()}
              {/* ─── Speed trap comparison ─── */}
              {s1?.length > 10 && s2?.length > 10 && (() => {
                const traps = [0.1, 0.25, 0.5, 0.75, 0.9];
                const labels = ["T1 10%", "T2 25%", "T3 50%", "T4 75%", "T5 90%"];
                return (<div style={{ marginBottom: 10 }}>
                  <div style={{ fontSize: 10, color: F1.textMuted, fontFamily: F1.mono, letterSpacing: "0.1em", marginBottom: 3, fontWeight: 700 }}>SPEED TRAPS</div>
                  <div style={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
                    {traps.map((t, i) => {
                      const v1 = s1[Math.floor(t * (s1.length - 1))] || 0;
                      const v2 = s2[Math.floor(t * (s2.length - 1))] || 0;
                      const faster = v1 > v2 ? 1 : v2 > v1 ? 2 : 0;
                      return (<div key={i} style={{ flex: 1, minWidth: 48, background: F1.cardBg, borderRadius: 3, padding: "3px 4px", textAlign: "center" }}>
                        <div style={{ fontSize: 7, color: F1.textMuted, fontFamily: F1.mono }}>{labels[i]}</div>
                        <div style={{ fontSize: 11, fontWeight: 800, color: faster === 1 ? co1 : faster === 2 ? co2 : F1.text, fontFamily: F1.mono }}>{Math.round(v1)}</div>
                        <div style={{ fontSize: 11, fontWeight: 800, color: faster === 2 ? co2 : faster === 1 ? co1 : F1.text, fontFamily: F1.mono, opacity: 0.7 }}>{Math.round(v2)}</div>
                      </div>);
                    })}
                  </div>
                </div>);
              })()}
              {tp && (
                <div style={{ marginBottom: 10 }}>
                  <div style={{ fontSize: 10, color: F1.textMuted, fontFamily: F1.mono, letterSpacing: "0.1em", marginBottom: 4, fontWeight: 700 }}>G-FORCE</div>
                  <div style={{ display: "flex", gap: 6 }}>
                    {[{ di: di1, co: co1, ct: ct1, tel: tel1 }, { di: di2, co: co2, ct: ct2, tel: tel2 }].map((x, idx) => {
                      const telArr = x.tel || [];
                      const ti = Math.min(Math.floor(prog * (telArr.length - 1)), telArr.length - 1);
                      const prev2 = telArr[Math.max(0, ti - 2)] || {};
                      const prev1 = telArr[Math.max(0, ti - 1)] || {};
                      const curr = telArr[ti] || {};
                      const next1 = telArr[Math.min(ti + 1, telArr.length - 1)] || {};
                      // Longitudinal G from speed delta (dv/dt, ~3.7Hz sample rate → dt≈0.27s)
                      const dv = ((curr.speed || 0) - (prev2.speed || 0)) / 3.6; // km/h to m/s
                      const longG = dv / (0.54 * 9.81); // 2 samples ≈ 0.54s
                      // Lateral G approximation from heading change × speed
                      const p0 = ti > 2 ? lerp(x.tel ? norm(telArr.map((t,i2) => ({ x: i2, y: 0, z: 0 }))) : tp, Math.max(0, prog - 0.01)) : { x: 0, z: 0 };
                      const p1 = lerp(tp, prog);
                      const p2 = lerp(tp, Math.min(1, prog + 0.01));
                      const dx1 = p1.x - p0.x, dz1 = p1.z - p0.z;
                      const dx2 = p2.x - p1.x, dz2 = p2.z - p1.z;
                      const cross = dx1 * dz2 - dz1 * dx2;
                      const latG = cross * (curr.speed || 0) * 0.0004;
                      const clamp = (v, mn, mx) => Math.max(mn, Math.min(mx, v));
                      const gx = clamp(latG, -5, 5), gy = clamp(longG, -5, 5);
                      const totalG = Math.sqrt(gx * gx + gy * gy);
                      return (
                        <div key={idx} style={{ flex: 1, background: F1.cardBg, borderRadius: 6, padding: "6px 4px 4px", textAlign: "center" }}>
                          <svg width="100%" height="90" viewBox="-6 -6 12 12" style={{ display: "block" }}>
                            <defs>
                              <radialGradient id={`gGrad${idx}`}><stop offset="0%" stopColor={x.co} stopOpacity="0.06" /><stop offset="100%" stopColor={x.co} stopOpacity="0" /></radialGradient>
                            </defs>
                            {/* Background glow */}
                            <circle cx="0" cy="0" r="5.5" fill={`url(#gGrad${idx})`} />
                            {/* G rings */}
                            {[1, 2, 3, 4, 5].map((r) => (
                              <circle key={r} cx="0" cy="0" r={r} fill="none" stroke={r <= 2 ? `${F1.textMuted}33` : `${F1.textMuted}18`} strokeWidth="0.06" />
                            ))}
                            {/* Axis lines */}
                            <line x1="-5.5" y1="0" x2="5.5" y2="0" stroke={F1.textMuted} strokeWidth="0.04" opacity="0.4" />
                            <line x1="0" y1="-5.5" x2="0" y2="5.5" stroke={F1.textMuted} strokeWidth="0.04" opacity="0.4" />
                            {/* Axis labels */}
                            <text x="5.3" y="-0.3" textAnchor="end" fill={F1.textMuted} fontSize="0.7" fontFamily="sans-serif" opacity="0.6">LAT</text>
                            <text x="0.3" y="-5" textAnchor="start" fill={F1.textMuted} fontSize="0.7" fontFamily="sans-serif" opacity="0.6">ACC</text>
                            <text x="0.3" y="5.5" textAnchor="start" fill={F1.textMuted} fontSize="0.7" fontFamily="sans-serif" opacity="0.6">BRK</text>
                            {/* G-ring at current magnitude */}
                            {totalG > 0.2 && <circle cx="0" cy="0" r={Math.min(totalG, 5)} fill="none" stroke={x.co} strokeWidth="0.08" opacity="0.25" />}
                            {/* Dot trail (fade) */}
                            {[0.92, 0.84, 0.76, 0.68].map((fade, ti2) => {
                              const pi = Math.max(0, Math.floor((prog - (ti2 + 1) * 0.003) * (telArr.length - 1)));
                              const pp = telArr[pi] || {};
                              const pPrev = telArr[Math.max(0, pi - 2)] || {};
                              const pdv = ((pp.speed || 0) - (pPrev.speed || 0)) / 3.6;
                              const plg = pdv / (0.54 * 9.81);
                              return <circle key={ti2} cx={clamp(latG * fade, -5, 5)} cy={clamp(-plg, -5, 5)} r={0.25 - ti2 * 0.04} fill={x.co} opacity={0.15 + ti2 * -0.03} />;
                            })}
                            {/* Main G dot */}
                            <circle cx={clamp(gx, -5, 5)} cy={clamp(-gy, -5, 5)} r="0.4" fill={x.co} opacity="0.9" />
                            <circle cx={clamp(gx, -5, 5)} cy={clamp(-gy, -5, 5)} r="0.6" fill="none" stroke={x.co} strokeWidth="0.08" opacity="0.4" />
                          </svg>
                          {/* Readout */}
                          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 2 }}>
                            <span style={{ fontSize: 13, fontWeight: 900, color: x.co, fontFamily: F1.mono }}>{totalG.toFixed(1)}<span style={{ fontSize: 8, fontWeight: 400, color: F1.textMuted }}>G</span></span>
                            <span style={{ fontSize: 9, color: F1.textDim, fontFamily: F1.mono, alignSelf: "center" }}>{x.di?.name_acronym || "—"}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              {/* ─── Current sector indicator (green/yellow/purple like F1 TV) ─── */}
              {tp && (() => {
                const sIdx = prog < 0.333 ? 0 : prog < 0.666 ? 1 : 2;
                const sColors = ["#00d26a", "#ffd700", "#9b59b6"];
                const sLabels = ["SECTOR 1", "SECTOR 2", "SECTOR 3"];
                return (<div style={{ display: "flex", gap: 3, marginBottom: 10 }}>
                  {[0, 1, 2].map((s) => (
                    <div key={s} style={{ flex: 1, padding: "4px 0", textAlign: "center", borderRadius: 3, background: s === sIdx ? sColors[s] + "22" : F1.cardBg, border: s === sIdx ? `1px solid ${sColors[s]}55` : `1px solid transparent`, transition: "all 0.3s" }}>
                      <div style={{ fontSize: 8, fontWeight: 700, color: s === sIdx ? sColors[s] : F1.textMuted, fontFamily: F1.mono, letterSpacing: "0.1em" }}>{sLabels[s]}</div>
                      {s === sIdx && <div style={{ width: 6, height: 6, borderRadius: "50%", background: sColors[s], margin: "3px auto 0", boxShadow: `0 0 8px ${sColors[s]}` }} />}
                    </div>
                  ))}
                </div>);
              })()}
              {/* ─── Tire degradation estimator ─── */}
              {laps1.length > 3 && (() => {
                const validLaps = laps1.filter((l) => l.lap_duration > 10 && l.lap_duration < 200).sort((a, b) => a.lap_number - b.lap_number);
                if (validLaps.length < 3) return null;
                const best = Math.min(...validLaps.map((l) => l.lap_duration));
                const maxDeg = Math.max(...validLaps.map((l) => l.lap_duration - best));
                return (<div style={{ marginBottom: 10 }}>
                  <div style={{ fontSize: 10, color: F1.textMuted, fontFamily: F1.mono, letterSpacing: "0.1em", marginBottom: 3, fontWeight: 700 }}>TIRE DEG <span style={{ fontWeight: 400 }}>(pace drop-off)</span></div>
                  <svg width="100%" height="35" viewBox="0 0 300 35" preserveAspectRatio="none" style={{ borderRadius: 3, background: F1.cardBg, display: "block" }}>
                    {validLaps.map((l, i) => {
                      const x = (i / (validLaps.length - 1)) * 290 + 5;
                      const deg = l.lap_duration - best;
                      const y = 30 - (deg / (maxDeg || 1)) * 25;
                      const tire = st1.find((s) => l.lap_number >= s.lap_start && l.lap_number <= s.lap_end)?.compound?.toUpperCase();
                      const tc = tire === "SOFT" ? "#ff3333" : tire === "MEDIUM" ? "#ffcc00" : tire === "HARD" ? "#ccc" : co1;
                      return (<g key={i}>
                        {i > 0 && <line x1={(((i - 1) / (validLaps.length - 1)) * 290 + 5)} y1={30 - ((validLaps[i - 1].lap_duration - best) / (maxDeg || 1)) * 25} x2={x} y2={y} stroke={tc} strokeWidth="1.5" opacity="0.7" />}
                        <circle cx={x} cy={y} r={l.lap_number === sl1 ? 3 : 1.5} fill={l.lap_number === sl1 ? "#fff" : tc} />
                      </g>);
                    })}
                    <text x="5" y="10" fill={F1.textMuted} fontSize="7" fontFamily="sans-serif">+{maxDeg.toFixed(1)}s</text>
                    <text x="5" y="32" fill={F1.textMuted} fontSize="7" fontFamily="sans-serif">best</text>
                  </svg>
                </div>);
              })()}
              <div style={{ fontSize: 10, color: F1.textMuted, fontFamily: F1.mono, letterSpacing: "0.1em", marginBottom: 3, fontWeight: 700 }}>SPEED <span style={{ color: F1.textMuted, fontWeight: 400 }}>(km/h)</span></div>
              <TelChart data1={s1} data2={s2} color1={co1} color2={co2} maxVal={370} prog={prog} />
              <div style={{ fontSize: 10, color: F1.textMuted, fontFamily: F1.mono, letterSpacing: "0.1em", marginBottom: 3, marginTop: 8, fontWeight: 700 }}>THROTTLE <span style={{ color: F1.textMuted, fontWeight: 400 }}>(%)</span></div>
              <TelChart data1={t1} data2={t2} color1={co1} color2={co2} maxVal={100} prog={prog} fillColor={`${F1.green}10`} />
              <div style={{ fontSize: 10, color: F1.textMuted, fontFamily: F1.mono, letterSpacing: "0.1em", marginBottom: 3, marginTop: 8, fontWeight: 700 }}>BRAKE</div>
              <TelChart data1={b1} data2={b2} color1={co1} color2={co2} maxVal={100} h={35} prog={prog} fillColor={`${F1.red}10`} />
            </div>
          </div>
        )}
      </div>

      {/* ─── PLAYBACK BAR — F1 broadcast style ─── */}
      {tp && (
        <div style={{ display: "flex", alignItems: "center", gap: mob ? 6 : 10, padding: mob ? "6px 10px" : "6px 18px", background: `linear-gradient(180deg, ${F1.carbonLight}, ${F1.carbon})`, borderTop: `1px solid ${F1.red}22` }}>
          <button onClick={() => { setProg(0); setPlay(false); }} style={{ padding: "3px 7px", fontSize: 11 }}>⏮</button>
          <button onClick={startWithCountdown} style={{ padding: "3px 9px", fontSize: 13, background: play ? `${F1.red}33` : F1.cardBg, borderColor: play ? F1.red : F1.border }}>{play ? "⏸" : "▶"}</button>
          <button onClick={() => setLoop(!loop)} style={{ padding: "3px 7px", opacity: loop ? 1 : 0.35, fontSize: 11 }}>🔁</button>
          <input type="range" min="0" max="1" step="0.001" value={prog} onChange={(e) => setProg(parseFloat(e.target.value))} style={{ flex: 1, height: 4, accentColor: F1.red }} />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: mob ? 55 : 70, gap: 0 }}>
            <span style={{ fontSize: 10, color: co1, fontFamily: F1.mono, fontWeight: 700, lineHeight: 1.2 }}>{fmt(el1)}</span>
            <span style={{ fontSize: 10, color: co2, fontFamily: F1.mono, fontWeight: 700, lineHeight: 1.2 }}>{fmt(el2)}</span>
          </div>
          <select value={spd} onChange={(e) => setSpd(parseFloat(e.target.value))} style={{ width: 48, padding: "2px 3px", fontSize: 10 }}>
            <option value={0.25}>.25x</option><option value={0.5}>.5x</option><option value={1}>1x</option><option value={2}>2x</option><option value={4}>4x</option>
          </select>
          {!mob && <button onClick={() => setShowTel(!showTel)} style={{ padding: "3px 7px", fontSize: 10, opacity: showTel ? 1 : 0.35 }}>📊</button>}
        </div>
      )}

      {/* ─── Footer ─── */}
      {!embed ? (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: mob ? 8 : 16, padding: "8px 18px", background: F1.carbon, borderTop: `1px solid ${F1.borderLight}`, flexWrap: "wrap" }}>
          <a href="https://f1stories.gr/" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 6, textDecoration: "none" }}>
            <img src="https://f1stories.gr/images/logo.png" alt="" style={{ height: 18 }} onError={(e) => { e.target.style.display = "none"; }} />
            <span style={{ fontSize: 10, color: F1.textDim, fontWeight: 600 }}>f1stories.gr</span>
          </a>
          <span style={{ fontSize: 9, color: F1.textMuted }}>•</span>
          <span style={{ fontSize: 9, color: F1.textMuted, fontFamily: F1.mono }}>Data by OpenF1 API</span>
          <span style={{ fontSize: 9, color: F1.textMuted }}>•</span>
          <span style={{ fontSize: 9, color: F1.textMuted }}>© {new Date().getFullYear()} F1 Stories</span>
        </div>
      ) : (
        <a href="https://f1stories.gr/ghostcar/" target="_blank" rel="noopener noreferrer" style={{ position: "fixed", bottom: 6, right: 8, zIndex: 10, background: "rgba(0,0,0,0.7)", padding: "3px 10px", borderRadius: 4, fontSize: 9, color: "#888", textDecoration: "none", fontFamily: F1.sans, backdropFilter: "blur(4px)" }}>
          Powered by <span style={{ color: "#E10600", fontWeight: 700 }}>F1 Stories</span>
        </a>
      )}
    </div>
  );
}
