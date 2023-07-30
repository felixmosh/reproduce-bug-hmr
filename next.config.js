/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const { I18NextHMRPlugin } = require('i18next-hmr/webpack');

const { resolve } = require("path")
const localesDir = resolve("public/locales")

const nextConfig = {
  reactStrictMode: true,
  i18n,
  webpack(config, context) {
    if (!context.isServer && context.dev) {
      config.plugins.push(new I18NextHMRPlugin({ localesDir }))
    }
    return config
  },
}

module.exports = nextConfig
