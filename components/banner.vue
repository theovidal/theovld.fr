<template>
  <v-parallax :src="props.src">
    <v-container
      class="container d-flex justify-center"
      :class="{ 'align-center': center }">
      <v-row>
        <slot/>
      </v-row>
    </v-container>
  </v-parallax>
</template>

<script setup>
const props = defineProps({
  center: {
    type: Boolean,
    default: false
  },
  src: {
    type: String,
    required: true
  }
})
</script>

<style scoped lang="sass">
.container
  color: white
  background: #212121aa
  margin: 0
  height: 100%
  max-width: 100vw !important
</style>
