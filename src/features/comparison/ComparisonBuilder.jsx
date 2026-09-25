import { memo } from "react";
import { formatSessionLabel } from "../../constants.js";
import { formatOpenF1YearOptionLabel, getOpenF1AvailabilityMessages } from "../../domain/availability.js";
import { formatDriverOption, getDriverColor, getDriverFullName } from "../../domain/drivers.js";
import { fmt } from "../../helpers.js";
import Icon, { IconButton } from "../../components/ui/Icon.jsx";
import { formatMeetingShort } from "../replay/replayModel.js";
import "./comparison.css";

const SLOT_LETTERS = ["A", "B", "C", "D"];

function DriverLapRow({ idPrefix, slot, drivers, busy, removable, onSelectDriver, onSelectLap, onRemove }) {
  const driver = drivers.find((item) => item.driver_number === slot.driverNumber);
  const { options, fastestLapNumber } = slot.lapSelect;
  const noLaps = slot.driverNumber && slot.lapsLoaded && !slot.lapLoading && options.length === 0;
  return (
    <div className="slot" style={driver ? { "--c": getDriverColor(driver) } : undefined}>
      <span className="slot__key" aria-hidden="true">
        {SLOT_LETTERS[slot.slot - 1]}
      </span>
      <select
        id={`${idPrefix}-driver-${slot.slot}`}
        className="select slot__driver"
        aria-label={`Οδηγός ${slot.slot}`}
        title={getDriverFullName(driver) || undefined}
        value={slot.driverNumber || ""}
        onChange={(event) => onSelectDriver(slot.slot, event.target.value)}
        disabled={!drivers.length}
      >
        <option value="">{drivers.length ? "Επίλεξε οδηγό" : busy ? "Φόρτωση…" : "—"}</option>
        {drivers.map((item) => (
          <option key={item.driver_number} value={item.driver_number}>
            {formatDriverOption(item)}
          </option>
        ))}
      </select>
      <select
        id={`${idPrefix}-lap-${slot.slot}`}
        className="select slot__lap"
        aria-label={`Γύρος οδηγού ${slot.slot}`}
        value={slot.lapNumber || ""}
        onChange={(event) => onSelectLap(slot.slot, event.target.value)}
        disabled={!slot.driverNumber || slot.lapLoading || !options.length}
      >
        <option value="">{slot.lapLoading ? "Φόρτωση…" : noLaps ? "Χωρίς γύρους" : "Γύρος"}</option>
        {options.map((lap) => (
          <option key={lap.lap_number} value={lap.lap_number}>
            {`Γ${lap.lap_number} · ${fmt(lap.lap_duration)}${lap.lap_number === fastestLapNumber ? " · ταχύτερος" : ""}`}
          </option>
        ))}
      </select>
      {removable ? (
        <IconButton icon="close" label={`Αφαίρεση οδηγού ${slot.slot}`} onClick={onRemove} />
      ) : (
        <span className="slot__spacer" aria-hidden="true" />
      )}
    </div>
  );
}

function Hint({ children }) {
  return <p className="builder__hint">{children}</p>;
}

