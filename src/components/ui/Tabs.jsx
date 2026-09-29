import { useId } from "react";

// ARIA tabs with roving focus. The caller renders only the active panel as children. `aside` sits at the end of the
// tab row (actions), outside the tablist.
export default function Tabs({ label, tabs, active, onChange, className = "", aside, children }) {
  const id = useId();
  const onKeyDown = (event) => {
    const index = tabs.findIndex((tab) => tab.id === active);
    const delta = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!delta) return;
    event.preventDefault();
    const next = tabs[(index + delta + tabs.length) % tabs.length];
    onChange(next.id);
    document.getElementById(`${id}-tab-${next.id}`)?.focus();
  };

  return (
    <div className={className}>
      <div className="tabs-row">
        <div className="tabs" role="tablist" aria-label={label} onKeyDown={onKeyDown}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={`${id}-tab-${tab.id}`}
              type="button"
              role="tab"
              className="tabs__tab"
              aria-selected={tab.id === active}
              aria-controls={`${id}-panel`}
              tabIndex={tab.id === active ? 0 : -1}
              onClick={() => onChange(tab.id)}
            >
              {tab.short ? (
                // Phones show the short label; the full one stays the accessible name.
                <>
                  <span className="tabs__long">{tab.label}</span>
                  <span className="tabs__short" aria-hidden="true">
                    {tab.short}
                  </span>
                </>
              ) : (
                tab.label
              )}
            </button>
          ))}
        </div>
        {aside}
      </div>
      <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${active}`} className="tabs__panel">
        {children}
      </div>
    </div>
  );
}
