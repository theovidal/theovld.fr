import vuetify from 'vite-plugin-vuetify'
import icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    'unplugin-icons/nuxt',
    '@nuxtjs/color-mode'
  ],
  i18n: {
    vueI18n: './i18n.config.ts',
    strategy: 'no_prefix',
    defaultLocale: 'en',
    fallbackLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true
    },
    strictMessage: false,
    compilation: {
      strictMessage: false,
    },
    langDir: 'locales',
    locales: [
      {
        code: 'fr',
        file: 'fr.json'
      },
      {
        code: 'en',
        file: 'en.json'
      },
      // {
      //   code: 'es',
      //   file: 'es.json'
      // }
    ],
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
    }
  },
  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css', 'assets/style/index.sass'],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    plugins: [
      vuetify({ autoImport: true }),
      icons({
        customCollections: {
          custom: FileSystemIconLoader('./assets/icons')
        }
      }),
      Components({
        resolvers: [
          IconsResolver(),
        ],
      }),
    ]
  }
})
