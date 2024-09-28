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
          <h1 class="text-h1 gradient-text font-weight-regular">Théo Vidal</h1><br/>
          <span class="text-subtitle-1" v-html="$t('home.subtitle')"></span>
        </v-row>
        <v-row class="justify-center">
          <socials/>
        </v-row>
      </v-container>
      <template #bottom>
        <locale-switcher/>
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
          <h2 class="text-center mb-2">{{ $t('introduction.title') }}</h2>
          <p class="text-justify mb-4">{{ $t('introduction.text') }}</p>
          <v-btn
            variant="outlined"
            :href="`/cv_${locale}.pdf`"
            target="_blank"
            :text="$t('introduction.resume')"
          />
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
              :alt="$t('introduction.picture')"/>
          </v-avatar>
        </v-col>
      </v-row>
    </v-container>
    <experience/>
    <hr/>
    <portfolio/>
    <interests/>
    <hr/>
    <contact/>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
</script>

<style scoped lang="sass">

</style>
