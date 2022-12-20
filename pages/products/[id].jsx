import { useRouter } from "next/router";

export default function () {
  const { query } = useRouter();

  return <h1>This is product detail page and product id is {query.id}</h1>;
}
