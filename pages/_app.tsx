import "../styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { createTheme, Palette, ThemeProvider } from "@mui/material";
import { useMemo, useState } from "react";

const baseFontSize = 14;

const generateTheme = (mode: Palette["mode"]) =>
  createTheme({
    palette: { primary: { main: "#3f51b5" }, mode },
    typography: {
      // fontFamily: "HarmonyOS_Sans_SC_Regular",
      // fontFamily: "Inter",
      fontSize: (baseFontSize / 16) * 14,
      body2: {
        color: "#0D1024A3",
        fontSize: "0.76rem",
      },
      subtitle1: {
        color: "#0D1024A3",
        fontSize: "0.875rem",
      },
      subtitle2: {
        color: "#0D1024A3",
        fontSize: "0.76rem",
      },
      h2: {
        color: "#0D1024E0",
        fontSize: "3.5rem",
      },
      h3: {
        color: "#0D1024E0",
        fontSize: "1.75rem",
      },
      h4: {
        fontSize: "1.5rem",
        color: "#0D1024E0",
        fontWeight: 500,
      },
      h5: {
        fontSize: "1.5rem",
        color: "#0D1024A3",
      },
    },
  });

function App({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<Palette["mode"]>("light");
  // const [mode, setMode] = useState<Palette["mode"]>("dark");

  const theme = useMemo(() => {
    return generateTheme(mode);
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(App);
