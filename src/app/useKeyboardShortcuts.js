import { useEffect, useRef } from "react";

const TYPING_TAGS = new Set(["INPUT", "SELECT", "TEXTAREA"]);

// Global playback shortcuts. Disabled while a dialog is open (dialogs handle Escape natively).
// The range input keeps its own arrow-key behaviour.
export default function useKeyboardShortcuts({ enabled, handlers }) {
  const handlersRef = useRef(handlers);
  handlersRef.current = handlers;
  // Read at event time: re-subscribing in an effect would drop keys pressed right after a dialog closes.
  const enabledRef = useRef(enabled);
  enabledRef.current = enabled;
  const lastLeftRef = useRef(0);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (!enabledRef.current) return;
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (TYPING_TAGS.has(event.target.tagName) || event.target.isContentEditable) return;
      if (event.target.closest?.("[popover]")) return;
      const h = handlersRef.current;
      if (event.key === "?") return h.help?.();
      switch (event.code) {
        case "Space":
          if (event.target.closest?.("button, a")) return;
          event.preventDefault();
          return h.togglePlay?.();
        case "KeyR":
          return h.reset?.();
        case "KeyD":
          return h.toggleTheme?.();
        case "KeyT":
          return h.toggleTelemetry?.();
        case "KeyV":
          return h.toggleView?.();
        case "KeyC":
          return h.nextCamera?.();
        case "KeyL":
          return h.toggleLoop?.();
        case "ArrowRight":
          return h.step?.(0.01);
        case "ArrowLeft": {
          const now = Date.now();
          h.step?.(now - lastLeftRef.current < 300 ? -0.05 : -0.01);
          lastLeftRef.current = now;
          return undefined;
        }
        default:
          return undefined;
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);
}
