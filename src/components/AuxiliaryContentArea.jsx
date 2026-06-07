import { Suspense, lazy } from "react";
import TelemetryPanel from "./TelemetryPanel.jsx";

const StatsModal = lazy(() => import("../modals/StatsModal.jsx"));
const LapsModal = lazy(() => import("../modals/LapsModal.jsx"));
const H2HModal = lazy(() => import("../modals/H2HModal.jsx"));
const DashModal = lazy(() => import("../modals/DashModal.jsx"));

function InlinePane({ children, withPadding = false }) {
  return (
    <Suspense fallback={null}>
      <div
        style={{
          flex: 1,
          minHeight: 0,
          overflow: "auto",
          padding: withPadding ? 0 : undefined,
          animation: "fadeIn .2s",
        }}
      >
        {children}
      </div>
    </Suspense>
  );
}

export default function AuxiliaryContentArea({
  mob,
  embed,
  F1,
  tp,
  activeTab,
  showTelemetry,
  sceneError,
  telemetryProps,
  inlineTabProps,
}) {
  const showTelemetryPanel =
    (!mob && !embed && showTelemetry && tp && !sceneError) || ((mob || embed) && activeTab === "telemetry" && tp);

  return (
    <>
      {showTelemetryPanel && (
        <div
          style={{
            width: !mob && !embed ? 310 : "100%",
            borderLeft: !mob && !embed ? `1px solid ${F1.borderLight}` : "none",
            background: F1.panelBg,
            display: "flex",
            flexDirection: "column",
            flex: embed || mob ? 1 : undefined,
            minHeight: embed || mob ? 0 : undefined,
            maxHeight: !mob && !embed ? "auto" : undefined,
            overflow: "auto",
            animation: "fadeIn .2s",
          }}
        >
          <TelemetryPanel mob={mob || embed} {...telemetryProps} />
        </div>
      )}

      {(embed || mob) && activeTab === "stats" && tp && (
        <InlinePane withPadding>
          <StatsModal mob={true} allDrivers={inlineTabProps.allDrivers} onClose={inlineTabProps.onClose} inline />
        </InlinePane>
      )}

      {(embed || mob) && activeTab === "laps" && tp && (
        <InlinePane>
          <LapsModal mob={true} onClose={inlineTabProps.onClose} inline drivers={inlineTabProps.lapModalDrivers} />
        </InlinePane>
      )}

      {(embed || mob) && activeTab === "h2h" && tp && (
        <InlinePane>
          <H2HModal
            mob={true}
            year={inlineTabProps.year}
            di1={inlineTabProps.di1}
            di2={inlineTabProps.di2}
            co1={inlineTabProps.co1}
            co2={inlineTabProps.co2}
            h2hData={inlineTabProps.h2hData}
            progress={inlineTabProps.h2hProgress}
            onClose={inlineTabProps.onClose}
            inline
          />
        </InlinePane>
      )}

      {(embed || mob) && activeTab === "season" && tp && (
        <InlinePane>
          <DashModal
            mob={true}
            year={inlineTabProps.year}
            di1={inlineTabProps.di1}
            di2={inlineTabProps.di2}
            co1={inlineTabProps.co1}
            co2={inlineTabProps.co2}
            dashData={inlineTabProps.dashData}
            onClose={inlineTabProps.onClose}
            inline
          />
        </InlinePane>
      )}
    </>
  );
}
