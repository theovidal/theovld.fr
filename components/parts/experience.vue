<script setup lang="ts">
  import {useGoTo} from "vuetify";
  import experiences from "~/data/experiences";

  const timelineItems =
      Object.fromEntries(
          Object.entries({
            ...objmap(experiences, val => {
              return {
                ...val,
                showcase: true,
                type: 'experience',
              }
            })
          })
          .sort((a, b) => b[1].beginning - a[1].beginning)
      )

  const goto = useGoTo()
</script>

<template>
  <v-container
      id="experience"
      class="w-screen">
    <v-row>
      <v-col>
        <v-slide-group show-arrows>
          <v-timeline
            id="main-timeline"
            direction="horizontal"
            side="start"
            line-thickness="5"
            line-color="primary"
            class="pa-3 height-screen">
            <template
              v-for="(entry, id) in timelineItems"
              :key="id">
              <v-timeline-item
                v-if="entry.showcase"
                fill-dot
                dot-color="primary"
                size="90">
                <template #icon>
                  <v-avatar
                    size="85"
                    :image="`/img/${entry.type}/${id}-min-pad.webp`"/>
                </template>
                <template #opposite>
                    <div
                      class="text-label-large text-center"
                      style="line-height: 1.1rem">
                      <date
                        :beginning="entry.beginning"
                        :end="entry.end"
                        :show-from="entry.showFrom"/>
                    </div>
                </template>
                <div class="border-b-md border-opacity-50 border-primary pa-1">
                  <div class="text-headline-small gradient-text">{{ $t(`${entry.type}.${id}.title`) }}</div>
                  <div class="text-label-medium text-uppercase">{{ $t(`experience.types.${entry.is}`) }}</div>
                  <div class="text-body-large">{{ $t(`${entry.type}.${id}.text`) }}</div>
                </div>
              </v-timeline-item>
            </template>
          </v-timeline>
        </v-slide-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="sass">
#main-timeline .v-timeline-item__body
  width: 270px !important
  display: flex
  align-items: end
</style>