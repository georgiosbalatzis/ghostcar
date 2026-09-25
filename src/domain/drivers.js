import { DRIVER_NAME_BY_NUMBER, getTeamColor } from "../constants.js";

export function uniqueDrivers(drivers) {
  const seen = new Set();
  return (drivers || []).filter((driver) => {
    if (seen.has(driver.driver_number)) return false;
    seen.add(driver.driver_number);
    return true;
  });
}

export function getDriverFullName(driver) {
  if (!driver) return "";
  const byApi =
    driver.full_name || driver.broadcast_name || [driver.first_name, driver.last_name].filter(Boolean).join(" ").trim();
  return byApi || DRIVER_NAME_BY_NUMBER[driver.driver_number] || "";
}

export function formatDriverOption(driver) {
  const shortName = driver?.name_acronym || `#${driver?.driver_number ?? "?"}`;
  const fullName = getDriverFullName(driver);
  const teamName = driver?.team_name ? ` • ${driver.team_name}` : "";
  return fullName ? `${shortName} • ${fullName}${teamName}` : shortName;
}

export function getDriverColor(driver, fallback = "#888") {
  return driver ? getTeamColor(driver.team_name) : fallback;
}

function mixHex(hex, target, amount) {
  const parse = (value) => {
    const clean = String(value).replace("#", "");
    const full = clean.length === 3 ? [...clean].map((c) => c + c).join("") : clean.slice(0, 6);
    return [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16) || 0);
  };
  const from = parse(hex);
  const to = parse(target);
  return `#${from
    .map((channel, i) => Math.round(channel + (to[i] - channel) * amount))
    .map((channel) => channel.toString(16).padStart(2, "0"))
    .join("")}`;
}

// Teammates share a team colour; later slots get a lighter/darker variant so traces stay distinguishable.
export function getDistinctDriverColors(colors) {
  const seen = new Map();
  return colors.map((color) => {
    const key = String(color).toLowerCase();
    const count = seen.get(key) || 0;
    seen.set(key, count + 1);
    if (count === 0) return color;
    return count % 2 === 1 ? mixHex(color, "#ffffff", 0.5) : mixHex(color, "#000000", 0.35);
  });
}
