import Link from "next/link";
import Layout from "../../components/layout";
import { getAllPostIds } from "../../lib/posts";

export async function getStaticProps(data) {
  const ids = await getAllPostIds();
  return { props: { ids } };
}

export default function PoemDetail({ ids = [] }) {
  return (
    <Layout>
      <h1>This is blog INDEX page</h1>
      {ids.map((v) => (
        <Link key={v.params.identifier} href={"/blogs/" + v.params.identifier}>
          <h4>{v.params.identifier + ".md"}</h4>
        </Link>
      ))}
    </Layout>
  );
}
