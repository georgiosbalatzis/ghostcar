import { BufferGeometry, Float32BufferAttribute, Group, Mesh } from "three";

// The car model is loaded once per page and shared by every scene build (theme, colouring and driver changes
// rebuild the scene, not the model). A failed load is not cached, so the next build tries again.
let templatePromise = null;

// Bake every mesh's world transform into Float32 position/normal and merge the meshes that share a material,
// so a car costs one draw call per material instead of one per mesh. The merged geometry is shared by all cars
// and never disposed with a scene (userData.shared, see disposeScene).
function mergeByMaterial(root, mergeGeometries) {
  root.updateMatrixWorld(true);
  const byMaterial = new Map();
  root.traverse((child) => {
    if (!child.isMesh || !child.geometry?.attributes.position) return;
    const material = Array.isArray(child.material) ? child.material[0] : child.material;
    const source = child.geometry;
    // Float32 first: with mesh quantization the attributes are normalized integers that cannot take a transform.
    const flat = new BufferGeometry();
    const copy = (name) => {
      const attribute = source.attributes[name];
      const array = new Float32Array(attribute.count * 3);
      for (let i = 0; i < attribute.count; i++) {
        array[i * 3] = attribute.getX(i);
        array[i * 3 + 1] = attribute.getY(i);
        array[i * 3 + 2] = attribute.getZ(i);
      }
      flat.setAttribute(name, new Float32BufferAttribute(array, 3));
    };
    copy("position");
    flat.setIndex(
      source.index
        ? Array.from(source.index.array)
        : Array.from({ length: source.attributes.position.count }, (_, i) => i)
    );
    if (source.attributes.normal) copy("normal");
    else flat.computeVertexNormals();
    flat.applyMatrix4(child.matrixWorld);
    if (!byMaterial.has(material)) byMaterial.set(material, []);
    byMaterial.get(material).push(flat);
  });

  const template = new Group();
  for (const [material, geometries] of byMaterial) {
    const merged = geometries.length > 1 ? mergeGeometries(geometries, false) : geometries[0];
    // A failed merge (mismatched attributes) keeps the meshes separate: slower, still correct.
    for (const geometry of merged ? [merged] : geometries) {
      geometry.userData.shared = true;
      const mesh = new Mesh(geometry, material);
      mesh.name = material.name;
      template.add(mesh);
    }
  }
  return template;
}

export function loadCarTemplate() {
  if (!templatePromise) {
    templatePromise = Promise.all([
      import("three/examples/jsm/loaders/GLTFLoader.js"),
      import("three/examples/jsm/libs/meshopt_decoder.module.js"),
      import("three/examples/jsm/utils/BufferGeometryUtils.js"),
    ])
      .then(
        ([{ GLTFLoader }, { MeshoptDecoder }, { mergeGeometries }]) =>
          new Promise((resolve, reject) => {
            const loader = new GLTFLoader();
            loader.setMeshoptDecoder(MeshoptDecoder);
            loader.load(
              (import.meta.env.BASE_URL || "/") + "f1car.glb",
              (gltf) => resolve(mergeByMaterial(gltf.scene, mergeGeometries)),
              undefined,
              reject
            );
          })
      )
      .catch((error) => {
        templatePromise = null;
        throw error;
      });
  }
  return templatePromise;
}
