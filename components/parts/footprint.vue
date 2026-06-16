<script setup lang="ts">
import * as d3 from "d3-geo"
import { feature } from "topojson-client"
import landTopology from "world-atlas/land-110m.json"
import experiences from "~/data/experiences"

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
      lat,
      lng,
      left: (x / MAP_WIDTH) * 100,
      top: (y / MAP_HEIGHT) * 100,
      country: val.country,
    }
  })
  .filter((p): p is NonNullable<typeof p> => p !== null)
</script>

<template>
  <v-container id="footprint" class="w-screen py-8">
    <v-row>
       <v-col
          class="py-5"
          cols="12">
        <h2 class="gradient-text text-center text-display-large">{{ $t('experience.title' )}}</h2>
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col cols="12" md="10">
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
              <div class="text-caption font-weight-bold">{{ point.country }} {{ $t(`experience.${point.id}.title`) }}</div>
              <div class="text-caption ">{{ $t(`experience.${point.id}.text`) }}</div>
            </v-tooltip>
          </div>
        </v-card>
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

</style>