import {
  Accordion,
  AccordionDetails,
  AccordionProps,
  AccordionSummary,
  alpha,
  Box,
  Button,
  Grid,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { StyledCard } from "../home/LatestNewsItem";
import InnerContent from "../layouts/InnerContent";
import SvgIcon from "../tools/SvgIcon";

const breakPoints = {
  xs: 12,
  md: 6,
};

class TrilItems {
  constructor(
    public icon: string,
    public title: string,
    public subtitle: string
  ) {}
}

const items = [
  new TrilItems("ic_trail", "useBSForFree", "useBSForFreeSub"),
  new TrilItems("ic_demo", "getCustomizedDemo", "getCustomizedDemoSub"),
];

export default function PriceSecondSection() {
  const pt = useTranslation("price").t;
  const theme = useTheme();
  const { primary, background } = theme.palette;
  const [expanded, setExpanded] = useState("quickManage");

  const handleChange = (key: string) => {
    // if (key === expanded) {
    //   setExpanded(null);
    // } else {
    //   setExpanded(key);
    // }
    setExpanded(key);
  };

  return (
    <Box
      sx={{
        background:
          "linear-gradient(145deg, rgba(248, 254, 255, 0.3) 0%, rgba(219, 227, 249, 0.3) 100%)",
      }}
    >
      <Box
        sx={{
          backgroundImage: "url(/home/curved_line_bg-2.svg)",
          backgroundSize: "cover",
          maxWidth: 1920,
          margin: "0 auto",
          pt: 15,
          pb: 13,
        }}
      >
        <InnerContent>
          <Grid container spacing={5}>
            {items.map((item) => {
              return (
                <Grid key={item.title} item {...breakPoints}>
                  <StyledCard sx={{ py: 6, px: 5 }}>
                    <SvgIcon icon={item.icon}></SvgIcon>
                    <Typography
                      variant="h5"
                      fontWeight={700}
                      color={"text.primary"}
                      sx={{ mt: 4, mb: 1 }}
                    >
                      {pt(item.title)}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 4 }}>
                      {pt(item.subtitle)}
                    </Typography>
                    <Link href="/">
                      <Button>{pt("contactBs")}</Button>
                    </Link>
                  </StyledCard>
                </Grid>
              );
            })}
          </Grid>
        </InnerContent>
      </Box>
    </Box>
  );
}
