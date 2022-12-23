import { alpha, Box, Grid, Typography, useTheme } from "@mui/material";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import InnerContent from "../layouts/InnerContent";

export default function DeviceManageIntro() {
  const mt = useTranslation("main").t;
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundImage: "url(/home/curved_line_bg-2.svg)",
        backgroundSize: "cover",
        maxWidth: 1920,
        margin: "0 auto",
        pb: 15,
      }}
    >
      <InnerContent>
        <Typography variant="h3" textAlign={"center"} sx={{ pt: 15, mb: 8 }}>
          {mt("deviceManageTitle")}
        </Typography>
      </InnerContent>
    </Box>
  );
}
