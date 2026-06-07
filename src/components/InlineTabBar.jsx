import { controlButtonStyle, panelSurfaceStyle } from "../ui/styles.js";

const TAB_DEFS = [
  { id: "3d", icon: "🏎️", label: "Πίστα", title: "Πίστα" },
  { id: "telemetry", icon: "📊", label: "Τηλεμετρία", title: "Τηλεμετρία" },
  { id: "stats", icon: "📈", label: "Στατιστικά", title: "Στατιστικά" },
  { id: "laps", icon: "⏱", label: "Γύροι", title: "Γύροι" },
  { id: "h2h", icon: "⚔️", label: "H2H", title: "H2H" },
  { id: "season", icon: "🏆", label: "Σεζόν", title: "Σεζόν" },
];

function getTabLabel(tab, { embed, mob }) {
  if (embed && mob) return tab.icon;
  return `${tab.icon} ${tab.label}`;
}

export default function InlineTabBar({ F1, mob, embed, activeTab, onSelectTab }) {
  return (
    <div
      style={{
        ...panelSurfaceStyle(F1, {
          background: F1.carbonLight,
          borderColor: F1.borderLight,
          borderRadius: 0,
        }),
        border: "none",
        borderBottom: `1px solid ${F1.borderLight}`,
        display: "flex",
        overflowX: "auto",
        flexShrink: 0,
        WebkitOverflowScrolling: embed ? "touch" : undefined,
      }}
    >
      {TAB_DEFS.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            title={embed ? tab.title : undefined}
            onClick={() => onSelectTab(tab.id)}
            style={{
              ...controlButtonStyle({
                padding: embed ? (mob ? "8px 0" : "7px 4px") : "7px 10px",
                fontSize: embed && mob ? 16 : 10,
                fontWeight: isActive ? 700 : 400,
                letterSpacing: embed ? "0.02em" : undefined,
                textTransform: "none",
                background: isActive ? F1.cardBg : "transparent",
                color: isActive ? F1.text : F1.textDim,
                borderRadius: 0,
              }),
              flex: embed ? (mob ? "1 0 auto" : 1) : "0 0 auto",
              border: "none",
              borderBottom: isActive ? `2px solid ${F1.blue}` : "2px solid transparent",
              whiteSpace: "nowrap",
              minWidth: embed && mob ? 0 : undefined,
            }}
          >
            {getTabLabel(tab, { embed, mob })}
          </button>
        );
      })}
    </div>
  );
}
