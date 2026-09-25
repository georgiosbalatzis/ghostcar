import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const SHOWREEL_SECONDS = 12;

// Autoplay through featured comparisons (kiosk / presentation use). loadPresetRef is filled in by
// the caller after usePresetLoader, which itself needs this hook's ref and stop function.
export default function useShowreel({ presets, loadPresetRef, setPlay, cancelLoading }) {
  const [active, setActive] = useState(false);
  const activeRef = useRef(false);
  const timerRef = useRef(null);

  const clearTimer = useCallback(() => {
    window.clearTimeout(timerRef.current);
    timerRef.current = null;
  }, []);

  const stopRuntime = useCallback(
    (abortLoad = false) => {
      activeRef.current = false;
      clearTimer();
      if (abortLoad) cancelLoading();
      setPlay(false);
    },
    [cancelLoading, clearTimer, setPlay]
  );

  useEffect(() => {
    clearTimer();
    if (!active) {
      activeRef.current = false;
      return undefined;
    }
    activeRef.current = true;
    let index = 0;
    async function next() {
      if (!activeRef.current || index >= presets.length) {
        setActive(false);
        return;
      }
      await loadPresetRef.current?.(presets[index], { preserveShowreel: true });
      if (!activeRef.current) return;
      setPlay(true);
      index++;
      timerRef.current = window.setTimeout(() => {
        setPlay(false);
        if (activeRef.current) next();
      }, SHOWREEL_SECONDS * 1000);
    }
    next();
    // Cleanup never aborts loads: a manual compare or preset that stopped the showreel has already
    // started its own load. Only an explicit toggle-off aborts the showreel's in-flight preset.
    return () => stopRuntime(false);
  }, [active, clearTimer, loadPresetRef, presets, setPlay, stopRuntime]);

  const toggle = useCallback(() => {
    if (!activeRef.current) {
      setActive(true);
      return;
    }
    stopRuntime(true);
    setActive(false);
  }, [stopRuntime]);
  const stop = useCallback(() => {
    stopRuntime(false);
    setActive(false);
  }, [stopRuntime]);

  return useMemo(
    () => ({ active, toggle, stop, activeRef, stopRuntime, setActive }),
    [active, stop, stopRuntime, toggle]
  );
}
