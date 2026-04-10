import TelemetryPanel from "../components/TelemetryPanel.jsx";
import { useF1 } from "../theme.js";
import { getModalCloseButtonStyle } from "./modalStyles.js";

export default function TelemetryModal({ mob, onClose, panelProps }) {
  const F1 = useF1();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Γραφήματα τηλεμετρίας"
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        background: F1.carbon,
        border: `1px solid ${F1.blue}33`,
        borderRadius: 12,
        padding: 0,
        zIndex: 100,
        width: mob ? "95%" : 980,
        maxWidth: "calc(100vw - 24px)",
        maxHeight: "86vh",
        display: "flex",
        flexDirection: "column",
        animation: "fadeIn .2s",
        overflow: "hidden",
        boxShadow: "0 22px 60px rgba(0,0,0,0.4)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px", borderBottom: `1px solid ${F1.borderLight}` }}>
        <div>
          <div style={{ fontWeight: 900, fontSize: 16, fontFamily: F1.sans, letterSpacing: "0.05em" }}>ΚΕΝΤΡΟ ΤΗΛΕΜΕΤΡΙΑΣ</div>
          <div style={{ fontSize: 10, color: F1.textMuted, marginTop: 2 }}>Ταχύτητα, γκάζι, φρένο και ζωντανές μετρήσεις αναπαραγωγής</div>
        </div>
        <button aria-label="Κλείσιμο overlay τηλεμετρίας" onClick={onClose} style={getModalCloseButtonStyle(F1)}>✕</button>
      </div>
      <div style={{ flex: 1, minHeight: 0, overflow: "auto" }}>
        <TelemetryPanel {...panelProps} />
      </div>
    </div>
  );
}
