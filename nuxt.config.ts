import vuetify from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
    }
  },
  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css', 'assets/style.sass'],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    plugins: [
      vuetify({ autoImport: true }),
    ]
  }
})
