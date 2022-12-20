export default function handler(req, res) {
  res.send(
    JSON.stringify({
      firstName: "Joey",
      lastName: "Tribiani",
      desc: "Joey Tribiani from Server Express App",
    })
  );
}
