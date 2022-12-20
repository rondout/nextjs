import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Layout from "../../components/layout";

export default function AssetsImage() {
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/Vantron.svg" />
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <div>
        <Image src="/solution/energy-1.png" alt="" width={1080} height={500} />
      </div>
      <Link href="/">
        <h2>Back to Home by Link</h2>
      </Link>
      <Image width={6400} height={500} src="/404.svg"></Image>
    </Layout>
  );
}
