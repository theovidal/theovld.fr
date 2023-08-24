import { createVuetify } from 'vuetify'
import { mdi } from 'vuetify/iconsets/mdi-svg'
import { fr, es, en } from 'vuetify/locale'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        ssr: true,
        locale: {
            messages: { fr, en, es },
        },
        icons: {
            defaultSet: 'mdi',
            sets: {
                mdi
            }
        }
    })

    nuxtApp.vueApp.use(vuetify)
})