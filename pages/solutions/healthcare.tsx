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

export const getStaticProps: GetStaticProps = async function ({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["solutions", "common"])),
    },
  };
};

const solutionMainTopParams = new SolutionMainTopParamFactory(
  "healthAndMedical",
  "medicalTopTitle",
  "medicalSubTitle",
  "/solutions/news-0.png"
);

export default function HealthCare() {
  const { t } = useTranslation("solutions");
  const remoteImgTextItem = useMemo(() => {
    return new ImageTextSectionPropsFactory(
      "/solutions/medical_img_visit.png",
      t("remoteDeviceConfig"),
      t("remoteMedicalTitle"),
      t("remoteMedicalSubTitle"),
      t("useThisOnBs"),
      ""
    );
  }, [t]);

  return (
    <Layout>
      <SolutionMainTop {...solutionMainTopParams}></SolutionMainTop>
      <ManageMedicalDeviceSection></ManageMedicalDeviceSection>
      <CommentItem></CommentItem>
      <ImageTextSection {...remoteImgTextItem}></ImageTextSection>
      <ImageTextSection
        {...remoteImgTextItem}
        imgUrl="/solutions/medical_img_remote.png"
        imgLeft={false}
      ></ImageTextSection>
    </Layout>
  );
}
