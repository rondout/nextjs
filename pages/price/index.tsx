import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import CommentItem from "../../components/common/CommentItem";
import Layout from "../../components/layouts/Layout";
import PriceForm from "../../components/price/PriceForm";
import PriceMainTop from "../../components/price/PriceMainTop";
import PriceQuestions from "../../components/price/PriceQuestions";
import PriceSecondSection from "../../components/price/PriceSecondSection";

export const getStaticProps: GetStaticProps = async function ({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["price", "main", "common"])),
    },
  };
};

export default function Price() {
  return (
    <Layout>
      <PriceMainTop></PriceMainTop>
      <PriceSecondSection></PriceSecondSection>
      <PriceQuestions></PriceQuestions>
      <CommentItem></CommentItem>
      <PriceForm></PriceForm>
    </Layout>
  );
}
