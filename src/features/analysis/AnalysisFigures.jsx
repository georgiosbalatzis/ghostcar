import { memo, useId, useMemo, useRef, useState } from "react";
import {
  buildFigureAnalysis,
  FIGURE_VIEWS,
  figureRange,
  gainAt,
  normalizeFigureOptions,
  projectLandmarks,
  turnBoundaries,
  boundaryAtDistance,
} from "../../domain/figureAnalysis.js";
import baku from "../../domain/bakuLandmarks.json";
import { exportFigure } from "../sharing/exportFigure.js";
import ComparisonFigure from "./ComparisonFigure.jsx";
import FigureRangeControls from "./FigureRangeControls.jsx";
import "./figures.css";

function AnalysisFigures({ model, options, onChange, onEmbed, embedded = false }) {
  const id = useId(),
    svgRef = useRef(null);
  const [exporting, setExporting] = useState(false),
    [message, setMessage] = useState("");
  const analysis = useMemo(() => buildFigureAnalysis(model), [model]);
  const landmarks = useMemo(
    () =>
      /baku/i.test(model.meeting?.circuit_short_name || model.meetingName)
        ? projectLandmarks(analysis, baku.corners)
        : [],
    [analysis, model]
  );
  const settings = normalizeFigureOptions(options),
    view = settings.figure || "map";
  const range = analysis.reliable ? figureRange(settings, analysis.length) : [0, 1];
  const boundaries = turnBoundaries(landmarks, analysis.length || 1);
  const rangeLabel = `${boundaryAtDistance(range[0], boundaries).label} → ${boundaryAtDistance(range[1], boundaries).label}`;
  const invalidRange =
    view === "telemetry" &&
    analysis.reliable &&
    (["from", "to"].some(
      (key) =>
        options[key] !== "" &&
        options[key] != null &&
        (!Number.isFinite(Number(options[key])) || Number(options[key]) < 0)
    ) ||
      (settings.from ?? 0) >= (settings.to ?? analysis.length) ||
      (settings.from ?? 0) >= analysis.length ||
      (settings.to ?? 1) > analysis.length);
  const change = (patch) => {
    setMessage("");
    onChange({ ...options, figure: view, ...patch });
  };
  const download = async (format) => {
    if (!svgRef.current || exporting) return;
    setExporting(true);
    setMessage("");
    try {
      await exportFigure(
        svgRef.current,
        format,
        `ghostcar-${model.drivers
          .slice(0, 2)
          .map((d) => `${d.label}-L${d.lapNumber}`)
          .join("-")}-${view}`
      );
      setMessage(`Η εικόνα ${format.toUpperCase()} κατέβηκε.`);
    } catch {
      setMessage("Δεν έγινε η εξαγωγή. Δοκίμασε ξανά όταν φορτωθούν οι γραμματοσειρές.");
    } finally {
      setExporting(false);
    }
  };
  return (
    <section
      className={`analysis-figures${embedded ? " analysis-figures--embed" : ""}`}
      aria-labelledby={`${id}-title`}
    >
      {!embedded && (
        <div className="section-head">
          <h2 id={`${id}-title`} className="section-head__title">
            Γραφήματα για άρθρο<span className="dot">.</span>
          </h2>
          <p className="section-head__note">Εικόνα ή διαδραστική ενσωμάτωση από τους φορτωμένους γύρους Α και Β.</p>
        </div>
      )}
      {embedded && (
        <h2 id={`${id}-title`} className="visually-hidden">
          Ανάλυση σύγκρισης γύρων
        </h2>
      )}
      {(!embedded || !settings.fixed) && (
        <div className="figure-controls">
          <label className="figure-controls__view" htmlFor={`${id}-view`}>
            Γράφημα
            <select
              id={`${id}-view`}
              className="input"
              value={view}
              disabled={exporting}
              onChange={(event) => change({ figure: event.target.value })}
            >
              {FIGURE_VIEWS.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>
          {view === "telemetry" && analysis.reliable && (
            <FigureRangeControls
              landmarks={landmarks}
              length={analysis.length}
              options={options}
              onChange={change}
              disabled={exporting}
            />
          )}
          {!embedded && (
            <div className="figure-controls__exports">
              <button
                className="btn btn--line"
                type="button"
                disabled={!analysis.reliable || invalidRange || exporting}
                onClick={() => download("svg")}
              >
                SVG
              </button>
              <button
                className="btn btn--line"
                type="button"
                disabled={!analysis.reliable || invalidRange || exporting}
                onClick={() => download("png")}
              >
                PNG · 4.200 px
              </button>
              <button className="btn btn--ink" type="button" onClick={() => onEmbed(view)}>
                Ενσωμάτωση γραφήματος
              </button>
            </div>
          )}
        </div>
      )}
      {view === "telemetry" && analysis.reliable && (!embedded || !settings.fixed) && (
        <div className="figure-presets" aria-label="Επιλογή τμήματος">
          <button
            className="btn btn--link"
            type="button"
            disabled={exporting}
            onClick={() => change({ from: null, to: null })}
          >
            Όλος ο γύρος
          </button>
          {landmarks
            .filter((corner) => [16, 20].includes(corner.number))
            .map((corner) => (
              <button
                key={corner.number}
                className="btn btn--link"
                type="button"
                disabled={exporting}
                onClick={() => change({ from: Number((corner.distance + 50).toFixed(1)), to: null })}
              >
                T{corner.number} έξοδος* → τερματισμός
              </button>
            ))}
        </div>
      )}
      {!analysis.reliable ? (
        <div className="margin-note" role="status">
          <p>Δεν υπάρχει αξιόπιστη σύγκριση ανά απόσταση.</p>
          <p>{analysis.reason}</p>
        </div>
      ) : invalidRange ? (
        <p className="margin-note" role="alert">
          Δώσε αρχή μικρότερη από το τέλος, μέσα στα όρια του γύρου.
        </p>
      ) : (
        <>
          <div
            className="figure-scroll"
            tabIndex="0"
            role="region"
            aria-label="Γράφημα σύγκρισης — οριζόντια κύλιση σε μικρές οθόνες"
          >
            <ComparisonFigure
              svgRef={svgRef}
              analysis={analysis}
              model={model}
              view={view}
              range={range}
              landmarks={landmarks}
              rangeLabel={rangeLabel}
            />
          </div>
          <p className="figure-pan-hint">Σύρε οριζόντια για να δεις όλο το γράφημα.</p>
          {view === "telemetry" && (
            <p className="figure-note">
              {rangeLabel} · Επιμέρους κέρδος Β:{" "}
              <strong>{(gainAt(analysis, range[1]) - gainAt(analysis, range[0])).toFixed(3)} s</strong>. Το σωρευτικό
              delta μετρά από την εκκίνηση· το επιμέρους κέρδος μόνο αυτό το τμήμα.
            </p>
          )}
          {landmarks.length > 0 && (
            <p className="figure-note">
              * Προσεγγιστικές έξοδοι: γεωμετρικοί δείκτες MultiViewer {baku.year} +50 m, όχι επίσημα όρια εξόδου.
            </p>
          )}
          {model.drivers.length > 2 && (
            <p className="figure-note">
              Τα γραφήματα συγκρίνουν τους δύο πρώτους φορτωμένους γύρους. Οι υπόλοιποι παραμένουν στην αναπαράσταση.
            </p>
          )}
        </>
      )}
      {!embedded && (
        <p className="figure-status" role="status">
          {exporting ? "Δημιουργία εικόνας…" : message}
        </p>
      )}
    </section>
  );
}

export default memo(AnalysisFigures);
