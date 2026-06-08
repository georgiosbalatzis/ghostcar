import { controlButtonStyle, panelSurfaceStyle, uiRadii } from "../ui/styles.js";

export function getModalSurfaceStyle(
  F1,
  {
    mob = false,
    width = 480,
    mobileWidth = "95%",
    maxWidth,
    maxHeight = "85vh",
    padding = 0,
    boxShadow,
    display = "flex",
    flexDirection = "column",
    animation = "fadeIn .2s",
    overflow = "hidden",
  } = {}
) {
  return {
    ...panelSurfaceStyle(F1, {
      background: F1.carbon,
      borderColor: `${F1.blue}33`,
      borderRadius: 12,
      padding,
      boxShadow,
    }),
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: 100,
    width: mob ? mobileWidth : width,
    ...(maxWidth ? { maxWidth } : {}),
    ...(maxHeight ? { maxHeight } : {}),
    ...(display !== null ? { display } : {}),
    ...(flexDirection !== null ? { flexDirection } : {}),
    ...(animation !== null ? { animation } : {}),
    ...(overflow !== null ? { overflow } : {}),
  };
}

export function getModalDrawerSurfaceStyle(
  F1,
  { mob = false, width = 380, mobileWidth = "100%", zIndex = 100, display = "flex", flexDirection = "column" } = {}
) {
  return {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    width: mob ? mobileWidth : width,
    background: F1.carbon,
    borderLeft: `1px solid ${F1.blue}22`,
    zIndex,
    display,
    flexDirection,
    animation: "fadeIn .2s",
  };
}

export function getModalHeaderStyle(
  F1,
  { gap, padding = "16px 20px", borderBottom = `1px solid ${F1.borderLight}`, marginBottom } = {}
) {
  return {
    display: "flex",
    alignItems: "center",
    ...(gap !== undefined ? { gap } : {}),
    padding,
    ...(borderBottom !== null ? { borderBottom } : {}),
    ...(marginBottom !== undefined ? { marginBottom } : {}),
  };
}

export function getModalBodyStyle({ padding, overflow = "auto", overflowY, flex, minHeight } = {}) {
  return {
    ...(flex !== undefined ? { flex } : {}),
    ...(minHeight !== undefined ? { minHeight } : {}),
    ...(overflow !== undefined ? { overflow } : {}),
    ...(overflowY !== undefined ? { overflowY } : {}),
    ...(padding !== undefined ? { padding } : {}),
  };
}

export function getModalCloseButtonStyle(F1) {
  return {
    marginLeft: "auto",
    ...controlButtonStyle({
      minWidth: 40,
      minHeight: 40,
      padding: "0 12px",
      borderRadius: uiRadii.toast,
      background: F1.cardBg,
      borderColor: F1.borderLight,
      color: F1.textDim,
      fontSize: 18,
      fontWeight: 700,
      lineHeight: 1,
    }),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    border: `1px solid ${F1.borderLight}`,
  };
}

export function getModalListRowStyle(F1, { padding = "6px 0", justifyContent = "space-between" } = {}) {
  return {
    display: "flex",
    justifyContent,
    padding,
    borderBottom: `1px solid ${F1.borderLight}`,
  };
}

export function getModalKeycapStyle(F1) {
  return {
    background: F1.cardBg,
    padding: "2px 8px",
    borderRadius: 3,
    fontFamily: F1.mono,
    fontSize: 11,
    fontWeight: 700,
    color: F1.blue,
    border: `1px solid ${F1.blue}44`,
  };
}
