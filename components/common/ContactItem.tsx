import {
  Box,
  Button,
  darken,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import InnerContent from "../layouts/InnerContent";

export default function ContactItem() {
  const mt = useTranslation("main").t;
  const { spacing, palette } = useTheme();
  return (
    <Box
      sx={{
        backgroundImage: "url(/home/img_contact.png)",
        backgroundSize: "cover",
        // bgcolor: (theme) => darken(palette.primary.dark, 0.3),
      }}
    >
      <InnerContent sx={{ py: 20 }}>
        <Typography
          variant="h3"
          fontSize={"3rem"}
          fontWeight={700}
          color="#fff"
          sx={{ mb: 8 }}
          textAlign="center"
        >
          {mt("contactTitle")}
        </Typography>
        <Box
          className="flex"
          sx={{ maxWidth: 428, margin: `0 auto ${spacing(4)}` }}
        >
          <TextField
            sx={{
              height: 48,
              bgcolor: "#fff",
              flex: 1,
              borderTopLeftRadius: spacing(1),
              borderBottomLeftRadius: spacing(1),
              "& input": {
                height: 1,
              },
              "& fieldset": {
                border: "none",
              },
            }}
          ></TextField>
          <Button
            variant="contained"
            sx={{
              height: 48,
              borderRadius: 0,
              borderTopRightRadius: spacing(1),
              borderBottomRightRadius: spacing(1),
            }}
          >
            {mt("trailForFree")}
          </Button>
        </Box>
        <Box className="flex">
          <Typography color={"#fff"}>{mt("noCreditCard")}</Typography>
          <Link href="/">
            <Button sx={{ color: palette.primary.light }}>
              {mt("requestDemo")}
            </Button>
          </Link>
        </Box>
      </InnerContent>
    </Box>
  );
}
