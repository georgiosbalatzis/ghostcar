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
