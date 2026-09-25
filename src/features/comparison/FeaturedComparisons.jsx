import { memo, useMemo, useState } from "react";
import { DRIVER_NAME_BY_NUMBER, PRESETS, formatSessionLabel } from "../../constants.js";
import { normalizeText } from "../../helpers.js";
import Icon from "../../components/ui/Icon.jsx";
import Dialog from "../../components/ui/Dialog.jsx";

export function getPlayablePresets(unavailableYears) {
  return PRESETS.filter((preset) => !unavailableYears.includes(preset.year));
}

function PresetRow({ preset, onLoad }) {
  return (
    <li>
      <button type="button" className="preset" onClick={() => onLoad(preset)}>
        <span className="preset__title">{preset.title}</span>
        <span className="preset__meta">
          <span className="preset__drivers">
            {preset.a1} – {preset.a2}
          </span>
          {" · "}
          {preset.place} {preset.year} · {formatSessionLabel(preset.session)}
        </span>
        <Icon name="arrow" size={18} className="icon preset__arrow" />
      </button>
    </li>
  );
}

// Empty-state entry point: a few editorial comparisons, one click each.
export const FeaturedComparisons = memo(function FeaturedComparisons({ presets, onLoad, onShowAll }) {
  return (
    <section className="featured" aria-labelledby="featured-title">
      <div className="featured__head">
        <h2 id="featured-title" className="featured__title">
          Επιλεγμένες συγκρίσεις
        </h2>
        <button type="button" className="btn btn--link" onClick={onShowAll}>
          Όλες ({presets.length})
        </button>
      </div>
      <ul className="preset-list">
        {presets.slice(0, 4).map((preset) => (
          <PresetRow
            key={`${preset.year}-${preset.meeting}-${preset.session}-${preset.d1}`}
            preset={preset}
            onLoad={onLoad}
          />
        ))}
      </ul>
    </section>
  );
});

export function FeaturedDialog({ presets, onLoad, onClose }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const term = normalizeText(query);
    if (!term) return presets;
    return presets.filter((preset) =>
      normalizeText(
        [
          preset.title,
          preset.place,
          preset.meeting,
          preset.session,
          formatSessionLabel(preset.session),
          preset.year,
          preset.a1,
          preset.a2,
          DRIVER_NAME_BY_NUMBER[preset.d1],
          DRIVER_NAME_BY_NUMBER[preset.d2],
        ].join(" ")
      ).includes(term)
    );
  }, [presets, query]);
  const years = [...new Set(filtered.map((preset) => preset.year))];

  return (
    <Dialog title="Επιλεγμένες συγκρίσεις" subtitle="Φορτώνεται ο ταχύτερος γύρος κάθε οδηγού" onClose={onClose}>
      <input
        type="search"
        className="input featured-search"
        placeholder="Οδηγός, πίστα ή σεζόν"
        aria-label="Αναζήτηση συγκρίσεων"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      {years.map((year) => (
        <section key={year} className="preset-year">
          <h3 className="preset-year__title">{year}</h3>
          <ul className="preset-list">
            {filtered
              .filter((preset) => preset.year === year)
              .map((preset) => (
                <PresetRow key={`${preset.meeting}-${preset.session}-${preset.d1}`} preset={preset} onLoad={onLoad} />
              ))}
          </ul>
        </section>
      ))}
      {!filtered.length && <p className="empty-note">Καμία σύγκριση δεν ταιριάζει με την αναζήτηση.</p>}
    </Dialog>
  );
}
