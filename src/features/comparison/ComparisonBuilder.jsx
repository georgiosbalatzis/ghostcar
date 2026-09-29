import { memo } from "react";
import { formatSessionLabel } from "../../constants.js";
import { formatOpenF1YearOptionLabel, getOpenF1AvailabilityMessages } from "../../domain/availability.js";
import { formatDriverOption, getDriverColor, getDriverFullName } from "../../domain/drivers.js";
import { fmt } from "../../helpers.js";
import Icon, { IconButton } from "../../components/ui/Icon.jsx";
import { formatMeetingShort } from "../replay/replayModel.js";
import "./comparison.css";

const SLOT_LETTERS = ["A", "B", "C", "D"];
const NEXT_DRIVER = { 2: "τρίτο", 3: "τέταρτο" };

// One driver column: a team-colour rule once a driver is chosen, then driver and lap as underline fields.
// The selects keep their own accessible names ("Οδηγός 1", "Γύρος οδηγού 1"); the visible labels are short.
function DriverLapRow({ idPrefix, slot, drivers, busy, removable, onSelectDriver, onSelectLap, onRemove }) {
  const driver = drivers.find((item) => item.driver_number === slot.driverNumber);
  const { options, fastestLapNumber } = slot.lapSelect;
  const noLaps = slot.driverNumber && slot.lapsLoaded && !slot.lapLoading && options.length === 0;
  return (
    <div className="slot" style={driver ? { "--c": getDriverColor(driver) } : undefined}>
      <div className="slot__head">
        <span className="kicker slot__key" aria-hidden="true">
          Οδηγός {SLOT_LETTERS[slot.slot - 1]}
        </span>
        {removable && <IconButton icon="close" label={`Αφαίρεση οδηγού ${slot.slot}`} onClick={onRemove} />}
      </div>
      <div className="field field--underline">
        <span className="field__label" aria-hidden="true">
          Οδηγός
        </span>
        <select
          id={`${idPrefix}-driver-${slot.slot}`}
          className="select"
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
      </div>
      <div className="field field--underline">
        <span className="field__label" aria-hidden="true">
          Γύρος
        </span>
        <select
          id={`${idPrefix}-lap-${slot.slot}`}
          className="select"
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
      </div>
    </div>
  );
}

function Hint({ children }) {
  return <p className="builder__hint">{children}</p>;
}

// The comparison form, laid out like the f1stories contact form: underline fields, one ink action.
// Fields appear in task order: event → session → drivers → laps. In the edit sheet there is no step crumb.
function ComparisonBuilder({
  idPrefix = "cb",
  availableYears,
  selection,
  loading,
  onCompare,
  submitLabel = "Σύγκριση γύρων",
  inSheet = false,
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
  const step = session ? 3 : meeting ? 2 : 1;

  return (
    <form
      className={inSheet ? "builder builder--sheet" : "builder"}
      aria-busy={isBusy}
      onSubmit={(event) => {
        event.preventDefault();
        if (canCompare) onCompare();
      }}
    >
      {!inSheet && (
        <div className="crumb">
          <span>01 / Νέα σύγκριση</span>
          <span>Βήμα {step} από 3</span>
        </div>
      )}
      <fieldset className="builder__group">
        <legend className="visually-hidden">Αγώνας</legend>
        <div className="builder__event">
          <label className="field field--underline">
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
          <label className="field field--underline">
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
            <label className="field field--underline">
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

      <div className="builder__drivers">
        {session ? (
          <fieldset className="builder__group">
            <legend className="visually-hidden">Οδηγοί και γύροι</legend>
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
            {noDrivers && <Hint>Δεν βρέθηκαν οδηγοί για αυτό το σκέλος. Δοκίμασε άλλο σκέλος.</Hint>}
            {missingLaps.length > 0 && (
              <Hint>
                Δεν υπάρχουν έγκυροι γύροι για{" "}
                {missingLaps
                  .map((slot) =>
                    getDriverFullName(drivers.find((driver) => driver.driver_number === slot.driverNumber))
                  )
                  .join(", ")}
                . Δοκίμασε άλλο οδηγό ή σκέλος.
              </Hint>
            )}
          </fieldset>
        ) : (
          <span />
        )}

        <div className="builder__actions">
          {session && numDrivers < 4 && drivers.length > 0 && (
            <button
              type="button"
              className="btn btn--link builder__add"
              onClick={() => setNumDrivers((count) => Math.min(4, count + 1))}
            >
              + Πρόσθεσε {NEXT_DRIVER[numDrivers]} οδηγό
            </button>
          )}
          <button type="submit" className="btn btn--ink builder__submit" disabled={!canCompare}>
            {submitLabel}
            <Icon name="arrow" size={18} />
          </button>
          {!inSheet && <p className="builder__note">Φορτώνει τηλεμετρία θέσης και ταχύτητας από το OpenF1.</p>}
        </div>
      </div>
    </form>
  );
}

export default memo(ComparisonBuilder);
