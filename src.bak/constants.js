// ─── F1 Stories Design System — Aligned with f1stories.gr ───
// Dark: "Neutral Charcoal" — matches f1stories.gr dark mode
// Light: "Clean White" — Apple-inspired, matches f1stories.gr light mode
// Accent: #E10600 (F1 red) used sparingly for highlights & CTAs

export const F1_DARK = {
  // Primary accent
  red: "#E10600", redDark: "#B30500", redGlow: "rgba(225,6,0,0.15)",

  // Backgrounds — f1stories.gr dark palette
  carbon: "#111118",         // deepest background (was #15151e)
  carbonLight: "#18181f",    // slightly elevated surfaces
  carbonMid: "#1e1e28",      // hover / elevated cards
  panelBg: "rgba(14,14,22,0.97)",
  overlay: "rgba(10,10,16,0.94)",
  cardBg: "rgba(22,22,32,0.88)",
  inputBg: "rgba(24,24,36,0.95)",

  // Text — softer contrast, less blue-tinted
  text: "#e4e4ec",
  textDim: "#8a8a9e",
  textMuted: "#4e4e64",

  // Borders — subtle, warm-neutral
  border: "rgba(70,70,100,0.22)",
  borderLight: "rgba(55,55,80,0.15)",

  // Semantic colors
  green: "#00d26a", greenDim: "#00a854",
  yellow: "#ffd700",
  purple: "#9b59b6",
  white: "#ffffff",

  // 3D scene
  fogColor: 0x0e0e16, groundColor: 0x141420,
  trackColor: 0x36364a, lineColor: 0xe10600, sceneBg: 0x0e0e16,

  // Typography — Titillium Web (same as f1stories.gr)
  mono: "'Titillium Web', 'Barlow Condensed', sans-serif",
  sans: "'Titillium Web', sans-serif",
};

export const F1_LIGHT = {
  // Primary accent
  red: "#E10600", redDark: "#B30500", redGlow: "rgba(225,6,0,0.08)",

  // Backgrounds — f1stories.gr clean white palette
  carbon: "#f5f5f7",         // main bg (Apple-inspired off-white)
  carbonLight: "#ededf0",    // slightly darker surface
  carbonMid: "#e0e0e6",      // hover states
  panelBg: "rgba(255,255,255,0.98)",
  overlay: "rgba(248,248,252,0.96)",
  cardBg: "rgba(240,240,244,0.9)",
  inputBg: "rgba(255,255,255,0.96)",

  // Text — true dark for readability
  text: "#1a1a2e",
  textDim: "#555570",
  textMuted: "#8888a0",

  // Borders — very subtle
  border: "rgba(0,0,0,0.1)",
  borderLight: "rgba(0,0,0,0.06)",

  // Semantic colors — slightly toned down for light bg
  green: "#00a854", greenDim: "#008844",
  yellow: "#cc9900",
  purple: "#8844aa",
  white: "#ffffff",

  // 3D scene — lighter, cleaner
  fogColor: 0xeceef2, groundColor: 0xdddee4,
  trackColor: 0x8a8a9a, lineColor: 0xe10600, sceneBg: 0xeceef2,

  // Typography
  mono: "'Titillium Web', 'Barlow Condensed', sans-serif",
  sans: "'Titillium Web', sans-serif",
};

export const TIRE_COLORS = { SOFT: "#ff3333", MEDIUM: "#ffcc00", HARD: "#cccccc", INTERMEDIATE: "#44cc44", WET: "#4488ff" };

export const TEAM_COLORS = {
  "Red Bull Racing": "#3671C6", "Red Bull": "#3671C6", "McLaren": "#FF8000",
  "Ferrari": "#E8002D", "Mercedes": "#27F4D2", "Aston Martin": "#229971",
  "Alpine": "#0093CC", "Williams": "#64C4FF", "RB": "#6692FF", "Racing Bulls": "#6692FF",
  "Kick Sauber": "#52E252", "Sauber": "#52E252", "Haas F1 Team": "#B6BABD",
  "Haas": "#B6BABD", "Cadillac": "#FFD700",
};

export const getTeamColor = (t) => {
  if (!t) return "#888";
  for (const [k, v] of Object.entries(TEAM_COLORS))
    if (t.toLowerCase().includes(k.toLowerCase())) return v;
  return "#888";
};

