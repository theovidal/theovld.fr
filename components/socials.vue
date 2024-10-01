<template>
  <v-tooltip
      v-for="social in socials"
      :key="social.name"
      :text="social.name"
      :aria-label="social.name"
      location="bottom">
    <template #activator="{ props }">
      <v-btn
          :href="social.link"
          :aria-label="social.name"
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
const socials = [
  {
    name: 'GitHub',
    link: 'https://github.com/theovidal',
    icon: '$github'
  },
  {
    name: 'LinkedIn',
    link: 'https://linkedin.com/in/theovidal',
    icon: '$linkedin'
  },
  {
    name: 'Telegram',
    link: 'https://t.me/theovld',
    icon: '$telegram'
  },
  {
    name: 'Contact form',
    link: '#contact',
    icon: '$email'
  }
]
</script>