export default async function handler(req, res) {
  res.setHeader("Content-Type", "text/html");
  //   res.send("<h1>1.0.0</h1>");
  //   res.send({ version: "1.0.0" });
  res.send("1.0.0");
}
