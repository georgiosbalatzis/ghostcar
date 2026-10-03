import { useCallback, useEffect, useState } from "react";

// The shared F1 Stories key. index.html reads it before first paint and migrates the old "f1s-theme" (docs/theme.md).
// Written only when the reader toggles the theme, so a sibling app's "auto" is never replaced on load.
export const THEME_STORAGE_KEY = "f1stories-theme";

export function normalizeThemeMode(value) {
  if (value === "dark") return true;
  if (value === "light") return false;
  return null;
}

export default function useThemePreference() {
  // index.html already resolved URL `th` over the stored preference before first paint; start from its answer.
  const [isDark, setIsDark] = useState(() => document.documentElement.dataset.theme === "dark");

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
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", isDark ? "#1b1a19" : "#f2eee4");
  }, [isDark]);

  return { isDark, setThemeMode, toggleTheme };
}
