import { controlButtonStyle, panelSurfaceStyle, uiRadii } from "../ui/styles.js";

export default function LoadingStatusBar({ F1, message, progress, canCancel, onCancel }) {
  if (!message) return null;

  return (
    <div
      style={{
        ...panelSurfaceStyle(F1, {
          background: "transparent",
          borderColor: F1.borderLight,
          borderRadius: 0,
          padding: "8px 18px",
        }),
        border: "none",
        borderBottom: `1px solid ${F1.borderLight}`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
        <div style={{ flex: 1, fontSize: 11, color: F1.textDim, fontFamily: F1.mono }}>{message}</div>
        {canCancel && (
          <button onClick={onCancel} style={controlButtonStyle({ padding: "4px 10px", fontSize: 10 })}>
            ΑΚΥΡΟ
          </button>
        )}
      </div>
      {progress !== undefined && (
        <div style={{ height: 2, background: F1.borderLight, borderRadius: uiRadii.control / 4, overflow: "hidden" }}>
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              background: F1.blue,
              borderRadius: uiRadii.control / 4,
              transition: "width .3s",
            }}
          />
        </div>
      )}
    </div>
  );
}
