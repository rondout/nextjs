import { Box, Divider, Grid, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { LinkItem } from "../../model/tool.model";
import SvgIcon from "../tools/SvgIcon";

const solutionItems = [
  new LinkItem("healthcare", "/solutions/healthcare"),
  new LinkItem("education", "/solutions/education"),
  new LinkItem("retail", "/solutions/retail"),
  new LinkItem("transport", "/solutions/transport"),
  new LinkItem("business", "/solutions/business"),
  new LinkItem("catering", "/solutions/catering"),
];

export default function SolutionMenu() {
  const { t } = useTranslation("common");
  return (
    <Box
      sx={{
        py: { xs: 1, md: 2, lg: 5 },
        px: { xs: 2, md: 4, lg: 8 },
        maxWidth: 425,
      }}
    >
      <Typography variant="body2">{t("solutions")}</Typography>
      <Divider sx={{ mt: 2, mb: 3 }}></Divider>
      <Grid container columnSpacing={10} rowSpacing={3}>
        {solutionItems.map((item) => (
          <Grid item xs={6} key={item.href}>
            <Link href={item.href}>
              <Box
                className="flex-start"
                sx={{ "&:hover>div": { opacity: 1, left: 25 } }}
              >
                <Typography>{t(item.title)}</Typography>
                <Box
                  sx={{
                    opacity: 0,
                    position: "relative",
                    left: 0,
                    transition: "left 0.5s",
                  }}
                >
                  <SvgIcon icon="ic_arrow" width={24} height={24}></SvgIcon>
                </Box>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
