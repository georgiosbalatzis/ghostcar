import { useCallback, useEffect, useRef, useState } from "react";

export const PLAYBACK_SPEEDS = [0.25, 0.5, 1, 2, 4];

export function normalizePlaybackSpeed(value) {
  const parsed = Number(value);
  return PLAYBACK_SPEEDS.includes(parsed) ? parsed : null;
}

export function parseLoopFlag(value) {
  return value === "1" || value === "true";
}

export default function usePlaybackController({ initialSpeed, initialLoop, embed = false, trackView = "3d" } = {}) {
  const [prog, setProgState] = useState(0);
  const [play, setPlayState] = useState(false);
  const [spd, setSpdState] = useState(() => normalizePlaybackSpeed(initialSpeed) ?? 1);
  const [loop, setLoopState] = useState(() => parseLoopFlag(initialLoop));
  const [countdown, setCountdown] = useState(null);
  const progRef = useRef(0);
  const playRef = useRef(false);
  const spdRef = useRef(spd);
  const loopRef = useRef(loop);
  const trackViewRef = useRef(trackView);
  const rafRef = useRef(null);
  const ltRef = useRef(null);
  const uiSyncRef = useRef(0);
  const countdownIntervalRef = useRef(null);
  const touchScrubRef = useRef({ active: false, x: 0, y: 0 });

  progRef.current = prog;
  playRef.current = play;
  spdRef.current = spd;
  loopRef.current = loop;
  trackViewRef.current = trackView;

  const setProg = useCallback((value) => {
    setProgState((current) => {
      const next = typeof value === "function" ? value(current) : value;
      progRef.current = next;
      return next;
    });
  }, []);

  const setPlay = useCallback((value) => {
    setPlayState((current) => {
      const next = typeof value === "function" ? value(current) : value;
      playRef.current = next;
      return next;
    });
  }, []);

  const setSpd = useCallback((value) => {
    setSpdState((current) => {
      const next = typeof value === "function" ? value(current) : value;
      spdRef.current = next;
      return next;
    });
  }, []);

  const setLoop = useCallback((value) => {
    setLoopState((current) => {
      const next = typeof value === "function" ? value(current) : value;
      loopRef.current = next;
      return next;
    });
  }, []);

  const cancelCountdown = useCallback(() => {
    if (countdownIntervalRef.current) {
      window.clearInterval(countdownIntervalRef.current);
      countdownIntervalRef.current = null;
    }
    setCountdown(null);
  }, []);

  const setSpeedFromValue = useCallback(
    (value) => {
      const next = normalizePlaybackSpeed(value);
      if (next === null) return false;
      setSpd(next);
      return true;
    },
    [setSpd]
  );

  const setLoopFromValue = useCallback(
    (value) => {
      setLoop(parseLoopFlag(value));
    },
    [setLoop]
  );

  const resetPlayback = useCallback(() => {
    setProg(0);
    setPlay(false);
  }, [setPlay, setProg]);

  const startWithCountdown = useCallback(
    (hasReplay = false) => {
      if (countdownIntervalRef.current) return;
      if (progRef.current < 0.01 && hasReplay && !playRef.current) {
        if (embed) {
          setPlay(true);
          return;
        }
        let c = 5;
        setCountdown(c);
        countdownIntervalRef.current = window.setInterval(() => {
          c -= 1;
          if (c <= 0) {
            cancelCountdown();
            setPlay(true);
            return;
          }
          setCountdown(c);
        }, 1000);
        return;
      }
      setPlay((current) => !current);
    },
    [cancelCountdown, embed, setPlay]
  );

  const handleReplayTouchStart = useCallback((event, enabled) => {
    if (!enabled) return;
    const target = event.target;
    if (
      target instanceof Element &&
      target.closest("button,a,input,select,textarea,label,[data-no-track-scrub='true']")
    ) {
      return;
    }
    const touch = event.touches?.[0];
    if (!touch) return;
    touchScrubRef.current = { active: true, x: touch.clientX, y: touch.clientY };
  }, []);

  const handleReplayTouchEnd = useCallback(
    (event) => {
      const gesture = touchScrubRef.current;
      touchScrubRef.current = { active: false, x: 0, y: 0 };
      if (!gesture.active) return;
      const touch = event.changedTouches?.[0];
      if (!touch) return;
      const dx = touch.clientX - gesture.x;
      const dy = Math.abs(touch.clientY - gesture.y);
      if (Math.abs(dx) <= 50 || Math.abs(dx) <= dy) return;
      setProg((current) => Math.max(0, Math.min(1, current + (dx > 0 ? 0.03 : -0.03))));
    },
    [setProg]
  );

  const handleReplayTouchCancel = useCallback(() => {
    touchScrubRef.current = { active: false, x: 0, y: 0 };
  }, []);

  useEffect(() => {
    if (!play) {
      ltRef.current = null;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return undefined;
    }

    function tick(ts) {
      if (!ltRef.current) ltRef.current = ts;
      const dt = Math.min((ts - ltRef.current) / 1000, 0.05);
      ltRef.current = ts;
      let next = progRef.current + dt * 0.015 * spdRef.current;
      if (next >= 1) {
        if (loopRef.current) {
          next = 0;
        } else {
          next = 1;
          setPlay(false);
        }
      }
      progRef.current = next;
      if (ts - uiSyncRef.current > (trackViewRef.current === "2d" ? 16 : 80)) {
        uiSyncRef.current = ts;
        setProg(next);
      }
      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [play, setPlay, setProg]);

  useEffect(
    () => () => {
      if (countdownIntervalRef.current) window.clearInterval(countdownIntervalRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    },
    []
  );

  return {
    prog,
    setProg,
    progRef,
    play,
    setPlay,
    playRef,
    spd,
    setSpd,
    spdRef,
    loop,
    setLoop,
    countdown,
    cancelCountdown,
    setSpeedFromValue,
    setLoopFromValue,
    resetPlayback,
    startWithCountdown,
    handleReplayTouchStart,
    handleReplayTouchEnd,
    handleReplayTouchCancel,
  };
}
