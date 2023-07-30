const HttpBackend = require('i18next-http-backend/cjs')
const MultiLoadBackendAdapter = require('i18next-multiload-backend-adapter/cjs')
const HMRPlugin = require('i18next-hmr/plugin').HMRPlugin;

/** @type {import('next-i18next').UserConfig} */
module.exports = {
    i18n: {
      defaultLocale: 'en',
      locales: ['en','de']
    },
    defaultNS: 'ns1',
    fallbackNS: 'common',
    serializeConfig: false,

    // ???
    use: [MultiLoadBackendAdapter, new HMRPlugin({ client: true })],
    // use: [MultiLoadBackendAdapter],

    backend: {
      backend: HttpBackend,
      backendOption: {
        expirationTime: 5 * 1000,
        reloadInterval: 15000,
        loadPath: 'http://localhost:8080/locales?lng={{lng}}&ns={{ns}}',
      }
    },
    debug: true,
  }
