import moment from "moment";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function BlogDetail(props) {
  const { query } = useRouter();

  return (
    <Layout>
      <Head>
        <title>{props.postData.title}</title>
      </Head>
      <h1>
        This blog id is: {<strong>{query.identifier?.toUpperCase()}</strong>}
      </h1>
      <h3>Title: {props.postData.title}</h3>
      <p>Date: {moment(new Date(props.postData.date)).format("LL")}</p>
      <p>&nbsp;</p>
      <Link href="/blogs">
        <h3>Blogs</h3>
      </Link>
      <div
        dangerouslySetInnerHTML={{ __html: props.postData.contentHtml }}
      ></div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();

  return {
    // 这个path就是所有可能的path，是告诉给Next的，如果没有在这个里面就会是404页面，这就是getStaticPaths的作用
    paths,
    // fallback为false则代表任何未由getStaticPaths返回的path所对应的路由都会导致404页面，至于fallback为true的效果，参考官方文档
    fallback: "blocking",
  };
}

export async function getStaticProps(args) {
  const postData = await getPostData(args.params.identifier);
  return {
    props: {
      postData,
    },
    // 增量更新间隔
    // revalidate: 60,
  };
}
