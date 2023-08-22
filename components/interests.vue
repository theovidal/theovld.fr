<template>
  <Transition>
    <banner :src="interests[selected].banner">
      <v-container>
        <v-row class="justify-center">
          <h2 class="text-h2">{{ $t('home.interests.name') }}</h2>
        </v-row>
        <v-row>
          <v-col
              v-for="(interest, name) in interests"
              :key="name"
              class="text-center"
              v-ripple
              @click="selected = name">
            <v-avatar
                :image="interest.image"
                size="160"
                :alt="name"/><br>
            <h3
                v-if="selected !== name"
            >
              {{ $t(`home.interests.${name}.name`) }}
            </h3>
            <v-icon
                v-else
                icon="mdi-chevron-down"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-right">
            <h1>{{ $t(`home.interests.${selected}.name`)}}</h1>
          </v-col>
          <v-col>
            <p>{{ $t(`home.interests.${selected}.description`)}}</p>
          </v-col>
        </v-row>
        <v-row class="justify-center flex-column flex-sm-row">
          <v-col
              v-for="(value, stat) in interests[selected].stats"
              :key="selected + stat"
              class="text-center flex-grow-0"
              style="white-space: nowrap">
            <span class="text-overline">{{ $t(`home.interests.${selected}.stats.${stat}`) }}</span><br>
            <span>{{ value }}</span>
          </v-col>
        </v-row>
        <v-row class="justify-end">
          <v-btn
              :to="interests[selected].link.local ? interests[selected].link.href : ''"
              :href="interests[selected].link.local ? '' : interests[selected].link.href"
              :target="interests[selected].link.local ? '' : '_blank'"
              :nuxt="interests[selected].link.local"
              class="gradient"
              :append-icon="interests[selected].link.local ? 'mdi-chevron-right' : 'mdi-open-in-new'">
            {{ $t(`home.interests.${selected}.link`) }}
          </v-btn>
        </v-row>
      </v-container>
    </banner>
  </Transition>
</template>

<script setup lang="ts">
const selected = ref('puzzles')

const interests = {
  code: {
    image: '/img/code-image.png',
    banner: '/img/code-banner.jpeg',
    link: {
      local: true,
      href: '/portfolio'
    },
    stats: {
      repos: '40+',
      languages: '5'
    }
  },
  climbing: {
    image: '/img/climbing-image.jpeg',
    banner: '/img/climbing-banner.jpeg',
    link: {
      local: false,
      href: 'https://highest.netlify.app'
    },
    stats: {
      level: '5C',
      competitions: '2'
    }
  },
  puzzles: {
    image: '/img/cubing-image.jpeg',
    banner: '/img/cubing-banner.jpeg',
    link: {
      local: false,
      href: 'https://t.me/cubcarre_bot'
    },
    stats: {
      number: '12',
      threeRecord: '19.548s'
    }
  }
}
</script>

<style lang="sass">
.v-enter-active,
.v-leave-active
  transition: opacity 0.5s ease


.v-enter-from,
.v-leave-to
  opacity: 0

</style>