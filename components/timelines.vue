<template>
  <v-container>
    <v-row
        v-for="timeline in timelines"
        :key="timeline.name"
        class="flex-column align-center">
      <h2 class="text-h2">{{ $t(timeline.name) }}</h2>
      <v-timeline
          line-thickness="5"
          line-color="#5ea7ef"
          density="comfortable"
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
const curriculum = [
  {
    name: 'Lycée Carriat, Bourg-en-Bresse',
    date: '2018-2021',
    description: 'home.curriculum.carriat',
    image: '/img/carriat.jpeg'
  },
  {
    name: 'Lycée du Parc, Lyon',
    date: '2021-2023',
    description: 'home.curriculum.parc',
    image: '/img/parc.jpg'
  },
  {
    name: 'ENSTA Paris, Palaiseau',
    date: '2023-',
    description: 'home.curriculum.ensta',
    image: '/img/ensta.jpeg'
  }
]

const experiences = [
  {
    name: 'DrInfo, Bourg-en-Bresse',
    date: '2017',
    description: 'home.experiences.drinfo',
    image: '/img/drinfo.jpg'
  },
  {
    name: 'home.experiences.areasName',
    i18n: true,
    date: '2021, 2022, 2023',
    description: 'home.experiences.areas',
    image: '/img/bourg-jasseron.jpg'
  }
]

const timelines = [
  {
    name: 'home.curriculum.name',
    data: curriculum,
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