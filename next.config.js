const { i18n } = require("./next-i18next.config");
module.exports = {
  output: "standalone",
  //   experimental: {
  //     // this includes files from the monorepo base two directories up
  //     outputFileTracingRoot: path.join(__dirname, "./public"),
  //   },
  i18n,
};
