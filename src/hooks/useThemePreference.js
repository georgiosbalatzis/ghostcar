import { useCallback, useMemo, useState } from "react";
import { getThemeValue } from "../theme.js";

const THEME_STORAGE_KEY = "f1s-theme";

export function normalizeThemeMode(value) {
  if (value === "dark") return true;
  if (value === "light") return false;
  return null;
}

export default function useThemePreference(initialTheme) {
  const [isDark, setIsDark] = useState(() => {
    const urlTheme = normalizeThemeMode(initialTheme);
    if (urlTheme !== null) return urlTheme;
    try {
      return localStorage.getItem(THEME_STORAGE_KEY) !== "light";
    } catch {
      return true;
    }
  });

  const persistTheme = useCallback((nextIsDark) => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, nextIsDark ? "dark" : "light");
    } catch {}
  }, []);

  const setThemeMode = useCallback(
    (value, options = {}) => {
      const next = normalizeThemeMode(value);
      if (next === null) return false;
      setIsDark(next);
      if (options.persist) persistTheme(next);
      return true;
    },
    [persistTheme]
  );

  const toggleTheme = useCallback(() => {
    setIsDark((current) => {
      const next = !current;
      persistTheme(next);
      return next;
    });
  }, [persistTheme]);

  const themeValue = useMemo(() => getThemeValue(isDark), [isDark]);

  return {
    isDark,
    setThemeMode,
    themeValue,
    F1: themeValue.palette,
    toggleTheme,
  };
}
