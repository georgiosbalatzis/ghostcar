import { F1_DARK, F1_LIGHT } from "./constants.js";

let _isDark = true;

export function setThemeMode(dark) { _isDark = dark; }
export function getF1() { return _isDark ? F1_DARK : F1_LIGHT; }
