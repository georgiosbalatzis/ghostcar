import Icon, { IconButton } from "../../components/ui/Icon.jsx";

function formatSpeed(speed) {
  return `${speed}×`;
}

// Transport: play/pause and the timeline are primary; restart, loop and speed are secondary.
// The timeline is normalised lap progress; each driver's own lap is mapped onto it.
export default function PlaybackBar({
  play,
  loop,
  progress,
  speed,
  speeds,
  onToggle,
  onReset,
  onLoop,
  onSeek,
  onSpeed,
  compact = false,
}) {
  const percent = Math.round(progress * 100);
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
        aria-valuetext={`${percent}% του γύρου`}
        min="0"
        max="1"
        step="0.001"
        value={progress}
        style={{ "--p": progress }}
        onChange={(event) => onSeek(parseFloat(event.target.value))}
      />
      <span className="transport__time num" aria-hidden="true">
        {percent}%
      </span>
      {!compact && (
        <div className="transport__secondary">
          <IconButton icon="restart" label="Επιστροφή στην αρχή (R)" onClick={onReset} />
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
