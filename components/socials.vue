<template>
  <v-tooltip
      v-for="social in socials"
      :key="social.key ? $t(social.key) : social.name"
      :text="social.key ? $t(social.key) : social.name"
      :aria-label="social.key ? $t(social.key) : social.name"
      location="bottom">
    <template #activator="{ props }">
      <v-btn
        :href="!social.local && social.link"
        :to="social.local && social.link"
        :aria-label="social.name"
        :target="!social.local && '_blank'"
        :active="false"
        variant="text"
        icon
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
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const socials = [
  {
    name: 'LinkedIn',
    link: 'https://linkedin.com/in/theovidal',
    icon: '$linkedin'
  },
    {
    name: 'ResearchGate',
    link: 'https://www.researchgate.net/profile/Theo-Vidal',
    icon: '$researchgate'
  },
  {
    name: 'GitHub',
    link: 'https://github.com/theovidal',
    icon: '$github'
  },
  {
    name: 'Telegram',
    link: 'https://t.me/theovld',
    icon: '$telegram'
  },
  {
    key: 'contact.shortTitle',
    link: '#contact',
    local: true,
    icon: '$email'
  }
]
</script>