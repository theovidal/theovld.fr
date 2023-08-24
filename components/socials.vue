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
import IconGithub from '~icons/mdi/github'
import IconLinkedin from '~icons/mdi/linkedin'
import IconEmail from '~icons/mdi/email-outline'
import IconTelegram from '~icons/custom/telegram'

const socials = [
  {
    name: 'GitHub',
    link: 'https://github.com/theovidal',
    icon: IconGithub
  },
  {
    name: 'LinkedIn',
    link: 'https://linkedin.com/in/theovidal',
    icon: IconLinkedin
  },
  {
    name: 'Telegram',
    link: 'https://t.me/theovld',
    icon: IconTelegram
  },
  {
    name: 'Email',
    link: 'mailto:&#116;&#104;&#101;&#111;&#064;&#098;&#101;&#099;&#097;&#117;&#115;&#101;&#111;&#102;&#112;&#114;&#111;&#103;&#046;&#102;&#114;',
    icon: IconEmail
  }
]
</script>