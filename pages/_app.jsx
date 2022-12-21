import { Button, createTheme, ThemeProvider } from "@mui/material";
import { appWithTranslation } from "next-i18next";
import { useMemo, useState } from "react";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  const [mode, setMode] = useState("light");
  const theme = useMemo(() => {
    return createTheme({
      palette: { primary: { main: "#3f51b5" }, mode },
      // typography: {},
    });
  }, [mode]);

  const modeReflect = useMemo(() => {
    if (mode === "light") {
      return "dark";
    } else {
      return "light";
    }
  }, [mode]);

  const changeMode = () => {
    setMode(modeReflect);
  };
  return (
    <ThemeProvider theme={theme}>
      <Button onClick={changeMode}>To {modeReflect}</Button>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(App);
