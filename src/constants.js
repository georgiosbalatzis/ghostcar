// ─── F1 Stories Design System — Aligned with f1stories.gr ───
// Dark: "Neutral Charcoal" — matches f1stories.gr dark mode
// Light: "Clean White" — Apple-inspired, matches f1stories.gr light mode
// Accent: #E10600 (F1 red) used sparingly for highlights & CTAs

export const F1_DARK = {
  // Primary accent
  red: "#E10600", redDark: "#B30500", redGlow: "rgba(225,6,0,0.15)",
  blue: "#3b82f6", blueDark: "#2563eb", blueGlow: "rgba(59,130,246,0.15)",

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
  blue: "#2563eb", blueDark: "#1d4ed8", blueGlow: "rgba(59,130,246,0.12)",

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

export const DRIVER_NAME_BY_NUMBER = {
  1: "Max Verstappen",
  4: "Lando Norris",
  11: "Sergio Perez",
  12: "Andrea Kimi Antonelli",
  14: "Fernando Alonso",
  16: "Charles Leclerc",
  20: "Kevin Magnussen",
  44: "Lewis Hamilton",
  55: "Carlos Sainz",
  63: "George Russell",
  81: "Oscar Piastri",
};

export const getTeamColor = (t) => {
  if (!t) return "#888";
  for (const [k, v] of Object.entries(TEAM_COLORS))
    if (t.toLowerCase().includes(k.toLowerCase())) return v;
  return "#888";
};

export const PRESETS = [
  { label: "🏆 ANT vs RUS — Japan 2026 Q • Antonelli clinches pole", year: 2026, meeting: "Japanese Grand Prix", session: "Qualifying", d1: 12, d2: 63, cat: "2026" },
  { label: "🌏 ANT vs RUS — China 2026 Q • Youngest ever GP polesitter", year: 2026, meeting: "Chinese Grand Prix", session: "Qualifying", d1: 12, d2: 63, cat: "2026" },
  { label: "🏁 PIA vs NOR — Abu Dhabi 2025 R • Bold Lap 1 overtake", year: 2025, meeting: "Abu Dhabi Grand Prix", session: "Race", d1: 81, d2: 4, cat: "2025" },
  { label: "⚡ ANT vs PIA — Miami 2025 SQ • Remarkable maiden pole", year: 2025, meeting: "Miami Grand Prix", session: "Sprint Qualifying", d1: 12, d2: 81, cat: "2025" },
  { label: "🇯🇵 VER vs NOR — Japan 2025 Q • Stunning Suzuka pole", year: 2025, meeting: "Japanese Grand Prix", session: "Qualifying", d1: 1, d2: 4, cat: "2025" },
  { label: "🔴 HAM vs PIA — China 2025 Sprint • First Ferrari win", year: 2025, meeting: "Chinese Grand Prix", session: "Sprint", d1: 44, d2: 81, cat: "2025" },
  { label: "🏎️ PIA vs LEC — Azerbaijan 2024 R • Hanging on in Baku", year: 2024, meeting: "Azerbaijan Grand Prix", session: "Race", d1: 81, d2: 16, cat: "2024" },
  { label: "🇬🇧 HAM vs VER — Britain 2024 R • Record 9th Silverstone win", year: 2024, meeting: "British Grand Prix", session: "Race", d1: 44, d2: 1, cat: "2024" },
  { label: "🍁 RUS vs VER — Canada 2024 Q • Identical lap times", year: 2024, meeting: "Canadian Grand Prix", session: "Qualifying", d1: 63, d2: 1, cat: "2024" },
  { label: "🎭 LEC vs PIA — Monaco 2024 Q • Home pole battle", year: 2024, meeting: "Monaco Grand Prix", session: "Qualifying", d1: 16, d2: 81, cat: "2024" },
  { label: "🎰 LEC vs PER — Las Vegas 2023 R • Last-lap lunge", year: 2023, meeting: "Las Vegas Grand Prix", session: "Race", d1: 16, d2: 11, cat: "2023" },
  { label: "🌵 PIA vs NOR — Qatar 2023 SS • McLaren sprint duel", year: 2023, meeting: "Qatar Grand Prix", session: "Sprint Shootout", d1: 81, d2: 4, cat: "2023" },
  { label: "🏙️ LEC vs VER — Azerbaijan 2023 Q • Third straight pole", year: 2023, meeting: "Azerbaijan Grand Prix", session: "Qualifying", d1: 16, d2: 1, cat: "2023" },
  { label: "🇲🇨 VER vs ALO — Monaco 2023 Q • Pole snatched from Alonso", year: 2023, meeting: "Monaco Grand Prix", session: "Qualifying", d1: 1, d2: 14, cat: "2023" },
  { label: "🇭🇺 RUS vs SAI — Hungary 2022 Q • Shock maiden pole", year: 2022, meeting: "Hungarian Grand Prix", session: "Qualifying", d1: 63, d2: 55, cat: "2022" },
  { label: "🇯🇵 VER vs LEC — Japan 2022 Q • Ultra-close Suzuka pole", year: 2022, meeting: "Japanese Grand Prix", session: "Qualifying", d1: 1, d2: 16, cat: "2022" },
  { label: "🇧🇷 MAG vs VER — Sao Paulo 2022 Q • Sensational sprint pole", year: 2022, meeting: "São Paulo Grand Prix", session: "Qualifying", d1: 20, d2: 1, cat: "2022" },
  { label: "👑 VER vs HAM — Abu Dhabi 2021 R • Championship decider", year: 2021, meeting: "Abu Dhabi Grand Prix", session: "Race", d1: 1, d2: 44, cat: "2021" },
  { label: "🇸🇦 HAM vs VER — Saudi Arabia 2021 Q • Verstappen crashes out", year: 2021, meeting: "Saudi Arabian Grand Prix", session: "Qualifying", d1: 44, d2: 1, cat: "2021" },
  { label: "🌧️ RUS vs VER — Belgium 2021 Q • Wet qualifying shock", year: 2021, meeting: "Belgian Grand Prix", session: "Qualifying", d1: 63, d2: 1, cat: "2021" },
];

export const CAM_MODES = ["orbit", "follow1", "follow2", "top", "cinematic"];
export const CAM_LABELS = { orbit: "Free", follow1: "Chase D1", follow2: "Chase D2", top: "Heli", cinematic: "Film" };
