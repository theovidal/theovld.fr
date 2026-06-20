<script setup lang="ts">
  import * as d3 from "d3-geo"
  import { feature } from "topojson-client"
  import landTopology from "world-atlas/land-110m.json"

  import experiences from "~/data/experiences"

  import MdiChevronRight from '~icons/mdi/chevron-right'

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

  const MAP_WIDTH = 1000
  const MAP_HEIGHT = 500

  // Equirectangular projection: 360° of longitude maps to MAP_WIDTH px,
  // 180° of latitude maps to MAP_HEIGHT px — same math as the original
  // (lng + 180) * (1000 / 360) / (90 - lat) * (500 / 180) formula.
  const projection = d3
    .geoEquirectangular()
    .scale(MAP_WIDTH / (2 * Math.PI))
    .translate([MAP_WIDTH / 2, MAP_HEIGHT / 2])

  const geoPath = d3.geoPath(projection)

  // Natural Earth land silhouette (public domain), via world-atlas
  const land = feature(landTopology as any, (landTopology as any).objects.land)
  const worldMapPath = geoPath(land) ?? ""

  const points = Object.entries(experiences)
    .filter(([_, val]) => val.location)
    .map(([id, val]) => {
      const [lat, lng] = val.location as [number, number]
      const projected = projection([lng, lat])
      if (!projected) return null

      const [x, y] = projected
      return {
        id,
        ...val,
        lat,
        lng,
        left: (x / MAP_WIDTH) * 100,
        top: (y / MAP_HEIGHT) * 100,
      }
    })
    .filter((p): p is NonNullable<typeof p> => p !== null)
</script>

<template>
  <v-container id="experience" class="py-8">
    <v-row class="justify-center">
      <v-col
          class="py-0 my-0"
          cols="12">
        <h2 class="gradient-text text-center text-display-large my-2">{{ $t('experience.title' )}}</h2>
      </v-col>
      <v-col cols="12" md="10" lg="8">
        <v-card class="map-card pa-4 box-shadow rounded-xl" elevation="4">
          <div class="map-wrapper">
            <svg viewBox="0 0 1000 500" class="world-map" preserveAspectRatio="xMidYMid meet">
              <path :d="worldMapPath" class="continent" />
            </svg>

            <v-tooltip v-for="point in points" :key="point.id" location="top" open-delay="0">
              <template #activator="{ props }">
                <div
                  v-bind="props"
                  class="map-pin"
                  :style="{ left: `${point.left}%`, top: `${point.top}%` }"
                >
                  <span class="map-pin__dot" />
                  <span class="map-pin__pulse" />
                </div>
              </template>
              <v-row>
                <div class="d-flex align-center">
                  <nuxt-img
                    :src="`/img/experience/${point.logo}`"
                    :alt="$t(`${point.type}.${point.id}.title`)"
                    height="44px"
                    style="background: white; padding: 6px; border-radius: 2px"
                  />
                </div>
                <div class="d-flex flex-column">
                  <div class="text-caption font-weight-bold">{{ point.country }} {{ $t(`experience.${point.id}.title`) }}</div>
                  <div class="text-caption ">{{ $t(`experience.${point.id}.text`) }}</div>
                </div>
              </v-row>
            </v-tooltip>
          </div>
        </v-card>
      </v-col>
    </v-row>
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
                <div class="logo-badge" :class="{ pad: entry.padLogo }">
                  <nuxt-img :src="`/img/${entry.type}/${entry.logo}`" :alt="$t(`${entry.type}.${id}.title`)"/>
                </div>
              </template>

              <v-card
                class="box-shadow timeline-card"
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
                <v-card-actions v-if="entry.attachment">
                  <v-spacer/>
                  <v-btn
                    class="gradient text-white"
                    target="_blank"
                    :append-icon="MdiChevronRight"
                    :href="entry.attachment.path">
                    {{ $t('portfolio.consult')}}
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-timeline-item>
          </template>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="sass">
.map-wrapper
  position: relative
  width: 100%
  aspect-ratio: 2/1 /* matches 1000x500 viewBox */

.world-map
  position: absolute
  inset: 0
  width: 100%
  height: 100%

.continent
  fill: rgb(var(--v-theme-continents))
  stroke: rgb(var(--v-theme-continents-border))
  stroke-width: 0.5

.map-pin
  position: absolute
  transform: translate(-50%, -50%)
  width: 16px
  height: 16px
  cursor: pointer

.map-pin__dot
  position: absolute
  inset: 0
  margin: auto
  width: 12px
  height: 12px
  border-radius: 50%
  background: rgb(var(--v-theme-primary))
  box-shadow: 0 0 0 4px rgba(33, 150, 243, 0.25)

.map-pin__pulse
  position: absolute
  inset: 0
  margin: auto
  width: 10px
  height: 10px
  border-radius: 50%
  border: 2px solid  rgb(var(--v-theme-primary))
  animation: map-pulse 2s ease-out infinite

@keyframes map-pulse
  0%
    transform: scale(1)
    opacity: 0.8

  100%
    transform: scale(2.6)
    opacity: 0


.logo-badge
  width: 52px
  height: 52px
  border-radius: 14px
  display: flex
  align-items: center
  justify-content: center
  padding: 2px

  &.pad
    padding: 6px !important

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