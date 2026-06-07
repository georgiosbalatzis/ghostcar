import { Suspense, lazy } from "react";
import ShareDialog from "./ShareDialog.jsx";

const PresetsModal = lazy(() => import("../modals/PresetsModal.jsx"));
const StatsModal = lazy(() => import("../modals/StatsModal.jsx"));
const LapsModal = lazy(() => import("../modals/LapsModal.jsx"));
const KeysModal = lazy(() => import("../modals/KeysModal.jsx"));
const H2HModal = lazy(() => import("../modals/H2HModal.jsx"));
const DashModal = lazy(() => import("../modals/DashModal.jsx"));
const GalleryModal = lazy(() => import("../modals/GalleryModal.jsx"));
const EmbedModal = lazy(() => import("../modals/EmbedModal.jsx"));
const TelemetryModal = lazy(() => import("../modals/TelemetryModal.jsx"));
const TourOverlay = lazy(() => import("../modals/TourOverlay.jsx"));

export default function ModalLayer({ mob, embed, F1, showBackdrop, onCloseAll, flags, handlers, data, shareDialog }) {
  return (
    <>
      {showBackdrop && (
        <div
          onClick={onCloseAll}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            zIndex: 99,
            backdropFilter: "blur(4px)",
          }}
        />
      )}
      <Suspense fallback={null}>
        {flags.showPresets && (
          <PresetsModal
            mob={mob}
            onClose={handlers.onClosePresets}
            onLoadPreset={handlers.onLoadPreset}
            unavailableYears={data.unavailablePresetYears}
          />
        )}
        {flags.showTelemetryOverlay && (
          <TelemetryModal mob={mob} onClose={handlers.onCloseTelemetryOverlay} panelProps={data.telemetryPanelProps} />
        )}
        {flags.showStats && data.tp && (
          <StatsModal mob={mob} allDrivers={data.allDrivers} onClose={handlers.onCloseStats} />
        )}
        {flags.showLaps && <LapsModal mob={mob} onClose={handlers.onCloseLaps} drivers={data.lapModalDrivers} />}
        {flags.showKeys && <KeysModal mob={mob} onClose={handlers.onCloseKeys} />}
        {flags.showH2H && (
          <H2HModal
            mob={mob}
            year={data.year}
            di1={data.di1}
            di2={data.di2}
            co1={data.co1}
            co2={data.co2}
            h2hData={data.h2hData}
            progress={data.h2hProgress}
            onClose={handlers.onCloseH2H}
          />
        )}
        {flags.showDash && (
          <DashModal
            mob={mob}
            year={data.year}
            di1={data.di1}
            di2={data.di2}
            co1={data.co1}
            co2={data.co2}
            dashData={data.dashData}
            onClose={handlers.onCloseDash}
          />
        )}
        {flags.showGallery && (
          <GalleryModal
            mob={mob}
            gallery={data.gallery}
            onClose={handlers.onCloseGallery}
            onClear={handlers.onClearGallery}
            onSelect={handlers.onSelectGallery}
          />
        )}
        {flags.showEmbed && <EmbedModal mob={mob} shareState={data.shareState} onClose={handlers.onCloseEmbed} />}
        {flags.showTour && !embed && <TourOverlay onClose={handlers.onCloseTour} />}
      </Suspense>
      {shareDialog.url && (
        <ShareDialog
          mob={mob}
          F1={F1}
          url={shareDialog.url}
          notice={shareDialog.notice}
          onClose={shareDialog.onClose}
          onCopy={shareDialog.onCopy}
        />
      )}
    </>
  );
}
