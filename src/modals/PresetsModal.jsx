import { useMemo, useState } from "react";
import { useF1 } from "../theme.js";
import { CIRCUIT_DATA, DRIVER_NAME_BY_NUMBER, PRESETS, formatSessionLabel } from "../constants.js";
import { normalizeText } from "../helpers.js";
import { uiRadii } from "../ui/styles.js";
import {
  getModalBodyStyle,
  getModalCloseButtonStyle,
  getModalHeaderStyle,
  getModalSurfaceStyle,
} from "./modalStyles.js";

const CIRCUIT_LABEL_OVERRIDES = {
  austin: "United States Grand Prix",
  baku: "Azerbaijan Grand Prix",
  barcelona: "Spanish Grand Prix",
  budapest: "Hungarian Grand Prix",
  imola: "Emilia Romagna Grand Prix",
  jeddah: "Saudi Arabian Grand Prix",
  lusail: "Qatar Grand Prix",
  melbourne: "Australian Grand Prix",
  montreal: "Canadian Grand Prix",
  sao_paulo: "Sao Paulo Grand Prix",
  shanghai: "Chinese Grand Prix",
  silverstone: "British Grand Prix",
  spa: "Belgian Grand Prix",
  spa_francorchamps: "Belgian Grand Prix",
  spielberg: "Austrian Grand Prix",
};

