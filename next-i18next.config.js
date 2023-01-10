module.exports = {
  // 默认语言还可以通过识别域名来设置
  // https://nextjs.org/docs/advanced-features/i18n-routing
  i18n: {
    locales: ["en", "zh"],
    defaultLocale: "en",
    domains: [
      { domain: "vercel.app", defaultLocale: "zh" },
      { domain: "ctort.com:3001", defaultLocale: "en", http: true },
    ],
  },
};
