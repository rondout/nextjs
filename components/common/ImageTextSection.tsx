import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { calculateBreakpointsByRatio } from "../../model/tool.model";
import InnerContent from "../layouts/InnerContent";
import MatChip from "../tools/MatChip";

interface ImageTextSectionProps {
  imgUrl: string;
  tag: string;
  title: string;
  subTitle: string;
  linlText: string;
  linkUrl: string;
  imgLeft?: boolean;
}

export class ImageTextSectionPropsFactory implements ImageTextSectionProps {
  constructor(
    public imgUrl: string,
    public tag: string,
    public title: string,
    public subTitle: string,
    public linlText: string,
    public linkUrl: string,
    public imgLeft: boolean = true
  ) {}
}

const [imgBreakPoint, textBreakPoint] = calculateBreakpointsByRatio(530, 600);

const breakPoints = {
  img: {
    xs: 12,
    lg: imgBreakPoint,
  },
  text: {
    xs: 12,
    lg: textBreakPoint,
  },
};

export default function ImageTextSection(props: ImageTextSectionProps) {
  const { imgLeft = true, imgUrl } = props;
  const theme = useTheme();

  const backgroundImage = imgLeft ? undefined : theme.custom.customLinearBg;

  return (
    <Box sx={{ py: 15, backgroundImage }}>
      <InnerContent>
        <Grid container spacing={{ xs: 2, md: 4, lg: 6, xl: 10 }}>
          {imgLeft && (
            <Grid item {...breakPoints.img}>
              <Box sx={{ overflow: "hidden" }} className="flex">
                <Image alt="" src={imgUrl} width={520} height={400}></Image>
              </Box>
            </Grid>
          )}
          <Grid className="flex-start" item {...breakPoints.text}>
            <Box>
              <MatChip label={props.tag}></MatChip>
              <Typography sx={{ mt: 2, mb: 3 }} variant="h4">
                {props.title}
              </Typography>
              <Typography variant="body2">
                <span>{props.subTitle}</span>
                <Link href={props.linkUrl}>
                  <Button size="small">{props.linlText}</Button>
                </Link>
              </Typography>
            </Box>
          </Grid>
          {!imgLeft && (
            <Grid item {...breakPoints.img}>
              <Box sx={{ overflow: "hidden" }} className="flex">
                <Image alt="" src={imgUrl} width={520} height={400}></Image>
              </Box>
            </Grid>
          )}
        </Grid>
      </InnerContent>
    </Box>
  );
}
