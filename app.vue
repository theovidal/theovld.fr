<template>
  <v-app>
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
</script>

<style lang="sass">
footer
  clip-path: polygon(0 0, 100% 31%, 100% 100%, 0% 100%)
  margin-top: -31px
  padding-top: 18px !important
</style>