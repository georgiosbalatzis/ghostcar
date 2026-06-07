import { ACESFilmicToneMapping, Color, Fog, FogExp2, PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { F1_DARK, F1_LIGHT } from "../constants.js";

export function getSceneSupportError() {
  if (typeof window === "undefined") return "";
  if (!window.WebGLRenderingContext) return "Αυτός ο browser δεν υποστηρίζει WebGL.";
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    return gl ? "" : "Το WebGL είναι απενεργοποιημένο ή μη διαθέσιμο σε αυτή τη συσκευή.";
  } catch {
    return "Το WebGL είναι απενεργοποιημένο ή μη διαθέσιμο σε αυτή τη συσκευή.";
  }
}

export function formatSceneError(error) {
  const message = error instanceof Error ? error.message : String(error || "");
  if (!message) return "Δεν ήταν δυνατή η εκκίνηση της 3D σκηνής.";
  if (/webgl|context/i.test(message)) return message;
  return `Δεν ήταν δυνατή η εκκίνηση της 3D σκηνής. ${message}`;
}

function disposeMaterial(material, disposedTextures) {
  if (!material) return;
  if (Array.isArray(material)) {
    material.forEach((entry) => disposeMaterial(entry, disposedTextures));
    return;
  }
  Object.values(material).forEach((value) => {
    if (value?.isTexture && !disposedTextures.has(value)) {
      disposedTextures.add(value);
      value.dispose();
    }
  });
  material.dispose?.();
}

export function disposeScene(root) {
  if (!root) return;
  const disposedGeometries = new Set();
  const disposedMaterials = new Set();
  const disposedTextures = new Set();
  root.traverse((obj) => {
    if (obj.geometry && !disposedGeometries.has(obj.geometry)) {
      disposedGeometries.add(obj.geometry);
      obj.geometry.dispose();
    }
    const materials = obj.material ? (Array.isArray(obj.material) ? obj.material : [obj.material]) : [];
    materials.forEach((material) => {
      if (material && !disposedMaterials.has(material)) {
        disposedMaterials.add(material);
        disposeMaterial(material, disposedTextures);
      }
    });
  });
  root.clear();
}

export function createSceneRenderer({ container, isDark, onContextLost }) {
  let scene;
  let renderer;
  let canvas;
  let handleContextLost;

  try {
    const width = Math.max(container.clientWidth, 1);
    const height = Math.max(container.clientHeight, 1);
    const isMob = width < 768;
    const connection =
      window.navigator?.connection || window.navigator?.mozConnection || window.navigator?.webkitConnection;
    const deviceMemory = window.navigator?.deviceMemory ?? 8;
    const isBandwidthSaving = !!connection?.saveData;
    const isMemoryConstrained = deviceMemory <= 3;
    const isLowDetail = isBandwidthSaving || deviceMemory <= 2;
    const initialPixelRatio = Math.min(
      window.devicePixelRatio || 1,
      isBandwidthSaving ? 1.25 : isMemoryConstrained ? 1.5 : 2
    );
    const theme = isDark ? F1_DARK : F1_LIGHT;

    scene = new Scene();
    if (isDark) {
      scene.background = new Color(0x080812);
      scene.fog = new FogExp2(0x080812, 0.006);
    } else {
      scene.background = new Color(theme.sceneBg);
      scene.fog = new Fog(theme.sceneBg, 120, 350);
    }

    const camera = new PerspectiveCamera(50, width / height, 0.1, 500);
    renderer = new WebGLRenderer({
      antialias: !isMob,
      powerPreference: isMob ? "low-power" : "high-performance",
      preserveDrawingBuffer: !isMob,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(initialPixelRatio);
    renderer.toneMapping = ACESFilmicToneMapping;
    renderer.toneMappingExposure = isDark ? 1.1 : 1.0;

    container.appendChild(renderer.domElement);
    canvas = renderer.domElement;
    // Fill container immediately so the canvas isn't a 1px stub while ResizeObserver fires.
    canvas.style.display = "block";
    canvas.style.width = "100%";
    canvas.style.height = "100%";

    handleContextLost = (event) => {
      event.preventDefault();
      onContextLost?.(event);
    };
    canvas.addEventListener("webglcontextlost", handleContextLost, false);

    return {
      scene,
      camera,
      renderer,
      canvas,
      width,
      height,
      isMob,
      isBandwidthSaving,
      isMemoryConstrained,
      isLowDetail,
      initialPixelRatio,
      theme,
      dispose() {
        if (canvas && handleContextLost) canvas.removeEventListener("webglcontextlost", handleContextLost);
        if (container && renderer?.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        disposeScene(scene);
        if (renderer) {
          renderer.renderLists?.dispose?.();
          renderer.forceContextLoss?.();
          renderer.dispose();
        }
        scene = null;
        renderer = null;
        canvas = null;
        handleContextLost = null;
      },
    };
  } catch (error) {
    if (canvas && handleContextLost) canvas.removeEventListener("webglcontextlost", handleContextLost);
    if (container && renderer?.domElement && container.contains(renderer.domElement)) {
      container.removeChild(renderer.domElement);
    }
    disposeScene(scene);
    renderer?.renderLists?.dispose?.();
    renderer?.forceContextLoss?.();
    renderer?.dispose();
    throw error;
  }
}

export function attachRendererResize({ container, camera, renderer, isContextLost, onResize }) {
  let resizeTimer;
  const applyResize = (delay) => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (!container || isContextLost?.()) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (!width || !height) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      onResize?.();
    }, delay);
  };
  const onContainerResize = () => applyResize(50);
  // On mobile, orientation changes don't reliably trigger ResizeObserver, so use
  // a dedicated orientation listener with a longer settle delay.
  const onOrientationChange = () => applyResize(350);

  let resizeObserver;
  if (typeof ResizeObserver !== "undefined") {
    resizeObserver = new ResizeObserver(onContainerResize);
    resizeObserver.observe(container);
  } else {
    window.addEventListener("resize", onContainerResize);
  }

  if (screen?.orientation) {
    screen.orientation.addEventListener("change", onOrientationChange);
  } else {
    window.addEventListener("orientationchange", onOrientationChange);
  }

  return () => {
    clearTimeout(resizeTimer);
    if (resizeObserver) {
      resizeObserver.disconnect();
    } else {
      window.removeEventListener("resize", onContainerResize);
    }
    if (screen?.orientation) {
      screen.orientation.removeEventListener("change", onOrientationChange);
    } else {
      window.removeEventListener("orientationchange", onOrientationChange);
    }
  };
}
