import utilStyles from "../../styles/utils.module.css";
import Layout from "../../components/layout";
import Link from "next/link";

export async function getServerSideProps() {
  // const userInfo = await fetch("http://localhost:3002/api/username", {
  //   method: "get",
  // });

  return {
    props: {
      userInfo: {
        firstName: "Joey",
        lastName: "Tribiani",
        desc: "Joey Tribiani from Server Express App",
      },
    },
  };
}

export default function Profile({ userInfo }) {
  return (
    <Layout home>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <h4>{`${userInfo.firstName} ${userInfo.lastName}`}</h4>
        <p>{userInfo.desc}</p>
        <br />
      </section>
      <Link href="/">Home</Link>
    </Layout>
  );
}
