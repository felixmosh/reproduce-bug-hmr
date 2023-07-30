const HttpBackend = require('i18next-http-backend/cjs');
const MultiLoadBackendAdapter = require('i18next-multiload-backend-adapter/cjs');
const HMRPlugin = require('i18next-hmr/plugin').HMRPlugin;

/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de']
  },
  defaultNS: 'ns1',
  fallbackNS: 'common',
  serializeConfig: false,

  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '',

  // allows reloading translations on each page navigation / a hacky way to reload translations on the server
  reloadOnPrerender: process.env.NODE_ENV === 'development',

  use: typeof window !== 'undefined' ? [MultiLoadBackendAdapter, HttpBackend, new HMRPlugin({ client: true })] : undefined,
  // use: [MultiLoadBackendAdapter],
  debug: false,
};
