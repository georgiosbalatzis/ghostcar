const COUNTDOWN_LIGHTS = [1, 2, 3, 4, 5];

export default function CountdownOverlay({ F1, countdown }) {
  if (countdown === null || countdown === undefined) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 300,
        background: "rgba(0,0,0,0.85)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", gap: 16, marginBottom: 32 }}>
        {COUNTDOWN_LIGHTS.map((number) => {
          const isActive = countdown <= 6 - number;
          return (
            <div
              key={number}
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: isActive ? "#E10600" : F1.cardBg,
                boxShadow: isActive ? "0 0 20px #E10600, 0 0 40px #E1060066" : "none",
                transition: "all 0.3s",
                border: `2px solid ${F1.border}`,
              }}
            />
          );
        })}
      </div>
      <div
        style={{
          fontSize: countdown === 0 ? 72 : 96,
          fontWeight: 900,
          color: countdown === 0 ? "#00d26a" : "#fff",
          fontFamily: F1.mono,
          textShadow: countdown === 0 ? "0 0 30px #00d26a" : "none",
        }}
      >
        {countdown === 0 ? "ΠΑΜΕ!" : countdown}
      </div>
    </div>
  );
}
