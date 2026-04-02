export function getModalCloseButtonStyle(F1) {
  return {
    marginLeft: "auto",
    minWidth: 40,
    minHeight: 40,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 12px",
    borderRadius: 10,
    background: F1.cardBg,
    border: `1px solid ${F1.borderLight}`,
    color: F1.textDim,
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 1,
  };
}
