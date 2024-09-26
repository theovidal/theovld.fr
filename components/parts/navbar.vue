<template>
  <v-app-bar
    density="compact"
    scroll-behavior="hide inverted"
    class="translucent"
    v-resize="onResize"
    :scroll-threshold="windowSize.height - 64">
    <template #prepend>
      <v-menu>
        <template #activator="{ props }">
          <v-btn
            variant="text"
            :icon="IconMenu"
            class="d-md-none"
            :aria-label="$t('menu')"
            v-bind="props"/>
        </template>
        <v-list>
          <v-list-item
             v-for="link in links"
            :key="link"
            variant="text"
            @click="goTo(`#${link}`)">
            {{ $t(`${link}.shortTitle`) }}
          </v-list-item>
          <v-divider/>
          <v-list-item
            v-for="link in externalLinks"
            :key="link.name"
            variant="text"
            :href="link.to"
            target="_blank"
            append-icon="$openinnew">
            {{ $t(link.name) }}
          </v-list-item>
        </v-list>
      </v-menu>
      <div class="d-none d-md-block">
        <v-btn
          v-for="link in links"
          :key="link"
          variant="text"
          @click="goTo(`#${link}`)">
          {{ $t(`${link}.shortTitle`) }}
        </v-btn>
      </div>
    </template>
    <template #default>
      <div class="d-none d-md-block">
        <v-btn
            v-for="link in externalLinks"
            :key="link.name"
            variant="text"
            :href="link.to"
            target="_blank"
            append-icon="$openinnew">
          {{ $t(link.name) }}
        </v-btn>
      </div>
    </template>
    <template #append>
      <locale-switcher/>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import IconMenu from '~icons/mdi/menu'
import { useGoTo } from 'vuetify'

const goTo = useGoTo()

const windowSize = reactive({
  width: 0,
  height: 0
})

function onResize() {
  windowSize.width = window.innerWidth
  windowSize.height = window.innerHeight
}

const links = ['experience', 'portfolio', 'interests', 'contact']

const externalLinks = [
  {
    name: 'resources.shortTitle',
    to: 'https://www.notion.so/theo-vidal/La-biblio-de-Th-o-f8fbe148bf2d4f9fa795ec553ec49eb0'
  }
]
</script>