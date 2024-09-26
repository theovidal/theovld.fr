<script setup lang="ts">
  import {useLocale} from "vuetify";

  const { locale: currentLocale, locales, setLocale } = useI18n()
  const { current: vuetifyLocale } = useLocale()

  const model = ref(currentLocale.value)

  function changeLocale(locale) {
    vuetifyLocale.value = locale
    setLocale(locale)
  }
</script>

<template>
  <v-btn-toggle
    mandatory
    variant="text"
    v-model="model"
    @update:model-value="(e) => changeLocale(e)">
    <v-btn
      v-for="locale in locales"
      :key="locale.code"
      :value="locale.code">
      <img
        :src="`/img/locales/${locale.code}-min.png`"
        :alt="`${locale.code} flag`"
        height="20px">
    </v-btn>
  </v-btn-toggle>
</template>

<style scoped lang="sass">

</style>