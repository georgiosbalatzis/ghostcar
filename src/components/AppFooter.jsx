import { panelSurfaceStyle } from "../ui/styles.js";

export default function AppFooter({ mob, F1, logoSrc }) {
  return (
    <div
      style={{
        ...panelSurfaceStyle(F1, {
          background: F1.carbon,
          borderColor: F1.borderLight,
          borderRadius: 0,
          padding: "8px 18px",
        }),
        border: "none",
        borderTop: `1px solid ${F1.borderLight}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: mob ? 8 : 16,
        flexShrink: 0,
        flexWrap: "wrap",
      }}
    >
      <a
        href="https://f1stories.gr/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "flex", alignItems: "center", gap: 6, textDecoration: "none" }}
      >
        <img
          src={logoSrc}
          alt=""
          style={{ height: 18 }}
          onError={(event) => {
            event.target.style.display = "none";
          }}
        />
        <span style={{ fontSize: 10, color: F1.textDim, fontWeight: 600 }}>f1stories.gr</span>
      </a>
      <span style={{ fontSize: 9, color: F1.textMuted }}>•</span>
      <span style={{ fontSize: 9, color: F1.textMuted, fontFamily: F1.mono }}>Δεδομένα από το OpenF1 API</span>
      <span style={{ fontSize: 9, color: F1.textMuted }}>•</span>
      <span style={{ fontSize: 9, color: F1.textMuted }}>© {new Date().getFullYear()} F1 Stories</span>
    </div>
  );
}
