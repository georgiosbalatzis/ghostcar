import { memo, useMemo } from "react";
import { useF1 } from "../theme.js";
import { telAt } from "../helpers.js";
import { uiRadii } from "../ui/styles.js";
import TelChart from "./TelChart.jsx";

const TelemetryPanel = memo(function TelemetryPanel({
  mob,
  tp,
  prog,
  allDrivers,
  numDrivers,
  di1,
  di2,
  co1,
  co2,
  li1,
  li2,
  s1,
  s2,
  laps1,
  st1,
  sl1,
}) {
  const F1 = useF1();

  // Live telemetry at current playback position — computed here so allDrivers can stay stable
  const currentTel = useMemo(() => allDrivers.map((d) => telAt(d.tel, prog)), [prog, allDrivers]);

  // Elevation path — only recomputes when track changes
  const elevationPath = useMemo(() => {
    if (!tp) return null;
    const ys = tp.map((p) => p.y);
    const minY = Math.min(...ys),
      maxY = Math.max(...ys);
    const range = maxY - minY || 1;
    const step = Math.max(1, Math.floor(tp.length / 150));
    let d = "";
    for (let i = 0; i < tp.length; i += step) {
      const x = (i / (tp.length - 1)) * 300;
      const y = 38 - ((ys[i] - minY) / range) * 34;
      d += (i === 0 ? "M" : "L") + `${x},${y}`;
    }
    return d;
  }, [tp]);

  // Lap delta points — only recomputes when lap info changes
  const lapDeltaPts = useMemo(() => {
    if (!li1?.duration_sector_1 || !li2?.duration_sector_1) return null;
    const d1c = li1.duration_sector_1 - li2.duration_sector_1;
    const d2c = d1c + (li1.duration_sector_2 - li2.duration_sector_2);
    const d3c = d2c + (li1.duration_sector_3 - li2.duration_sector_3);
    const pts = [0, d1c, d2c, d3c];
    const maxA = Math.max(...pts.map(Math.abs)) || 0.5;
    return { pts, maxA };
  }, [li1, li2]);

  // Speed trap values — stable when telemetry arrays don't change
  const speedTraps = useMemo(() => {
    if ((s1?.length ?? 0) <= 10 || (s2?.length ?? 0) <= 10) return null;
    return [0.1, 0.25, 0.5, 0.75, 0.9].map((t, i) => {
      const v1 = s1[Math.floor(t * (s1.length - 1))] || 0;
      const v2 = s2[Math.floor(t * (s2.length - 1))] || 0;
      return {
        v1,
        v2,
        faster: v1 > v2 ? 1 : v2 > v1 ? 2 : 0,
        label: ["T1 10%", "T2 25%", "T3 50%", "T4 75%", "T5 90%"][i],
      };
    });
  }, [s1, s2]);

  // Tire degradation data — stable when lap list doesn't change
  const tireDegData = useMemo(() => {
    if (laps1.length <= 3) return null;
    const valid = laps1
      .filter((l) => l.lap_duration > 10 && l.lap_duration < 200)
      .sort((a, b) => a.lap_number - b.lap_number);
    if (valid.length < 3) return null;
    const best = Math.min(...valid.map((l) => l.lap_duration));
    const maxDeg = Math.max(...valid.map((l) => l.lap_duration - best));
    return { laps: valid, best, maxDeg };
  }, [laps1]);

  // Current sector index — cheap, fine inline
  const sIdx = prog < 0.333 ? 0 : prog < 0.666 ? 1 : 2;
  const speedTraces = useMemo(() => allDrivers.map((d) => ({ data: d.s, color: d.co })), [allDrivers]);
  const throttleTraces = useMemo(() => allDrivers.map((d) => ({ data: d.t, color: d.co })), [allDrivers]);
  const brakeTraces = useMemo(() => allDrivers.map((d) => ({ data: d.b, color: d.co })), [allDrivers]);

  return (
    <div className="telemetry-panel" style={{ padding: mob ? 10 : 14, overflowY: "auto", flex: 1 }}>
      <div className="section-label">03 / Τηλεμετρία</div>
      {/* Speedometer gauges */}
      <div style={{ display: "flex", gap: 4, marginBottom: 10, flexWrap: "wrap" }}>
        {allDrivers.map((x, i) => {
          const ct = currentTel[i] || {};
          return (
            <div
              key={i}
              className="telemetry-driver"
              style={{
                flex: 1,
                minWidth: numDrivers > 2 ? 120 : "auto",
                background: F1.cardBg,
                borderRadius: uiRadii.telemetryCard,
                padding: numDrivers > 2 ? "6px 6px 4px" : "8px 8px 6px",
                borderTop: `3px solid ${x.co}`,
                position: "relative",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: numDrivers > 2 ? 10 : 12,
                  fontWeight: 900,
                  color: F1.text,
                  fontFamily: F1.mono,
                  letterSpacing: "0.05em",
                }}
              >
                {x.di?.name_acronym || "—"}
              </div>
              <div className="telemetry-speed">
                {Math.round(ct.speed || 0)}
                <small>km/h</small>
              </div>
              <div className="telemetry-metrics">
                <span>
                  Γκάζι<b>{Math.round(ct.throttle || 0)}%</b>
                </span>
                <span>
                  Φρένο<b>{ct.brake > 0 ? "Ναι" : "Όχι"}</b>
                </span>
                <span>
                  Σχέση<b>{ct.n_gear ?? ct.gear ?? "—"}</b>
                </span>
                <span>
                  DRS<b>{ct.drs >= 10 ? "Ανοιχτό" : "Κλειστό"}</b>
                </span>
              </div>
              {x.tire && <div style={{ marginTop: 8, fontSize: 10, color: F1.textDim }}>{x.tire}</div>}
            </div>
          );
        })}
      </div>

      <div style={{ marginBottom: 20 }}>
        {/* Telemetry charts */}
        <div
          style={{
            fontSize: 11,
            color: F1.textMuted,
            fontFamily: F1.mono,
            letterSpacing: "0.1em",
            marginBottom: 3,
            fontWeight: 700,
          }}
        >
          ΤΑΧΥΤΗΤΑ <span style={{ color: F1.textMuted, fontWeight: 400 }}>(km/h)</span>
        </div>
        <TelChart traces={speedTraces} maxVal={370} prog={prog} />
        <div
          style={{
            fontSize: 11,
            color: F1.textMuted,
            fontFamily: F1.mono,
            letterSpacing: "0.1em",
            marginBottom: 3,
            marginTop: 8,
            fontWeight: 700,
          }}
        >
          ΓΚΑΖΙ <span style={{ color: F1.textMuted, fontWeight: 400 }}>(%)</span>
        </div>
        <TelChart traces={throttleTraces} maxVal={100} prog={prog} fillColor={`${F1.green}10`} />
        <div
          style={{
            fontSize: 11,
            color: F1.textMuted,
            fontFamily: F1.mono,
            letterSpacing: "0.1em",
            marginBottom: 3,
            marginTop: 8,
            fontWeight: 700,
          }}
        >
          ΦΡΕΝΟ
        </div>
        <TelChart traces={brakeTraces} maxVal={100} h={35} prog={prog} fillColor={`${F1.red}10`} />
      </div>

      {/* Elevation */}
      {elevationPath && (
        <div style={{ marginBottom: 10 }}>
          <div
            style={{
              fontSize: 10,
              color: F1.textMuted,
              fontFamily: F1.mono,
              letterSpacing: "0.1em",
              marginBottom: 3,
              fontWeight: 700,
            }}
          >
            ΥΨΟΜΕΤΡΟ
          </div>
          <svg
            width="100%"
            height="40"
            viewBox="0 0 300 40"
            preserveAspectRatio="none"
            style={{ borderRadius: uiRadii.badge, background: F1.cardBg }}
          >
            <path d={elevationPath + "L300,40L0,40Z"} fill={`${F1.blue}15`} />
            <path d={elevationPath} fill="none" stroke={F1.blue} strokeWidth="1.5" opacity="0.6" />
            <line x1={prog * 300} y1="0" x2={prog * 300} y2="40" stroke={F1.text} strokeWidth="1" opacity="0.5" />
          </svg>
        </div>
      )}

      {/* Cumulative sector delta */}
      {lapDeltaPts &&
        (() => {
          const { pts, maxA } = lapDeltaPts;
          return (
            <div style={{ marginBottom: 10 }}>
              <div
                style={{
                  fontSize: 10,
                  color: F1.textMuted,
                  fontFamily: F1.mono,
                  letterSpacing: "0.1em",
                  marginBottom: 3,
                  fontWeight: 700,
                }}
              >
                ΔΙΑΦΟΡΑ ΓΥΡΟΥ
              </div>
              <svg
                width="100%"
                height="76"
                viewBox="0 0 300 76"
                preserveAspectRatio="none"
                style={{ borderRadius: uiRadii.badge, background: F1.cardBg, display: "block" }}
              >
                <line x1="10" y1="30" x2="290" y2="30" stroke={F1.textMuted} strokeWidth="0.5" opacity="0.3" />
                {pts.map((v, i) => {
                  const x = (i / 3) * 280 + 10;
                  const y = 30 - (v / maxA) * 18;
                  return (
                    <g key={i}>
                      {i > 0 && (
                        <line
                          x1={((i - 1) / 3) * 280 + 10}
                          y1={30 - (pts[i - 1] / maxA) * 18}
                          x2={x}
                          y2={y}
                          stroke={v < 0 ? co1 : co2}
                          strokeWidth="2"
                        />
                      )}
                      <circle cx={x} cy={y} r="3" fill={v < 0 ? co1 : v > 0 ? co2 : F1.textMuted} />
                      {i > 0 && (
                        <text
                          x={x}
                          y={y < 30 ? y - 6 : y + 12}
                          textAnchor="middle"
                          fill={F1.text}
                          fontSize="7"
                          fontFamily="sans-serif"
                          fontWeight="700"
                        >
                          {v > 0 ? "+" : ""}
                          {v.toFixed(3)}
                        </text>
                      )}
                    </g>
                  );
                })}
                {["START", "S1", "S2", "S3"].map((l, i) => (
                  <text
                    key={l}
                    x={(i / 3) * 280 + 10}
                    y="72"
                    textAnchor="middle"
                    fill={F1.textMuted}
                    fontSize="7"
                    fontFamily="sans-serif"
                  >
                    {l}
                  </text>
                ))}
                <text x="285" y="12" textAnchor="end" fill={co1} fontSize="8">
                  {di1?.name_acronym}
                </text>
                <text x="285" y="68" textAnchor="end" fill={co2} fontSize="8">
                  {di2?.name_acronym}
                </text>
              </svg>
            </div>
          );
        })()}

      {/* Speed traps */}
      {speedTraps && (
        <div style={{ marginBottom: 10 }}>
          <div
            style={{
              fontSize: 10,
              color: F1.textMuted,
              fontFamily: F1.mono,
              letterSpacing: "0.1em",
              marginBottom: 3,
              fontWeight: 700,
            }}
          >
            ΣΗΜΕΙΑ ΤΑΧΥΤΗΤΑΣ
          </div>
          <div style={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
            {speedTraps.map((trap, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  minWidth: 48,
                  background: "transparent",
                  borderRadius: uiRadii.badge,
                  padding: "3px 4px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 9, color: F1.textMuted, fontFamily: F1.mono }}>{trap.label}</div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 800,
                    color: F1.text,
                    fontFamily: F1.mono,
                  }}
                >
                  {Math.round(trap.v1)}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 800,
                    color: F1.text,
                    fontFamily: F1.mono,
                    opacity: 0.7,
                  }}
                >
                  {Math.round(trap.v2)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sector indicator */}
      {tp &&
        (() => {
          const sColors = [F1.text, F1.text, F1.text];
          const sLabels = ["ΤΟΜΕΑΣ 1", "ΤΟΜΕΑΣ 2", "ΤΟΜΕΑΣ 3"];
          return (
            <div style={{ display: "flex", gap: 3, marginBottom: 10 }}>
              {[0, 1, 2].map((s) => (
                <div
                  key={s}
                  style={{
                    flex: 1,
                    padding: "4px 0",
                    textAlign: "center",
                    borderRadius: uiRadii.badge,
                    background: "transparent",
                    borderBottom: s === sIdx ? `2px solid ${F1.blue}` : `1px solid ${F1.borderLight}`,
                    transition: "all 0.3s",
                  }}
                >
                  <div
                    style={{
                      fontSize: 8,
                      fontWeight: 700,
                      color: s === sIdx ? sColors[s] : F1.textMuted,
                      fontFamily: F1.mono,
                      letterSpacing: "0.1em",
                    }}
                  >
                    {sLabels[s]}
                  </div>
                  {s === sIdx && (
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: sColors[s],
                        margin: "3px auto 0",
                        boxShadow: "none",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          );
        })()}

      {/* Tire degradation */}
      {tireDegData &&
        (() => {
          const { laps, best, maxDeg } = tireDegData;
          return (
            <div style={{ marginBottom: 10 }}>
              <div
                style={{
                  fontSize: 10,
                  color: F1.textMuted,
                  fontFamily: F1.mono,
                  letterSpacing: "0.1em",
                  marginBottom: 3,
                  fontWeight: 700,
                }}
              >
                ΧΡΟΝΟΣ ΓΥΡΟΥ · ΔΙΑΦΟΡΑ ΑΠΟ ΚΑΛΥΤΕΡΟ
              </div>
              <svg
                width="100%"
                height="35"
                viewBox="0 0 300 35"
                preserveAspectRatio="none"
                style={{ borderRadius: uiRadii.badge, background: F1.cardBg, display: "block" }}
              >
                {laps.map((l, i) => {
                  const x = (i / (laps.length - 1)) * 290 + 5;
                  const deg = l.lap_duration - best;
                  const y = 30 - (deg / (maxDeg || 1)) * 25;
                  const tire = st1
                    .find((s) => l.lap_number >= s.lap_start && l.lap_number <= s.lap_end)
                    ?.compound?.toUpperCase();
                  const tc =
                    tire === "SOFT" ? "#ff3333" : tire === "MEDIUM" ? "#ffcc00" : tire === "HARD" ? "#ccc" : co1;
                  return (
                    <g key={i}>
                      {i > 0 && (
                        <line
                          x1={((i - 1) / (laps.length - 1)) * 290 + 5}
                          y1={30 - ((laps[i - 1].lap_duration - best) / (maxDeg || 1)) * 25}
                          x2={x}
                          y2={y}
                          stroke={tc}
                          strokeWidth="1.5"
                          opacity="0.7"
                        />
                      )}
                      <circle
                        cx={x}
                        cy={y}
                        r={l.lap_number === sl1 ? 3 : 1.5}
                        fill={l.lap_number === sl1 ? "#fff" : tc}
                      />
                    </g>
                  );
                })}
                <text x="5" y="10" fill={F1.textMuted} fontSize="7" fontFamily="sans-serif">
                  {di1?.name_acronym} · ΓΥΡΟΙ
                </text>
                <text x="5" y="32" fill={F1.textMuted} fontSize="7" fontFamily="sans-serif">
                  L{laps[0]?.lap_number}
                </text>
                <text x="295" y="32" textAnchor="end" fill={F1.textMuted} fontSize="7" fontFamily="sans-serif">
                  L{laps[laps.length - 1]?.lap_number}
                </text>
              </svg>
            </div>
          );
        })()}
    </div>
  );
});

export default TelemetryPanel;
