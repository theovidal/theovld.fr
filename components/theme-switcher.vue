<script setup lang="ts">
import MdiThemeLightDark from "~icons/mdi/theme-light-dark"
import { useTheme } from 'vuetify'

const theme = useTheme()

</script>

<template>
  <v-tooltip :text="$t('theme.change')">
    <template #activator="{ tooltip_props }">
      <v-btn
        variant="text"
        v-bind="tooltip_props"
        :icon="MdiThemeLightDark"
        @click="theme.toggle()"/>
    </template>
  </v-tooltip>
</template>
