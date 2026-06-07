import { useCallback } from "react";
import { loadPresetSelectorData } from "../services/presets.js";

function isAbortError(error) {
  return error?.name === "AbortError";
}

export default function usePresetLoader({
  unavailablePresetYears = [],
  supportedSessionNames = [],
  presetActiveRef,
  showreelRef,
  cancelCountdown,
  stopShowreelRuntime,
  setShowreel,
  beginCancelableLoad,
  clearLoadIndicator,
  finishCancelableLoad,
  isActiveLoad,
  loadReplayForActiveLoad,
  setErr,
  setLdPct,
  cancelAuxLoading,
  resetAuxiliaryData,
  resetDriverSelections,
  applyPresetSelectorData,
  setShowH2H,
  setShowDash,
  setMobTab,
  setShowPresets,
  setShowMobMenu,
}) {
  return useCallback(
    async (preset, options = {}) => {
      const { preserveShowreel = false } = options;
      cancelCountdown();
      if (!preserveShowreel && showreelRef.current) {
        stopShowreelRuntime(false);
        setShowreel(false);
      }

      const controller = beginCancelableLoad("Φόρτωση preset...");
      setShowPresets(false);
      setShowMobMenu(false);
      presetActiveRef.current = true;

      try {
        if (unavailablePresetYears.includes(preset.year)) {
          throw new Error(`Τα δεδομένα preset για το ${preset.year} δεν είναι διαθέσιμα ακόμη.`);
        }

        cancelAuxLoading();
        resetDriverSelections({ resetDriverCount: true });
        setShowH2H(false);
        setShowDash(false);
        resetAuxiliaryData();
        setMobTab("3d");

        const presetData = await loadPresetSelectorData(
          preset,
          { supportedSessionNames, onProgress: setLdPct },
          { signal: controller.signal }
        );
        if (!isActiveLoad(controller)) return false;

        applyPresetSelectorData({
          year: preset.year,
          meetings: presetData.meetings,
          meeting: presetData.meeting,
          sessions: presetData.sessions,
          session: presetData.session,
          drivers: presetData.drivers,
          driver1Number: preset.d1,
          driver2Number: preset.d2,
          laps1: presetData.laps1,
          laps2: presetData.laps2,
          lap1Number: presetData.fastestLap1.lap_number,
          lap2Number: presetData.fastestLap2.lap_number,
          stints1: presetData.stints1,
          stints2: presetData.stints2,
        });
        setLdPct(50);

        await loadReplayForActiveLoad({
          controller,
          sessionKey: presetData.session.session_key,
          meeting: presetData.meeting,
          drivers: [
            { slot: 1, driverNumber: preset.d1, lap: presetData.fastestLap1 },
            { slot: 2, driverNumber: preset.d2, lap: presetData.fastestLap2 },
          ],
          progress: { locations: 60, telemetry: 80 },
          insufficientDataMessage: "Δεν υπάρχουν αρκετά δεδομένα θέσης",
        });
        if (!isActiveLoad(controller)) return false;

        clearLoadIndicator();
        return true;
      } catch (error) {
        const shouldUpdateLoadState = isActiveLoad(controller);
        if (shouldUpdateLoadState && !isAbortError(error)) setErr(error.message);
        if (shouldUpdateLoadState) clearLoadIndicator();
        return false;
      } finally {
        if (isActiveLoad(controller)) presetActiveRef.current = false;
        finishCancelableLoad(controller);
      }
    },
    [
      applyPresetSelectorData,
      beginCancelableLoad,
      cancelAuxLoading,
      cancelCountdown,
      clearLoadIndicator,
      finishCancelableLoad,
      isActiveLoad,
      loadReplayForActiveLoad,
      presetActiveRef,
      resetAuxiliaryData,
      resetDriverSelections,
      setErr,
      setLdPct,
      setMobTab,
      setShowDash,
      setShowH2H,
      setShowMobMenu,
      setShowPresets,
      setShowreel,
      showreelRef,
      stopShowreelRuntime,
      supportedSessionNames,
      unavailablePresetYears,
    ]
  );
}
