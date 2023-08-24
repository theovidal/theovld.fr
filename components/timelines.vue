<template>
  <v-container>
    <v-row
        v-for="timeline in timelines"
        :key="timeline.id"
        class="flex-column mt-8">
      <h2 class="text-h4 text-sm-h2 text-center">{{ $t(`home.${timeline.id}.name`) }}</h2>
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
                :image="`/img/timelines/${item.id}-min.webp`"/>
          </template>
          <div class="text-h5">{{ item.i18n === undefined ? item.name : $t(item.name) }}</div>
          <div class="text-overline">{{ item.date }}</div>
          <p v-html="$t(`home.${timeline.id}.${item.id}`)"></p>
        </v-timeline-item>
      </v-timeline>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const schooling = [
  {
    id: 'carriat',
    name: 'Lycée Carriat, Bourg-en-Bresse',
    date: '2018-2021',
  },
  {
    id: 'parc',
    name: 'Lycée du Parc, Lyon',
    date: '2021-2023'
  },
  {
    id: 'ensta',
    name: 'ENSTA Paris, Palaiseau',
    date: '2023-'
  }
]

const experiences = [
  {
    id: 'drinfo',
    name: 'DrInfo, Bourg-en-Bresse',
    date: '2017'
  },
  {
    id: 'areas',
    name: 'home.experiences.areasName',
    i18n: true,
    date: '2021, 2022, 2023'
  }
]

const timelines = [
  {
    id: 'schooling',
    data: schooling,
    side: 'end',
    text: 'left'
  },
  {
    id: 'experiences',
    data: experiences,
    side: 'start',
    text: 'right'
  }
]
</script>