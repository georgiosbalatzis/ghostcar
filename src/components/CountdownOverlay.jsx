import { overlayBackdropStyle } from "../ui/styles.js";

export default function CountdownOverlay({ F1, countdown }) {
  if (countdown === null || countdown === undefined) return null;
  return (
    <div
      role="status"
      style={{
        ...overlayBackdropStyle({ background: F1.overlay, zIndex: 300, blur: 0 }),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="section-label">Η σύγκριση ξεκινά</div>
      <div style={{ fontSize: 80, fontWeight: 600, color: F1.text, fontVariantNumeric: "tabular-nums" }}>
        {countdown === 0 ? "Πάμε." : countdown}
      </div>
    </div>
  );
}
