<script setup lang="ts">
  import { useLocale } from "vuetify";
  import IconTranslateVariant from '~icons/mdi/translate-variant'

  const { locale: currentLocale, locales, setLocale } = useI18n()
  const { current: vuetifyLocale } = useLocale()

  const model = ref(currentLocale.value)

  function changeLocale(locale) {
    vuetifyLocale.value = locale
    setLocale(locale)
  }
</script>

<template>
  <div>
    <v-menu>
      <template #activator="{ props }">
        <v-btn
          variant="text"
          :icon="IconTranslateVariant"
          class="d-md-none"
          :aria-label="$t('general.menu')"
          v-bind="props"/>
      </template>
      <v-list>
        <v-list-item
          v-for="locale in locales"
          :key="locale.code"
          variant="text"
          :value="locale.code"
          @click="changeLocale(locale.code)">
          <template #prepend>
            <img
              :src="`/img/locales/${locale.code}-min.png`"
              :alt="`${locale.code} flag`"
              height="20px"
              class="pr-2">
          </template>
          {{ locale.name }}
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
  </div>
  <v-btn-toggle
    mandatory
    class="d-none d-md-inline-flex"
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