import "../styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { Palette, ThemeProvider } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { generateTheme } from "../model/theme.model";
import { isProd } from "../model/tool.model";
// import "leaflet/dist/leaflet.css";
// import "swiper/css";

let localStotage: Storage = null;

interface AppPropsTypes {
  isSwiper: boolean;
}

function App({ Component, pageProps }: AppProps<AppPropsTypes>) {
  const [mode, setMode] = useState<Palette["mode"]>("light");
  // const [mode, setMode] = useState<Palette["mode"]>("dark");
  // if (pageProps.isSwiper) {
  //   // @ts-ignore
  //   import("swiper/css");
  // }

  const theme = useMemo(() => {
    // return generateTheme(mode, "#E798D1");
    // return generateTheme(mode, "#35a690");
    // return generateTheme(mode, "#25acb0");
    // return generateTheme(mode, "#ef15d3");
    if (isProd()) {
      return generateTheme(mode);
    }
    return generateTheme(mode, "#d514cc");
  }, [mode]);

  useEffect(() => {
    console.log(process.env.NODE_ENV);
    localStotage = window.localStorage;
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(App);
