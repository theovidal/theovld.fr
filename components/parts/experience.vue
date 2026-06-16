<script setup lang="ts">
  import experiences from "~/data/experiences"

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

  const typeColorMap: Record<string, string> = {
    course: '#42A5F5',
    'research-internship': '#26A69A',
    'conference': '#AB47BC',
    'lecture': '#7E57C2'
  }

  function typeColor(is: string) {
    return typeColorMap[is] ?? 'primary'
  }
</script>

<template>
  <v-container id="experience" class="experience-section py-10">
    <v-row justify="center">
      <v-col cols="12">
        <v-timeline
          id="main-timeline"
          side="end"
          align="start"
          line-thickness="2"
          line-color="primary"
          dot-color="white"
          density="compact">
          <template v-for="(entry, id) in timelineItems" :key="id">
            <v-timeline-item
              v-if="entry.showcase"
              size="64">
              <template #icon>
                <div class="logo-badge">
                  <img :src="`/img/${entry.type}/${entry.logo}`" :alt="$t(`${entry.type}.${id}.title`)">
                </div>
              </template>

              <v-card
                class="timeline-card"
                :style="{ borderInlineStartColor: typeColor(entry.is) }"
                rounded="lg"
                elevation="0">
                <v-card-text>
                  <div class="text-label-medium text-medium-emphasis mb-1 d-flex">
                    <date :beginning="entry.beginning" :end="entry.end" :show-from="entry.showFrom" :show-soon="entry.showSoon" />
                  </div>
                  <div class="text-headline-small font-weight-bold gradient-text mb-1">
                    {{ $t(`${entry.type}.${id}.title`) }}
                  </div>
                  <v-chip
                    :color="typeColor(entry.is)"
                    variant="tonal"
                    size="small"
                    class="text-label-medium text-uppercase mb-2">
                    {{ $t(`experience.types.${entry.is}`) }}
                  </v-chip>
                  <p class="text-body-medium text-medium-emphasis mb-0">
                    {{ $t(`${entry.type}.${id}.text`) }}
                  </p>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </template>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="sass">
.logo-badge
  width: 52px
  height: 52px
  border-radius: 14px
  display: flex
  align-items: center
  justify-content: center
  padding: 3px
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.18)

  img
    width: 100%
    height: 100%
    object-fit: contain

.timeline-card
  border-inline-start: 4px solid
  transition: transform 0.2s ease, box-shadow 0.2s ease

  &:hover
    transform: translateX(4px)
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15)

#main-timeline .v-timeline-item__body
  width: 100% !important
</style>