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
    animation: "fadeIn .2s",
    ...(overflow !== null ? { overflow } : {}),
  };
}

export function getModalHeaderStyle(F1, { gap } = {}) {
  return {
    display: "flex",
    alignItems: "center",
    ...(gap !== undefined ? { gap } : {}),
    padding: "16px 20px",
    borderBottom: `1px solid ${F1.borderLight}`,
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
