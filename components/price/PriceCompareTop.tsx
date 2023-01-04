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
import PricePlanItem from "./PricePlanItem";

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

export default function PriceCompareTop() {
  const theme = useTheme();
  const pt = useTranslation("price").t;
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
          <StyledCard
            sx={{
              p: 8,
            }}
          >
            <Grid sx={{ mb: 5 }} container spacing={3}>
              <Grid item {...breakPoints.left}>
                <Box
                  className="flex flex-column items-start"
                  sx={{ height: 1 }}
                >
                  <Typography variant="h4">{pt("functionList")}</Typography>
                  <Typography variant="body1">
                    {pt("functionListSub")}
                  </Typography>
                </Box>
              </Grid>
              <Grid item {...breakPoints.right}>
                <Box className="flex-btw">
                  {/* <p>1</p> */}
                  <PricePlanItem
                    sx={{ width: 0.5 }}
                    title="Express"
                    price="$4"
                    desc={pt("perDevicePerYear")}
                  ></PricePlanItem>
                  <Divider orientation="vertical" flexItem></Divider>
                  <PricePlanItem
                    sx={{ width: 0.5 }}
                    title="Pro"
                    price="$3"
                    desc={pt("perDevicePerYear")}
                  ></PricePlanItem>
                </Box>
              </Grid>
            </Grid>
            {/* 功能详情比较 */}
            {planDetailSections.map((detail) => {
              return (
                <Grid key={detail.title} sx={{ mt: 4 }} container spacing={4.5}>
                  <Grid item xs={12}>
                    <Typography variant="h6">{pt(detail.title)}</Typography>
                  </Grid>
                  {detail.items.map((item) => {
                    return (
                      <Fragment key={item.title}>
                        <Grid item {...breakPoints.left}>
                          <Typography>{pt(item.title)}</Typography>
                        </Grid>
                        <Grid item {...breakPoints.right}>
                          <Box className="flex-around">
                            <Typography className="flex flex-1">
                              {typeof item.express === "string"
                                ? pt(item.express)
                                : item.express && (
                                    <SvgIcon
                                      icon="ic_toast_succes"
                                      width={20}
                                      height={20}
                                    ></SvgIcon>
                                  )}
                            </Typography>
                            <Typography className="flex flex-1">
                              {typeof item.pro === "string"
                                ? pt(item.pro)
                                : item.pro && (
                                    <SvgIcon
                                      icon="ic_toast_succes"
                                      width={20}
                                      height={20}
                                    ></SvgIcon>
                                  )}
                            </Typography>
                          </Box>
                        </Grid>
                      </Fragment>
                    );
                  })}
                </Grid>
              );
            })}
          </StyledCard>
        </InnerContent>
      </Box>
    </Box>
  );
}
