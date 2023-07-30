/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const { I18NextHMRPlugin } = require('i18next-hmr/webpack');
// const path = require('path');

const { resolve } = require("path")
const localesDir = resolve("public/locales")

const nextConfig = {
  reactStrictMode: true,
  i18n,
  // plugins: [
  //   new I18NextHMRPlugin({
  //     // localesDir: path.resolve(__dirname, 'public/locales'), 
  //     localesDir: path.resolve('public/locales'), 
  //     // localesDirs: [
  //     //   path.resolve(__dirname, 'public/locales/en'),
  //     //   path.resolve(__dirname, 'public/locales/de')
  //     //    // use this property for multiple locales directories   
  //     // ]
  //   })
  // ]
  webpack(config, context) {
    if (!context.isServer && context.dev) {
      config.plugins.push(new I18NextHMRPlugin({ localesDir }))
    }
    return config
  },
}

module.exports = nextConfig
