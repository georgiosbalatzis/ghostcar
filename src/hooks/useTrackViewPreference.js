import { useCallback, useState } from "react";

const TRACK_VIEW_STORAGE_KEY = "f1s-track-view";

export function normalizeTrackView(value) {
  return value === "2d" ? "2d" : value === "3d" ? "3d" : null;
}

export default function useTrackViewPreference(initialTrackView) {
  const [trackView, setTrackView] = useState(() => {
    const urlTrackView = normalizeTrackView(initialTrackView);
    if (urlTrackView) return urlTrackView;
    // 2D (the track-dominance map) is the default; 3D is a choice the viewer makes and keeps.
    try {
      return localStorage.getItem(TRACK_VIEW_STORAGE_KEY) === "3d" ? "3d" : "2d";
    } catch {
      return "2d";
    }
  });

  const setTrackViewMode = useCallback((mode, options = {}) => {
    const next = normalizeTrackView(mode) || "2d";
    setTrackView(next);
    if (options.persist !== false) {
      try {
        localStorage.setItem(TRACK_VIEW_STORAGE_KEY, next);
      } catch {}
    }
    return next;
  }, []);

  const setTrackViewFromValue = useCallback(
    (value) => {
      const next = normalizeTrackView(value);
      if (!next) return null;
      return setTrackViewMode(next, { persist: false });
    },
    [setTrackViewMode]
  );

  return {
    trackView,
    setTrackViewMode,
    setTrackViewFromValue,
    is2DView: trackView === "2d",
  };
}
