import { Box, Grid, Typography } from "@mui/material";
import InnerContent from "../layouts/InnerContent";
import SvgIcon from "../tools/SvgIcon";

export class IconTextItem {
  constructor(public iconUrl: string, public title: string) {}
}

interface IconTextSectionProps {
  title: string;
  items: IconTextItem[];
}

const breakPoints = {
  xs: 16,
  sm: 6,
  md: 4,
  lg: 2,
};

export default function IconTextSection(props: IconTextSectionProps) {
  const { items = [], title } = props;

  return (
    <Box sx={{ py: 15 }}>
      <InnerContent>
        <Typography sx={{ mb: 8 }} variant="h4" textAlign="center">
          {title}
        </Typography>
        <Grid container spacing={3}>
          {items.map((item) => (
            <Grid key={item.title} item {...breakPoints}>
              <Box className="flex flex-column">
                <SvgIcon width={96} height={96} icon={item.iconUrl}></SvgIcon>
                <Typography textAlign={"center"} sx={{ mt: 3 }}>
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
