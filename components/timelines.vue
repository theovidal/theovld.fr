<template>
  <v-container>
    <v-row
        v-for="timeline in timelines"
        :key="timeline.name"
        class="flex-column mt-8">
      <h2 class="text-h4 text-sm-h2 text-center">{{ $t(timeline.name) }}</h2>
      <v-timeline
          line-thickness="5"
          line-color="#5ea7ef"
          density="comfortable"
          class="pa-3"
          :side="timeline.side">
        <v-timeline-item
            v-for="item in timeline.data"
            :key="item.name"
            :class="`text-${timeline.text}`"
            size="90">
          <template #icon>
            <v-avatar
                size="90"
                :image="item.image"/>
          </template>
          <div class="text-h5">{{ item.i18n === undefined ? item.name : $t(item.name) }}</div>
          <div class="text-overline">{{ item.date }}</div>
          <p v-html="$t(item.description)"></p>
        </v-timeline-item>
      </v-timeline>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const schooling = [
  {
    name: 'Lycée Carriat, Bourg-en-Bresse',
    date: '2018-2021',
    description: 'home.schooling.carriat',
    image: '/img/carriat-min.jpeg'
  },
  {
    name: 'Lycée du Parc, Lyon',
    date: '2021-2023',
    description: 'home.schooling.parc',
    image: '/img/parc-min.jpg'
  },
  {
    name: 'ENSTA Paris, Palaiseau',
    date: '2023-',
    description: 'home.schooling.ensta',
    image: '/img/ensta-min.jpeg'
  }
]

const experiences = [
  {
    name: 'DrInfo, Bourg-en-Bresse',
    date: '2017',
    description: 'home.experiences.drinfo',
    image: '/img/drinfo-min.jpg'
  },
  {
    name: 'home.experiences.areasName',
    i18n: true,
    date: '2021, 2022, 2023',
    description: 'home.experiences.areas',
    image: '/img/bourg-jasseron-min.jpg'
  }
]

const timelines = [
  {
    name: 'home.schooling.name',
    data: schooling,
    side: 'end',
    text: 'left'
  },
  {
    name: 'home.experiences.name',
    data: experiences,
    side: 'start',
    text: 'right'
  }
]
</script>