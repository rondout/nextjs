import Layout from "../components/layouts/Layout";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import MainTop from "../components/home/MainTop";
import ChooseProfession from "../components/home/ChooseProfession";
import DeviceManageIntro from "../components/home/DeviceManageIntro";

export const getStaticProps: GetStaticProps = async function ({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "main"])),
    },
  };
};

export default function Home() {
  return (
    <Layout>
      <MainTop></MainTop>
      <ChooseProfession></ChooseProfession>
      <DeviceManageIntro></DeviceManageIntro>
    </Layout>
  );
}
