<template>
  <v-tooltip
      v-for="social in socials"
      :key="social.name"
      :text="social.name"
      location="bottom">
    <template #activator="{ props }">
      <v-btn
          :href="social.link"
          :icon="true"
          target="_blank"
          variant="text"
          v-bind="props">
        <v-avatar
            v-if="social.image !== undefined"
            :image="social.image">
        </v-avatar>
        <v-icon
            v-else
            :icon="social.icon"/>
      </v-btn>
    </template>
  </v-tooltip>

</template>

<script setup lang="ts">
import { socials } from 'assets/data'
</script>