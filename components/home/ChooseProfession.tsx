import { alpha, Box, Grid, lighten, Typography, useTheme } from "@mui/material";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import InnerContent from "../layouts/InnerContent";

const breakPoints = {
  xs: 12,
  sm: 6,
  md: 4,
  lg: 3,
};

const noProfessionBreakPoints = {
  xs: 12,
  lg: 6,
};

class ProfessionItem {
  constructor(
    public title: string,
    public imgUrl: string,
    public href: string
  ) {}
}

const professionItems = [
  new ProfessionItem(
    "healthcare",
    "/home/ic_medcine.svg",
    "/solutions/healthcare"
  ),
  new ProfessionItem(
    "education",
    "/home/ic_education.svg",
    "/solutions/education"
  ),
  new ProfessionItem("retail", "/home/ic_retail.svg", "/solutions/retail"),
  new ProfessionItem(
    "transport",
    "/home/ic_transport.svg",
    "/solutions/transport"
  ),
  new ProfessionItem(
    "bussiness",
    "/home/ic_business.svg",
    "/solutions/bussiness"
  ),
  new ProfessionItem("catering", "/home/ic_hotel.svg", "/solutions/catering"),
];

export default function ChooseProfession() {
  const mt = useTranslation("main").t;
  const theme = useTheme();

  return (
    <Box
      sx={{
        background:
          "linear-gradient(98.09deg, rgba(248, 254, 255, 0.3) 0%, rgba(219, 227, 249, 0.3) 100%)",
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
            {mt("chooseProfession")}
          </Typography>
          <Box sx={{ width: 80 / 100, m: "0 auto" }}>
            <Grid container spacing={5}>
              {professionItems.map((item) => (
                <Grid key={item.title} className="flex" item {...breakPoints}>
                  <Box
                    className="flex flex-column pointer"
                    sx={{
                      userSelect: "none",
                      bgcolor: theme.palette.background.default,
                      height: 192,
                      width: 224,
                      boxShadow: theme.custom.boxShadow,
                      borderRadius: 2,
                      "&:hover": {
                        bgcolor: lighten(theme.palette.primary.main, 0.9),
                      },
                    }}
                  >
                    <Image
                      src={item.imgUrl}
                      width={64}
                      height={64}
                      alt={mt(item.title)}
                    ></Image>
                    <Typography sx={{ mt: 3 }}>{mt(item.title)}</Typography>
                  </Box>
                </Grid>
              ))}
              <Grid item {...noProfessionBreakPoints}>
                <Box
                  sx={{
                    height: 192,
                    bgcolor: theme.palette.background.default,
                    borderRadius: 2,
                    overflow: "hidden",
                  }}
                  className="pointer"
                >
                  <Box
                    sx={{
                      bgcolor: alpha(theme.palette.primary.main, 0.08),
                      height: 1,
                      px: 8,
                    }}
                    className="flex flex-column items-start border-box"
                  >
                    <Typography variant="h6" sx={{ mb: 2 }}>
                      {mt("noProfessionFound")}
                    </Typography>
                    <Link href="/">
                      <Typography color={theme.palette.primary.main}>
                        {mt("contactBs")}
                      </Typography>
                    </Link>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </InnerContent>
      </Box>
    </Box>
  );
}
