<template>
  <v-container class="py-10 skills-content">
    <v-row align="stretch">
      <v-col cols="12" lg="8">
        <h3 class="text-headline-large gradient-text mb-4">{{ $t('skills.shortTitle') }}</h3>
        <v-row align="stretch">
          <v-col
            v-for="category in technicalArsenal"
            :key="category.id"
            cols="12"
            sm="6"
            md="4">
            <v-card class="b-card skill-card h-100" rounded="lg" elevation="2">
              <v-card-text class="d-flex flex-column h-100">
                <div class="d-flex align-center mb-3">
                  <div
                    class="icon-badge mr-3"
                    :style="{ background: `${category.color}22`, color: category.color }">
                    <v-icon :icon="category.icon" size="22" />
                  </div>
                  <h4 class="text-subtitle-1 font-weight-bold">{{ $t(category.titleKey) }}</h4>
                </div>
                <div>
                  <v-chip
                    v-for="skill in category.skills"
                    :key="skill"
                    class="ma-1"
                    size="small"
                    variant="tonal"
                    :style="{ color: category.color, background: `${category.color}1a` }">
                    {{ skill }}
                  </v-chip>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" lg="4">
        <h3 class="text-headline-large gradient-text mb-4">{{ $t('skills.hobbiesTitle') }}</h3>
        <v-card
          v-for="hobby in hobbies"
          :key="hobby.id"
          class="b-card hobby-card mb-3"
          rounded="lg"
          elevation="2">
          <v-card-text class="d-flex align-center">
            <div
              class="icon-badge icon-badge--lg mr-4"
              :style="{ background: `${hobby.color}22`, color: hobby.color }">
              <v-icon :icon="hobby.icon" size="28" />
            </div>
            <div class="flex-grow-1">
              <div class="text-body-1 font-weight-medium">{{ $t(hobby.titleKey) }}</div>
              <v-btn
                v-if="hobby.link"
                :href="hobby.link"
                target="_blank"
                variant="text"
                size="small"
                density="compact"
                class="pl-0 mt-1"
                append-icon="$openinnew">
                {{ $t('skills.view') }}
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { technicalArsenal, hobbies } from '~/data/skills'
</script>

<style lang="sass" scoped>
.interests-banner
  height: 320px

  @media (min-width: 600px)
    height: 400px

.icon-badge
  display: flex
  align-items: center
  justify-content: center
  width: 40px
  height: 40px
  border-radius: 12px
  flex-shrink: 0

  &--lg
    width: 48px
    height: 48px

.skills-content
  position: relative

  &::before
    content: ''
    position: absolute
    inset: -120px
    background: radial-gradient(circle at 15% 20%, rgba(66, 165, 245, 0.08), transparent 60%), radial-gradient(circle at 85% 75%, rgba(255, 112, 67, 0.08), transparent 60%)
    z-index: -1
    pointer-events: none
</style>