import { createContext, createElement, useContext } from "react";
import { F1_DARK, F1_LIGHT } from "./constants.js";

const DARK_THEME = Object.freeze({ isDark: true, palette: F1_DARK });
const LIGHT_THEME = Object.freeze({ isDark: false, palette: F1_LIGHT });
const ThemeContext = createContext(DARK_THEME);

export function getThemeValue(isDark) {
  return isDark ? DARK_THEME : LIGHT_THEME;
}

export function ThemeProvider({ value, children }) {
  return createElement(ThemeContext.Provider, { value }, children);
}

export function useTheme() {
  return useContext(ThemeContext);
}

export function useF1() {
  return useTheme().palette;
}

export function useThemeMode() {
  return useTheme().isDark;
}
