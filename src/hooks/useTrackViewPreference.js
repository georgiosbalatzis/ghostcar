import { useCallback, useState } from "react";

const TRACK_VIEW_STORAGE_KEY = "f1s-track-view";

export function normalizeTrackView(value) {
  return value === "2d" ? "2d" : value === "3d" ? "3d" : null;
}

export default function useTrackViewPreference(initialTrackView, options = {}) {
  const { onUse2D } = options;
  const [trackView, setTrackView] = useState(() => {
    const urlTrackView = normalizeTrackView(initialTrackView);
    if (urlTrackView) return urlTrackView;
    try {
      return localStorage.getItem(TRACK_VIEW_STORAGE_KEY) === "2d" ? "2d" : "3d";
    } catch {
      return "3d";
    }
  });

  const setTrackViewMode = useCallback(
    (mode, options = {}) => {
      const next = normalizeTrackView(mode) || "3d";
      setTrackView(next);
      if (next === "2d") onUse2D?.();
      if (options.persist !== false) {
        try {
          localStorage.setItem(TRACK_VIEW_STORAGE_KEY, next);
        } catch {}
      }
      return next;
    },
    [onUse2D]
  );

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
