import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Hello Next</title>
        <link rel="icon" href="/Vantron.svg" />
      </Head>
      <h1>First Post</h1>
      <h2>
        <a href="/">Back to Home</a>
        <hr />
        <Link href="/">Back to Home by Link</Link>
        <hr />
        <Link href="/assets/img">Image test</Link>
      </h2>
    </Layout>
  );
}
