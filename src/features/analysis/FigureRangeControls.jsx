import { useId } from "react";
import { boundaryAtDistance, normalizeFigureOptions, turnBoundaries } from "../../domain/figureAnalysis.js";

export default function FigureRangeControls({ landmarks, length, options, onChange, disabled = false }) {
  const id = useId();
  const settings = normalizeFigureOptions(options);
  const boundaries = turnBoundaries(landmarks, length);
  const mapped = boundaries.length > 2;
  return (
    <>
      {["from", "to"].map((field) => {
        const from = field === "from";
        const distance = settings[field] ?? (from ? 0 : length);
        const selected = boundaryAtDistance(distance, boundaries);
        const choices = boundaries.filter((boundary) => boundary.id !== (from ? "finish" : "start"));
        const label = mapped ? (from ? "Από στροφή" : "Έως στροφή") : from ? "Από [m]" : "Έως [m]";
        return (
          <label key={field} className="figure-range-field" htmlFor={`${id}-${field}`}>
            {label}
            {mapped ? (
              <select
                id={`${id}-${field}`}
                className="input"
                value={selected.id}
                disabled={disabled}
                onChange={(event) => {
                  const choice = boundaries.find((boundary) => boundary.id === event.target.value);
                  if (choice) onChange({ [field]: ["start", "finish"].includes(choice.id) ? null : choice.distance });
                }}
              >
                {selected.id === "custom" && <option value="custom">{selected.label}</option>}
                {choices.map((choice) => (
                  <option
                    key={choice.id}
                    value={choice.id}
                    disabled={
                      from ? choice.distance >= (settings.to ?? length) : choice.distance <= (settings.from ?? 0)
                    }
                  >
                    {choice.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={`${id}-${field}`}
                className="input"
                type="number"
                step="any"
                min={from ? 0 : 1}
                max={length}
                value={options[field] ?? ""}
                disabled={disabled}
                placeholder={from ? "0" : "Τερματισμός"}
                onChange={(event) => onChange({ [field]: event.target.value })}
              />
            )}
          </label>
        );
      })}
      {!mapped && (
        <p className="figure-note">
          Δεν υπάρχει διαθέσιμη χαρτογράφηση στροφών για αυτή την πίστα· η επιλογή γίνεται σε μέτρα.
        </p>
      )}
    </>
  );
}
