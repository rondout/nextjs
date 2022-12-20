import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import styles from "./poemDetail.module.css";

export async function getStaticPaths() {
  const poemList = await (
    await fetch("http://localhost:3002/api/poem-list")
  ).json();

  return {
    paths: poemList.map((item) => ({ params: { id: item } })),
    // 如果需要满足动态路由的增量更新则fallback需要设为blocking
    fallback: "blocking",
    // 如果fallback设为false，则构建的时候没有构建的路径都会导致404页面
    // fallback: false,
  };
}

export async function getStaticProps(args) {
  const data = await fetch(
    "http://localhost:3002/api/" + args.params.id + "?lang=" + args.locale,
    {
      params: { locale: args.locale },
    }
  );
  const bufferResponse = await data.arrayBuffer();
  return {
    props: {
      ...args,
      id: args.params.id,
      content: Buffer.from(bufferResponse).toString(),
    },
    // 增量更新间隔
    // revalidate: 30,
  };
}

export default function PoemDetails(props) {
  console.log(props);
  return (
    <Layout>
      <Head>
        <title>{props.id}</title>
      </Head>
      <h1>Poem Details</h1>
      <br />
      <h2>{props.id}</h2>
      <Link href="/poems">
        <h3>Back to Poems</h3>
      </Link>
      <div
        className={styles.container}
        dangerouslySetInnerHTML={{ __html: props.content }}
      ></div>
    </Layout>
  );
}
