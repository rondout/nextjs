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
import FunctionDisplaySection, {
  FunctionDisplayItem,
} from "../../components/common/FunctionDisplaySection";

export const getStaticProps: GetStaticProps = async function ({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["education", "common"])),
    },
  };
};

export default function Education() {
  const { t } = useTranslation("education");
  const ct = useTranslation("common").t;

  const solutionMainTopParams = useMemo(
    () =>
      new SolutionMainTopParamFactory(
        t("education"),
        t("educationTitle"),
        t("educationSubTitle"),
        "/solutions/news-0.png",
        ct("startTrail"),
        ct("scheduleADemo")
      ),
    [t, ct]
  );

  const imgTextItems = useMemo(() => {
    return [
      new ImageTextSectionPropsFactory(
        "/solutions/solution_device_manage.png",
        t("eduDeviceManage"),
        t("eduDeviceManageTitle"),
        t("eduDeviceManageSubTitle"),
        t("useBsToManageEduDevice"),
        "",
        true,
        520,
        360
      ),
      new ImageTextSectionPropsFactory(
        "/solutions/solution_device_manage_2.png",
        t("deviceManage"),
        t("deviceManageTitle"),
        t("deviceManageSubTitle"),
        t("trailManageEduDevice"),
        "",
        false,
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

  const functionItems = useMemo(() => {
    return [
      new FunctionDisplayItem(
        "/solutions/solution_device_manage_2.png",
        t("functionTitles.1"),
        t("functionSubTitles.1")
      ),
      new FunctionDisplayItem(
        "",
        t("functionTitles.2"),
        t("functionSubTitles.2")
      ),
      new FunctionDisplayItem(
        "",
        t("functionTitles.3"),
        t("functionSubTitles.3")
      ),
      new FunctionDisplayItem(
        "",
        t("functionTitles.4"),
        t("functionSubTitles.4")
      ),
      new FunctionDisplayItem(
        "",
        t("functionTitles.5"),
        t("functionSubTitles.5")
      ),
      new FunctionDisplayItem(
        "",
        t("functionTitles.6"),
        t("functionSubTitles.6")
      ),
      new FunctionDisplayItem(
        "",
        t("functionTitles.7"),
        t("functionSubTitles.7")
      ),
      new FunctionDisplayItem(
        "",
        t("functionTitles.8"),
        t("functionSubTitles.8")
      ),
    ];
  }, [t]);

  return (
    <Layout>
      <SolutionMainTop {...solutionMainTopParams}></SolutionMainTop>
      {imgTextItems.map((item) => (
        <ImageTextSection key={item.tag} {...item}></ImageTextSection>
      ))}
      <CommentItem></CommentItem>
      <FunctionDisplaySection
        items={functionItems}
        title={t("funtionSectionTitle")}
      ></FunctionDisplaySection>
      <CommonQuestions
        items={questionItems}
        title={t("bsAppCommonQuestion")}
      ></CommonQuestions>
      <ContactItem title={t("contactTitle")}></ContactItem>
    </Layout>
  );
}
