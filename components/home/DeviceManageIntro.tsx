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
import { useMemo, useState } from "react";
import InnerContent from "../layouts/InnerContent";

const breakPoints = {
  xs: 12,
  lg: 6,
};

const rightAccordionItems = [
  {
    title: "quickManage",
    desc: "quickManageDesc",
    img: "/home/home_manage-1.svg",
  },
  {
    title: "contentPermissionTitle",
    desc: "contentPermissionDesc",
    img: "/home/home_manage-2.svg",
  },
  {
    title: "remoteManageTitle",
    desc: "remoteManageDesc",
    img: "/home/home_manage-3.svg",
  },
  {
    title: "fileDeployTitle",
    desc: "fileDeployDesc",
    img: "/home/home_manage-4.svg",
  },
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
  const { background } = theme.palette;
  const [expanded, setExpanded] = useState("quickManage");

  const handleChange = (key: string) => {
    setExpanded(key);
  };

  const imgUrl = useMemo(() => {
    return rightAccordionItems.find((item) => item.title === expanded)?.img;
  }, [expanded]);

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
            {/* <Box sx={{ borderRadius: 6, bgcolor: primary.dark, width: 600 }}> */}
            <Box className="flex" sx={{ width: 1 }}>
              <Image
                style={{
                  marginBottom: -13,
                  maxWidth: 600,
                  width: "100%",
                  height: "auto",
                }}
                src={imgUrl}
                alt=""
                width={600}
                height={400}
              ></Image>
            </Box>
            {/* </Box> */}
          </Grid>
          <Grid
            sx={{ dispaly: "flex", justifyContent: "center" }}
            item
            {...breakPoints}
          >
            <Box className="flex flex-column">
              {rightAccordionItems.map((item) => {
                return (
                  <Box
                    key={item.title}
                    sx={{ bgcolor: background.default, mb: 2 }}
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
