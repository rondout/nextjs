import {
  alpha,
  Box,
  Button,
  Grid,
  Switch,
  Typography,
  useTheme,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { BillingTypes } from "../../model/base.model";
import { StyledCard } from "../home/LatestNewsItem";
import InnerContent from "../layouts/InnerContent";
import PricePlanItem from "./PricePlanItem";

const breakPoints = {
  xs: 12,
  md: 6,
  lg: 4,
};

export default function PriceMainTop() {
  const theme = useTheme();
  const pt = useTranslation("price").t;
  const [selectedBillingType, setBillingType] = useState(BillingTypes.ANNUAL);

  const onSwitchChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setBillingType(BillingTypes.ANNUAL);
    } else {
      setBillingType(BillingTypes.MONTHLY);
    }
  };

  return (
    <Box>
      {/* <Box sx={{ height: 984 }}> */}
      <Box
        sx={{ overflow: "hidden" }}
        className="relative-position flex items-start"
      >
        {/* <Box className="relative-position" sx={{ width: 1, height: 1 }}> */}
        <Box
          sx={{
            overflow: "hidden",
            width: 1,
            // height: 1,
            position: "absolute",
            minWidth: 2800,
            height: 624,
          }}
        >
          <Box
            sx={{
              width: 1,
              height: 1,
              position: "absolute",
              backgroundImage: theme.custom.bgLinerGradient,
              borderBottomLeftRadius: "50%",
              borderBottomRightRadius: "50%",
            }}
          ></Box>
        </Box>
        {/* </Box> */}
        <InnerContent sx={{ zIndex: 5, pb: 7 }}>
          <Typography
            textAlign={"center"}
            fontWeight={700}
            variant="h2"
            sx={{ mt: 20, mb: 2 }}
          >
            {pt("mainTitle")}
          </Typography>
          <Typography textAlign={"center"} variant="h5" sx={{ mb: 7.5 }}>
            {pt("subTitle")}
          </Typography>
          <Box className="flex" sx={{ mb: 9 }}>
            <Typography
              variant="body1"
              className="pointer"
              onClick={() => setBillingType(BillingTypes.MONTHLY)}
            >
              {pt("billingByMonth")}
            </Typography>
            <Switch
              onChange={onSwitchChange}
              checked={selectedBillingType === BillingTypes.ANNUAL}
              sx={{ mx: 1 }}
            ></Switch>
            <Typography
              variant="body1"
              className="pointer"
              onClick={() => setBillingType(BillingTypes.ANNUAL)}
            >
              {pt("billingByYear")}
            </Typography>
          </Box>
          <Box sx={{ width: 0.9, m: "auto" }}>
            <Grid container spacing={7}>
              <Grid item {...breakPoints}>
                <StyledCard
                  sx={{
                    bgcolor: alpha(theme.palette.background.default, 0.2),
                    backdropFilter: "blur(25px)",
                    px: 5,
                    py: 8,
                    mb: 1,
                  }}
                  className="flex-btw flex-column"
                  // sx={{ bgcolor: "#000", px: 5, py: 8 }}
                >
                  <Box>
                    <PricePlanItem
                      title="Express"
                      price="$4"
                      desc={pt("perDevicePerYear")}
                    ></PricePlanItem>
                    <Typography sx={{ my: 5 }}>{pt("expressTitle")}</Typography>
                  </Box>
                  <Box className="flex">
                    <Button sx={{ width: 184 }} variant="contained">
                      {pt("select")}
                    </Button>
                  </Box>
                </StyledCard>
              </Grid>
              <Grid item {...breakPoints}>
                <StyledCard
                  sx={{
                    bgcolor: alpha(theme.palette.background.default, 0.2),
                    backdropFilter: "blur(25px)",
                    px: 5,
                    py: 8,
                    mb: 1,
                  }}
                  // sx={{ bgcolor: "#000", px: 5, py: 8 }}
                  className="flex-btw flex-column"
                >
                  <Box>
                    <PricePlanItem
                      title="Pro"
                      price="$3"
                      desc={pt("perDevicePerYear")}
                    ></PricePlanItem>
                    <Typography sx={{ my: 5 }}>{pt("proTitle")}</Typography>
                  </Box>
                  <Box className="flex">
                    <Button sx={{ width: 184 }} variant="contained">
                      {pt("contactBs")}
                    </Button>
                  </Box>
                </StyledCard>
              </Grid>
              <Grid item {...breakPoints}>
                <StyledCard
                  sx={{
                    background: theme.palette.primary.containedHoverBg,
                    backdropFilter: "blur(25px)",
                    px: 5,
                    py: 8,
                    mb: 1,
                    position: "relative",
                  }}
                  // sx={{ bgcolor: "#000", px: 5, py: 8 }}
                >
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    color="#fff"
                    textAlign="center"
                  >
                    Enterprise
                  </Typography>
                  <Typography
                    sx={{ mt: 2, mb: 1 }}
                    variant="h3"
                    color="#fff"
                    fontWeight={700}
                    textAlign="center"
                  >
                    Customer Settings
                  </Typography>
                  <Typography color="#fff" sx={{ my: 5 }}>
                    {pt("enterpriseTitle")}
                  </Typography>
                  <Box className="flex">
                    <Button
                      style={{ backgroundColor: "#fff" }}
                      sx={{ width: 184 }}
                      variant="outlined"
                    >
                      {pt("contactBs")}
                    </Button>
                  </Box>
                  <Box
                    className="abs-position"
                    sx={{
                      right: 0,
                      top: 0,
                      bgcolor: "#E798D1",
                      width: 86,
                      height: 80,
                      borderBottomLeftRadius: 30,
                    }}
                  ></Box>
                </StyledCard>
              </Grid>
            </Grid>
          </Box>
          {/* <p>123</p> */}
          <Box className="flex">
            <Link href="/price/compare">
              <Button size="large" sx={{ mt: 2.5 }}>
                {pt("comparePlanDetail")}
              </Button>
            </Link>
          </Box>
        </InnerContent>
      </Box>
    </Box>
  );
}
