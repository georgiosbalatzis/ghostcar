// Scene colours mirror the stage panel's tokens (tokens.css) so the canvas reads as the panel it sits in:
// background --surface, road between --surface-2 and --surface-3, --rule-strong for the paint, lines --text,
// start --signal. Ground and run-off step between the background and the road; the skirt is the darkest tone.
export const SCENE_THEME = {
  dark: {
    sceneBg: 0x242321,
    ground: 0x242321,
    gridMinor: 0x34322e,
    gridMajor: 0x4a4740,
    road: 0x45423c,
    runoff: 0x34322e,
    skirt: 0x1b1a18,
    paint: 0x9a958a,
    checkA: 0xeee8db,
    checkB: 0x1b1a19,
    ink: 0xeee8db,
    signal: 0xed4c32,
  },
  light: {
    sceneBg: 0xe9e3d6,
    ground: 0xe9e3d6,
    gridMinor: 0xdcd5c5,
    gridMajor: 0xc9c1ae,
    road: 0xd6cfbf,
    runoff: 0xdfd8c9,
    skirt: 0xb3ab98,
    paint: 0x8c897b,
    checkA: 0x20251f,
    checkB: 0xf2eee4,
    ink: 0x20251f,
    signal: 0xed4c32,
  },
};
