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
  // 这里的Component指的是渲染的page， pageProps是这个page的props  他可以使来自getStaticProps、getServerSideProps等
  const [mode, setMode] = useState<Palette["mode"]>("light");
  // const [mode, setMode] = useState<Palette["mode"]>("dark");

  // 全局CSS可以按需导入
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
    // 在useEffect里面可以安全的访问localStorage、window等浏览器API和对象
    localStotage = window.localStorage;
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(App);
