import { createContext, createElement, useContext } from "react";
import { F1_DARK, F1_LIGHT } from "./constants.js";

const ThemeContext = createContext(F1_DARK);

export function getThemePalette(isDark) {
  return isDark ? F1_DARK : F1_LIGHT;
}

export function ThemeProvider({ value, children }) {
  return createElement(ThemeContext.Provider, { value }, children);
}

export function useF1() {
  return useContext(ThemeContext);
}
