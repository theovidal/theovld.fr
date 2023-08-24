<template>
  <v-app-bar
      density="compact"
      scroll-behavior="elevate">
    <template #prepend>
      <v-menu>
        <template #activator="{ props }">
          <v-btn
            variant="text"
            :icon="IconMenu"
            class="d-sm-none"
            :aria-label="$t('menu')"
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
            :append-icon="link.external ? IconOpenInNew : ''">
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
            :append-icon="link.external ? IconOpenInNew : ''"
            :nuxt="!link.external">
          {{ $t(link.name) }}
        </v-btn>
      </div>
    </template>
    <template #append>
      <v-col
        v-for="locale in locales"
        :key="locale.code">
        <v-btn
          variant="text"
          :active="currentLocale === locale.code"
          @click="changeLocale(locale.code)">
          <img
            :src="`/img/locales/${locale.code}-min.png`"
            :alt="`${locale.code} flag`"
            height="20px">
        </v-btn>
      </v-col>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useLocale } from 'vuetify'
import IconOpenInNew from '~icons/mdi/open-in-new'
import IconMenu from '~icons/mdi/menu'

const { locale: currentLocale, locales, setLocale } = useI18n()
console.log(locales)

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

const { current: vuetifyLocale } = useLocale()

function changeLocale(locale) {
  vuetifyLocale.value = locale
  setLocale(locale)
}
</script>