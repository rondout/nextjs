import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../../components/layouts/Layout";
import PriceCompareTop from "../../components/price/PriceCompareTop";
import ContactItem from "../../components/common/ContactItem";
import NewsMainTop from "../../components/news/NewsMainTop";

export const getStaticProps: GetStaticProps = async function ({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["news", "common"])),
    },
  };
};

export default function News() {
  return (
    <Layout>
      <NewsMainTop></NewsMainTop>
      <ContactItem></ContactItem>
    </Layout>
  );
}
