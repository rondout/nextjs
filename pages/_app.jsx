import { Button, createTheme, ThemeProvider } from "@mui/material";
import { appWithTranslation } from "next-i18next";
import { useMemo, useState } from "react";
import { Provider } from "react-redux";
import "../styles/globals.css";
import store from "../store";

function App({ Component, pageProps }) {
  // const [mode, setMode] = useState("light");
  // const theme = useMemo(() => {
  //   return createTheme({
  //     palette: { primary: { main: "#3f51b5" }, mode },
  //     // typography: {},
  //   });
  // }, [mode]);

  return (
    <Provider store={store}>
      {/* <Button onClick={changeMode}>To {modeReflect}</Button> */}
      <Component {...pageProps} />
    </Provider>
  );
}

export default appWithTranslation(App);
