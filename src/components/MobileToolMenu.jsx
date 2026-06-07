import { controlButtonStyle, overlayBackdropStyle, panelSurfaceStyle, uiRadii } from "../ui/styles.js";

export default function MobileToolMenu({
  F1,
  isDark,
  hasReplay,
  hasPrimaryDrivers,
  hasSession,
  onClose,
  onSelectTab,
  onOpenGallery,
  onGenerateSocialCard,
  onOpenEmbed,
  onTakeScreenshot,
}) {
  const runAndClose = (action) => {
    action();
    onClose();
  };
  const menuBorderColor = "rgba(59,130,246,0.2)";
  const menuSurfaceStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    ...panelSurfaceStyle(F1, {
      background: isDark ? "rgba(17,17,24,0.97)" : "rgba(245,245,247,0.97)",
      borderColor: menuBorderColor,
      borderRadius: 0,
      padding: "12px 14px 14px",
      backdropFilter: "blur(20px)",
      boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
    }),
    border: "none",
    borderBottom: `1px solid ${menuBorderColor}`,
    animation: "fadeIn .15s",
  };
  const closeButtonStyle = {
    ...controlButtonStyle({
      padding: "2px 8px",
      fontSize: 14,
      background: "transparent",
      borderColor: "transparent",
      color: F1.textMuted,
    }),
    border: "none",
  };
  const actionButtonStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 3,
    ...controlButtonStyle({
      padding: "10px 4px",
      fontSize: 9,
      fontWeight: 600,
      letterSpacing: "0.02em",
      background: F1.cardBg,
      borderColor: F1.borderLight,
      color: F1.textDim,
      borderRadius: uiRadii.card,
    }),
  };

  const actions = [
    {
      icon: "📈",
      label: "Στατ.",
      action: () => runAndClose(() => onSelectTab("stats")),
      show: hasReplay,
    },
    {
      icon: "⏱",
      label: "Γύροι",
      action: () => runAndClose(() => onSelectTab("laps")),
      show: hasReplay,
    },
    {
      icon: "⚔️",
      label: "H2H",
      action: () => runAndClose(() => onSelectTab("h2h")),
      show: hasReplay && hasPrimaryDrivers,
    },
    {
      icon: "🏆",
      label: "Σεζόν",
      action: () => runAndClose(() => onSelectTab("season")),
      show: hasPrimaryDrivers && hasSession,
    },
    {
      icon: "📂",
      label: "Συλλογή",
      action: () => runAndClose(onOpenGallery),
      show: true,
    },
    {
      icon: "🖼️",
      label: "Κάρτα",
      action: () => runAndClose(onGenerateSocialCard),
      show: hasReplay,
    },
    {
      icon: "</>",
      label: "Ενσώμ.",
      action: () => runAndClose(onOpenEmbed),
      show: hasReplay && hasSession,
    },
    {
      icon: "📸",
      label: "Στιγμιότ.",
      action: () => runAndClose(onTakeScreenshot),
      show: hasReplay,
    },
  ].filter((action) => action.show);

  return (
    <>
      <div onClick={onClose} style={overlayBackdropStyle({ background: "rgba(0,0,0,0.5)", zIndex: 49, blur: 4 })} />
      <div style={menuSurfaceStyle}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: "#3b82f6", letterSpacing: "0.10em" }}>ΕΡΓΑΛΕΙΑ</span>
          <button
            title="Κλείσιμο μενού εργαλείων"
            aria-label="Κλείσιμο μενού εργαλείων"
            onClick={onClose}
            style={closeButtonStyle}
          >
            ✕
          </button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6 }}>
          {actions.map((action) => (
            <button key={action.label} onClick={action.action} style={actionButtonStyle}>
              <span style={{ fontSize: 18 }}>{action.icon}</span>
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
