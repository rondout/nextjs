export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("in", req.method);
    const { icon } = req.body;
    try {
      //   const iconContent = await (
      //     await fetch("http://localhost:3001/" + icon + ".svg")
      //   ).arrayBuffer();
      //   const iconContentString = Buffer.from(iconContent).toString();
      //   res.setHeader("Content-Type", "image/svg+xml");
      //   console.log(iconContentString);
      res.send({ iconContentString });
    } catch (error) {
      console.log({ error });
      res.send({ icon: "ICON-HANDLER" });
    }
  } else {
    res.status(405);
    res.end("Method not allowedss");
  }
}