function formatCircuitLabel(value) {
  const key = String(value || "")
    .toLowerCase()
    .replace(/\s+/g, "_");
  if (CIRCUIT_LABEL_OVERRIDES[key]) return CIRCUIT_LABEL_OVERRIDES[key];
  return String(value || "")
    .replace(/[-_]/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export default function PresetsModal({ mob, onClose, onLoadPreset, unavailableYears = [] }) {
  const F1 = useF1();
  const [query, setQuery] = useState("");
  const [yearFilter, setYearFilter] = useState("all");
  const [driverFilter, setDriverFilter] = useState("all");
  const [circuitFilter, setCircuitFilter] = useState("all");
  const unavailableSet = useMemo(() => new Set(unavailableYears.map((year) => String(year))), [unavailableYears]);
  const years = useMemo(
    () => [...new Set(PRESETS.map((preset) => preset.cat))].sort((a, b) => Number(b) - Number(a)),
    []
  );
  const driverOptions = useMemo(
    () =>
      Object.entries(DRIVER_NAME_BY_NUMBER)
        .map(([driverNumber, label]) => ({ value: String(driverNumber), label }))
        .sort((a, b) => a.label.localeCompare(b.label)),
    []
  );
  const circuitOptions = useMemo(() => {
    const options = new Map();
    PRESETS.forEach((preset) => {
      options.set(normalizeText(preset.meeting), {
        value: preset.meeting,
        label: preset.meeting.replace(" Grand Prix", ""),
      });
    });
    Object.keys(CIRCUIT_DATA).forEach((circuitKey) => {
      const meeting = formatCircuitLabel(circuitKey);
      options.set(normalizeText(meeting), { value: meeting, label: meeting.replace(" Grand Prix", "") });
    });
    return [...options.values()].sort((a, b) => a.label.localeCompare(b.label));
  }, []);
  const filteredPresets = useMemo(() => {
    const term = normalizeText(query);
    return PRESETS.filter((preset) => {
      if (yearFilter !== "all" && preset.cat !== yearFilter) return false;
      if (driverFilter !== "all" && ![preset.d1, preset.d2].map(String).includes(driverFilter)) return false;
      if (circuitFilter !== "all" && normalizeText(preset.meeting) !== normalizeText(circuitFilter)) return false;
      const driverTerms = [DRIVER_NAME_BY_NUMBER[preset.d1], DRIVER_NAME_BY_NUMBER[preset.d2]]
        .filter(Boolean)
        .join(" ");
      const circuitTerms = preset.meeting.replace(" Grand Prix", "");
      const searchText = normalizeText(
        [preset.label, preset.meeting, circuitTerms, preset.session, preset.year, driverTerms].join(" ")
      );
      return !term || searchText.includes(term);
    });
  }, [query, yearFilter, driverFilter, circuitFilter]);
  const matchingDrivers = useMemo(() => {
    const term = normalizeText(query);
    if (!term) return [];
    return driverOptions.filter((driver) => normalizeText(driver.label).includes(term)).slice(0, 6);
  }, [query, driverOptions]);
  const matchingCircuits = useMemo(() => {
    const term = normalizeText(query);
    if (!term) return [];
    return circuitOptions.filter((circuit) => normalizeText(circuit.label).includes(term)).slice(0, 6);
  }, [query, circuitOptions]);

  return (
    <div style={getModalSurfaceStyle(F1, { mob, width: 540, maxHeight: "80vh" })}>
      <div style={getModalHeaderStyle(F1)}>
        <div>
          <div style={{ fontWeight: 900, fontSize: 16, fontFamily: F1.sans, letterSpacing: "0.05em" }}>
            ΕΠΙΛΕΓΜΕΝΕΣ ΜΑΧΕΣ
          </div>
          <div style={{ fontSize: 10, color: F1.textMuted, marginTop: 2 }}>
            Αναζήτηση ανά οδηγό, πίστα, σκέλος ή σεζόν
          </div>
        </div>
        <button aria-label="Κλείσιμο επιλεγμένων μαχών" onClick={onClose} style={getModalCloseButtonStyle(F1)}>
          ✕
        </button>
      </div>
      <div style={getModalBodyStyle({ overflow: undefined, overflowY: "auto", padding: "12px 20px 20px", flex: 1 })}>
        <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1.4fr 1fr", gap: 10, marginBottom: 10 }}>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Αναζήτηση οδηγού, πίστας ή σκέλους"
            style={{
              width: "100%",
              background: F1.inputBg,
              color: F1.text,
              border: `1px solid ${F1.border}`,
              borderRadius: uiRadii.card,
              padding: "10px 12px",
              fontSize: 12,
              outline: "none",
            }}
          />
          <select
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
            style={{ width: "100%", borderRadius: uiRadii.card, padding: "10px 12px", fontSize: 12 }}
          >
            <option value="all">Ολες οι σεζόν</option>
            {years.map((yr) => (
              <option key={yr} value={yr}>
                {yr}
                {unavailableSet.has(yr) ? " (Μη διαθέσιμη)" : ""}
              </option>
            ))}
          </select>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr", gap: 10, marginBottom: 12 }}>
          <select
            value={driverFilter}
            onChange={(e) => setDriverFilter(e.target.value)}
            style={{ width: "100%", borderRadius: uiRadii.card, padding: "10px 12px", fontSize: 12 }}
          >
            <option value="all">Ολοι οι οδηγοί</option>
            {driverOptions.map((driver) => (
              <option key={driver.value} value={driver.value}>
                {driver.label}
              </option>
            ))}
          </select>
          <select
            value={circuitFilter}
            onChange={(e) => setCircuitFilter(e.target.value)}
            style={{ width: "100%", borderRadius: uiRadii.card, padding: "10px 12px", fontSize: 12 }}
          >
            <option value="all">Ολες οι πίστες</option>
            {circuitOptions.map((circuit) => (
              <option key={circuit.value} value={circuit.value}>
                {circuit.label}
              </option>
            ))}
          </select>
        </div>
        {!!query && (!!matchingDrivers.length || !!matchingCircuits.length) && (
          <div
            style={{
              marginBottom: 12,
              padding: "10px 12px",
              borderRadius: uiRadii.toast,
              background: F1.cardBg,
              border: `1px solid ${F1.borderLight}`,
            }}
          >
            <div
              style={{ fontSize: 10, color: F1.textMuted, marginBottom: 8, letterSpacing: "0.08em", fontWeight: 700 }}
            >
              ΓΡΗΓΟΡΑ ΦΙΛΤΡΑ ΑΠΟ ΤΟ ΠΛΗΡΕΣ ΕΥΡΕΤΗΡΙΟ
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {matchingDrivers.map((driver) => (
                <button
                  key={`driver-${driver.value}`}
                  onClick={() => setDriverFilter(driver.value)}
                  style={{ padding: "5px 10px", fontSize: 10 }}
                >
                  ΟΔΗΓΟΣ: {driver.label}
                </button>
              ))}
              {matchingCircuits.map((circuit) => (
                <button
                  key={`circuit-${circuit.value}`}
                  onClick={() => setCircuitFilter(circuit.value)}
                  style={{ padding: "5px 10px", fontSize: 10 }}
                >
                  ΠΙΣΤΑ: {circuit.label}
                </button>
              ))}
            </div>
          </div>
        )}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
          <button
            onClick={() => setYearFilter("all")}
            style={{
              padding: "5px 10px",
              fontSize: 10,
              background: yearFilter === "all" ? F1.blue : F1.cardBg,
              borderColor: yearFilter === "all" ? F1.blue : F1.borderLight,
              color: yearFilter === "all" ? "#fff" : F1.text,
            }}
          >
            ΟΛΑ
          </button>
          {years.map((yr) => (
            <button
              key={yr}
              onClick={() => setYearFilter(yr)}
              style={{
                padding: "5px 10px",
                fontSize: 10,
                background: yearFilter === yr ? F1.blue : F1.cardBg,
                borderColor: yearFilter === yr ? F1.blue : F1.borderLight,
                color: yearFilter === yr ? "#fff" : unavailableSet.has(yr) ? F1.textMuted : F1.text,
                opacity: unavailableSet.has(yr) ? 0.7 : 1,
              }}
            >
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 10,
                  alignItems: "baseline",
                  fontSize: 11,
                  fontWeight: 900,
                  color: F1.blue,
                  letterSpacing: "0.12em",
                  marginBottom: 8,
                  fontFamily: F1.mono,
                  borderBottom: `1px solid ${F1.blue}22`,
                  paddingBottom: 4,
                }}
              >
                <span>ΣΕΖΟΝ {yr}</span>
                {yearUnavailable && (
                  <span style={{ fontSize: 9, color: F1.textMuted, letterSpacing: "0.04em" }}>
                    Η τηλεμετρία έρχεται σύντομα
                  </span>
                )}
              </div>
              {items.map((p, i) => (
                <button
                  key={i}
                  onClick={() => !yearUnavailable && onLoadPreset(p)}
                  disabled={yearUnavailable}
                  title={
                    yearUnavailable
                      ? "Αυτό το preset θα ενεργοποιηθεί μόλις υπάρξει διαθέσιμη τηλεμετρία για τη σεζόν."
                      : p.label
                  }
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    padding: "10px 12px",
                    marginBottom: 4,
                    fontSize: 12,
                    fontFamily: F1.mono,
                    borderLeft: `3px solid ${yearUnavailable ? F1.textMuted : F1.blue}`,
                    lineHeight: 1.4,
                    opacity: yearUnavailable ? 0.55 : 1,
                    cursor: yearUnavailable ? "not-allowed" : "pointer",
                  }}
                >
                  <div style={{ fontWeight: 700, color: yearUnavailable ? F1.textDim : F1.text }}>{p.label}</div>
                  <div
                    style={{
                      marginTop: 4,
                      fontSize: 10,
                      color: yearUnavailable ? F1.textMuted : F1.textDim,
                      fontFamily: F1.sans,
                    }}
                  >
                    {DRIVER_NAME_BY_NUMBER[p.d1] || `#${p.d1}`} εναντίον {DRIVER_NAME_BY_NUMBER[p.d2] || `#${p.d2}`} •{" "}
                    {p.meeting.replace(" Grand Prix", "")} • {formatSessionLabel(p.session)}
                  </div>
                </button>
              ))}
            </div>
          );
        })}
        {!filteredPresets.length && (
          <div style={{ padding: "18px 6px", fontSize: 12, color: F1.textDim, textAlign: "center", lineHeight: 1.6 }}>
            Δεν βρέθηκαν presets με αυτά τα φίλτρα. Μπορείς να χρησιμοποιήσεις τα γρήγορα φίλτρα οδηγών και πιστών πιο
            πάνω για να ψάξεις σε όλο το ευρετήριο.
          </div>
        )}
      </div>
    </div>
  );
}
