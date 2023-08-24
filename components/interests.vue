<template>
  <Transition>
    <banner
        id="interests-parallax"
        :src="`/img/interests/${selected}-banner-min.jpg`">
      <v-container class="pb-10">
        <v-row class="justify-center">
          <h2 class="text-h2 text-center">{{ $t('home.interests.name') }}</h2>
        </v-row>
        <v-row>
          <v-col
              v-for="(interest, name) in interests"
              :key="name"
              class="text-center"
              v-ripple
              @click="selected = name">
            <v-avatar
                :image="`/img/interests/${name}-icon-min.jpg`"
                size="160"
                :alt="name"/><br>
            <span
                class="text-h5"
                v-if="selected !== name">
              {{ $t(`home.interests.${name}.name`) }}
            </span>
            <i-mdi-chevron-down
                v-else
                width="24px"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col
              cols="12"
              sm="5"
              class="text-center text-sm-right">
            <h4 class="text-h4">{{ $t(`home.interests.${selected}.name`)}}</h4>
          </v-col>
          <v-col
            cols="12"
            sm="7">
            <p class="text-justify">{{ $t(`home.interests.${selected}.description`)}}</p>
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
        <v-row class="justify-center">
          <v-btn
              :to="interests[selected].link.local ? interests[selected].link.href : ''"
              :href="interests[selected].link.local ? '' : interests[selected].link.href"
              :target="interests[selected].link.local ? '' : '_blank'"
              :nuxt="interests[selected].link.local"
              class="gradient"
              :append-icon="interests[selected].link.local ? IconChevronRight : IconOpenInNew">
            {{ $t(`home.interests.${selected}.link`) }}
          </v-btn>
        </v-row>
      </v-container>
    </banner>
  </Transition>
</template>

<script setup lang="ts">
import IconOpenInNew from '~icons/mdi/open-in-new'
import IconChevronRight from '~icons/mdi/chevron-right'
const selected = ref('code')

const interests = {
  code: {
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
    link: {
      local: false,
      href: 'https://highest.netlify.app'
    },
    stats: {
      level: '5C',
      competitions: '2'
    }
  },
  cubing: {
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

@media screen and (min-width: 1150px)
  #interests-parallax
    max-height: 700px

</style>