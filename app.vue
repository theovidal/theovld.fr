<template>
  <v-app>
    <Head>
      <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <Link rel="manifest" href="/site.webmanifest"/>
    </Head>
    <navbar/>
    <NuxtPage />
    <v-footer class="bg-grey-darken-4 d-flex flex-column">
      <div>
        <socials/>
      </div>
      <div>
        {{ new Date().getFullYear() }} — Théo Vidal
      </div>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'

useHead({
  title: 'Théo Vidal'
})

useSeoMeta({
  title: 'Théo Vidal',
  ogTitle: 'Théo Vidal',
  ogImage: '/img/me.jpg',
  twitterCard: 'summary',
})
const theme = useTheme()

onMounted(() => {
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  theme.global.name.value = prefersDark ? 'dark' : 'light'
})
</script>

<style lang="sass">
footer
  clip-path: polygon(0 0, 100% 31%, 100% 100%, 0% 100%)
  margin-top: -31px
  padding-top: 18px !important
</style>