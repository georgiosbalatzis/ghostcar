export default function HeaderToolbar({
  F1,
  isDark,
  logoSrc,
  meetingShortLabel,
  year,
  comparisonContext,
  hasSession,
  hasReplay,
  hasPrimaryDrivers,
  shareMsg,
  showreel,
  onOpenPresets,
  onShare,
  onSaveToGallery,
  onToggleTheme,
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
  const actions = [
    ["Ανάλυση", "Στατιστικά γύρου", onOpenStats, hasReplay],
    ["Ανάλυση", "Διαθέσιμοι γύροι", onOpenLaps, hasReplay],
    ["Ανάλυση", "Αναμετρήσεις H2H", onLoadH2H, hasReplay && hasPrimaryDrivers],
    ["Ανάλυση", "Ανάλυση σεζόν", onLoadSeasonDash, hasSession && hasPrimaryDrivers],
    ["Σύγκριση", "Κοινοποίηση αυτής της σύγκρισης", onShare, hasSession],
    ["Σύγκριση", "Αποθήκευση στη συλλογή", onSaveToGallery, hasReplay],
    ["Σύγκριση", "Άνοιγμα συλλογής", onOpenGallery, true],
    ["Σύγκριση", "Δημιουργία κάρτας κοινοποίησης", onGenerateSocialCard, hasReplay],
    ["Σύγκριση", "Ενσωμάτωση αυτής της σύγκρισης", onOpenEmbed, hasReplay && hasSession],
    ["Σύγκριση", "Λήψη στιγμιότυπου", onTakeScreenshot, hasReplay],
    ["Βοήθεια", showreel ? "Διακοπή αυτόματης προβολής" : "Εκκίνηση αυτόματης προβολής", onToggleShowreel, true],
    ["Βοήθεια", "Εμφάνιση συντομεύσεων πληκτρολογίου", onOpenKeys, true],
  ];
  return (
    <header className="masthead">
      <a href="https://f1stories.gr/" className="brand" target="_blank" rel="noopener noreferrer">
        <img src={logoSrc} alt="" width="30" height="30" />
        <span>
          F1 STORIES<span style={{ color: F1.blue }}>.</span>
        </span>
      </a>
      <div className="product-name">
        GHOST CAR <span>LAB</span>
      </div>
      <span className="meeting-meta">{comparisonContext || (meetingShortLabel && `${meetingShortLabel} / ${year}`)}</span>
      <nav className="header-actions" aria-label="Εργαλεία σύγκρισης">
        <button className="featured-button" title="Άνοιγμα έτοιμων συγκρίσεων" onClick={onOpenPresets}>
          ΜΑΧΕΣ <span>↗</span>
        </button>
        {hasSession && (
          <button className="share-button" title="Κοινοποίηση αυτής της σύγκρισης" onClick={onShare}>
            {shareMsg || "Κοινοποίηση ↗"}
          </button>
        )}
        <button className="theme-button" title={themeTitle} aria-label={themeTitle} onClick={onToggleTheme}>
          {isDark ? "☼" : "◐"}
        </button>
        <details
          className="utility-menu"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              event.currentTarget.open = false;
              event.currentTarget.querySelector("summary").focus();
            }
          }}
        >
          <summary aria-label="Άνοιγμα μενού εργαλείων">•••</summary>
          <div className="utility-menu-content">
            {["Ανάλυση", "Σύγκριση", "Βοήθεια"].map((group) => (
              <div key={group}>
                <div className="section-label">{group}</div>
                {actions
                  .filter(([g, , , visible]) => g === group && visible)
                  .map(([, label, action]) => (
                    <button
                      key={label}
                      onClick={(event) => {
                        event.currentTarget.closest("details").open = false;
                        action();
                      }}
                    >
                      {label}
                    </button>
                  ))}
              </div>
            ))}
          </div>
        </details>
      </nav>
    </header>
  );
}
