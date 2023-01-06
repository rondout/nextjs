import { alpha, Box, Button, Typography, useTheme } from "@mui/material";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import InnerContent from "../layouts/InnerContent";
import { homeContent } from "../../model/base64Imgs";

export default function MainTop() {
  const { t } = useTranslation("common");
  const mt = useTranslation("main").t;
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: theme.custom.bgLinerGradient,
      }}
    >
      <InnerContent sx={{ pt: 15 }}>
        <Typography
          fontWeight={700}
          textAlign={"center"}
          sx={{ mb: 2 }}
          variant="h2"
        >
          {t("mainTitle")}
        </Typography>
        <Typography textAlign={"center"} variant="h5">
          {t("subtitle")}
        </Typography>
        <Box sx={{ mt: 5, mb: 6 }} className="flex">
          <Button sx={{ bgcolor: theme.palette.background.default }}>
            {t("startTrail")}
          </Button>
          <Button variant="contained" sx={{ ml: 5 }}>
            {t("setupDemo")}
          </Button>
        </Box>
        <Box className="flex" sx={{ overflow: "hidden" }}>
          <Image
            style={{ marginBottom: "-1px", width: "100%", height: "auto" }}
            src={homeContent}
            width={1200}
            alt=""
            height={456}
          ></Image>
          {/* <img src={`data:image/svg;base64,${imgurl}`} alt=""></img> */}
        </Box>
      </InnerContent>
    </Box>
  );
}
