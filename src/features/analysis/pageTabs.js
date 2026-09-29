export const PAGE_TABS = [
  { id: "replay", label: "Αναπαράσταση" },
  { id: "sectors", label: "Τομείς" },
  { id: "laps", label: "Γύροι" },
  { id: "season", label: "Κατατακτήριες σεζόν", short: "Σεζόν" },
];

// Older share links used the analysis-rail and mobile tab names; map them onto the page tabs.
const LEGACY_TABS = { live: "replay", telemetry: "replay", "3d": "replay", stats: "sectors", h2h: "season" };

export function normalizePageTab(value) {
  if (PAGE_TABS.some((tab) => tab.id === value)) return value;
  return LEGACY_TABS[value] || "replay";
}