export const PRESETS = [
  { label: "🏆 NOR vs PIA — Australia 2025 Q • McLaren 1-2 pole battle", year: 2025, meeting: "Australian Grand Prix", session: "Qualifying", d1: 4, d2: 81, cat: "2025" },
  { label: "🔥 HAM vs LEC — China 2025 Q • Ferrari teammates debut", year: 2025, meeting: "Chinese Grand Prix", session: "Qualifying", d1: 44, d2: 16, cat: "2025" },
  { label: "⚔️ VER vs NOR — Monza 2024 Q • 0.025s gap", year: 2024, meeting: "Italian Grand Prix", session: "Qualifying", d1: 1, d2: 4, cat: "2024" },
  { label: "🎭 LEC vs SAI — Monaco 2024 Q • Ferrari home pole fight", year: 2024, meeting: "Monaco Grand Prix", session: "Qualifying", d1: 16, d2: 55, cat: "2024" },
  { label: "🇬🇧 NOR vs PIA — Silverstone 2024 Q • McLaren supremacy", year: 2024, meeting: "British Grand Prix", session: "Qualifying", d1: 4, d2: 81, cat: "2024" },
  { label: "💥 VER vs NOR — Austria 2024 R • The crash race", year: 2024, meeting: "Austrian Grand Prix", session: "Race", d1: 1, d2: 4, cat: "2024" },
  { label: "🏁 RUS vs VER — Canada 2024 Q • Identical lap times", year: 2024, meeting: "Canadian Grand Prix", session: "Qualifying", d1: 63, d2: 1, cat: "2024" },
  { label: "🌙 VER vs NOR — Abu Dhabi 2024 Q • Season finale", year: 2024, meeting: "Abu Dhabi Grand Prix", session: "Qualifying", d1: 1, d2: 4, cat: "2024" },
  { label: "🇧🇪 RUS vs HAM — Spa 2024 Q • Mercedes 1-2", year: 2024, meeting: "Belgian Grand Prix", session: "Qualifying", d1: 63, d2: 44, cat: "2024" },
  { label: "🎰 LEC vs PIA — Las Vegas 2024 Q • Night fight", year: 2024, meeting: "Las Vegas Grand Prix", session: "Qualifying", d1: 16, d2: 81, cat: "2024" },
  { label: "🇺🇸 NOR vs VER — Miami 2024 Q • Sprint weekend", year: 2024, meeting: "Miami Grand Prix", session: "Qualifying", d1: 4, d2: 1, cat: "2024" },
  { label: "🏎️ HAM vs VER — Bahrain 2024 R • Season opener", year: 2024, meeting: "Bahrain Grand Prix", session: "Race", d1: 44, d2: 1, cat: "2024" },
  { label: "🇯🇵 VER vs PIA — Japan 2024 Q • Suzuka showdown", year: 2024, meeting: "Japanese Grand Prix", session: "Qualifying", d1: 1, d2: 81, cat: "2024" },
  { label: "🇪🇸 NOR vs VER — Spain 2024 Q • Barcelona battle", year: 2024, meeting: "Spanish Grand Prix", session: "Qualifying", d1: 4, d2: 1, cat: "2024" },
  { label: "👑 VER vs LEC — Bahrain 2023 Q • Season opener", year: 2023, meeting: "Bahrain Grand Prix", session: "Qualifying", d1: 1, d2: 16, cat: "2023" },
  { label: "🦁 VER vs HAM — Jeddah 2023 Q • Old rivals", year: 2023, meeting: "Saudi Arabian Grand Prix", session: "Qualifying", d1: 1, d2: 44, cat: "2023" },
  { label: "🌧️ VER vs ALO — Monaco 2023 Q • Wet-dry thriller", year: 2023, meeting: "Monaco Grand Prix", session: "Qualifying", d1: 1, d2: 14, cat: "2023" },
  { label: "🇸🇬 SAI vs NOR — Singapore 2023 Q • Street circuit pole", year: 2023, meeting: "Singapore Grand Prix", session: "Qualifying", d1: 55, d2: 4, cat: "2023" },
  { label: "🏆 VER vs NOR — Zandvoort 2023 Q • Dutch home race", year: 2023, meeting: "Dutch Grand Prix", session: "Qualifying", d1: 1, d2: 4, cat: "2023" },
  { label: "🇲🇽 LEC vs SAI — Mexico 2023 Q • Ferrari lockout", year: 2023, meeting: "Mexico City Grand Prix", session: "Qualifying", d1: 16, d2: 55, cat: "2023" },
];

export const CAM_MODES = ["orbit", "follow1", "follow2", "top", "cinematic"];
export const CAM_LABELS = { orbit: "Free", follow1: "Chase D1", follow2: "Chase D2", top: "Heli", cinematic: "Film" };
