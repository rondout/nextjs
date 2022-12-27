import { Box, Grid, Typography } from "@mui/material";
import InnerContent from "../layouts/InnerContent";
import { useTranslation } from "next-i18next";

export default function LatestNewsItem() {
  const mt = useTranslation("main").t;
  return (
    <Box
      sx={{ py: 15, backgroundImage: (theme) => theme.custom.pageItemBackImg }}
    >
      <InnerContent>
        <Typography variant="h4" sx={{ mb: 5.5 }}>
          {mt("latestNews")}
        </Typography>
        <Grid container spacing={3}>
          <Grid item>1</Grid>
          <Grid item>2</Grid>
        </Grid>
      </InnerContent>
    </Box>
  );
}
