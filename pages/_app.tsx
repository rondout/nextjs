import "../styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { alpha, createTheme, Palette, ThemeProvider } from "@mui/material";
import React, { useMemo, useState } from "react";
// import "leaflet/dist/leaflet.css";

const baseFontSize = 14;

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true;
  }
}

declare module "@mui/material/styles" {
  interface PaletteColor {
    containedHoverBg?: string;
  }
  interface SimplePaletteColorOptions {
    containedHoverBg?: string;
  }
  interface TypographyVariants {
    body3: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
  }
  interface Theme {
    custom: {
      pageItemBackImg: string;
      boxShadow: string;
      bgLinerGradient: string;
      priceFormBgcolor: string;
      customLinearBg: string;
    };
    // typography
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    custom?: {
      pageItemBackImg?: string;
      boxShadow?: string;
      bgLinerGradient?: string;
      priceFormBgcolor?: string;
      customLinearBg?: string;
    };
  }
}
const generateTheme = (mode: Palette["mode"], themeColor = "#3f51b5") => {
  const secondaryTextColor = "rgba(13, 16, 36, 0.64)";
  const primaryTextColor = "rgba(13, 16, 36, 0.88)";
  return createTheme({
    custom: {
      pageItemBackImg: "linear-gradient(98.9deg, #F3FDFF 0%, #D1DEFF 100%)",
      boxShadow: `0px 2px 6px ${alpha(themeColor, 0.08)}`,
      bgLinerGradient: `linear-gradient(180deg, ${alpha(
        themeColor,
        0
      )}, ${alpha(themeColor, 0.12)})`,
      priceFormBgcolor: "#EFF5FA",
      customLinearBg:
        "linear-gradient(98.09deg, rgba(248, 254, 255, 0.3) 0%, rgba(219, 227, 249, 0.3) 100%)",
    },
    palette: {
      primary: {
        main: themeColor,
        containedHoverBg: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), ${themeColor}`,
      },
      mode,
      text: { secondary: secondaryTextColor },
    },
    typography: {
      // fontFamily: "HarmonyOS_Sans_SC_Regular",
      // fontFamily: "Inter",
      fontSize: (baseFontSize / 16) * 14,
      body1: {
        fontSize: "1rem",
        color: primaryTextColor,
      },
      body2: {
        color: secondaryTextColor,
        fontSize: "0.875rem",
      },
      body3: {
        fontSize: 12 / 16 + "rem",
      },
      subtitle1: {
        color: secondaryTextColor,
        fontSize: "0.875rem",
      },
      subtitle2: {
        color: secondaryTextColor,
        fontSize: "0.76rem",
      },
      h2: {
        color: primaryTextColor,
        fontSize: "3.5rem",
      },
      h3: {
        color: primaryTextColor,
        fontSize: "3rem",
      },
      h4: {
        fontSize: "2rem",
        color: primaryTextColor,
        fontWeight: 500,
      },
      h5: {
        fontSize: "1.5rem",
        color: secondaryTextColor,
      },
      h6: {
        fontSize: "1.25rem",
        color: "rgba(13, 16, 36, 0.88)",
        fontWeight: 500,
      },
    },
  });
};

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
