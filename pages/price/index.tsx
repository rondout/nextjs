import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import CommentItem from "../../components/common/CommentItem";
import CommonQuestions, {
  CommonQuestionItem,
} from "../../components/common/CommonQuestions";
import Layout from "../../components/layouts/Layout";
import PriceForm from "../../components/price/PriceForm";
import PriceMainTop from "../../components/price/PriceMainTop";
import PriceQuestions from "../../components/price/PriceQuestions";
import PriceSecondSection from "../../components/price/PriceSecondSection";
import { useMemo } from "react";

export const getStaticProps: GetStaticProps = async function ({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["price", "common"])),
    },
  };
};

export default function Price() {
  const { t } = useTranslation("price");

  const questionItems = useMemo(() => {
    return [
      new CommonQuestionItem(t("howToTrailFree"), t("paymentMethodAnswer")),
      new CommonQuestionItem(t("paymentMethod"), t("paymentMethodAnswer")),
      new CommonQuestionItem(t("conIChangePlan"), t("paymentMethodAnswer")),
      new CommonQuestionItem(t("canICancel"), t("paymentMethodAnswer")),
    ];
  }, [t]);

  return (
    <Layout>
      <PriceMainTop></PriceMainTop>
      <PriceSecondSection></PriceSecondSection>
      <CommonQuestions
        items={questionItems}
        title={t("questionTitle")}
      ></CommonQuestions>
      <CommentItem></CommentItem>
      <PriceForm></PriceForm>
    </Layout>
  );
}
