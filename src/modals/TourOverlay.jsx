import { useState } from "react";
import { useF1 } from "../theme.js";

const TOUR = [
  { text: "Καλωσήρθες στο F1 Stories Ghost Car. Σύγκρινε γύρους Formula 1 σε 3D με πραγματική τηλεμετρία." },
  { text: "Διάλεξε χρονιά, Γκραν Πρι, σκέλος και δύο οδηγούς για σύγκριση." },
  { text: "Ή πάτησε ⚡ ΜΑΧΕΣ για άμεσες συγκρίσεις από εμβληματικές αναμετρήσεις." },
  { text: "Χρησιμοποίησε τη μπάρα αναπαραγωγής για να κινηθείς στον γύρο. Space = αναπαραγωγή/παύση." },
  { text: "Αλλάζεις κάμερες ανάμεσα σε ελεύθερη, chase Ο1/Ο2, ψηλή και σινεματική προβολή." },
  { text: "Άνοιξε ΣΤΑΤΙΣΤΙΚΑ για ανάλυση και ΓΥΡΟΥΣ για να δεις όλους τους χρόνους." },
  { text: "Πάτησε ? οποιαδήποτε στιγμή για τις συντομεύσεις πληκτρολογίου. Καλή εξερεύνηση. 🏁" },
];

export default function TourOverlay({ onClose }) {
  const F1 = useF1();
  const [step, setStep] = useState(0);
  const dismiss = () => { onClose(); try { localStorage.setItem("f1s-toured", "1"); } catch {} };

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)" }}>
      <div style={{ background: F1.carbon, border: `1px solid ${F1.blue}44`, borderRadius: 12, padding: 28, maxWidth: 420, width: "90%", textAlign: "center", animation: "fadeIn .3s" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 12 }}>
          <div style={{ fontSize: 11, color: F1.blue, fontWeight: 900, letterSpacing: "0.15em" }}>ΒΗΜΑ {step + 1} ΑΠΟ {TOUR.length}</div>
          <button onClick={dismiss} style={{ padding: "8px 12px", fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", color: F1.text, background: F1.cardBg, border: `1px solid ${F1.border}` }}>ΠΑΡΑΛΕΙΨΗ</button>
        </div>
        <div style={{ fontSize: 15, color: F1.text, lineHeight: 1.6, marginBottom: 20 }}>{TOUR[step].text}</div>
        <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
          {step > 0 && <button onClick={() => setStep((s) => s - 1)} style={{ padding: "6px 16px", fontSize: 11 }}>← ΠΙΣΩ</button>}
          {step < TOUR.length - 1 ? (
            <button onClick={() => setStep((s) => s + 1)} className="f1-btn" style={{ padding: "6px 20px", fontSize: 11 }}>ΕΠΟΜΕΝΟ →</button>
          ) : (
            <button onClick={dismiss} className="f1-btn" style={{ padding: "6px 20px", fontSize: 11 }}>ΕΝΤΑΞΕΙ 🏁</button>
          )}
        </div>
      </div>
    </div>
  );
}
