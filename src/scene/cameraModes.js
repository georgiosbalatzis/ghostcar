// The camera modes as strings (the URL's `cam=`): "orbit" (Overview), "top", "follow1".."follow4" (chase behind a
// driver), "onboard1".."onboard4" and "tv". Pure, so the page and the scene agree on what a mode means.
export const CAM_FAMILIES = ["orbit", "top", "follow", "onboard", "tv"];
export const CAM_MODES = [
  "orbit",
  "top",
  ...[1, 2, 3, 4].map((slot) => `follow${slot}`),
  ...[1, 2, 3, 4].map((slot) => `onboard${slot}`),
  "tv",
];

/** A valid mode from a URL or stored value; the old "cinematic" is the TV camera now. Null when unknown. */
export function normalizeCam(value) {
  if (value === "cinematic") return "tv";
  return CAM_MODES.includes(value) ? value : null;
}

/** { family, slot }: slot is 1–4 for follow and onboard and null for the others. */
export function parseCam(cam) {
  const mode = normalizeCam(cam) || "orbit";
  const match = /^(follow|onboard)([1-4])$/.exec(mode);
  return match ? { family: match[1], slot: Number(match[2]) } : { family: mode, slot: null };
}

export const camFor = (family, slot) =>
  family === "follow" || family === "onboard" ? `${family}${slot || 1}` : family;

/** The next family in Overview → Top → Chase → Onboard → TV order; the driver stays the same. */
export function nextCam(cam, focus) {
  const { family, slot } = parseCam(cam);
  const next = CAM_FAMILIES[(CAM_FAMILIES.indexOf(family) + 1) % CAM_FAMILIES.length];
  return camFor(next, slot ?? focus ?? 1);
}
