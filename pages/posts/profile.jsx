import utilStyles from "../../styles/utils.module.css";
import Layout from "../../components/layout";
import Link from "next/link";

export async function getStaticProps() {
  const userInfo = await fetch("http://localhost:3002/api/username", {
    method: "get",
  });

  // const iconContent = await fetch("http://localhost:3000/tree.svg");

  return {
    props: {
      iconContent: "await iconContent.text()",
      userInfo: await userInfo.json(),
    },
  };
}

export default function Profile({ userInfo, iconContent }) {
  // console.log(iconContent);
  return (
    <Layout home>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <h4>{`${userInfo.firstName} ${userInfo.lastName}`}</h4>
        <p>{userInfo.desc}</p>
        <br />
        <div dangerouslySetInnerHTML={{ __html: iconContent }}></div>
      </section>
      <Link href="/">Home</Link>
    </Layout>
  );
}
