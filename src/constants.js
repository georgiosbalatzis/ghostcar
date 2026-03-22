// ─── F1 Broadcast Design System — Dark + Light ───
export const F1_DARK = {
  red: "#E10600", redDark: "#B30500", carbon: "#15151e", carbonLight: "#1c1c28",
  carbonMid: "#222230", panelBg: "rgba(18,18,28,0.96)", overlay: "rgba(12,12,20,0.92)",
  cardBg: "rgba(25,25,38,0.85)", inputBg: "rgba(28,28,42,0.95)",
  text: "#e8e8f0", textDim: "#8b8ba0", textMuted: "#505068",
  border: "rgba(80,80,120,0.25)", borderLight: "rgba(60,60,90,0.18)",
  green: "#00d26a", greenDim: "#00a854", yellow: "#ffd700",
  purple: "#9b59b6", white: "#ffffff",
  fogColor: 0x121218, groundColor: 0x18181f,
  trackColor: 0x3a3a48, lineColor: 0xe10600, sceneBg: 0x121218,
  mono: "'Titillium Web', 'Barlow Condensed', sans-serif",
  sans: "'Titillium Web', sans-serif",
};

export const F1_LIGHT = {
  red: "#E10600", redDark: "#B30500", carbon: "#f4f5f7", carbonLight: "#eaebef",
  carbonMid: "#dddee4", panelBg: "rgba(255,255,255,0.97)", overlay: "rgba(245,246,250,0.95)",
  cardBg: "rgba(235,236,244,0.85)", inputBg: "rgba(255,255,255,0.95)",
  text: "#1a1a2e", textDim: "#5a5a7a", textMuted: "#8888a0",
  border: "rgba(80,85,120,0.2)", borderLight: "rgba(80,85,120,0.1)",
  green: "#00a854", greenDim: "#008844", yellow: "#cc9900",
  purple: "#8844aa", white: "#ffffff",
  fogColor: 0xe8eaf0, groundColor: 0xd8dae0,
  trackColor: 0x888898, lineColor: 0xe10600, sceneBg: 0xe8eaf0,
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
