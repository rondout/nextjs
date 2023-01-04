import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import { useMemo } from "react";
import { BillingTypes, PlanTypes } from "../../model/base.model";
import InnerContent from "../layouts/InnerContent";
import MatSelect, { MatSelectOptionFactory } from "../tools/MatSelect";
import PhoneNumberInput from "../tools/PhoneNumberInput";

const breakPoints = {
  xs: 12,
  lg: 6,
};

enum DeviceQualtities {
  D15 = "15-25",
  D25 = "26-35",
}

const namesInput = ["firstName", "lastName"];

export default function PriceForm() {
  const theme = useTheme();
  const pt = useTranslation("price").t;

  const deviceQualtityOptions = useMemo(
    () => [
      new MatSelectOptionFactory(
        DeviceQualtities.D15,
        pt("deviceQuantityLabels.D15")
      ),
      new MatSelectOptionFactory(
        DeviceQualtities.D25,
        pt("deviceQuantityLabels.D25")
      ),
    ],
    [pt]
  );

  const planTypeOptions = useMemo(
    () => [
      new MatSelectOptionFactory(PlanTypes.EXPRESS, pt("planTypes.EXPRESS")),
      new MatSelectOptionFactory(PlanTypes.PRO, pt("planTypes.PRO")),
      new MatSelectOptionFactory(
        PlanTypes.ENTERPRISE,
        pt("planTypes.ENTERPRISE")
      ),
    ],
    [pt]
  );

  const billingTypeOptions = useMemo(
    () => [
      new MatSelectOptionFactory(
        BillingTypes.ANNUAL,
        pt("billingTypes.ANNUAL")
      ),
      new MatSelectOptionFactory(
        BillingTypes.MONTHLY,
        pt("billingTypes.MONTHLY")
      ),
    ],
    [pt]
  );

  return (
    <Box sx={{ bgcolor: theme.custom.priceFormBgcolor, py: 15 }}>
      <InnerContent>
        <Typography sx={{ mb: 5.5 }} textAlign="center" variant="h4">
          {pt("discussPrice")}
        </Typography>
        <Box maxWidth={552} m="0 auto">
          {/* 姓名 */}
          <Grid sx={{ mb: 2 }} container rowSpacing={2} columnSpacing={2}>
            {namesInput.map((item) => (
              <Grid key={item} item {...breakPoints}>
                <Box>
                  <Typography sx={{ mb: 0.5 }} variant="body2">
                    {pt(item)}
                  </Typography>
                  <TextField
                    placeholder={pt(item)}
                    sx={{ bgcolor: theme.palette.background.default }}
                    fullWidth
                    size="small"
                  ></TextField>
                </Box>
              </Grid>
            ))}
          </Grid>
          {/* 电子邮件 */}
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ mb: 0.5 }} variant="body2">
              {pt("workEmail")}
            </Typography>
            <TextField
              sx={{ bgcolor: theme.palette.background.default }}
              fullWidth
              size="small"
            ></TextField>
          </Box>
          {/* 电话号码 */}
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ mb: 0.5 }} variant="body2">
              {pt("phoneNumber")}
            </Typography>
            <PhoneNumberInput
              country="us"
              onCountryChange={() => {}}
              inputProps={{
                value: "",
                sx: { bgcolor: theme.palette.background.default },
              }}
            ></PhoneNumberInput>
          </Box>
          {/* 设备数量 */}
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ mb: 0.5 }} variant="body2">
              {pt("numberOfDevice")}
            </Typography>
            <MatSelect
              options={deviceQualtityOptions}
              value=""
              sx={{ bgcolor: theme.palette.background.default }}
            ></MatSelect>
          </Box>
          {/* 价格计划 */}
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ mb: 0.5 }} variant="body2">
              {pt("pricePlan")}
            </Typography>
            <MatSelect
              options={planTypeOptions}
              value=""
              sx={{ bgcolor: theme.palette.background.default }}
            ></MatSelect>
          </Box>
          {/* 支付方式 */}
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ mb: 0.5 }} variant="body2">
              {pt("billing")}
            </Typography>
            <MatSelect
              options={billingTypeOptions}
              value=""
              sx={{ bgcolor: theme.palette.background.default }}
            ></MatSelect>
          </Box>
          <Button
            sx={{ height: 48, mt: 3 }}
            variant="contained"
            size="large"
            fullWidth
          >
            {pt("requestPrice")}
          </Button>
        </Box>
      </InnerContent>
    </Box>
  );
}
