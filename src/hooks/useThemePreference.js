import { useCallback, useEffect, useState } from "react";

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

  // React chooses the theme; CSS (tokens.css) styles it.
  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", isDark ? "#0c0e0f" : "#f1efe9");
  }, [isDark]);

  return { isDark, setThemeMode, toggleTheme };
}
