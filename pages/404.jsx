import Image from "next/image";
import Layout from "../components/layout";

export default function NotFoundPage() {
  return (
    <Layout>
      <img src="/404.svg"></img>
    </Layout>
  );
}
