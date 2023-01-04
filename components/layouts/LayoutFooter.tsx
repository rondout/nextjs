import {
  Box,
  Grid,
  Typography,
  Link as MuiLink,
  Button,
  Divider,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { LinkItem } from "../../model/tool.model";
import InnerContent from "./InnerContent";

const breakPoints = {
  xs: 12,
  md: 6,
  lg: 4,
};

const solutionItems = [
  new LinkItem("healthcare", "/solutions/healthcare"),
  new LinkItem("education", "/solutions/education"),
  new LinkItem("retail", "/solutions/retail"),
  new LinkItem("transport", "/solutions/transport"),
  new LinkItem("business", "/solutions/business"),
  new LinkItem("catering", "/solutions/catering"),
];

const supportItems = [
  new LinkItem("productDoc", "/documents"),
  new LinkItem("blogs", "/blogs"),
  new LinkItem("news", "/news"),
  new LinkItem("aboutBs", "/about"),
  new LinkItem("price", "/price"),
  new LinkItem("cooperator", "/partner"),
];

const privacyItems = [
  new LinkItem("privacy", "/privacy"),
  new LinkItem("termsOfUse", "/privacy"),
  new LinkItem("cookies", "/privacy"),
];

class SocialMedia {
  constructor(public iconUrl: string, public href: string) {}
}

const socialMedias = [
  new SocialMedia("/home/ic_twitter.svg", "ic_twitter"),
  new SocialMedia("/home/ic_youtube.svg", "ic_youtube"),
  new SocialMedia("/home/ic_bilibili.svg", "bilibili"),
];

export default function LayoutFooter() {
  const mt = useTranslation("common").t;

  return (
    <Fragment>
      <InnerContent sx={{ pt: 15 }}>
        <Grid spacing={{ xs: 2, md: 5, lg: 12 }} container>
          <Grid sx={{ pb: 10 }} item {...breakPoints}>
            <Box>
              <Typography variant="h4">BlueSphere</Typography>
              <Typography variant="body2" sx={{ mt: 3, mb: 13.5 }}>
                {mt("footer.leftSubTtitle")}
              </Typography>
              <Box className="flex-start">
                {socialMedias.map((item) => (
                  <Link href={item.href} key={item.iconUrl}>
                    <Image
                      style={{ marginRight: 8 }}
                      alt=""
                      src={item.iconUrl}
                      height={24}
                      width={24}
                    ></Image>
                  </Link>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid sx={{ pb: 10 }} item {...breakPoints}>
            <Box className="flex-around">
              <Box>
                <Link href="/">
                  <Box
                    sx={{
                      mb: 3.5,
                      color: (theme) => theme.palette.primary.main,
                    }}
                    className="pointer"
                  >
                    {mt("solutions")}
                  </Box>
                </Link>
                {solutionItems.map((item) => (
                  <Link key={item.title} href={item.href}>
                    <Typography variant="body2" sx={{ mb: 1.5 }}>
                      {mt(item.title)}
                    </Typography>
                  </Link>
                ))}
              </Box>
              <Box>
                <Link href="/">
                  <Box
                    sx={{
                      mb: 3.5,
                      color: (theme) => theme.palette.primary.main,
                    }}
                    className="pointer"
                  >
                    {mt("support")}
                  </Box>
                </Link>
                {supportItems.map((item) => (
                  <Link key={item.title} href={item.href}>
                    <Typography variant="body2" sx={{ mb: 1.5 }}>
                      {mt(item.title)}
                    </Typography>
                  </Link>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid sx={{ pb: 10 }} item {...breakPoints}>
            <Typography variant="body2">{mt("requestDemoContent")}</Typography>
            <Button
              sx={{ mt: 5, width: 200, height: 48, borderRadius: 2 }}
              size="large"
              variant="contained"
            >
              {mt("requestDemo")}
            </Button>
          </Grid>
        </Grid>
      </InnerContent>
      <InnerContent sx={{ pb: 10 }} className="flex-btw flex-wrap">
        <Typography sx={{ mb: 10 }} variant="body2">
          Copyright @ 2022 BlueSphere. Inc. All Rights Reserved.
        </Typography>
        <Box sx={{ mb: 10 }} className="flex">
          {privacyItems.map((item, index) => (
            <Box key={item.title} className="flex">
              <Link href={item.href}>
                <Typography variant="body2">{mt(item.title)}</Typography>
              </Link>
              {index <= 1 && (
                <Divider
                  sx={{ mx: 1.5, height: 12 }}
                  orientation="vertical"
                ></Divider>
              )}
            </Box>
          ))}
        </Box>
      </InnerContent>
    </Fragment>
  );
}
