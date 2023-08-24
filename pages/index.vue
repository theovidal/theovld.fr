<template>
  <div>
    <banner
      center
      src="/img/alps-reduced.webp"
      alt="Photo of the Alps as the banner"
      style="height: 103vh">
      <v-container>
        <v-row class="align-center flex-column text-center">
          <h1 class="text-h1">Théo Vidal</h1><br/>
          <span class="text-subtitle-1">{{ $t('home.subtitle') }}</span>
        </v-row>
        <v-row class="justify-center">
          <socials/>
        </v-row>
      </v-container>
    </banner>
    <v-container
      id="introduction"
      class="gradient"
      style="max-width: 100vw">
      <v-row class="justify-center">
        <v-col
          cols="12"
          sm="7"
          class="d-flex flex-column align-center justify-center">
          <h2 class="text-center">{{ $t('home.welcome') }}</h2>
          <p class="text-justify">{{ $t('home.introduction') }}</p>
        </v-col>
        <v-col
            order="first"
            order-sm="last"
            cols="12"
            sm="5"
            class="d-flex align-center justify-center mt-4 mt-sm-0">
          <v-avatar
            size="200">
            <v-img
              cover
              src="/img/me-min.webp"
              alt="My profile picture"/>
          </v-avatar>
        </v-col>
      </v-row>
    </v-container>
    <timelines/>
    <interests/>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="sass">
.navbar .v-col
  flex-grow: 0

#introduction
  clip-path: polygon(0 0, 100% 6%, 100% 94%, 0% 100%)
  margin-top: -37px
</style>
