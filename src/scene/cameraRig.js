import { MathUtils, Plane, Quaternion, Raycaster, TOUCH, Vector2, Vector3 } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { parseCam } from "./cameraModes.js";
import {
  easeInOutCubic,
  fitDistance,
  pickTvCamera,
  placeTvCameras,
  springStep,
  tvFov,
  yawFor2D,
} from "./cameraMath.js";
import { distanceAt, pointAhead } from "./carPose.js";

// The one camera and everything that moves it. Overview and Top are OrbitControls (drag, pan, zoom to the cursor)
// fitted to the stage; Chase, Onboard and TV are driven from the cars. Changing mode tweens over 0.7 s, except
// into or within TV, which cuts.
const FOV = { orbit: 40, top: 40, follow: 55, onboard: 70 };
const OVERVIEW_PITCH = MathUtils.degToRad(55);
const TOP_PITCH = Math.PI / 2 - 1e-4; // exactly straight down leaves lookAt without an up direction
const TWEEN_SECONDS = 0.7;
const HINT_GAP_MS = 4000;
const TOUCH_HINT_KEY = "f1s-3d-touch-hint";

const prefersReducedMotion = () => !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export function createCameraRig({
  camera,
  canvas,
  fog,
  world,
  groundY,
  centreline,
  cars,
  onFovChange,
  onHint,
  onPick,
  onFocusSlot,
}) {
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.zoomToCursor = true;
  controls.screenSpacePanning = false;
  controls.minDistance = 20;
  controls.maxDistance = 3 * world.diagonal;
  // One finger scrolls the page; two fingers move the camera (one finger too in full screen).
  controls.touches = { ONE: null, TWO: TOUCH.DOLLY_PAN };

  const centre = new Vector3(0, world.height / 2, 0);
  const look = new Vector3();
  const pose = { pos: new Vector3(), look: new Vector3(), fov: 40 };
  const stations = placeTvCameras(centreline);
  const tv = { current: -1, held: 0, ready: false };
  const chase = {
    offset: new Vector3(),
    velocity: new Vector3(),
    lookOffset: new Vector3(),
    lookVelocity: new Vector3(),
    snap: true,
  };
  const speeds = cars.map(() => ({ value: 0, x: NaN, z: NaN }));
  const ahead = { x: 0, y: 0, z: 0 };
  const desired = new Vector3();

  let familyKey = null;
  let focusSlot = 0; // the driver the chase, onboard or TV camera is on (0: none)
  let family = "orbit";
  let userMoved = false;
  let interacting = false;
  let settling = false;
  let tween = null;
  let override = null; // a pan target for the orbit tween: { pos, look }
  const saved = { orbit: null, top: null };
  let fitRequested = false;
  let hiddenSlot = 0;
  let lastWheelHint = -Infinity;
  const previousPosition = new Vector3();
  const previousQuaternion = new Quaternion();

  const isOrbital = (name) => name === "orbit" || name === "top";

  // ─── Orbit and top: the fitted pose, or the one the viewer left ───
  function orbitalPose(name, out) {
    if (saved[name]) {
      out.pos.copy(saved[name].pos);
      out.look.copy(saved[name].look);
    } else {
      const pitch = name === "top" ? TOP_PITCH : OVERVIEW_PITCH;
      const distance = fitDistance(world, FOV[name], camera.aspect, pitch, yawFor2D(), 0.08);
      const polar = Math.PI / 2 - pitch;
      out.look.copy(centre);
      out.pos.set(
        centre.x + distance * Math.sin(polar) * Math.sin(yawFor2D()),
        centre.y + distance * Math.cos(polar),
        centre.z + distance * Math.sin(polar) * Math.cos(yawFor2D())
      );
    }
    out.fov = FOV[name];
    return out;
  }

  // The orbit's limits for the mode it is in: Top looks straight down and only pans and zooms.
  function configureOrbital(name) {
    const top = name === "top";
    controls.enableRotate = !top;
    controls.minPolarAngle = top ? 1e-4 : MathUtils.degToRad(5);
    controls.maxPolarAngle = top ? 1e-4 : MathUtils.degToRad(80);
  }

  // Give the pose to OrbitControls and let it take over from the tween.
  function handOver(name, at) {
    camera.position.copy(at.pos);
    controls.target.copy(at.look);
    look.copy(at.look);
    configureOrbital(name);
    controls.enabled = true;
    controls.update();
  }

  // ─── The cars ───
  const slotOf = (requested) => (cars[requested - 1] ? requested : 1);
  const placeOf = (frame, slot) => frame.carStates[slot - 1].place;

  function trackSpeeds(frame, dt) {
    frame.carStates.forEach((state, index) => {
      const s = speeds[index];
      if (!s) return;
      const moved = Math.hypot(state.place.x - s.x, state.place.z - s.z);
      // A scrub is a jump, not a speed: only steady movement counts (F1 tops out near 100 m/s).
      if (dt > 1e-4 && moved / dt < 130) s.value += (moved / dt - s.value) * (1 - Math.exp(-3 * dt));
      s.x = state.place.x;
      s.z = state.place.z;
    });
  }

  function chasePose(frame, slot, dt, out) {
    const place = placeOf(frame, slot);
    const speed = speeds[slot - 1].value;
    const distance = MathUtils.lerp(9, 13, MathUtils.clamp(speed / 80, 0, 1));
    const fx = Math.sin(place.heading);
    const fz = Math.cos(place.heading);
    // The camera is the car's place plus an offset; only the offset is sprung, so it never trails the car itself.
    const stiff = prefersReducedMotion() ? 14 : 6;
    desired.set(-fx * distance, 2.8, -fz * distance);
    if (chase.snap) chase.offset.copy(desired);
    else springStep(chase.offset, desired, chase.velocity, stiff, dt);
    pointAhead(frame.driverPaths[slot - 1], frame.fractions[slot - 1], 15, ahead);
    desired.set(ahead.x - place.x, 1 + Math.tan(place.pitch) * 15, ahead.z - place.z);
    if (chase.snap) chase.lookOffset.copy(desired);
    else springStep(chase.lookOffset, desired, chase.lookVelocity, 10, dt);
    chase.snap = false;
    out.pos.set(place.x + chase.offset.x, place.y + chase.offset.y, place.z + chase.offset.z);
    out.look.set(place.x + chase.lookOffset.x, place.y + chase.lookOffset.y, place.z + chase.lookOffset.z);
    out.fov = FOV.follow;
  }

  function onboardPose(frame, slot, out) {
    const place = placeOf(frame, slot);
    const cosP = Math.cos(place.pitch);
    const sinP = Math.sin(place.pitch);
    const fx = Math.sin(place.heading);
    const fz = Math.cos(place.heading);
    // The T-cam above the airbox, fixed to the car: forward 0.4 m, up 1.2 m in the car's own frame.
    out.pos.set(
      place.x + fx * cosP * 0.4 - fx * sinP * 1.2,
      place.y + sinP * 0.4 + cosP * 1.2,
      place.z + fz * cosP * 0.4 - fz * sinP * 1.2
    );
    pointAhead(frame.driverPaths[slot - 1], frame.fractions[slot - 1], 30, ahead);
    out.look.set(ahead.x, place.y + 1.2 + Math.tan(place.pitch) * 30, ahead.z);
    out.fov = FOV.onboard;
  }

  function tvPose(frame, dt, out) {
    // The chosen driver, or whoever has covered the most road.
    let slot = frame.focus && cars[frame.focus - 1] ? frame.focus : 0;
    if (!slot) {
      let best = -1;
      cars.forEach((car, index) => {
        const path = frame.driverPaths[index];
        if (!car || !path) return;
        const covered = distanceAt(path, frame.fractions[index]);
        if (covered > best) {
          best = covered;
          slot = index + 1;
        }
      });
    }
    setFocus(slot);
    const state = frame.carStates[slot - 1];
    const s = state.index * centreline.spacing;
    const pick = pickTvCamera(stations, s, tv.current, tv.held, centreline.length);
    if (pick !== tv.current) {
      tv.current = pick;
      tv.held = 0;
    }
    tv.held += dt;
    const station = stations[tv.current];
    const place = state.place;
    // Aim slightly ahead of the car by the look damping's own lag, so the car sits in the middle of the picture.
    const lead = speeds[slot - 1].value * 0.12;
    desired.set(place.x + Math.sin(place.heading) * lead, place.y + 0.8, place.z + Math.cos(place.heading) * lead);
    if (!tv.ready) {
      look.copy(desired);
      tv.ready = true;
    } else look.lerp(desired, 1 - Math.exp(-dt / 0.12));
    out.pos.set(station.x, station.y, station.z);
    out.look.copy(look);
    out.fov = tvFov(out.pos.distanceTo(out.look));
  }

  // ─── Mode changes ───
  function enter(name, previous, frame, slot) {
    const wasOrbital = isOrbital(previous);
    if (wasOrbital && userMoved) saved[previous] = { pos: camera.position.clone(), look: controls.target.clone() };
    if (wasOrbital) controls.enabled = false;
    if (hiddenSlot) {
      cars[hiddenSlot - 1].visible = true;
      hiddenSlot = 0;
    }
    tv.current = -1;
    tv.held = 0;
    tv.ready = false;
    if (name === "follow") {
      const place = placeOf(frame, slot);
      chase.offset.set(camera.position.x - place.x, camera.position.y - place.y, camera.position.z - place.z);
      chase.velocity.set(0, 0, 0);
      chase.lookOffset.set(look.x - place.x, look.y - place.y, look.z - place.z);
      chase.lookVelocity.set(0, 0, 0);
    }
    const cut = name === "tv" || previous === null || prefersReducedMotion();
    tween = cut ? null : { t: 0, fromPos: camera.position.clone(), fromLook: look.clone(), fromFov: camera.fov };
    // A cut has nothing to blend from: the chase starts where it belongs instead of sweeping in.
    chase.snap = name === "follow" && cut;
    if (isOrbital(name) && !tween) {
      userMoved = !!saved[name];
      handOver(name, orbitalPose(name, pose));
    }
  }

  function setFocus(slot) {
    if (slot === focusSlot) return;
    focusSlot = slot;
    onFocusSlot?.(slot);
  }

  function setFov(value) {
    if (Math.abs(camera.fov - value) < 0.01) return;
    camera.fov = value;
    camera.updateProjectionMatrix();
    onFovChange?.();
  }

  // Near, far and fog follow the distance to what the camera looks at, so a chase camera 12 m from a car and an
  // overview 2 km from the circuit both keep their depth precision.
  function updateClipping() {
    const distance = camera.position.distanceTo(look);
    const near = MathUtils.clamp(distance * 0.002, 0.1, 5);
    if (Math.abs(near - camera.near) > camera.near * 0.1) {
      camera.near = near;
      camera.far = 4 * world.diagonal;
      camera.updateProjectionMatrix();
    }
    const fogNear = distance + 0.6 * world.diagonal;
    if (Math.abs(fog.near - fogNear) > 0.01 * fogNear) {
      fog.near = fogNear;
      fog.far = distance + 1.6 * world.diagonal;
    }
  }

  // ─── Update, once per frame; true when the picture changed ───
  function update(frame) {
    const dt = Math.min(frame.dt, 0.05);
    const mode = parseCam(frame.cam);
    const name = mode.family;
    const slot = mode.family === "follow" || mode.family === "onboard" ? slotOf(mode.slot) : null;
    const key = `${name}${slot ?? ""}`;
    previousPosition.copy(camera.position);
    previousQuaternion.copy(camera.quaternion);
    trackSpeeds(frame, dt);

    if (key !== familyKey) {
      const before = family;
      const first = familyKey === null;
      family = name;
      familyKey = key;
      enter(name, first ? null : before, frame, slot);
    }

    if (fitRequested && isOrbital(name)) {
      fitRequested = false;
      saved[name] = null;
      userMoved = false;
      override = null;
      controls.enabled = false;
      if (prefersReducedMotion()) handOver(name, orbitalPose(name, pose));
      else tween = { t: 0, fromPos: camera.position.clone(), fromLook: look.clone(), fromFov: camera.fov };
    }

    if (name === "follow" || name === "onboard") setFocus(slot);
    else if (name !== "tv") setFocus(0);
    let changed = false;
    if (isOrbital(name)) {
      if (tween) {
        if (override) {
          pose.pos.copy(override.pos);
          pose.look.copy(override.look);
          pose.fov = FOV[name];
        } else orbitalPose(name, pose);
      } else {
        changed = controls.update();
        settling = changed;
        look.copy(controls.target);
      }
    } else {
      if (name === "follow") chasePose(frame, slot, dt, pose);
      else if (name === "onboard") onboardPose(frame, slot, pose);
      else tvPose(frame, dt, pose);
      if (name === "onboard" && hiddenSlot !== slot) {
        cars[slot - 1].visible = false;
        hiddenSlot = slot;
      }
    }

    if (tween || !isOrbital(name)) {
      if (tween) {
        tween.t = Math.min(1, tween.t + dt / TWEEN_SECONDS);
        const e = easeInOutCubic(tween.t);
        camera.position.lerpVectors(tween.fromPos, pose.pos, e);
        look.lerpVectors(tween.fromLook, pose.look, e);
        setFov(MathUtils.lerp(tween.fromFov, pose.fov, e));
        camera.lookAt(look);
        if (tween.t >= 1) {
          tween = null;
          if (isOrbital(name)) {
            userMoved = !!(override || saved[name]);
            handOver(name, pose);
            override = null;
          }
        }
        changed = true;
      } else {
        camera.position.copy(pose.pos);
        look.copy(pose.look);
        setFov(pose.fov);
        camera.lookAt(look);
      }
    } else {
      setFov(FOV[name]);
    }

    updateClipping();
    return (
      changed ||
      camera.position.distanceToSquared(previousPosition) > 1e-6 ||
      1 - Math.abs(camera.quaternion.dot(previousQuaternion)) > 1e-8
    );
  }

  // ─── Input ───
  const markMoved = () => {
    userMoved = true;
  };
  controls.addEventListener("start", () => {
    interacting = true;
    markMoved();
  });
  controls.addEventListener("end", () => {
    interacting = false;
  });

  // The page keeps the wheel unless Ctrl or ⌘ is held (a trackpad pinch sends Ctrl), or the stage is full screen.
  const onWheel = (event) => {
    if (event.ctrlKey || event.metaKey || document.fullscreenElement) return;
    event.stopImmediatePropagation();
    const now = performance.now();
    if (now - lastWheelHint > HINT_GAP_MS && isOrbital(family)) {
      lastWheelHint = now;
      onHint?.("wheel");
    }
  };
  const onFullscreen = () => {
    controls.touches = { ONE: document.fullscreenElement ? TOUCH.ROTATE : null, TWO: TOUCH.DOLLY_PAN };
  };
  const onTouchStart = (event) => {
    if (event.touches.length !== 1 || document.fullscreenElement || !isOrbital(family)) return;
    try {
      if (sessionStorage.getItem(TOUCH_HINT_KEY)) return;
      sessionStorage.setItem(TOUCH_HINT_KEY, "1");
    } catch {
      // No storage: the hint may repeat.
    }
    onHint?.("touch");
  };

  const raycaster = new Raycaster();
  const pointer = new Vector2();
  const groundPlane = new Plane(new Vector3(0, 1, 0), -groundY);
  const groundPoint = new Vector3();
  const onDoubleClick = (event) => {
    const box = canvas.getBoundingClientRect();
    pointer.set(((event.clientX - box.left) / box.width) * 2 - 1, -(((event.clientY - box.top) / box.height) * 2 - 1));
    raycaster.setFromCamera(pointer, camera);
    const hit = raycaster
      .intersectObjects(cars.filter(Boolean), true)
      .find((item) => item.object.visible && !item.object.isSprite && !item.object.userData.noPick);
    if (hit) {
      let object = hit.object;
      while (object && !cars.includes(object)) object = object.parent;
      if (object) onPick?.(cars.indexOf(object) + 1);
      return;
    }
    // In Overview, a double-click on the ground brings that spot to the middle (the view keeps its angle).
    if (family !== "orbit" || tween || !raycaster.ray.intersectPlane(groundPlane, groundPoint)) return;
    if (Math.abs(groundPoint.x) > world.width || Math.abs(groundPoint.z) > world.depth) return;
    const delta = new Vector3(groundPoint.x - controls.target.x, 0, groundPoint.z - controls.target.z);
    override = { pos: camera.position.clone().add(delta), look: controls.target.clone().add(delta) };
    controls.enabled = false;
    tween = { t: 0, fromPos: camera.position.clone(), fromLook: look.clone(), fromFov: camera.fov };
  };
  canvas.addEventListener("wheel", onWheel, { capture: true, passive: true });
  canvas.addEventListener("touchstart", onTouchStart, { passive: true });
  canvas.addEventListener("dblclick", onDoubleClick);
  document.addEventListener("fullscreenchange", onFullscreen);

  return {
    controls,
    update,
    fit: () => {
      if (isOrbital(family)) fitRequested = true;
    },
    // The stage changed size (aspect is already updated): refit unless the viewer has moved the camera.
    resize: () => {
      if (!isOrbital(family) || userMoved || tween) return;
      handOver(family, orbitalPose(family, pose));
    },
    isActive: () => interacting || settling || !!tween,
    // 0-based index of the car whose own chip is hidden (the camera is on it), or -1.
    hiddenLabelIndex: () => (family === "follow" || family === "onboard" ? focusSlot - 1 : -1),
    dispose: () => {
      canvas.removeEventListener("wheel", onWheel, { capture: true });
      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("dblclick", onDoubleClick);
      document.removeEventListener("fullscreenchange", onFullscreen);
      if (hiddenSlot) cars[hiddenSlot - 1].visible = true;
      controls.dispose();
    },
  };
}
