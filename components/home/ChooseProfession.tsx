import { Box, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import InnerContent from "../layouts/InnerContent";

export default function ChooseProfession() {
  const mt = useTranslation("main").t;
  return (
    <Box
      sx={{
        backgroundImage: "url(/curved_line_bg.svg)",
        backgroundSize: "cover",
        maxWidth: 1920,
        margin: "0 auto",
      }}
    >
      <InnerContent>
        <Typography variant="h3" textAlign={"center"} sx={{ pt: 15, mb: 8 }}>
          {mt("chooseProfession")}
        </Typography>
        <Box sx={{ height: 500 }}></Box>
      </InnerContent>
    </Box>
  );
}