// The comparison form. Fields appear in task order: event → session → drivers → laps.
function ComparisonBuilder({
  idPrefix = "cb",
  availableYears,
  selection,
  loading,
  loadProgress,
  canCancelLoad,
  onCancelLoad,
  onCompare,
  submitLabel = "Σύγκριση γύρων",
}) {
  const {
    year,
    setYear,
    meetings,
    meeting,
    sessions,
    session,
    drivers,
    slots,
    numDrivers,
    setNumDrivers,
    selectMeeting,
    selectSession,
    selectDriverSlot,
    selectLapSlot,
  } = selection;
  const activeSlots = slots.slice(0, numDrivers);
  const isBusy = Boolean(loading);
  const canCompare = activeSlots.slice(0, 2).every((slot) => slot.driverNumber && slot.lapNumber) && !isBusy;
  const noMeetings = !isBusy && meetings.length === 0;
  const noSessions = !isBusy && meeting && sessions.length === 0;
  const noDrivers = !isBusy && session && drivers.length === 0;
  const missingLaps = activeSlots.filter(
    (slot) => slot.driverNumber && slot.lapsLoaded && !slot.lapLoading && slot.lapSelect.options.length === 0
  );
  const availability = getOpenF1AvailabilityMessages({ year, sessionName: session?.session_name });
  const loadingReplay = isBusy && loadProgress !== undefined;

  return (
    <form
      className="builder"
      aria-busy={isBusy}
      onSubmit={(event) => {
        event.preventDefault();
        if (canCompare) onCompare();
      }}
    >
      <fieldset className="builder__group">
        <legend className="builder__legend">Αγώνας</legend>
        <div className="builder__event">
          <label className="field">
            <span className="field__label">Σεζόν</span>
            <select
              id={`${idPrefix}-year`}
              className="select"
              value={year}
              onChange={(event) => setYear(Number(event.target.value))}
            >
              {availableYears.map((value) => (
                <option key={value} value={value}>
                  {formatOpenF1YearOptionLabel(value)}
                </option>
              ))}
            </select>
          </label>
          <label className="field">
            <span className="field__label">Γκραν Πρι</span>
            <select
              id={`${idPrefix}-meeting`}
              className="select"
              value={meeting?.meeting_key || ""}
              onChange={(event) => selectMeeting(event.target.value)}
              disabled={!meetings.length}
            >
              <option value="">{meetings.length ? "Επίλεξε Γκραν Πρι" : isBusy ? "Φόρτωση…" : "—"}</option>
              {meetings.map((item) => (
                <option key={item.meeting_key} value={item.meeting_key}>
                  {formatMeetingShort(item.meeting_name)}
                </option>
              ))}
            </select>
          </label>
          {meeting && (
            <label className="field">
              <span className="field__label">Σκέλος</span>
              <select
                id={`${idPrefix}-session`}
                className="select"
                value={session?.session_key || ""}
                onChange={(event) => selectSession(event.target.value)}
                disabled={!sessions.length}
              >
                <option value="">{sessions.length ? "Επίλεξε σκέλος" : isBusy ? "Φόρτωση…" : "—"}</option>
                {sessions.map((item) => (
                  <option key={item.session_key} value={item.session_key}>
                    {formatSessionLabel(item.session_name)}
                  </option>
                ))}
              </select>
            </label>
          )}
        </div>
        {noMeetings && (
          <Hint>Δεν υπάρχουν ακόμη Γκραν Πρι για το {year}. Το 2025 έχει την πιο πλήρη κάλυψη τηλεμετρίας.</Hint>
        )}
        {noSessions && <Hint>Δεν υπάρχουν υποστηριζόμενα σκέλη για αυτό το Γκραν Πρι. Δοκίμασε άλλο.</Hint>}
        {availability.map((message) => (
          <Hint key={message.id}>{message.text}</Hint>
        ))}
      </fieldset>

      {session && (
        <fieldset className="builder__group">
          <legend className="builder__legend">Οδηγοί και γύροι</legend>
          <div className="builder__slots">
            {activeSlots.map((slot) => (
              <DriverLapRow
                key={slot.slot}
                idPrefix={idPrefix}
                slot={slot}
                drivers={drivers}
                busy={isBusy}
                removable={slot.slot > 2 && slot.slot === numDrivers}
                onSelectDriver={selectDriverSlot}
                onSelectLap={selectLapSlot}
                onRemove={() => setNumDrivers((count) => Math.max(2, count - 1))}
              />
            ))}
          </div>
          {numDrivers < 4 && drivers.length > 0 && (
            <button
              type="button"
              className="btn btn--quiet builder__add"
              onClick={() => setNumDrivers((count) => Math.min(4, count + 1))}
            >
              <Icon name="plus" size={16} />
              Προσθήκη οδηγού
            </button>
          )}
          {noDrivers && <Hint>Δεν βρέθηκαν οδηγοί για αυτό το σκέλος. Δοκίμασε άλλο σκέλος.</Hint>}
          {missingLaps.length > 0 && (
            <Hint>
              Δεν υπάρχουν έγκυροι γύροι για{" "}
              {missingLaps
                .map((slot) => getDriverFullName(drivers.find((driver) => driver.driver_number === slot.driverNumber)))
                .join(", ")}
              . Δοκίμασε άλλο οδηγό ή σκέλος.
            </Hint>
          )}
        </fieldset>
      )}

      <div className="builder__actions">
        <button type="submit" className="btn btn--primary builder__submit" disabled={!canCompare}>
          {submitLabel}
        </button>
        {loadingReplay && (
          <div className="builder__status" role="status">
            <span className="spinner" aria-hidden="true" />
            <span>
              {loading}
              {loadingReplay && (
                <span className="builder__status-context">
                  {" "}
                  {activeSlots
                    .filter((slot) => slot.driverNumber && slot.lapNumber)
                    .map((slot) => {
                      const driver = drivers.find((item) => item.driver_number === slot.driverNumber);
                      return `${driver?.name_acronym || `#${slot.driverNumber}`} γύρος ${slot.lapNumber}`;
                    })
                    .join(" · ")}
                </span>
              )}
            </span>
            {canCancelLoad && (
              <button type="button" className="btn btn--link" onClick={onCancelLoad}>
                Ακύρωση
              </button>
            )}
          </div>
        )}
      </div>
      {loadingReplay && (
        <div className="progress builder__progress" aria-hidden="true">
          <div className="progress__bar" style={{ transform: `scaleX(${(loadProgress || 0) / 100})` }} />
        </div>
      )}
    </form>
  );
}

export default memo(ComparisonBuilder);
