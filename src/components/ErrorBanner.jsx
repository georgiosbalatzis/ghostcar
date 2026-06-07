import { controlButtonStyle, panelSurfaceStyle } from "../ui/styles.js";

export default function ErrorBanner({ F1, message, onClose }) {
  if (!message) return null;

  return (
    <div
      style={{
        ...panelSurfaceStyle(F1, {
          background: `${F1.red}11`,
          borderColor: `${F1.red}22`,
          borderRadius: 0,
          padding: "8px 18px",
        }),
        border: "none",
        borderBottom: `1px solid ${F1.red}22`,
        fontSize: 12,
        color: F1.red,
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}
    >
      <span style={{ flex: 1 }}>{message}</span>
      <button
        aria-label="Απόκρυψη σφάλματος"
        onClick={onClose}
        style={controlButtonStyle({ minWidth: 34, minHeight: 34, padding: "0 10px", fontSize: 14, lineHeight: 1 })}
      >
        ✕
      </button>
    </div>
  );
}
