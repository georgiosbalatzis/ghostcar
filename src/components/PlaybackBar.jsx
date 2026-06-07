import { fmt } from "../helpers.js";
import { controlButtonStyle, uiType } from "../ui/styles.js";

function formatSpeedLabel(speed) {
  return `${speed < 1 ? String(speed).replace("0", "") : speed}x`;
}

export default function PlaybackBar({
  mob,
  embed,
  F1,
  play,
  loop,
  progress,
  speed,
  playbackSpeeds,
  drivers,
  showTelemetry,
  shareMsg,
  shareUrl,
  onReset,
  onStart,
  onToggleLoop,
  onProgressChange,
  onSetup,
  onSpeedChange,
  onToggleTelemetry,
  onShare,
}) {
  const isCompactEmbed = embed && mob;
  const playTitle = play ? "Παύση αναπαραγωγής" : "Εναρξη σύγκρισης";
  const loopTitle = loop ? "Απενεργοποίηση επανάληψης" : "Ενεργοποίηση επανάληψης";
  const telemetryTitle = showTelemetry ? "Απόκρυψη τηλεμετρίας" : "Εμφάνιση τηλεμετρίας";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: isCompactEmbed ? 4 : mob ? 6 : 10,
        padding: isCompactEmbed ? "5px 8px" : mob ? "6px 10px" : "6px 18px",
        background: `linear-gradient(180deg, ${F1.carbonLight}, ${F1.carbon})`,
        borderTop: `1px solid ${F1.blue}22`,
        flexShrink: 0,
      }}
    >
      {!isCompactEmbed && (
        <button
          title="Επανεκκίνηση αναπαραγωγής"
          aria-label="Επανεκκίνηση αναπαραγωγής"
          onClick={onReset}
          style={controlButtonStyle({ padding: "3px 7px", fontSize: 11 })}
        >
          {mob ? "⏮" : "⏮ ΑΡΧΗ"}
        </button>
      )}
      <button
        title={playTitle}
        aria-label={playTitle}
        onClick={onStart}
        style={controlButtonStyle({
          padding: isCompactEmbed ? "5px 10px" : "3px 9px",
          fontSize: isCompactEmbed ? 15 : 12,
          background: play ? `${F1.blue}33` : F1.cardBg,
          borderColor: play ? F1.blue : F1.border,
          fontWeight: 700,
          letterSpacing: isCompactEmbed ? undefined : uiType.commandLetterSpacing,
        })}
      >
        {isCompactEmbed ? (play ? "⏸" : "▶") : play ? "⏸ ΠΑΥΣΗ" : "▶ ΠΑΙΞΕ"}
      </button>
      {!isCompactEmbed && (
        <button
          title={loopTitle}
          aria-label={loopTitle}
          onClick={onToggleLoop}
          style={controlButtonStyle({ padding: "3px 7px", opacity: loop ? 1 : 0.35, fontSize: 11 })}
        >
          {mob ? "🔁" : "🔁 ΕΠΑΝ."}
        </button>
      )}
      <input
        type="range"
        min="0"
        max="1"
        step="0.001"
        value={progress}
        onChange={(event) => onProgressChange(parseFloat(event.target.value))}
        style={{ flex: 1, height: isCompactEmbed ? 6 : 4, accentColor: F1.blue }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minWidth: isCompactEmbed ? 46 : mob ? 55 : 70,
        }}
      >
        {drivers.map((driver, index) => (
          <span
            key={index}
            style={{
              fontSize: isCompactEmbed ? 9 : 10,
              color: driver.co,
              fontFamily: F1.mono,
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            {fmt(driver.li?.lap_duration ? progress * driver.li.lap_duration : 0)}
          </span>
        ))}
      </div>
      {!embed && (
        <button
          title="Επιστροφή στις επιλογές"
          aria-label="Επιστροφή στις επιλογές"
          onClick={onSetup}
          style={controlButtonStyle({ padding: "3px 8px", fontSize: 10 })}
        >
          ΡΥΘΜΙΣΗ
        </button>
      )}
      <select
        value={speed}
        onChange={(event) => onSpeedChange(parseFloat(event.target.value))}
        style={{ width: isCompactEmbed ? 42 : 48, padding: "2px 3px", fontSize: 10 }}
      >
        {playbackSpeeds.map((playbackSpeed) => (
          <option key={playbackSpeed} value={playbackSpeed}>
            {formatSpeedLabel(playbackSpeed)}
          </option>
        ))}
      </select>
      {!mob && !embed && (
        <button
          title={telemetryTitle}
          aria-label={telemetryTitle}
          onClick={onToggleTelemetry}
          style={controlButtonStyle({ padding: "3px 7px", fontSize: 10, opacity: showTelemetry ? 1 : 0.35 })}
        >
          {showTelemetry ? "📊 ON" : "📊 OFF"}
        </button>
      )}
      {embed && !mob && (
        <button
          onClick={onShare}
          style={controlButtonStyle({ padding: "3px 8px", fontSize: 9, letterSpacing: uiType.commandLetterSpacing })}
        >
          {shareMsg || "↗ ΚΟΙΝΟΠ."}
        </button>
      )}
      {embed && shareUrl && (
        <a
          href={shareUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: isCompactEmbed ? "5px 8px" : "3px 8px",
            fontSize: 9,
            color: F1.blue,
            textDecoration: "none",
            fontWeight: 700,
            border: `1px solid ${F1.blue}44`,
            borderRadius: 4,
            letterSpacing: "0.04em",
            whiteSpace: "nowrap",
          }}
        >
          {isCompactEmbed ? "↗" : "ΑΝΟΙΓΜΑ ΣΤΗΝ ΕΦΑΡΜΟΓΗ ↗"}
        </a>
      )}
      {embed && !mob && (
        <span style={{ fontSize: 8, color: F1.textMuted, whiteSpace: "nowrap", marginLeft: "auto" }}>
          Από{" "}
          <a
            href="https://f1stories.gr/ghostcar/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: F1.blue, textDecoration: "none", fontWeight: 700 }}
          >
            F1 Stories
          </a>
        </span>
      )}
    </div>
  );
}
