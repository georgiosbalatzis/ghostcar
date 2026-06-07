import TelemetryPanel from "../components/TelemetryPanel.jsx";
import { useF1 } from "../theme.js";
import {
  getModalBodyStyle,
  getModalCloseButtonStyle,
  getModalHeaderStyle,
  getModalSurfaceStyle,
} from "./modalStyles.js";

export default function TelemetryModal({ mob, onClose, panelProps }) {
  const F1 = useF1();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Γραφήματα τηλεμετρίας"
      style={getModalSurfaceStyle(F1, {
        mob,
        width: 980,
        maxWidth: "calc(100vw - 24px)",
        maxHeight: "86vh",
        boxShadow: "0 22px 60px rgba(0,0,0,0.4)",
      })}
    >
      <div style={getModalHeaderStyle(F1, { gap: 16 })}>
        <div>
          <div style={{ fontWeight: 900, fontSize: 16, fontFamily: F1.sans, letterSpacing: "0.05em" }}>
            ΚΕΝΤΡΟ ΤΗΛΕΜΕΤΡΙΑΣ
          </div>
          <div style={{ fontSize: 10, color: F1.textMuted, marginTop: 2 }}>
            Ταχύτητα, γκάζι, φρένο και ζωντανές μετρήσεις αναπαραγωγής
          </div>
        </div>
        <button aria-label="Κλείσιμο overlay τηλεμετρίας" onClick={onClose} style={getModalCloseButtonStyle(F1)}>
          ✕
        </button>
      </div>
      <div style={getModalBodyStyle({ flex: 1, minHeight: 0 })}>
        <TelemetryPanel {...panelProps} />
      </div>
    </div>
  );
}
