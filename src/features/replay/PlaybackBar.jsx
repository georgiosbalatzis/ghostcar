import Icon, { IconButton } from "../../components/ui/Icon.jsx";

function formatSpeed(speed) {
  return `${speed}×`;
}

// Transport: play/pause and the timeline are primary; loop and speed are secondary. Play on a finished
// lap restarts it, so there is no separate restart button (R still does it from the keyboard).
// The timeline is normalised lap progress; each driver's own lap is mapped onto it.
export default function PlaybackBar({
  play,
  loop,
  progress,
  speed,
  speeds,
  onToggle,
  onLoop,
  onSeek,
  onSpeed,
  compact = false,
}) {
  return (
    <div className={`transport ${compact ? "transport--compact" : ""}`} role="group" aria-label="Αναπαραγωγή">
      <button
        type="button"
        className="transport__play"
        aria-label={play ? "Παύση" : "Αναπαραγωγή"}
        title={play ? "Παύση (Space)" : "Αναπαραγωγή (Space)"}
        onClick={onToggle}
      >
        <Icon name={play ? "pause" : "play"} size={20} />
      </button>
      <input
        type="range"
        className="timeline"
        aria-label="Πρόοδος γύρου"
        aria-valuetext={`${Math.round(progress * 100)}% του γύρου`}
        min="0"
        max="1"
        step="0.001"
        value={progress}
        style={{ "--p": progress }}
        onChange={(event) => onSeek(parseFloat(event.target.value))}
      />
      {!compact && (
        <div className="transport__secondary">
          <IconButton icon="loop" label="Επανάληψη (L)" pressed={loop} onClick={onLoop} />
          <select
            className="select transport__speed"
            aria-label="Ταχύτητα αναπαραγωγής"
            value={speed}
            onChange={(event) => onSpeed(parseFloat(event.target.value))}
          >
            {speeds.map((value) => (
              <option key={value} value={value}>
                {formatSpeed(value)}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
