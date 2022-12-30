import {
  Accordion,
  AccordionDetails,
  AccordionProps,
  AccordionSummary,
  alpha,
  Box,
  Grid,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import InnerContent from "../layouts/InnerContent";

const breakPoints = {
  xs: 12,
  lg: 6,
};

const rightAccordionItems = [
  { title: "quicManage", desc: "quicManageDesc" },
  { title: "contentPermissionTitle", desc: "quicManageDesc" },
  { title: "remoteManageTitle", desc: "quicManageDesc" },
  { title: "fileDeployTitle", desc: "quicManageDesc" },
];

export const StyledAccordion = styled((props: AccordionProps) => {
  return <Accordion disableGutters square {...props}></Accordion>;
})(({ theme }) => {
  const lightThemeColor = alpha(theme.palette.primary.main, 0.08);
  return {
    borderRadius: theme.spacing(1),
    boxShadow: "none",
    backgroundColor: lightThemeColor,
    "&.Mui-expanded": {
      boxShadow: theme.custom.boxShadow,
      backgroundColor: theme.palette.background.default,
    },
  };
});

export default function DeviceManageIntro() {
  const mt = useTranslation("main").t;
  const theme = useTheme();
  const { primary, background } = theme.palette;
  const [expanded, setExpanded] = useState("quicManage");

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
        backgroundImage: "url(/home/curved_line_bg-2.svg)",
        backgroundSize: "cover",
        maxWidth: 1920,
        margin: "0 auto",
        pb: 15,
      }}
    >
      <InnerContent>
        <Typography variant="h4" textAlign={"center"} sx={{ pt: 15, mb: 8 }}>
          {mt("deviceManageTitle")}
        </Typography>
        <Grid container spacing={6}>
          <Grid
            sx={{ dispaly: "flex", justifyContent: "center" }}
            item
            {...breakPoints}
          >
            <Box sx={{ borderRadius: 6, bgcolor: primary.dark, width: 600 }}>
              <Image
                style={{ marginBottom: -13 }}
                src="/home/device_manage.png"
                alt=""
                width={600}
                height={440}
              ></Image>
            </Box>
          </Grid>
          <Grid
            sx={{ dispaly: "flex", justifyContent: "center" }}
            item
            {...breakPoints}
          >
            <Box>
              {rightAccordionItems.map((item) => {
                return (
                  <Box
                    key={item.title}
                    sx={{ bgcolor: background.default, width: 576, mb: 2 }}
                  >
                    <StyledAccordion
                      expanded={expanded === item.title}
                      onChange={() => handleChange(item.title)}
                    >
                      <AccordionSummary
                        sx={{ px: 3 }}
                        expandIcon={
                          <Image
                            src="/icon/ic_arrow_down.svg"
                            alt=""
                            width={24}
                            height={24}
                          ></Image>
                        }
                      >
                        <Typography variant="h6" sx={{ my: 2 }}>
                          {mt(item.title)}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails sx={{ px: 3 }}>
                        <Typography sx={{ mb: 1 }} variant="body2">
                          {mt(item.desc)}
                        </Typography>
                      </AccordionDetails>
                    </StyledAccordion>
                  </Box>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </InnerContent>
    </Box>
  );
}
