const YEAR_AVAILABILITY = {
  2026: {
    optionLabel: "2026 (πρώιμα / μερικά)",
    message:
      "Η κάλυψη OpenF1 για το 2026 είναι ακόμη πρώιμη. Κάποια Γκραν Πρι ή σκέλη μπορεί να λείπουν μέχρι να δημοσιευτούν πλήρως.",
  },
};

const SESSION_AVAILABILITY = {
  "Practice 1":
    "Τα δοκιμαστικά σκέλη στο OpenF1 μπορεί να έχουν πιο αραιούς γύρους, θέση ή τηλεμετρία. Αν λείπουν δεδομένα, δοκίμασε Qualifying ή Race.",
  "Practice 2":
    "Τα δοκιμαστικά σκέλη στο OpenF1 μπορεί να έχουν πιο αραιούς γύρους, θέση ή τηλεμετρία. Αν λείπουν δεδομένα, δοκίμασε Qualifying ή Race.",
  "Practice 3":
    "Τα δοκιμαστικά σκέλη στο OpenF1 μπορεί να έχουν πιο αραιούς γύρους, θέση ή τηλεμετρία. Αν λείπουν δεδομένα, δοκίμασε Qualifying ή Race.",
  Sprint:
    "Τα sprint σκέλη δεν έχουν πάντα πλήρη κάλυψη θέσης και τηλεμετρίας ανά Γκραν Πρι. Αν λείπουν δεδομένα, δοκίμασε Qualifying ή Race.",
  "Sprint Qualifying":
    "Τα sprint σκέλη δεν έχουν πάντα πλήρη κάλυψη θέσης και τηλεμετρίας ανά Γκραν Πρι. Αν λείπουν δεδομένα, δοκίμασε Qualifying ή Race.",
  "Sprint Shootout":
    "Τα sprint σκέλη δεν έχουν πάντα πλήρη κάλυψη θέσης και τηλεμετρίας ανά Γκραν Πρι. Αν λείπουν δεδομένα, δοκίμασε Qualifying ή Race.",
};

export function formatOpenF1YearOptionLabel(year) {
  return YEAR_AVAILABILITY[Number(year)]?.optionLabel || String(year);
}

export function getOpenF1AvailabilityMessages({ year, sessionName } = {}) {
  const messages = [];
  const yearMessage = YEAR_AVAILABILITY[Number(year)]?.message;
  const sessionMessage = sessionName ? SESSION_AVAILABILITY[sessionName] : "";

  if (yearMessage) {
    messages.push({
      id: `year-${year}`,
      text: yearMessage,
    });
  }

  if (sessionMessage) {
    messages.push({
      id: `session-${sessionName}`,
      text: sessionMessage,
    });
  }

  return messages;
}
