import { Avatar, Box, Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import InnerContent from "../layouts/InnerContent";

export class FunctionImgDisplayItem {
  constructor(public imgUrl: string, public title: string) {}
}

interface FunctionImgDisplaySectionProps {
  title: string;
  items: FunctionImgDisplayItem[];
}

const breakPoints = {
  xs: 12,
  sm: 6,
  md: 4,
};

export default function FunctionImgDisplaySection(
  props: FunctionImgDisplaySectionProps
) {
  const theme = useTheme();
  const { title, items = [] } = props;

  return (
    <Box
      sx={{
        backgroundImage: theme.custom.functionItemLinerBg,
        py: 15,
      }}
    >
      <InnerContent>
        <Typography textAlign={"center"} variant="h4" sx={{ mb: 8 }}>
          {title}
        </Typography>
        <Grid
          container
          columnSpacing={{ xs: 2, md: 4, lg: 7 }}
          rowSpacing={{ xs: 2, md: 3, lg: 5 }}
        >
          {items.map((item, index) => (
            <Grid key={index} item {...breakPoints}>
              <Box
                className="flex flex-column"
                sx={{
                  p: 3,
                  pb: 5,
                  boxShadow: theme.custom.funtionCardBoxShadow,
                  borderRadius: 2,
                }}
              >
                <Image
                  src={item.imgUrl}
                  style={{ width: "100%", height: "auto" }}
                  alt=""
                  width={312}
                  height={216}
                ></Image>
                <Typography variant="h6" sx={{ pt: 3 }}>
                  {item.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </InnerContent>
    </Box>
  );
}
