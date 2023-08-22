<template>
  <v-app-bar
      density="compact"
      scroll-behavior="elevate">
    <template #prepend>
      <v-btn
          v-for="link in links"
          :key="link.name"
          variant="text"
          :to="link.to"
          nuxt>
        {{ $t(link.name) }}
      </v-btn>
      <v-btn
        href="https://www.notion.so/theo-vidal/La-biblio-de-Th-o-f8fbe148bf2d4f9fa795ec553ec49eb0"
        target="_blank"
        append-icon="mdi-open-in-new">
        {{ $t('resources.name') }}
      </v-btn>
    </template>
    <template #append>
      <v-col
        v-for="locale in locales"
        :key="locale">
        <v-btn
          variant="text"
          :active="$i18n.locale === locale"
          @click="changeLocale(locale)">
          <img
            :src="`/img/${locale}.png`"
            :alt="`${locale}flag`"
            height="20px">
        </v-btn>
      </v-col>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useLocale } from 'vuetify'
import { i18n } from '@/plugins/i18n'

const links = [
  {
    name: 'home.name',
    to: '/'
  },
  {
    name: 'portfolio.name',
    to: '/portfolio'
  },
  /*{
    name: 'resources.name',
    to: '/resources'
  }*/
]

const locales = ['fr', 'en', 'es']

const { current } = useLocale()

function changeLocale(locale : 'fr' | 'en' | 'es') {
  current.value = locale
  i18n.global.locale.value = locale
}
</script>