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
import FunctionImgDisplaySection, {
  FunctionImgDisplayItem,
} from "../../components/common/FunctionImgDisplaySection";

export const getStaticProps: GetStaticProps = async function ({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["transport", "common"])),
    },
  };
};

export default function Transport() {
  const { t } = useTranslation("transport");
  const ct = useTranslation("common").t;

  const solutionMainTopParams = useMemo(
    () =>
      new SolutionMainTopParamFactory(
        t("transport"),
        t("transportTitle"),
        t("transportSubTitle"),
        "/solutions/news-0.png",
        ct("startTrail"),
        ct("scheduleADemo")
      ),
    [t, ct]
  );

  const imgTextItems = useMemo(() => {
    return [
      new ImageTextSectionPropsFactory(
        "/solutions/transport_car.png",
        t("deviceManage"),
        t("deviceManageTitle"),
        t("deviceManageSubTitle"),
        t("useBsToManageDevice"),
        "",
        true,
        520,
        360
      ),
      new ImageTextSectionPropsFactory(
        "/solutions/transport_truck.png",
        t("geolocation"),
        t("geolocationTitle"),
        t("geolocationSubTitle"),
        t("goProtectDevice"),
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
      new FunctionImgDisplayItem(
        "/solutions/transport_recorder.png",
        t("recorder")
      ),
      new FunctionImgDisplayItem(
        "/solutions/transport_truck_manage.png",
        t("truck_manage")
      ),
      new FunctionImgDisplayItem(
        "/solutions/transport_ontime_deliver.png",
        t("ontime_deliver")
      ),
      new FunctionImgDisplayItem(
        "/solutions/transport_remote_fix.png",
        t("remote_fix")
      ),
      new FunctionImgDisplayItem(
        "/solutions/transport_pref_route.png",
        t("pref_route")
      ),
      new FunctionImgDisplayItem(
        "/solutions/transport_route_security.png",
        t("route_security")
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
      <FunctionImgDisplaySection
        title={t("functionSectionTitle")}
        items={functionItems}
      ></FunctionImgDisplaySection>
      <CommonQuestions
        items={questionItems}
        title={t("bsAppCommonQuestion")}
      ></CommonQuestions>
      <ContactItem title={t("contactTitle")}></ContactItem>
    </Layout>
  );
}
