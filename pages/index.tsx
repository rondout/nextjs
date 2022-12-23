import Layout from "../components/layouts/Layout";
import { alpha, Box, Button, Typography, useTheme } from "@mui/material";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import InnerContent from "../components/layouts/InnerContent";
import Image from "next/image";
import MainTop from "../components/home/MainTop";
import ChooseProfession from "../components/home/ChooseProfession";

export const getStaticProps: GetStaticProps = async function ({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "main"])),
    },
  };
};

export default function Home() {
  const { t } = useTranslation("common");
  const mt = useTranslation("main").t;
  const theme = useTheme();
  return (
    <Layout>
      <MainTop></MainTop>
      <ChooseProfession></ChooseProfession>
    </Layout>
  );
}
