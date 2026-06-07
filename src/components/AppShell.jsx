import { ThemeProvider } from "../theme.js";
import GlobalStyles from "./GlobalStyles.jsx";

export default function AppShell({ themeValue, F1, embed, mob, children }) {
  const constrainedShell = embed || mob;
  const shellClassName = embed ? "app-shell app-shell-embed" : mob ? "app-shell app-shell-mobile" : "app-shell";

  return (
    <ThemeProvider value={themeValue}>
      <div
        className={shellClassName}
        style={{
          width: "100%",
          minHeight: constrainedShell ? undefined : "100vh",
          background: F1.carbon,
          color: F1.text,
          fontFamily: F1.sans,
          overflowX: "hidden",
          display: constrainedShell ? "flex" : "block",
          flexDirection: constrainedShell ? "column" : undefined,
        }}
      >
        <GlobalStyles F1={F1} />
        {children}
      </div>
    </ThemeProvider>
  );
}
