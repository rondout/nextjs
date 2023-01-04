import { Box, Button, Typography, useTheme } from "@mui/material";
import { PropsWithChildren } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Head from "next/head";
import styles from "./layout.module.css";
import LayoutFooter from "./LayoutFooter";
import InnerContent from "./InnerContent";
import MatDropdown from "../tools/MatDropdown";
import SolutionMenu from "./SolutionMenu";
import SvgIcon from "../tools/SvgIcon";
import SupportMenu from "./SupportMenu";

interface LayoutProps {
  title?: string;
}

export default function Layout(props: PropsWithChildren<LayoutProps>) {
  // const t = useTranslation("common").t;
  const { t } = useTranslation("common");
  const theme = useTheme();

  const { title = "BlueSphere MDM", children } = props;

  return (
    <Box sx={{ bgcolor: theme.palette.background.default }}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          zIndex: 10,
          bgcolor: theme.palette.background.default,
          boxShadow: theme.custom.boxShadow,
          position: "sticky",
          top: 0,
        }}
      >
        <header className={styles.headerTop + " flex-end content-item"}>
          <Link href={"/"}>
            <Typography
              color={(theme) => theme.palette.text.secondary}
              variant="body3"
            >
              {t("demo")}
            </Typography>
          </Link>
          <Link href={"/api/hello"}>
            <Typography
              color={(theme) => theme.palette.text.secondary}
              sx={{ ml: 3 }}
              variant="body3"
            >
              {t("login")}
            </Typography>
          </Link>
        </header>
        <InnerContent
          sx={{
            height: 64,
            bgcolor: theme.palette.background.default,
          }}
          className="flex-btw"
        >
          <Link href="/">
            <Typography variant="h4">BlueSphere</Typography>
          </Link>
          <Box sx={{ display: { xs: "none", lg: "block" } }}>
            <Box className="flex">
              <Box sx={{ px: 2 }}>
                {/* <Link href={"/solutions/retail"}>
              </Link> */}
                <MatDropdown
                  triggerMode="hover"
                  menuSx={{
                    boxShadow:
                      "0px 2px 8px 4px rgba(0, 72, 106, 0.12) !important",
                  }}
                  trigger={
                    <Typography className="pointer flex-start" variant="body2">
                      <span style={{ marginRight: "4px" }}>
                        {t("solutions")}
                      </span>
                      <SvgIcon
                        width={16}
                        height={16}
                        icon="ic_dropdown"
                      ></SvgIcon>
                    </Typography>
                  }
                >
                  <SolutionMenu></SolutionMenu>
                </MatDropdown>
              </Box>
              <Box sx={{ px: 2 }}>
                <Link href={"/price"}>
                  <Typography variant="body2">{t("price")}</Typography>
                </Link>
              </Box>
              <Box sx={{ px: 2 }}>
                <Link href={"/"}>
                  <Typography variant="body2">{t("cooperator")}</Typography>
                </Link>
              </Box>
              <Box sx={{ px: 2 }}>
                {/* <Link href={"/solutions/retail"}>
              </Link> */}
                <MatDropdown
                  triggerMode="hover"
                  menuSx={{
                    boxShadow:
                      "0px 2px 8px 4px rgba(0, 72, 106, 0.12) !important",
                  }}
                  trigger={
                    <Typography className="pointer flex-start" variant="body2">
                      <span style={{ marginRight: "4px" }}>{t("support")}</span>
                      <SvgIcon
                        width={16}
                        height={16}
                        icon="ic_dropdown"
                      ></SvgIcon>
                    </Typography>
                  }
                >
                  <SupportMenu></SupportMenu>
                </MatDropdown>
              </Box>
              <Box sx={{ px: 2 }}>
                <Link href={"/"}>
                  <Typography variant="body2">{t("contact")}</Typography>
                </Link>
              </Box>
              <Link href={"/"}>
                <Button sx={{ ml: 1.5 }} variant="contained">
                  {t("signUp")}
                </Button>
              </Link>
            </Box>
          </Box>
        </InnerContent>
      </Box>

      <main>{children}</main>
      <LayoutFooter></LayoutFooter>
    </Box>
  );
}
