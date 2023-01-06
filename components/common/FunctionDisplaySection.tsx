import { Avatar, Box, Grid, Typography, useTheme } from "@mui/material";
import InnerContent from "../layouts/InnerContent";

export class FunctionDisplayItem {
  constructor(
    public imgUrl: string,
    public title: string,
    public subtitle: string
  ) {}
}

interface FunctionDisplaySectionProps {
  title: string;
  items: FunctionDisplayItem[];
}

const breakPoints = {
  xs: 12,
  sm: 6,
  md: 4,
  lg: 3,
};

export default function FunctionDisplaySection(
  props: FunctionDisplaySectionProps
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
          columnSpacing={{ xs: 2, md: 3, lg: 5 }}
          rowSpacing={{ xs: 4, md: 6, lg: 10 }}
        >
          {items.map((item, index) => (
            <Grid key={index} item {...breakPoints}>
              <Box className="flex flex-column">
                <Avatar
                  src={item.imgUrl}
                  sx={{ height: 80, width: 80 }}
                  variant="rounded"
                >
                  {""}
                </Avatar>
                <Typography variant="h6" sx={{ py: 3 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2">{item.subtitle}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </InnerContent>
    </Box>
  );
}
