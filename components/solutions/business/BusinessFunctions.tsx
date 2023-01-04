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
  new CardItem("ic_register", "saveTime", "saveTimeSubtitle"),
  new CardItem("ic_kiosk_lock", "easyToLearn", "easyToLearnSubtitle"),
  new CardItem("ic_remote_view", "expandable", "expandableSubtitle"),
];

export default function BusinessFunctions() {
  const t = useTranslation("business").t;
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
          pt: 15,
          backgroundImage: "url(/home/curved_line_bg.svg)",
        }}
      >
        <InnerContent>
          <Typography variant="h4" textAlign={"center"}>
            {t("functionTitle")}
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 8, mt: 3 }}>
            {t("functionSubTitle")}
          </Typography>
          <Box sx={{ width: 100 / 100, m: "0 auto" }}>
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
                      height: 1,
                      px: 3,
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
