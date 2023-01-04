import {
  Box,
  Button,
  Divider,
  Grid,
  Switch,
  Typography,
  useTheme,
} from "@mui/material";
import { useTranslation } from "next-i18next";
// import dynamic from "next/dynamic";
import Link from "next/link";
import { ChangeEvent, Fragment, useEffect, useState } from "react";
import {
  BillingTypes,
  planDetailSections,
  PlanTypes,
} from "../../model/base.model";
import { StyledCard } from "../home/LatestNewsItem";
import InnerContent from "../layouts/InnerContent";
import SvgIcon from "../tools/SvgIcon";

// const DynamicMap = dynamic(() => import("./MapTest"), {
//   ssr: false,
// });

const breakPoints = {
  left: {
    xs: 3,
    md: 4,
    lg: 5,
  },
  right: {
    xs: 9,
    md: 8,
    lg: 7,
  },
};

export default function NewsMainTop() {
  const theme = useTheme();
  const pt = useTranslation("news").t;
  const [selectedBillingType, setBillingType] = useState(BillingTypes.MONTHLY);

  const onSwitchChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setBillingType(BillingTypes.ANNUAL);
    } else {
      setBillingType(BillingTypes.MONTHLY);
    }
  };

  useEffect(() => {
    console.log("MOUNTED");
  }, []);

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
          {/* 计费选择 */}
          <StyledCard
            sx={{
              p: 8,
            }}
          >
            <Grid sx={{ mb: 5 }} container spacing={3}>
              <Grid item {...breakPoints.left}>
                <Box
                  className="flex flex-column items-start"
                  sx={{
                    height: 1,
                  }}
                >
                  <Typography variant="h4">{pt("functionList")}</Typography>
                  <Typography variant="h4">{pt("functionList")}</Typography>
                  <Typography variant="h4">{pt("functionList")}</Typography>
                  <Typography variant="h4">{pt("functionList")}</Typography>
                  <Typography variant="h4">{pt("functionList")}</Typography>
                  <Typography variant="h4">{pt("functionList")}</Typography>
                  <Typography variant="h4">{pt("functionList")}</Typography>
                  <Typography variant="h4">{pt("functionList")}</Typography>
                  <Typography variant="h4">{pt("functionList")}</Typography>
                  <Typography variant="h4">{pt("functionList")}</Typography>
                  <Typography variant="h4">{pt("functionList")}</Typography>
                  <Typography variant="h4">{pt("functionList")}</Typography>
                  <Typography variant="h4">{pt("functionList")}</Typography>
                  <Typography variant="h4">{pt("functionList")}</Typography>
                  <Typography variant="body1">
                    {pt("functionListSub")}
                  </Typography>
                </Box>
              </Grid>
              <Grid item {...breakPoints.right}></Grid>
            </Grid>
          </StyledCard>
        </InnerContent>
      </Box>
    </Box>
  );
}
