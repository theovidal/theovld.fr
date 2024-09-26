<template>
  <v-parallax
    :src="props.src"
    :class="{
      'fullscreen': props.fullscreen,
      'h-100': props.fill,
      'shadow': props.shadow
    }"
    class="banner">
    <v-container
      class="container d-flex justify-center translucent"
      :class="{ 'align-center': center }">
      <v-row class="py-7">
        <slot/>
        <v-expand-transition>
          <slot
            v-if="expand"
            name="expand"/>
        </v-expand-transition>
      </v-row>

      <v-row
          class="bottom justify-center"
          style="z-index: 20">
        <v-btn
            v-if="hasTarget"
            class="gradient bounce"
            icon="$expand"
            @click="goto(props.target)"
          />
        <v-btn
          v-if="hasExpand"
          variant="text"
          :icon="expand ? '$minus' : '$plus'"
          @click="expand = !expand"
        />
      </v-row>

      <v-row
          class="bottom left mt-auto"
          style="z-index: 10">
        <slot name="bottom"/>
      </v-row>
    </v-container>
  </v-parallax>
</template>

<script setup>
import { useGoTo } from 'vuetify'

const props = defineProps({
  center: {
    type: Boolean,
    default: false
  },
  src: {
    type: String,
    required: true
  },
  target: {
    type: String,
    default: undefined
  },
  fill: {
    type: Boolean,
    default: false
  },
  fullscreen: {
    type: Boolean,
    default: false
  },
  shadow: {
    type: Boolean,
    default: false
  }
})

const goto = useGoTo()

const slots = useSlots()

const expand = defineModel({ default: false })

const hasTarget = computed(() => props.target !== undefined)
const hasExpand = computed(() => !!slots.expand)
const hasBottom = computed(() => hasTarget || hasExpand)
</script>

<style scoped lang="sass">
.banner:has(+.clip-right) .bottom
  bottom: 56px !important

.container
  color: white
  // background: rgba(33, 33, 33, 0.56)
  margin: 0
  height: 100%
  max-width: 100vw !important

.bottom
  position: absolute
  bottom: 12px

.left
  position: absolute
  left: 12px

.fullscreen
  height: 105vh
</style>
