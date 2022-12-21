import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import Layout from "../components/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { getSortedPostsData } from "../lib/posts";
import { useTranslation } from "next-i18next";
import { Button, Typography } from "@mui/material";

export async function getStaticProps({ locale }) {
  const allPostsData = getSortedPostsData();
  // const userInfo = await fetch("http://localhost:3000/api/username", {
  //   method: "get",
  // });
  return {
    props: {
      ...(await serverSideTranslations(locale, ["poems", "common"])),
      locale,
      allPostsData,
      userInfo: {
        firstName: "Joey",
        lastName: "Tribiani",
        desc: "Joey Tribiani from Server Express App",
      },
    },
  };
}

export default function Home(props) {
  const poemT = useTranslation("poems").t;
  const t = useTranslation("common").t;
  return (
    <Layout home>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Typography variant="h2" className={utilStyles.headingLg}>
          {t("blogs")}
        </Typography>
        <Link href="/posts/profile">
          <h4>{`${props.userInfo.firstName} ${props.userInfo.lastName}`}</h4>
        </Link>
        <Button variant="contained">111</Button>
        <Link href="/posts/profile-ssr">
          <h4>
            {t("SSR")}:
            {`${props.userInfo.firstName} ${props.userInfo.lastName}`}
          </h4>
        </Link>
        <Link href="/blogs">
          <h4>{t("blogs")}</h4>
        </Link>
        {/* <Link href="/poems">
          <h4>{t("poems")}</h4>
        </Link> */}
        <Link href="/solar">
          <h4>{t("solarSystem")}</h4>
        </Link>
        <p>{props.userInfo.desc}</p>
        <br />
        <ul className={utilStyles.list}>
          {props.allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={"/blogs/" + id}>{title}</Link>
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
