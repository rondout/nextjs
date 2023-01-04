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
import IconTextSection, {
  IconTextItem,
} from "../../components/common/IconTextSection";

export const getStaticProps: GetStaticProps = async function ({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["catering", "common"])),
    },
  };
};

export default function Catering() {
  const { t } = useTranslation("catering");
  const mt = useTranslation("common").t;

  const solutionMainTopParams = useMemo(
    () =>
      new SolutionMainTopParamFactory(
        t("catering"),
        t("cateringTitle"),
        t("cateringSubTitle"),
        "/solutions/news-0.png",
        mt("startToUse"),
        mt("scheduleADemo")
      ),
    [t, mt]
  );

  const imgTextItems = useMemo(() => {
    return [
      new ImageTextSectionPropsFactory(
        "/solutions/catering_ternimal_manage.png",
        t("selfServiceTerminalManage"),
        t("selfServiceTerminalManageTitle"),
        t("selfServiceTerminalManageSubTitle"),
        t("useThisOnBs"),
        "",
        true,
        520,
        360
      ),
      new ImageTextSectionPropsFactory(
        "/solutions/catering_ternimal_device_access_manage.png",
        t("deviceAccessManage"),
        t("deviceAccessManageTitle"),
        t("deviceAccessManageSubTitle"),
        t("useBsToManageMobileDevice"),
        "",
        false,
        520,
        360
      ),
      new ImageTextSectionPropsFactory(
        "/solutions/catering_ternimal_device_access_manage.png",
        t("kiosk"),
        t("kioskTitle"),
        t("kioskSubTitle"),
        t("customOwnMark"),
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

  const iconTextItems = useMemo(
    () => [
      new IconTextItem("/solutions/ic_screen", t("iconTexts.1")),
      new IconTextItem("/solutions/ic_display", t("iconTexts.2")),
      new IconTextItem("/solutions/ic_search", t("iconTexts.3")),
      new IconTextItem("/solutions/ic_service", t("iconTexts.4")),
      new IconTextItem("/solutions/ic_register", t("iconTexts.5")),
      new IconTextItem("/solutions/ic_register", t("iconTexts.6")),
    ],
    [t]
  );

  return (
    <Layout>
      <SolutionMainTop {...solutionMainTopParams}></SolutionMainTop>
      {/* <ManageMedicalDeviceSection></ManageMedicalDeviceSection> */}
      <IconTextSection
        title={t("iconTextTitle")}
        items={iconTextItems}
      ></IconTextSection>
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
