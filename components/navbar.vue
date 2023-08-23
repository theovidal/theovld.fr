<template>
  <v-app-bar
      density="compact"
      scroll-behavior="elevate">
    <template #prepend>
      <v-menu>
        <template #activator="{ props }">
          <v-btn
            variant="text"
            icon="mdi-menu"
            class="d-sm-none"
            v-bind="props"/>
        </template>
        <v-list>
          <v-list-item
            v-for="link in links"
            :key="link.name"
            :to="link.external ? '' : link.to"
            :href="link.external && link.to"
            :target="link.external && '_blank'"
            :title="$t(link.name)"
            :append-icon="link.external ? 'mdi-open-in-new' : ''">
          </v-list-item>
        </v-list>
      </v-menu>
      <div class="d-none d-sm-block">
        <v-btn
            v-for="link in links"
            :key="link.name"
            variant="text"
            :to="link.external ? '' : link.to"
            :href="link.external && link.to"
            :target="link.external && '_blank'"
            :nuxt="!link.external">
          {{ $t(link.name) }}
        </v-btn>
      </div>
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
import { i18n, locales } from '~/plugins/i18n'

const links = [
  {
    name: 'home.name',
    to: '/'
  },
  {
    name: 'portfolio.name',
    to: '/portfolio'
  },
  {
    name: 'resources.name',
    external: true,
    to: 'https://www.notion.so/theo-vidal/La-biblio-de-Th-o-f8fbe148bf2d4f9fa795ec553ec49eb0'
  }
]

const { current } = useLocale()

onMounted(() => {
  for (const locale of window.navigator.languages) {
    if (locales.includes(locale)) {
      changeLocale(locale)
      break
    }
  }
})

function changeLocale(locale) {
  current.value = locale
  i18n.global.locale.value = locale
}
</script>