// Stacking of name chips (no three.js here: the 2D map uses it too).

/**
 * How many others sit above each point on screen: stacking name chips in this order keeps the top car's chip
 * highest, so bunched cars never cover each other's names. Shared with the 2D map.
 */
export function rankByY(points) {
  return points.map((point) => points.filter((other) => other.y < point.y).length);
}

/**
 * Stacking for chips that may be far apart: each chip is ranked only among the chips near it (within `near`
 * pixels on both axes), and centred on its group, so a lone chip stays beside its car.
 */
export function stackOffsets(points, near = 60) {
  return points.map((point) => {
    const group = points.filter((other) => Math.abs(other.x - point.x) < near && Math.abs(other.y - point.y) < near);
    return (
      group.filter((other) => other.y < point.y || (other.y === point.y && other.index < point.index)).length -
      (group.length - 1) / 2
    );
  });
}
