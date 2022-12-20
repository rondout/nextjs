import { readFile, readdir } from "fs/promises";
import { resolve } from "path";

const app = {
  qinyuanchunxue: async () => {
    console.log(resolve(__dirname, "./poems.js"));
    return await readFile(resolve(__dirname, "./qinyuanchunxue.html"));
  },
  niannujiao: async () => {
    console.log(resolve(__dirname, "./poems.js"));
    return await readFile(resolve(__dirname, "./niannujiao.html"));
  },
  chushibiao: async () => {
    console.log(resolve(__dirname, "./poems.js"));
    return await readFile(resolve(__dirname, "./chushibiao.html"));
  },
  longzhongdui: async () => {
    return await readFile(resolve(__dirname, "./longzhongdui.html"));
  },
  async getAllPoemList() {
    const result = await readdir(resolve(__dirname));
    return result
      .filter((v) => v.endsWith(".html"))
      .map((item) => item.replace(/.html$/, ""));
  },
  getPoemById: async (id = "chushibiao") => {
    return await readFile(resolve(__dirname, `./${id}.html`));
  },
};

export default async function handler(req, res) {
  const id = req.query.id;
  const data = await (
    await fetch("http://localhost:3000/data/" + id + ".html")
  ).arrayBuffer();
  res.send(Buffer.from(data).toString());
}
