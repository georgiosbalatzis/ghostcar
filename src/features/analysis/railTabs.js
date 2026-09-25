export const RAIL_TABS = [
  { id: "live", label: "Ζωντανά" },
  { id: "telemetry", label: "Τηλεμετρία" },
  { id: "sectors", label: "Τομείς" },
  { id: "laps", label: "Γύροι" },
];

// Older share links used the mobile tab names; map them onto the analysis rail.
const LEGACY_TABS = { "3d": "live", stats: "sectors", h2h: "live", season: "live" };

export function normalizeRailTab(value) {
  if (RAIL_TABS.some((tab) => tab.id === value)) return value;
  return LEGACY_TABS[value] || "live";
}
