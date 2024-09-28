<template>
  <banner
      id="interests"
      :src="`/img/interests/${selected}-banner-min.jpg`">
    <v-container class="d-flex align-center">
      <v-row>
        <v-col cols="12">
          <h2 class="text-h2 text-center">{{ $t('interests.title') }}</h2>
        </v-col>
        <v-col cols="12">
          <v-item-group
            v-model="selected"
            mandatory>
            <v-row class="justify-space-evenly">
                <v-item
                    v-for="(interest, name) in interests"
                  :key="name"
                  v-slot="{ isSelected, toggle }"
                  :value="name">
                  <v-chip
                    :prepend-avatar="`/img/interests/${name}-icon-min.jpg`"
                    :append-icon="isSelected && MdiChevronDown"
                    :size="120"
                    class="ma-1 pr-3"
                    variant="outlined"
                    @click="toggle">
                    {{ $t(`interests.${name}.name`) }}
                  </v-chip>
                </v-item>
            </v-row>
          </v-item-group>
        </v-col>
        <v-col cols="12">
          <v-window v-model="selected">
            <v-window-item
              v-for="(interest, name) in interests"
              :key="name"
              :value="name">
              <v-row class="justify-center flex-column flex-sm-row">
                <v-col
                    v-for="(value, stat) in interest.stats"
                    :key="selected + stat"
                    class="text-center flex-grow-0"
                    style="white-space: nowrap">
                  <span class="text-overline text-shadow">{{ $t(`interests.${selected}.stats.${stat}`) }}</span><br>
                  <span class="text-shadow">{{ value }}</span>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-col>
      </v-row>
    </v-container>
  </banner>
  <v-container class="pb-10">
    <v-row>
      <v-col cols="12">
        <v-card
          id="interests-card"
          class="b-card">
          <v-card-text>
            <v-window v-model="selected">
              <v-window-item
                v-for="(interest, name) in interests"
                :key="name"
                :value="name">
                <v-row>
                  <v-col
                    cols="12"
                    sm="5"
                    class="d-flex flex-column align-center align-sm-end justify-space-evenly">
                  <h3 class="text-h4 gradient-text text-center text-sm-right">{{ $t(`interests.${name}.name`)}}</h3>
                    <v-btn
                      :href="!interest.link.local && interest.link.href"
                      :target="!interest.link.local && '_blank'"
                      :nuxt="interest.link.local"
                      class="gradient"
                      @click="interest.link.local && goto(interest.link.href)"
                      :append-icon="interest.link.local ? '$next' : '$openinnew'">
                      {{ $t(`interests.${name}.link`) }}
                    </v-btn>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="7">
                    <p class="text-justify">{{ $t(`interests.${selected}.description`)}}</p>
                  </v-col>
                </v-row>
              </v-window-item>
            </v-window>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import MdiChevronDown from '~icons/mdi/chevron-down'
import {useGoTo} from "vuetify";

const goto = useGoTo()

const selected = ref('code')

const interests = {
  code: {
    link: {
      local: true,
      href: '#portfolio'
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
      level: '6B',
      competitions: '4'
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
@media screen and (min-width: 600px)
  #interests
    max-height: 400px

#interests-card
  margin-top: -64px
</style>