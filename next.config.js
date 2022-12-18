const withNextra = require('nextra')({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js"
})

const nextConfig = {
  ...withNextra(),
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withNextra()
