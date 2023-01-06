import Layout from "../components/layouts/Layout";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import MainTop from "../components/home/MainTop";
import ChooseProfession from "../components/home/ChooseProfession";
import DeviceManageIntro from "../components/home/DeviceManageIntro";
import CommentItem from "../components/common/CommentItem";
import ContactItem from "../components/common/ContactItem";
import LatestNewsItem from "../components/home/LatestNewsItem";
import { NewsItem, NewsType } from "../model/home.model";
import CompanyList from "../components/home/CompanyList";

export const getStaticProps: GetStaticProps = async function ({ locale }) {
  const newsItem: NewsItem[] = [
    {
      type: NewsType.BLOGS,
      createdTime: 1641340800000,
      imgUrl: "/home/news-0.png",
      title: "这是一条关于BlueSphere的",
    },
    {
      type: NewsType.NEWS,
      createdTime: 1669161600000,
      imgUrl: "/home/news-1.png",
      title:
        "这是一条关于BlueSphere的新资讯消息标题名最长2行剩余内容省略号展示…",
    },
    {
      type: NewsType.NEWS,
      createdTime: 1672123881857,
      imgUrl: "/home/news-0.png",
      title:
        "这是一条关于BlueSphere的新资讯消息标题名最长2行剩余内容省略号展示…",
    },
    {
      type: NewsType.BLOGS,
      createdTime: 1672123881857,
      imgUrl: "/home/news-0.png",
      title:
        "这是一条关于BlueSphere的新资讯消息标题名最长2行剩余内容省略号展示…",
    },
  ];
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "main"])),
      newsItem,
      isSwiper: true,
    },
  };
};

export default function Home(props: { newsItem: NewsItem[] }) {
  return (
    <Layout>
      <MainTop></MainTop>
      <CompanyList></CompanyList>
      <ChooseProfession></ChooseProfession>
      <DeviceManageIntro></DeviceManageIntro>
      <CommentItem></CommentItem>
      <ContactItem></ContactItem>
      <LatestNewsItem news={props.newsItem}></LatestNewsItem>
    </Layout>
  );
}
