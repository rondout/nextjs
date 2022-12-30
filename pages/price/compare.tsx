import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../../components/layouts/Layout";
import PriceForm from "../../components/price/PriceForm";
import PriceCompareTop from "../../components/price/PriceCompareTop";

export const getStaticProps: GetStaticProps = async function ({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["price", "common"])),
    },
  };
};

export default function Compare() {
  return (
    <Layout>
      <PriceCompareTop></PriceCompareTop>
      <PriceForm></PriceForm>
    </Layout>
  );
}
