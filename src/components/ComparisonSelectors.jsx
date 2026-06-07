import { formatSessionLabel } from "../constants.js";
import { getDriverFullName, formatDriverOption } from "../domain/drivers.js";
import { fmt } from "../helpers.js";
import { controlButtonStyle, inputControlStyle, panelSurfaceStyle, uiRadii } from "../ui/styles.js";

function formatLapOption(lap, bestLapNumber) {
  const prefix = lap.lap_number === bestLapNumber ? "ΤΑΧΥΤΕΡΟΣ • " : "";
  return `${prefix}L${lap.lap_number} • ${fmt(lap.lap_duration)}`;
}

function DriverLapSelector({ mob, F1, drivers, slot, onSelectDriver, onSelectLap }) {
  const lapSelectTitle =
    slot.slot <= 2 ? { title: slot.selectedLap ? fmt(slot.selectedLap.lap_duration) : "Επιλογή γύρου" } : {};

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
      <div style={{ width: 3, height: 16, background: slot.color, borderRadius: uiRadii.control / 4 }} />
      <select
        title={getDriverFullName(slot.driver) || `Επιλογή οδηγού ${slot.slot}`}
        value={slot.driverNumber || ""}
        onChange={(event) => onSelectDriver(slot.slot, event.target.value)}
        disabled={!drivers.length}
        style={{
          ...inputControlStyle(F1, { fontSize: mob ? 11 : 12, borderColor: null }),
          minWidth: mob ? 150 : 220,
        }}
      >
        <option value="">{slot.label}</option>
        {drivers.map((driver) => (
          <option key={driver.driver_number} value={driver.driver_number}>
            {formatDriverOption(driver)}
          </option>
        ))}
      </select>
      {slot.lapSelect.options.length > 0 && (
        <select
          {...lapSelectTitle}
          value={slot.lapNumber || ""}
          onChange={(event) => onSelectLap(slot.slot, event.target.value)}
          style={inputControlStyle(F1, { width: mob ? 148 : 172, fontSize: mob ? 11 : 12, borderColor: null })}
        >
          <option value="">Γύρος</option>
          {slot.lapSelect.options.map((lap) => (
            <option key={lap.lap_number} value={lap.lap_number}>
              {formatLapOption(lap, slot.lapSelect.fastestLapNumber)}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default function ComparisonSelectors({
  containerRef,
  yearSelectRef,
  mob,
  F1,
  highlightConfig,
  availableYears,
  year,
  meetings,
  selectedMeeting,
  sessions,
  selectedSession,
  drivers,
  slots,
  numDrivers,
  loading,
  noMeetings,
  formatMeetingLabel,
  onYearChange,
  onSelectMeeting,
  onSelectSession,
  onSelectDriver,
  onSelectLap,
  onAddDriver,
  onRemoveDriver,
  onLoadData,
}) {
  const selectorBorderColor = highlightConfig ? `${F1.blue}77` : F1.borderLight;
  const rowStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: mob ? 4 : 6,
    alignItems: "center",
  };

  return (
    <div
      ref={containerRef}
      style={{
        ...panelSurfaceStyle(F1, {
          background: F1.carbonLight,
          borderColor: selectorBorderColor,
          borderRadius: 0,
          padding: mob ? "6px 8px" : "8px 18px",
          boxShadow: highlightConfig ? `0 0 0 2px ${F1.blue}22 inset, 0 0 24px ${F1.blueGlow}` : "none",
        }),
        border: "none",
        borderBottom: `1px solid ${selectorBorderColor}`,
        flexShrink: 0,
        transition: "box-shadow .25s ease, border-color .25s ease",
      }}
    >
      <div style={{ ...rowStyle, marginBottom: mob ? 4 : 0 }}>
        <select
          ref={yearSelectRef}
          value={year}
          onChange={(event) => onYearChange(Number(event.target.value))}
          style={inputControlStyle(F1, { width: mob ? 124 : "auto", fontSize: mob ? 11 : 12, borderColor: null })}
        >
          {availableYears.map((availableYear) => (
            <option key={availableYear} value={availableYear}>
              {availableYear === 2026 ? "2026 (πρώιμα / μερικά)" : availableYear}
            </option>
          ))}
        </select>
        <select
          value={selectedMeeting?.meeting_key || ""}
          onChange={(event) => onSelectMeeting(event.target.value)}
          style={{
            ...inputControlStyle(F1, { fontSize: mob ? 11 : 12, borderColor: null }),
            minWidth: mob ? 100 : 155,
            flex: mob ? 1 : undefined,
          }}
        >
          <option value="">Γκραν Πρι</option>
          {meetings.map((meeting) => (
            <option key={meeting.meeting_key} value={meeting.meeting_key}>
              {formatMeetingLabel(meeting.meeting_name)}
            </option>
          ))}
        </select>
        <select
          value={selectedSession?.session_key || ""}
          onChange={(event) => onSelectSession(event.target.value)}
          disabled={!sessions.length}
          style={{
            ...inputControlStyle(F1, { fontSize: mob ? 11 : 12, borderColor: null }),
            minWidth: mob ? 75 : 115,
          }}
        >
          <option value="">Σκέλος</option>
          {sessions.map((session) => (
            <option key={session.session_key} value={session.session_key}>
              {formatSessionLabel(session.session_name)}
            </option>
          ))}
        </select>
      </div>

      <div style={rowStyle}>
        {!mob && <div style={{ width: 1, height: 20, background: `${F1.blue}33` }} />}
        <DriverLapSelector
          mob={mob}
          F1={F1}
          drivers={drivers}
          slot={slots[0]}
          onSelectDriver={onSelectDriver}
          onSelectLap={onSelectLap}
        />
        <span style={{ color: F1.blue, fontSize: mob ? 9 : 11, fontWeight: 900, letterSpacing: "0.1em" }}>VS</span>
        <DriverLapSelector
          mob={mob}
          F1={F1}
          drivers={drivers}
          slot={slots[1]}
          onSelectDriver={onSelectDriver}
          onSelectLap={onSelectLap}
        />
        {slots.slice(2, numDrivers).map((slot) => (
          <span key={`slot-${slot.slot}`} style={{ display: "contents" }}>
            <span style={{ color: F1.textMuted, fontSize: 9, fontWeight: 700 }}>+</span>
            <DriverLapSelector
              mob={mob}
              F1={F1}
              drivers={drivers}
              slot={slot}
              onSelectDriver={onSelectDriver}
              onSelectLap={onSelectLap}
            />
          </span>
        ))}
        {numDrivers < 4 && drivers.length > 0 && (
          <button
            onClick={onAddDriver}
            style={controlButtonStyle({ padding: "2px 6px", fontSize: 9, color: F1.green })}
          >
            +Ο{numDrivers + 1}
          </button>
        )}
        {numDrivers > 2 && (
          <button
            onClick={onRemoveDriver}
            style={controlButtonStyle({ padding: "2px 6px", fontSize: 9, color: F1.red })}
          >
            −
          </button>
        )}
        <button
          className="f1-btn"
          onClick={onLoadData}
          disabled={
            !slots[0].driverNumber || !slots[1].driverNumber || !slots[0].lapNumber || !slots[1].lapNumber || !!loading
          }
          style={controlButtonStyle({
            padding: mob ? "4px 10px" : "5px 12px",
            fontSize: mob ? 10 : 11,
            fontWeight: 700,
          })}
        >
          {loading ? "..." : "ΣΥΓΚΡΙΣΗ"}
        </button>
      </div>
      {noMeetings && (
        <div style={{ marginTop: 6, fontSize: 11, color: F1.textDim, letterSpacing: "0.02em" }}>
          Δεν υπάρχουν ακόμη δεδομένα Γκραν Πρι για το {year}. Δοκίμασε το 2025 για την πιο πλήρη σεζόν τηλεμετρίας.
        </div>
      )}
    </div>
  );
}
