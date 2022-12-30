import {
  Box,
  Button,
  Card,
  Grid,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import InnerContent from "../layouts/InnerContent";
import { useTranslation } from "next-i18next";
import { useMemo } from "react";
import Image from "next/image";
import { NewsItem, NewTypeTitleMap } from "../../model/home.model";
import { getMonthTitle } from "../../model/tool.model";
import MatChip from "../tools/MatChip";

const breakPoints = {
  left: {
    xs: 12,
    sm: 6,
    lg: 4,
  },
  right: {
    xs: 12,
    lg: 4,
  },
  rightInner: {
    xs: 12,
    sm: 6,
    lg: 12,
  },
};

export const StyledCard = styled(Card)(({ theme }) => {
  return {
    padding: theme.spacing(3),
    height: "100%",
    borderRadius: theme.shape.borderRadius * 2,
    boxShadow: theme.custom.boxShadow,
    boxSizing: "border-box",
  };
});

export default function LatestNewsItem(props: { news: NewsItem[] }) {
  const mt = useTranslation("main").t;
  const theme = useTheme();

  const newsWithImgs = useMemo(() => {
    const [item1, item2] = props.news;
    return [item1, item2];
  }, [props.news]);

  const newsWithoutImgs = useMemo(() => {
    return [props.news[2], props.news[3]].filter((v) => !!v);
  }, [props.news]);

  return (
    <Box
      sx={{ py: 15, backgroundImage: (theme) => theme.custom.pageItemBackImg }}
    >
      <InnerContent>
        <Typography variant="h4" sx={{ mb: 5.5 }}>
          {mt("latestNews")}
        </Typography>
        <Grid container spacing={3}>
          {newsWithImgs.map((item, index) => {
            return (
              <Grid key={index} item {...breakPoints.left}>
                <StyledCard
                  sx={{
                    display: "flex",
                    height: 460,
                  }}
                  className="border-box flex-column"
                >
                  <Box
                    sx={{ height: 216, width: 1, overflow: "hidden", mb: 3 }}
                  >
                    <Image
                      src={item.imgUrl}
                      height={216}
                      width={336}
                      alt=""
                    ></Image>
                  </Box>
                  <Box
                    className="flex-start flex-nowrap items-start"
                    sx={{ flex: 1 }}
                  >
                    <Box sx={{ mr: 3 }}>
                      <Typography variant="h6" color={"rgba(13, 16, 36, 0.4)"}>
                        {getMonthTitle(item.createdTime).title}
                      </Typography>
                      <Typography variant="h6" fontWeight={700}>
                        {getMonthTitle(item.createdTime).dateNumber}
                      </Typography>
                    </Box>
                    <Box
                      className="flex-btw flex-column items-end"
                      sx={{ flex: 1, height: 1 }}
                    >
                      <Box>
                        <MatChip
                          label={mt(NewTypeTitleMap.get(item.type))}
                        ></MatChip>
                        <Typography
                          className="text-ellipsis"
                          sx={{ mt: 1.5, mb: 5, WebkitLineClamp: 2 }}
                        >
                          {item.title}
                        </Typography>
                      </Box>
                      <Box className="flex-end">
                        <Button variant="contained">{mt("viewDetail")}</Button>
                      </Box>
                    </Box>
                  </Box>
                </StyledCard>
              </Grid>
            );
          })}
          <Grid item {...breakPoints.right}>
            <Grid container spacing={3}>
              {newsWithoutImgs.map((item, index) => {
                return (
                  <Grid key={index} item {...breakPoints.rightInner}>
                    <StyledCard sx={{ height: 218 }}>
                      <Box
                        className="flex-start flex-nowrap items-start"
                        sx={{ flex: 1 }}
                      >
                        <Box sx={{ mr: 3 }}>
                          <Typography
                            variant="h6"
                            color={"rgba(13, 16, 36, 0.4)"}
                          >
                            {getMonthTitle(item.createdTime).title}
                          </Typography>
                          <Typography variant="h6" fontWeight={700}>
                            {getMonthTitle(item.createdTime).dateNumber}
                          </Typography>
                        </Box>
                        <Box
                          className="flex-btw flex-column items-end"
                          sx={{ flex: 1, height: 1 }}
                        >
                          <Box>
                            <MatChip
                              label={mt(NewTypeTitleMap.get(item.type))}
                            ></MatChip>
                            <Typography
                              variant="body1"
                              className="text-ellipsis"
                              sx={{ mt: 1.5, mb: 5, WebkitLineClamp: 2 }}
                            >
                              {item.title}
                            </Typography>
                          </Box>
                          <Box className="flex-end">
                            <Button variant="contained">
                              {mt("viewDetail")}
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    </StyledCard>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </InnerContent>
    </Box>
  );
}
