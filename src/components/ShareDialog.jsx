import { getModalCloseButtonStyle } from "../modals/modalStyles.js";
import { controlButtonStyle, inputControlStyle, panelSurfaceStyle, uiRadii } from "../ui/styles.js";

export default function ShareDialog({ mob, F1, url, notice, onClose, onCopy }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Σύνδεσμος κοινοποίησης"
      style={{
        ...panelSurfaceStyle(F1, {
          background: F1.carbon,
          borderColor: `${F1.blue}33`,
          borderRadius: 12,
          padding: 0,
          boxShadow: "0 22px 60px rgba(0,0,0,0.4)",
        }),
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        zIndex: 100,
        width: mob ? "95%" : 560,
        maxWidth: "calc(100vw - 24px)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "16px 20px",
          borderBottom: `1px solid ${F1.borderLight}`,
        }}
      >
        <div>
          <div style={{ fontWeight: 900, fontSize: 16, fontFamily: F1.sans, letterSpacing: "0.05em" }}>
            ΕΤΟΙΜΟΣ ΣΥΝΔΕΣΜΟΣ
          </div>
          <div style={{ fontSize: 10, color: F1.textMuted, marginTop: 2 }}>
            {notice || "Ο σύνδεσμος κοινοποίησης είναι έτοιμος πιο κάτω."}
          </div>
        </div>
        <button aria-label="Κλείσιμο παραθύρου κοινοποίησης" onClick={onClose} style={getModalCloseButtonStyle(F1)}>
          ✕
        </button>
      </div>
      <div style={{ padding: "16px 20px 20px" }}>
        <input
          readOnly
          value={url}
          onFocus={(event) => event.target.select()}
          style={inputControlStyle(F1, {
            width: "100%",
            borderRadius: uiRadii.card,
            padding: "12px 14px",
            fontSize: 12,
          })}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 10,
            marginTop: 12,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div style={{ fontSize: 11, color: F1.textDim, lineHeight: 1.5 }}>
            Επίλεξε και αντέγραψε χειροκίνητα τον σύνδεσμο ή χρησιμοποίησε ξανά το κουμπί αντιγραφής.
          </div>
          <button
            className="f1-btn"
            onClick={onCopy}
            style={controlButtonStyle({
              padding: "8px 14px",
              fontSize: 11,
              fontWeight: 700,
            })}
          >
            ΑΝΤΙΓΡΑΦΗ
          </button>
        </div>
      </div>
    </div>
  );
}
