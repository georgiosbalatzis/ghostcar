import { useMemo, useState } from "react";
import { getF1 } from "../theme.js";
import { DRIVER_NAME_BY_NUMBER, PRESETS } from "../constants.js";
import { normalizeText } from "../helpers.js";

export default function PresetsModal({ mob, onClose, onLoadPreset, unavailableYears = [] }) {
  const F1 = getF1();
  const [query, setQuery] = useState("");
  const [yearFilter, setYearFilter] = useState("all");
  const unavailableSet = useMemo(() => new Set(unavailableYears.map((year) => String(year))), [unavailableYears]);
  const years = useMemo(() => [...new Set(PRESETS.map((preset) => preset.cat))].sort((a, b) => Number(b) - Number(a)), []);
  const filteredPresets = useMemo(() => {
    const term = normalizeText(query);
    return PRESETS.filter((preset) => {
      if (yearFilter !== "all" && preset.cat !== yearFilter) return false;
      const driverTerms = [DRIVER_NAME_BY_NUMBER[preset.d1], DRIVER_NAME_BY_NUMBER[preset.d2]].filter(Boolean).join(" ");
      const searchText = normalizeText([preset.label, preset.meeting, preset.session, preset.year, driverTerms].join(" "));
      return !term || searchText.includes(term);
    });
  }, [query, yearFilter]);

  return (
    <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: F1.carbon, border: `1px solid ${F1.blue}33`, borderRadius: 12, padding: 0, zIndex: 100, width: mob ? "95%" : 460, maxHeight: "80vh", display: "flex", flexDirection: "column", animation: "fadeIn .2s", overflow: "hidden" }}>
      <div style={{ display: "flex", alignItems: "center", padding: "16px 20px", borderBottom: `1px solid ${F1.borderLight}` }}>
        <div>
          <div style={{ fontWeight: 900, fontSize: 16, fontFamily: F1.sans, letterSpacing: "0.05em" }}>MEMORABLE BATTLES</div>
          <div style={{ fontSize: 10, color: F1.textMuted, marginTop: 2 }}>Search by driver, circuit, session or season</div>
        </div>
        <button onClick={onClose} style={{ marginLeft: "auto", padding: "4px 10px" }}>✕</button>
      </div>
      <div style={{ overflowY: "auto", padding: "12px 20px 20px", flex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1.4fr 1fr", gap: 10, marginBottom: 12 }}>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search driver, circuit or session"
            style={{ width: "100%", background: F1.inputBg, color: F1.text, border: `1px solid ${F1.border}`, borderRadius: 8, padding: "10px 12px", fontSize: 12, outline: "none" }}
          />
          <select value={yearFilter} onChange={(e) => setYearFilter(e.target.value)} style={{ width: "100%", borderRadius: 8, padding: "10px 12px", fontSize: 12 }}>
            <option value="all">All seasons</option>
            {years.map((yr) => <option key={yr} value={yr}>{yr}{unavailableSet.has(yr) ? " (Unavailable)" : ""}</option>)}
          </select>
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
          <button onClick={() => setYearFilter("all")} style={{ padding: "5px 10px", fontSize: 10, background: yearFilter === "all" ? F1.blue : F1.cardBg, borderColor: yearFilter === "all" ? F1.blue : F1.borderLight, color: yearFilter === "all" ? "#fff" : F1.text }}>ALL</button>
          {years.map((yr) => (
            <button key={yr} onClick={() => setYearFilter(yr)} style={{ padding: "5px 10px", fontSize: 10, background: yearFilter === yr ? F1.blue : F1.cardBg, borderColor: yearFilter === yr ? F1.blue : F1.borderLight, color: yearFilter === yr ? "#fff" : unavailableSet.has(yr) ? F1.textMuted : F1.text, opacity: unavailableSet.has(yr) ? 0.7 : 1 }}>
              {yr}
            </button>
          ))}
        </div>
        {years.map((yr) => {
          const items = filteredPresets.filter((p) => p.cat === yr);
          if (!items.length) return null;
          const yearUnavailable = unavailableSet.has(yr);
          return (
            <div key={yr} style={{ marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "baseline", fontSize: 11, fontWeight: 900, color: F1.blue, letterSpacing: "0.12em", marginBottom: 8, fontFamily: F1.mono, borderBottom: `1px solid ${F1.blue}22`, paddingBottom: 4 }}>
                <span>{yr} SEASON</span>
                {yearUnavailable && <span style={{ fontSize: 9, color: F1.textMuted, letterSpacing: "0.04em" }}>Telemetry coming soon</span>}
              </div>
              {items.map((p, i) => (
                <button
                  key={i}
                  onClick={() => !yearUnavailable && onLoadPreset(p)}
                  disabled={yearUnavailable}
                  title={yearUnavailable ? "This preset is disabled until telemetry is available for that season." : p.label}
                  style={{ display: "block", width: "100%", textAlign: "left", padding: "10px 12px", marginBottom: 4, fontSize: 12, fontFamily: F1.mono, borderLeft: `3px solid ${yearUnavailable ? F1.textMuted : F1.blue}`, lineHeight: 1.4, opacity: yearUnavailable ? 0.55 : 1, cursor: yearUnavailable ? "not-allowed" : "pointer" }}
                >
                  {p.label}
                </button>
              ))}
            </div>
          );
        })}
        {!filteredPresets.length && <div style={{ padding: "18px 6px", fontSize: 12, color: F1.textDim, textAlign: "center", lineHeight: 1.6 }}>No presets match that search. Try a driver surname, circuit name or a different season.</div>}
      </div>
    </div>
  );
}
