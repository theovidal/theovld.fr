<template>
  <div>
    <banner
      center
      src="/img/alps-reduced.webp"
      alt="Photo of the Alps as the banner"
      fullscreen
      target="#introduction">
      <v-container>
        <v-row class="align-center flex-column text-center">
          <h1 class="text-display-large gradient-text ma-0" style="font-size: 96px">Théo Vidal</h1>
          <span class="text-body-large" v-html="$t('home.subtitle')"></span>
        </v-row>
        <v-row class="justify-center" density="compact">
          <socials/>
        </v-row>
      </v-container>
      <template #bottom>
        <locale-switcher/>
        <v-spacer/>
        <theme-switcher/>
      </template>
    </banner>
    <v-container
      id="introduction"
      class="gradient clip-right"
      style="max-width: 100vw">
      <v-row class="justify-center">
        <v-col
          cols="12"
          sm="7"
          class="d-flex flex-column align-center justify-center">
          <h2 class="text-center text-display-small mb-2">{{ $t('introduction.title') }}</h2>
          <p class="text-justify mb-4">{{ $t('introduction.text') }}</p>
          <v-btn
            variant="outlined"
            href="/files/Vidal_Theo_Academic_CV_2026.pdf"
            target="_blank"
            :text="$t('introduction.resume')"
          />
        </v-col>
        <v-col
            cols="12"
            sm="5"
            class="intro-picture d-flex align-center justify-center mt-4 mt-sm-0">
          <v-avatar
            size="200"
            color="grey-lighten-4">
            <nuxt-img
              provider="ipx"
              src="/img/me-min.webp"
              :alt="$t('introduction.picture')"
              style="width: 100%; height: 100%; object-fit: cover;"
              />
          </v-avatar>
        </v-col>
      </v-row>
    </v-container>
    <experience/>
    <skills/>
    <hr/>
    <portfolio/>
    <hr/>
    <contact/>
    <banner
      center
      style="height: 200px"
      src="/img/alps-reduced.webp"
      alt="Photo of the Alps as the banner"
      fullscreen>
      <v-container>
        <v-row class="justify-center" density="compact">
          <socials/>
        </v-row>
      </v-container>
    </banner>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
</script>

<style scoped lang="sass">
.intro-picture
  order: -1

  @media screen and (min-width: 600px)
    order: 2

</style>
