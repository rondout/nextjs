import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { Box, Button, createTheme, ThemeProvider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { changeMode } from "../store/reducers/counter";

const name = "Joey Tribiani";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  const mode = useSelector((state) => state.counter.mode);
  const dispatch = useDispatch();
  const [mounted, setMounted] = useState(false);

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        primary: { main: mode === "light" ? "#3f51b5" : "#0082c3" },
        mode: mode,
      },
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

  const changeTheme = (newMode = modeReflect) => {
    console.log(modeReflect);
    // setMode(modeReflect);
    dispatch(changeMode(newMode));
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", newMode);
    }
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    console.log(theme);
    changeTheme(theme);
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Box></Box>;
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{ bgcolor: (theme) => theme.palette.background.default }}
        className={styles.container}
      >
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className={styles.header}>
          <Button onClick={() => changeTheme()}>{mode}</Button>
          {home ? (
            <>
              <Image
                priority
                src="/server.png"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt=""
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <Image
                  priority
                  src="/server.png"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt=""
                />
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/" className={utilStyles.colorInherit}>
                  {name}
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">← Back to home</Link>
          </div>
        )}
      </Box>
    </ThemeProvider>
  );
}
