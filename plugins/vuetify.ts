import { createVuetify } from 'vuetify'

import { fr, es, en } from 'vuetify/locale'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        ssr: true,
        locale: {
            locale: 'en',
            messages: { fr, en, es },
        },
    })

    nuxtApp.vueApp.use(vuetify)
})