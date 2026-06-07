export const uiRadii = {
  control: 4,
  card: 8,
  panel: 8,
  toast: 10,
};

export const uiType = {
  commandLetterSpacing: "0.04em",
  segmentedLetterSpacing: "0.08em",
  eyebrowLetterSpacing: "0.14em",
};

export function focusRingStyle(F1) {
  return {
    outline: `2px solid ${F1.blue}66`,
    outlineOffset: 2,
  };
}

export function controlButtonStyle({
  padding = "3px 8px",
  fontSize = 10,
  fontWeight = 600,
  letterSpacing,
  textTransform,
  background,
  borderColor,
  color,
  opacity,
  minWidth,
  minHeight,
  lineHeight,
  borderRadius = uiRadii.control,
} = {}) {
  return {
    padding,
    fontSize,
    fontWeight,
    borderRadius,
    ...(letterSpacing ? { letterSpacing } : {}),
    ...(textTransform ? { textTransform } : {}),
    ...(background ? { background } : {}),
    ...(borderColor ? { borderColor } : {}),
    ...(color ? { color } : {}),
    ...(opacity !== undefined ? { opacity } : {}),
    ...(minWidth !== undefined ? { minWidth } : {}),
    ...(minHeight !== undefined ? { minHeight } : {}),
    ...(lineHeight !== undefined ? { lineHeight } : {}),
  };
}

export function inputControlStyle(
  F1,
  {
    width,
    padding = "5px 8px",
    fontSize = 12,
    borderRadius = uiRadii.control,
    background = F1.inputBg,
    borderColor = F1.border,
    color = F1.text,
    outline = "none",
  } = {}
) {
  return {
    ...(width !== undefined ? { width } : {}),
    background,
    color,
    ...(borderColor ? { border: `1px solid ${borderColor}` } : {}),
    borderRadius,
    padding,
    fontSize,
    outline,
  };
}

export function segmentedButtonStyle(
  F1,
  {
    active = false,
    compact = false,
    padding = compact ? "4px 10px" : "4px 12px",
    fontSize = compact ? 9 : 10,
    fontWeight = 800,
    letterSpacing = uiType.segmentedLetterSpacing,
    textTransform = "uppercase",
    activeBackground = F1.blue,
    inactiveBackground = F1.overlay,
    activeBorder = F1.blue,
    inactiveBorder = F1.borderLight,
    activeColor = "#fff",
    inactiveColor = F1.textDim,
  } = {}
) {
  return controlButtonStyle({
    padding,
    fontSize,
    fontWeight,
    letterSpacing,
    textTransform,
    background: active ? activeBackground : inactiveBackground,
    borderColor: active ? activeBorder : inactiveBorder,
    color: active ? activeColor : inactiveColor,
  });
}

export function panelSurfaceStyle(
  F1,
  {
    background = F1.overlay,
    borderColor = `${F1.blue}33`,
    borderRadius = uiRadii.panel,
    padding,
    backdropFilter,
    boxShadow,
  } = {}
) {
  return {
    background,
    border: `1px solid ${borderColor}`,
    borderRadius,
    ...(padding ? { padding } : {}),
    ...(backdropFilter ? { backdropFilter, WebkitBackdropFilter: backdropFilter } : {}),
    ...(boxShadow ? { boxShadow } : {}),
  };
}

export function overlayBackdropStyle({
  background = "rgba(0,0,0,0.6)",
  zIndex = 99,
  blur = 4,
  position = "fixed",
  inset = 0,
} = {}) {
  return {
    position,
    inset,
    background,
    zIndex,
    ...(blur ? { backdropFilter: `blur(${blur}px)`, WebkitBackdropFilter: `blur(${blur}px)` } : {}),
  };
}
