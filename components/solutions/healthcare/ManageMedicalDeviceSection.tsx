import { Box, Grid, lighten, Typography, useTheme } from "@mui/material";
import { useTranslation } from "next-i18next";
import InnerContent from "../../layouts/InnerContent";
import SvgIcon from "../../tools/SvgIcon";

const breakPoints = {
  xs: 12,
  // : 6,
  md: 4,
};

class CardItem {
  constructor(
    public icon: string,
    public title: string,
    public subtitle: string
  ) {}
}

const cardItems = [
  new CardItem("ic_register", "zeroTouchRegist", "zeroTouchRegistSubtitle"),
  new CardItem("ic_kiosk_lock", "kioskMode", "kioskModeSubtitle"),
  new CardItem(
    "ic_remote_view",
    "remoteSupervision",
    "remoteSupervisionSubtitle"
  ),
];

export default function ManageMedicalDeviceSection() {
  const t = useTranslation("healthcare").t;
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: theme.custom.customLinearBg,
        // backgroundImage: "url(/home/curved_line_bg.svg)",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          margin: "0 auto",
          pb: 15,
          maxWidth: 1920,
          backgroundImage: "url(/home/curved_line_bg.svg)",
        }}
      >
        <InnerContent>
          <Typography variant="h4" textAlign={"center"} sx={{ pt: 15, mb: 8 }}>
            {t("manageMedicalDeviceTitle")}
          </Typography>
          <Box sx={{ width: 95 / 100, m: "0 auto" }}>
            <Grid container spacing={7}>
              {cardItems.map((item) => (
                <Grid key={item.title} item {...breakPoints}>
                  <Box
                    className="pointer border-box"
                    sx={{
                      userSelect: "none",
                      bgcolor: theme.palette.background.default,
                      boxShadow: theme.custom.boxShadow,
                      borderRadius: 2,
                      px: 3,
                      height: 1,
                      py: 5,
                      "&:hover": {
                        bgcolor: lighten(theme.palette.primary.main, 0.9),
                      },
                    }}
                  >
                    <SvgIcon icon={item.icon} width={60} height={60}></SvgIcon>
                    <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
                      {t(item.title)}
                    </Typography>
                    <Typography variant="body2">{t(item.subtitle)}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </InnerContent>
      </Box>
    </Box>
  );
}
