import "../styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { Palette, ThemeProvider } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { generateTheme } from "../model/theme.model";
// import "leaflet/dist/leaflet.css";

let localStotage: Storage = null;

function App({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<Palette["mode"]>("light");
  // const [mode, setMode] = useState<Palette["mode"]>("dark");

  const theme = useMemo(() => {
    // return generateTheme(mode, "#35a690");
    // return generateTheme(mode, "#25acb0");
    // return generateTheme(mode, "#E798D1");
    return generateTheme(mode);
  }, [mode]);

  useEffect(() => {
    localStotage = window.localStorage;
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(App);
