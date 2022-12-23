import { alpha, Box, Button, Typography, useTheme } from "@mui/material";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import InnerContent from "../layouts/InnerContent";

export default function MainTop() {
  const { t } = useTranslation("common");
  const mt = useTranslation("main").t;
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: `linear-gradient(180deg, ${alpha(
          theme.palette.primary.main,
          0
        )}, ${alpha(theme.palette.primary.main, 0.12)})`,
      }}
    >
      <InnerContent sx={{}}>
        <Typography
          fontWeight={700}
          textAlign={"center"}
          sx={{ my: 15, mb: 2 }}
          variant="h2"
        >
          {t("mainTitle")}
        </Typography>
        <Typography textAlign={"center"} variant="h5">
          {t("subtitle")}
        </Typography>
        <Box sx={{ mt: 5, mb: 6 }} className="flex">
          <Button sx={{ bgcolor: theme.palette.background.default }}>
            {mt("startTrail")}
          </Button>
          <Button variant="contained" sx={{ ml: 5 }}>
            {t("setupDemo")}
          </Button>
        </Box>
        <Box className="flex" sx={{ overflow: "hidden" }}>
          <Image
            style={{ marginBottom: "-1px" }}
            src="/home/index-content-1.png"
            width={944}
            alt=""
            height={440}
          ></Image>
        </Box>
      </InnerContent>
    </Box>
  );
}
