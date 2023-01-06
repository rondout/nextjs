import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useMemo } from "react";
import { useTranslation } from "next-i18next";
import CommentItem from "../../components/common/CommentItem";
import ImageTextSection, {
  ImageTextSectionPropsFactory,
} from "../../components/common/ImageTextSection";
import Layout from "../../components/layouts/Layout";
import SolutionMainTop, {
  SolutionMainTopParamFactory,
} from "../../components/solutions/SolutionMainTop";
import CommonQuestions, {
  CommonQuestionItem,
} from "../../components/common/CommonQuestions";
import ContactItem from "../../components/common/ContactItem";
import BusinessFunctions from "../../components/solutions/business/BusinessFunctions";

export const getStaticProps: GetStaticProps = async function ({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["business", "common"])),
    },
  };
};

export default function Business() {
  const { t } = useTranslation("business");
  const ct = useTranslation("common").t;

  const solutionMainTopParams = useMemo(
    () =>
      new SolutionMainTopParamFactory(
        t("business"),
        t("businessTitle"),
        t("businessSubTitle"),
        "/solutions/news-0.png",
        ct("startTrail"),
        ct("scheduleADemo")
      ),
    [t, ct]
  );

  const imgTextItems = useMemo(() => {
    return [
      new ImageTextSectionPropsFactory(
        "/solutions/business_zero_touch_regist.png",
        t("zeroTouchRegister"),
        t("zeroTouchRegisterTitle"),
        t("zeroTouchRegisterSubTitle"),
        t("useBsToManageTerminal"),
        "",
        true,
        520,
        360
      ),
      new ImageTextSectionPropsFactory(
        "/solutions/business_access_manage.png",
        t("deviceAccessManage"),
        t("deviceAccessManageTitle"),
        t("deviceAccessManageSubTitle"),
        t("useBsManageDevice"),
        "",
        false,
        520,
        360
      ),
      new ImageTextSectionPropsFactory(
        "/solutions/business_data_protect.png",
        t("dataProtect"),
        t("dataProtectTitle"),
        t("dataProtectSubTitle"),
        t("protectDeviceNow"),
        "",
        true,
        520,
        360
      ),
    ];
  }, [t]);

  const questionItems = useMemo(() => {
    return [
      new CommonQuestionItem(t("questions.title-1"), t("questions.subtitle-1")),
      new CommonQuestionItem(t("questions.title-2"), t("questions.subtitle-2")),
      new CommonQuestionItem(t("questions.title-3"), t("questions.subtitle-3")),
      new CommonQuestionItem(t("questions.title-4"), t("questions.subtitle-4")),
    ];
  }, [t]);

  return (
    <Layout>
      <SolutionMainTop {...solutionMainTopParams}></SolutionMainTop>
      <BusinessFunctions></BusinessFunctions>
      <CommentItem></CommentItem>
      {imgTextItems.map((item) => (
        <ImageTextSection key={item.tag} {...item}></ImageTextSection>
      ))}
      <CommonQuestions
        items={questionItems}
        title={t("bsAppCommonQuestion")}
      ></CommonQuestions>
      <ContactItem title={t("contactTitle")}></ContactItem>
    </Layout>
  );
}
