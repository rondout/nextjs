import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useMemo } from "react";
import { useTranslation } from "next-i18next";
import CommentItem from "../../components/common/CommentItem";
import ImageTextSection, {
  ImageTextSectionPropsFactory,
} from "../../components/common/ImageTextSection";
import Layout from "../../components/layouts/Layout";
import ManageMedicalDeviceSection from "../../components/solutions/healthcare/ManageMedicalDeviceSection";
import SolutionMainTop, {
  SolutionMainTopParamFactory,
} from "../../components/solutions/SolutionMainTop";
import CommonQuestions, {
  CommonQuestionItem,
} from "../../components/common/CommonQuestions";
import ContactItem from "../../components/common/ContactItem";

export const getStaticProps: GetStaticProps = async function ({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["healthcare", "common"])),
    },
  };
};

export default function HealthCare() {
  const { t } = useTranslation("healthcare");
  const ct = useTranslation("common").t;

  const solutionMainTopParams = useMemo(
    () =>
      new SolutionMainTopParamFactory(
        t("healthAndMedical"),
        t("medicalTopTitle"),
        t("medicalSubTitle"),
        t("/solutions/news-0.png"),
        ct("startTrail"),
        ct("scheduleADemo")
      ),
    [t, ct]
  );

  const imgTextItems = useMemo(() => {
    return [
      new ImageTextSectionPropsFactory(
        "/solutions/medical_img_visit.png",
        t("remoteDeviceConfig"),
        t("remoteMedicalTitle"),
        t("remoteMedicalSubTitle"),
        t("useThisOnBs"),
        ""
      ),
      new ImageTextSectionPropsFactory(
        "/solutions/medical_img_remote.png",
        t("onTimeDeviceManage"),
        t("onTimeDeviceManageTitle"),
        t("onTimeDeviceManageSubTitle"),
        t("useBsForRemoteMedical"),
        "",
        false
      ),
      new ImageTextSectionPropsFactory(
        "/solutions/medical_img_memory.png",
        t("recordAndProtectData"),
        t("recordAndProtectDataTitle"),
        t("recordAndProtectDataSubTitle"),
        t("registFreeAndUse"),
        ""
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
      <ManageMedicalDeviceSection></ManageMedicalDeviceSection>
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
