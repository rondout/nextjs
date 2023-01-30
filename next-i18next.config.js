module.exports = {
  // 默认语言还可以通过识别域名来设置
  // https://nextjs.org/docs/advanced-features/i18n-routing
  i18n: {
    locales: ["zh", "en"],
    defaultLocale: "en",
    localeDetection: false,
    domains: [
      { domain: "nextjs-rondout.vercel.app", defaultLocale: "zh" },
      { domain: "nextjs-peach-nine-53.vercel.app", defaultLocale: "en" },
    ],
  },
};
