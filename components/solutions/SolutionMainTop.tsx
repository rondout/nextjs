import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import InnerContent from "../layouts/InnerContent";
import Image from "next/image";
import { calculateBreakpointsByRatio } from "../../model/tool.model";

// const standardRightRatio = 156 / 29;
// const standardLeftRatio = 12 - 156 / 29;

const [standardLeftRatio, standardRightRatio] = calculateBreakpointsByRatio(
  640,
  520
);

const breakPoints = {
  left: {
    xs: 12,
    lg: standardLeftRatio,
  },
  right: {
    xs: 12,
    lg: standardRightRatio,
  },
};

export class SolutionMainTopParamFactory {
  constructor(
    public tag: string,
    public title: string,
    public subtitle: string,
    public imgUrl: string,
    public startBtnTitle: string,
    public reqyestDemoBtnTitle: string
  ) {}
}

export default function SolutionMainTop(props: SolutionMainTopParamFactory) {
  const { custom } = useTheme();

  return (
    <Box sx={{ backgroundImage: custom.bgLinerGradient, py: 16.5 }}>
      <InnerContent>
        <Grid container spacing={{ xs: 2, md: 3, lg: 5 }}>
          <Grid item {...breakPoints.left}>
            <Box>
              <Typography color="primary">{props.tag}</Typography>
              <Typography fontWeight={700} variant="h2" sx={{ mt: 1, mb: 5 }}>
                {props.title}
              </Typography>
              <Typography variant="h5" sx={{ mb: 5 }}>
                {props.subtitle}
              </Typography>
              <Box className="flex-start flex-wrap">
                <Button
                  sx={{ mr: 3, minWidth: 160 }}
                  style={{ backgroundColor: "#fff" }}
                >
                  {props.startBtnTitle}
                </Button>
                <Button variant="contained" sx={{ minWidth: 160 }}>
                  {props.reqyestDemoBtnTitle}
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item {...breakPoints.right}>
            <Box sx={{ height: 360, overflow: "hidden" }} className="flex">
              <Image src={props.imgUrl} width={520} height={360} alt=""></Image>
            </Box>
          </Grid>
        </Grid>
      </InnerContent>
    </Box>
  );
}
