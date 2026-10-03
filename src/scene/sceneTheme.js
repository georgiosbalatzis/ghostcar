// The scene's colours, each mirroring a token of the stage panel (src/styles/tokens.css) so the canvas reads as
// the panel it sits in; test/scene-theme.test.js holds them to the tokens. Ground, run-off and road step up from
// the page: --surface, --surface-2, then a road one step past --viz-surface-raised so it stays readable at a distance
// (road against run-off is at least 1.15:1). Lit by the scene's lights, a surface facing up renders as its colour.
export const SCENE_THEME = {
  dark: {
    sceneBg: 0x242321, // --surface
    ground: 0x242321, // --surface
    gridMinor: 0x3a3834, // --viz-surface-raised
    gridMajor: 0x4b5146, // --rule
    road: 0x3f3d38, // a step past --viz-surface-raised (0x3a3834)
    runoff: 0x2e2c29, // --surface-2
    skirt: 0x1b1a19, // --page: the darkest tone, under the deck
    paint: 0x6d6861, // --viz-rule-strong
    checkA: 0xeee8db, // --text
    checkB: 0x1b1a19, // --page
    ink: 0xeee8db, // --text
    signal: 0xed4c32, // --signal
    // Speed, slow to fast: deep blue, teal, sand, signal red. A sequential ramp, not a rainbow.
    ramp: [0x2a3c8f, 0x1f8a99, 0x6fb39a, 0xd8c88d, 0xed4c32],
    shadow: 0.5, // opacity of the car's contact shadow
  },
  light: {
    sceneBg: 0xe9e3d6, // --surface
    ground: 0xe9e3d6, // --surface
    gridMinor: 0xd4cdbc, // --viz-surface-raised
    gridMajor: 0xc8c8b9, // --rule
    road: 0xc9c2af, // a step past --viz-surface-raised (0xd4cdbc)
    runoff: 0xdfd9ca, // --surface-2
    skirt: 0xb3ab98, // between --viz-surface-raised and --viz-rule-strong
    paint: 0x8c897b, // --viz-rule-strong
    checkA: 0x20251f, // --text
    checkB: 0xf2eee4, // --page
    ink: 0x20251f, // --text
    signal: 0xed4c32, // --signal
    ramp: [0x1c2a6b, 0x0f6f7c, 0x4c8f78, 0xb89b4a, 0xc2361f],
    shadow: 0.35,
  },
};
