import { useCallback, useMemo, useState } from "react";

export const INLINE_TABS = ["3d", "telemetry", "stats", "laps", "h2h", "season"];

export function normalizeInlineTab(value) {
  return INLINE_TABS.includes(value) ? value : "3d";
}

export default function useAuxiliaryViews({ initialTab, embed } = {}) {
  const [showDash, setShowDash] = useState(false);
  const [showKeys, setShowKeys] = useState(false);
  const [showH2H, setShowH2H] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [showEmbed, setShowEmbed] = useState(false);
  const [showTel, setShowTel] = useState(() => !embed || initialTab === "telemetry");
  const [mobTab, setMobTab] = useState(() => normalizeInlineTab(initialTab));
  const [showTelOverlay, setShowTelOverlay] = useState(false);
  const [showPresets, setShowPresets] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showLaps, setShowLaps] = useState(false);
  const [showMobMenu, setShowMobMenu] = useState(false);

  const closeStatsModal = useCallback(() => setShowStats(false), []);
  const closeLapsModal = useCallback(() => setShowLaps(false), []);
  const closeKeysModal = useCallback(() => setShowKeys(false), []);
  const closePresetsModal = useCallback(() => setShowPresets(false), []);
  const closeGalleryModal = useCallback(() => setShowGallery(false), []);
  const closeEmbedModal = useCallback(() => setShowEmbed(false), []);
  const closeTelemetryOverlay = useCallback(() => setShowTelOverlay(false), []);

  const closeAuxiliaryModals = useCallback(() => {
    setShowPresets(false);
    setShowStats(false);
    setShowLaps(false);
    setShowKeys(false);
    setShowH2H(false);
    setShowGallery(false);
    setShowEmbed(false);
    setShowDash(false);
    setShowTelOverlay(false);
  }, []);

  const resetAuxiliaryViews = useCallback(
    ({ resetTelemetry = false, resetTab = false } = {}) => {
      setShowMobMenu(false);
      closeAuxiliaryModals();
      if (resetTelemetry) setShowTel(false);
      if (resetTab) setMobTab("3d");
    },
    [closeAuxiliaryModals]
  );

  const restoreAuxiliaryTab = useCallback(
    (rawTab) => {
      const nextTab = normalizeInlineTab(rawTab);
      setMobTab(nextTab);
      if (!embed && rawTab) setShowTel(nextTab === "telemetry");
      return nextTab;
    },
    [embed]
  );

  const anyAuxiliaryModal = useMemo(
    () =>
      showPresets ||
      showStats ||
      showLaps ||
      showKeys ||
      showH2H ||
      showGallery ||
      showEmbed ||
      showDash ||
      showTelOverlay,
    [showPresets, showStats, showLaps, showKeys, showH2H, showGallery, showEmbed, showDash, showTelOverlay]
  );

  return {
    showDash,
    setShowDash,
    showKeys,
    setShowKeys,
    showH2H,
    setShowH2H,
    showGallery,
    setShowGallery,
    showEmbed,
    setShowEmbed,
    showTel,
    setShowTel,
    mobTab,
    setMobTab,
    showTelOverlay,
    setShowTelOverlay,
    showPresets,
    setShowPresets,
    showStats,
    setShowStats,
    showLaps,
    setShowLaps,
    showMobMenu,
    setShowMobMenu,
    anyAuxiliaryModal,
    closeStatsModal,
    closeLapsModal,
    closeKeysModal,
    closePresetsModal,
    closeGalleryModal,
    closeEmbedModal,
    closeTelemetryOverlay,
    closeAuxiliaryModals,
    resetAuxiliaryViews,
    restoreAuxiliaryTab,
  };
}
