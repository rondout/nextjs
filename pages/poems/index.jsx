import Link from "next/link";
import Layout from "../../components/layout";
import styles from "./poemDetail.module.css";

export async function getStaticProps() {
  const poemList = await fetch("http://localhost:3002/api/poem-list");

  return {
    props: {
      poemList: await poemList.json(),
    },
    // 增量更新间隔
    // revalidate: 30,
  };
}

export default function Poems({ poemList }) {
  console.log(poemList);
  return (
    <Layout>
      <h1>Poems</h1>
      <div>
        {poemList.map((name) => (
          <Link key={name} href={"/poems/" + name}>
            <div>
              <h3 className={styles.title}>
                <span>{name}</span>
                <div className={styles.underline}></div>
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
