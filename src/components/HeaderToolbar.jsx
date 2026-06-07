import { controlButtonStyle, panelSurfaceStyle, uiRadii, uiType } from "../ui/styles.js";

function actionClassName({ icon = false, active = false } = {}) {
  return `hdr-action-btn${icon ? " hdr-action-btn-icon" : ""}${active ? " hdr-action-btn-active" : ""}`;
}

function ToolbarButton({ icon = false, active = false, styles, style, className = "", children, ...props }) {
  const combinedClassName = `${actionClassName({ icon, active })}${className ? ` ${className}` : ""}`;

  return (
    <button
      {...props}
      className={combinedClassName}
      style={{
        ...(icon ? styles.icon : styles.base),
        ...(active ? styles.active : {}),
        ...style,
      }}
    >
      {children}
    </button>
  );
}

export default function HeaderToolbar({
  mob,
  F1,
  isDark,
  logoSrc,
  meetingShortLabel,
  year,
  hasSession,
  hasReplay,
  hasPrimaryDrivers,
  shareMsg,
  showMobileMenu,
  showreel,
  onOpenPresets,
  onShare,
  onSaveToGallery,
  onToggleTheme,
  onToggleMobileMenu,
  onOpenStats,
  onOpenLaps,
  onLoadH2H,
  onLoadSeasonDash,
  onOpenGallery,
  onGenerateSocialCard,
  onOpenEmbed,
  onTakeScreenshot,
  onToggleShowreel,
  onOpenKeys,
}) {
  const themeTitle = isDark ? "Μετάβαση σε φωτεινό θέμα" : "Μετάβαση σε σκούρο θέμα";
  const toolbarBorderColor = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)";
  const actionButtonStyle = controlButtonStyle({
    padding: "6px 10px",
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: uiType.commandLetterSpacing,
    background: "rgba(255,255,255,0.05)",
    borderColor: "rgba(255,255,255,0.08)",
    color: F1.textDim,
    borderRadius: uiRadii.card,
    minHeight: 34,
  });
  const iconActionButtonStyle = {
    ...actionButtonStyle,
    minWidth: 38,
    padding: "0 10px",
    fontSize: 14,
    lineHeight: 1,
  };
  const activeActionButtonStyle = {
    background: "rgba(59,130,246,0.15)",
    borderColor: "rgba(59,130,246,0.4)",
    color: "#93c5fd",
  };
  const toolbarButtonStyles = {
    base: actionButtonStyle,
    icon: iconActionButtonStyle,
    active: activeActionButtonStyle,
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexShrink: 0,
        ...panelSurfaceStyle(F1, {
          background: isDark ? "rgba(17,17,24,0.92)" : "rgba(245,245,247,0.92)",
          borderColor: toolbarBorderColor,
          borderRadius: 0,
          backdropFilter: "blur(16px)",
          boxShadow: "0 2px 12px rgba(0,0,0,0.45)",
        }),
        border: "none",
        borderBottom: `1px solid ${toolbarBorderColor}`,
        zIndex: 10,
        position: "relative",
        padding: mob ? "0 10px" : "0 20px",
        minHeight: mob ? 44 : 52,
        gap: mob ? 8 : 18,
      }}
    >
      <a href="https://f1stories.gr/" target="_blank" rel="noopener noreferrer" className="hdr-logo-link">
        <img
          src={logoSrc}
          alt="F1 Stories"
          style={{ height: mob ? 26 : 32, width: "auto" }}
          onError={(event) => {
            event.target.style.display = "none";
          }}
        />
        {!mob && (
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.15 }}>
            <span style={{ fontSize: 15, fontWeight: 900, color: F1.text, letterSpacing: uiType.commandLetterSpacing }}>
              F1 STORIES
            </span>
            <span
              style={{
                fontSize: 9,
                fontWeight: 600,
                color: "#3b82f6",
                letterSpacing: uiType.eyebrowLetterSpacing,
                textTransform: "uppercase",
              }}
            >
              Σύγκριση Γύρων F1
            </span>
          </div>
        )}
      </a>
      {mob && (
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: "#3b82f6",
            letterSpacing: "0.06em",
            whiteSpace: "nowrap",
          }}
        >
          F1 Stories
        </span>
      )}
      {mob && meetingShortLabel && (
        <span
          style={{
            fontSize: 9,
            color: F1.textDim,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: 90,
          }}
        >
          {meetingShortLabel}
        </span>
      )}
      {!mob && (
        <div style={{ display: "flex", gap: 20, marginLeft: 4, paddingTop: 2 }}>
          {[
            { label: "Άρθρα", href: "https://f1stories.gr/blog-module/blog/index.html" },
            { label: "YouTube", href: "https://www.youtube.com/@F1_Stories_Original" },
            { label: "Βαθμολογίες", href: "https://f1stories.gr/standings/" },
          ].map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="hdr-nav-link">
              {link.label.toUpperCase()}
            </a>
          ))}
        </div>
      )}
      {!mob && meetingShortLabel && (
        <span
          style={{
            fontSize: 10,
            color: F1.textMuted,
            fontWeight: 600,
            letterSpacing: "0.05em",
            marginLeft: 4,
            borderLeft: `1px solid ${F1.borderLight}`,
            paddingLeft: 12,
          }}
        >
          {meetingShortLabel} {year}
        </span>
      )}
      <div
        style={{
          marginLeft: "auto",
          display: "flex",
          alignItems: "center",
          gap: mob ? 4 : 5,
          flexShrink: 0,
        }}
      >
        {mob ? (
          <>
            <ToolbarButton
              styles={toolbarButtonStyles}
              icon
              title="Άνοιγμα preset συγκρίσεων"
              aria-label="Άνοιγμα preset συγκρίσεων"
              onClick={onOpenPresets}
            >
              ⚡
            </ToolbarButton>
            {hasSession && (
              <ToolbarButton
                styles={toolbarButtonStyles}
                icon
                title="Κοινοποίηση αυτής της σύγκρισης"
                aria-label="Κοινοποίηση αυτής της σύγκρισης"
                onClick={onShare}
              >
                {shareMsg ? "✓" : "↗"}
              </ToolbarButton>
            )}
            {hasReplay && (
              <ToolbarButton
                styles={toolbarButtonStyles}
                icon
                title="Αποθήκευση στη συλλογή"
                aria-label="Αποθήκευση στη συλλογή"
                onClick={onSaveToGallery}
              >
                💾
              </ToolbarButton>
            )}
            <ToolbarButton
              styles={toolbarButtonStyles}
              icon
              title={themeTitle}
              aria-label={themeTitle}
              onClick={onToggleTheme}
            >
              {isDark ? "☀️" : "🌙"}
            </ToolbarButton>
            <ToolbarButton
              styles={toolbarButtonStyles}
              icon
              active={showMobileMenu}
              title="Άνοιγμα μενού εργαλείων"
              aria-label="Άνοιγμα μενού εργαλείων"
              onClick={onToggleMobileMenu}
            >
              ☰
            </ToolbarButton>
          </>
        ) : (
          <>
            <ToolbarButton styles={toolbarButtonStyles} title="Άνοιγμα έτοιμων συγκρίσεων" onClick={onOpenPresets}>
              ⚡ ΜΑΧΕΣ
            </ToolbarButton>
            {hasSession && (
              <ToolbarButton styles={toolbarButtonStyles} title="Κοινοποίηση αυτής της σύγκρισης" onClick={onShare}>
                {shareMsg || "ΚΟΙΝΟΠΟΙΗΣΗ"}
              </ToolbarButton>
            )}
            {hasReplay && (
              <ToolbarButton styles={toolbarButtonStyles} title="Άνοιγμα στατιστικών γύρου" onClick={onOpenStats}>
                ΣΤΑΤΙΣΤΙΚΑ
              </ToolbarButton>
            )}
            {hasReplay && (
              <ToolbarButton styles={toolbarButtonStyles} title="Προβολή διαθέσιμων γύρων" onClick={onOpenLaps}>
                ΓΥΡΟΙ
              </ToolbarButton>
            )}
            {hasReplay && hasPrimaryDrivers && (
              <ToolbarButton styles={toolbarButtonStyles} title="Ιστορικό αναμετρήσεων H2H" onClick={onLoadH2H}>
                H2H
              </ToolbarButton>
            )}
            {hasPrimaryDrivers && hasSession && (
              <ToolbarButton styles={toolbarButtonStyles} title="Ανάλυση σεζόν" onClick={onLoadSeasonDash}>
                ΣΕΖΟΝ
              </ToolbarButton>
            )}
            {hasReplay && (
              <ToolbarButton
                styles={toolbarButtonStyles}
                icon
                title="Αποθήκευση στη συλλογή"
                aria-label="Αποθήκευση στη συλλογή"
                onClick={onSaveToGallery}
              >
                💾
              </ToolbarButton>
            )}
            <ToolbarButton
              styles={toolbarButtonStyles}
              icon
              title="Άνοιγμα συλλογής"
              aria-label="Άνοιγμα συλλογής"
              onClick={onOpenGallery}
            >
              📂
            </ToolbarButton>
            {hasReplay && (
              <ToolbarButton
                styles={toolbarButtonStyles}
                icon
                title="Δημιουργία κάρτας κοινοποίησης"
                aria-label="Δημιουργία κάρτας κοινοποίησης"
                onClick={onGenerateSocialCard}
              >
                🖼️
              </ToolbarButton>
            )}
            {hasReplay && hasSession && (
              <ToolbarButton
                styles={toolbarButtonStyles}
                icon
                title="Ενσωμάτωση αυτής της σύγκρισης"
                aria-label="Ενσωμάτωση αυτής της σύγκρισης"
                onClick={onOpenEmbed}
              >
                {"</>"}
              </ToolbarButton>
            )}
            {hasReplay && (
              <ToolbarButton
                styles={toolbarButtonStyles}
                icon
                title="Λήψη στιγμιότυπου"
                aria-label="Λήψη στιγμιότυπου"
                onClick={onTakeScreenshot}
              >
                📸
              </ToolbarButton>
            )}
            <ToolbarButton
              styles={toolbarButtonStyles}
              icon
              active={showreel}
              title={showreel ? "Διακοπή αυτόματης προβολής" : "Εκκίνηση αυτόματης προβολής"}
              aria-label={showreel ? "Διακοπή αυτόματης προβολής" : "Εκκίνηση αυτόματης προβολής"}
              onClick={onToggleShowreel}
            >
              {showreel ? "⏹" : "🎬"}
            </ToolbarButton>
            <ToolbarButton
              styles={toolbarButtonStyles}
              icon
              title={themeTitle}
              aria-label={themeTitle}
              onClick={onToggleTheme}
            >
              {isDark ? "☀️" : "🌙"}
            </ToolbarButton>
            <ToolbarButton
              styles={toolbarButtonStyles}
              icon
              title="Εμφάνιση συντομεύσεων πληκτρολογίου"
              aria-label="Εμφάνιση συντομεύσεων πληκτρολογίου"
              onClick={onOpenKeys}
              style={{ fontWeight: 900 }}
            >
              ?
            </ToolbarButton>
          </>
        )}
      </div>
    </div>
  );
}
