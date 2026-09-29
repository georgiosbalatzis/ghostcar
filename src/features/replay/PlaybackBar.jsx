import Icon, { IconButton } from "../../components/ui/Icon.jsx";
import { fmt } from "../../helpers.js";

function formatSpeed(speed) {
  return `${speed}×`;
}

// Transport: play/pause and the timeline are primary; loop and speed are secondary. Play on a finished
// lap restarts it, so there is no separate restart button (R still does it from the keyboard).
// The timeline is real time, from 0 to the slowest lap; each driver runs on their own timestamps.
export default function PlaybackBar({
  play,
  loop,
  progress,
  duration = 0,
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
        aria-valuetext={`${(progress * duration).toFixed(1)} από ${duration.toFixed(1)} δευτερόλεπτα`}
        min="0"
        max="1"
        step="0.001"
        value={progress}
        style={{ "--p": progress }}
        onChange={(event) => onSeek(parseFloat(event.target.value))}
      />
      <span className="transport__time num">
        <b>{fmt(progress * duration)}</b>
        <span> / {fmt(duration)}</span>
      </span>
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
