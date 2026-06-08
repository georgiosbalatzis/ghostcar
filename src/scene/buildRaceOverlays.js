import { BufferGeometry, DynamicDrawUsage, Float32BufferAttribute, Line } from "three";
import { createDeltaLineMaterial, createRacingLineMaterial } from "./materials.js";

function freezeObjectTransform(object) {
  if (!object) return object;
  object.updateMatrix();
  object.matrixAutoUpdate = false;
  return object;
}

export function buildRaceOverlays({ scene, curve, seg, isLowDetail }) {
  // SpotLights removed (B5): per-fragment cone/penumbra calculations were the single most
  // expensive lighting cost. Coloured ground pool effect is preserved by boosted PointLights
  // inside non-ghost car groups.
  const spot1 = null;
  const spot2 = null;

  const deltaGeo = new BufferGeometry();
  const deltaPos = new Float32Array(6);
  const deltaPosAttr = new Float32BufferAttribute(deltaPos, 3);
  deltaPosAttr.setUsage(DynamicDrawUsage);
  deltaGeo.setAttribute("position", deltaPosAttr);
  const deltaLine = new Line(deltaGeo, createDeltaLineMaterial());
  deltaLine.frustumCulled = false;
  scene.add(freezeObjectTransform(deltaLine));

  if (!isLowDetail) {
    const racingLine = new Line(new BufferGeometry().setFromPoints(curve.getPoints(seg)), createRacingLineMaterial());
    racingLine.position.y += 0.015;
    scene.add(freezeObjectTransform(racingLine));
  }

  return { spot1, spot2, deltaLine, deltaPos };
}
