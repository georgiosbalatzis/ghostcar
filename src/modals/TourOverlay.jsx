import { useState } from "react";
import { getF1 } from "../theme.js";

const TOUR = [
  { text: "Welcome to Ghost Car Lab! Compare F1 laps in 3D with real telemetry." },
  { text: "Select a year, Grand Prix, session, and two drivers to compare." },
  { text: "Or click ⚡ PRESETS for instant iconic battle comparisons." },
  { text: "Use the playback bar to scrub through the lap. Space = play/pause." },
  { text: "Switch camera modes: Free orbit, Chase D1/D2, Helicopter, Cinematic." },
  { text: "Open STATS for detailed analysis, LAPS to browse all lap times." },
  { text: "Press ? anytime to see keyboard shortcuts. Enjoy! 🏁" },
];

export default function TourOverlay({ onClose }) {
  const F1 = getF1();
  const [step, setStep] = useState(0);
  const dismiss = () => { onClose(); try { localStorage.setItem("f1s-toured", "1"); } catch {} };

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)" }}>
      <div style={{ background: F1.carbon, border: `1px solid ${F1.blue}44`, borderRadius: 12, padding: 28, maxWidth: 420, width: "90%", textAlign: "center", animation: "fadeIn .3s" }}>
        <div style={{ fontSize: 11, color: F1.blue, fontWeight: 900, letterSpacing: "0.15em", marginBottom: 12 }}>STEP {step + 1} OF {TOUR.length}</div>
        <div style={{ fontSize: 15, color: F1.text, lineHeight: 1.6, marginBottom: 20 }}>{TOUR[step].text}</div>
        <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
          {step > 0 && <button onClick={() => setStep((s) => s - 1)} style={{ padding: "6px 16px", fontSize: 11 }}>← BACK</button>}
          {step < TOUR.length - 1 ? (
            <button onClick={() => setStep((s) => s + 1)} className="f1-btn" style={{ padding: "6px 20px", fontSize: 11 }}>NEXT →</button>
          ) : (
            <button onClick={dismiss} className="f1-btn" style={{ padding: "6px 20px", fontSize: 11 }}>GOT IT 🏁</button>
          )}
        </div>
        <button onClick={dismiss} style={{ marginTop: 12, fontSize: 10, color: F1.textMuted, background: "transparent", border: "none", cursor: "pointer" }}>Skip tour</button>
      </div>
    </div>
  );
}
