<template>
  <banner
      center
      src="/img/alps-min.jpeg">
    <v-container>
      <v-row class="flex-column align-center">
        <h1 class="text-h1 text-center">{{ $t('portfolio.name') }}</h1>
      </v-row>
    </v-container>
  </banner>
  <div>
    <banner
      v-for="(links, project, i) in showcase"
      :key="project"
      center
      class="portfolio-parallax"
      :class="i % 2 === 1 ? rightClasses : ''"
      :src="`/img/portfolio/${project}-banner-min.png`">
      <v-container>
        <v-row class="justify-center">
          <v-col sm="7">
            <v-row
                class="flex-column justify-center text-center"
                :class="{ 'text-sm-right': i % 2 === 1, 'text-sm-left': i % 2 === 0 }"
                style="height: 100%">
              <h1 class="gradient-text">{{ $t(`portfolio.${project}.name`) }}</h1>
              <span class="text-overline">{{ $t(`portfolio.${project}.short`) }}</span>
              <p class="text-justify">{{ $t(`portfolio.${project}.description`) }}</p>
            </v-row>
            <v-row
                class="justify-center"
                :class="{ 'justify-sm-end': i % 2 === 1 }">
              <v-tooltip
                  v-for="(url, name) in links"
                  :key="name"
                  :text="$t(`portfolio.${name}`)"
                  location="bottom">
                <template #activator="{ props }">
                  <v-btn
                    :href="url"
                    target="_blank"
                    variant="text"
                    :icon="icons[name]"
                    v-bind="props">
                  </v-btn>
                </template>
              </v-tooltip>
            </v-row>
          </v-col>
          <v-col
              cols="5"
              class="d-none d-sm-flex justify-center align-center"
              :class="{ 'order-first': i % 2 === 0 }">
            <v-avatar
                size="200"
                rounded="0">
              <v-img
                  :src="`/img/portfolio/${project}-icon-min.png`"
                  :alt="$t(`portfolio.${project}.name`)"/>
            </v-avatar>
          </v-col>
        </v-row>
      </v-container>
    </banner>
  </div>
  <v-container class="mb-9">
    <v-row class="flex-column align-center">
      <h2 class="text-h2">{{ $t('portfolio.more') }}</h2>
    </v-row>
    <v-row class="align-center">
      <v-col
          v-for="repo in repos"
          :key="repo.id"
          cols="6"
          sm="4"
          md="3">
        <v-card
            :href="repo.html_url"
            target="_blank"
            :style="`background: linear-gradient(165deg, ${getPrimaryColor(repo.language)} 0%, ${getSecondaryColor(repo.language)} 100%) !important`">
          <div>
            <v-card-title>
              {{ repo.name }}
            </v-card-title>
            <v-card-text>
              {{ repo.description }}
            </v-card-text>
            <v-card-actions>
              <v-chip
                  v-if="repo.language !== null"
                  class="ma-1"
                  :color="getPrimaryColor(repo.language)"
                  variant="outlined">{{ repo.language }}
              </v-chip>
              <v-chip
                  v-if="repo.stargazers_count > 0"
                  variant="outlined"
                  color="yellow"
                  prepend-icon="mdi-star">{{ repo.stargazers_count }}</v-chip>
            </v-card-actions>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-btn
          href="https://github.com/theovidal"
          target="_blank"
          prepend-icon="mdi-github"
          append-icon="mdi-open-in-new"
          class="gradient">
        {{ $t('portfolio.see') }}
      </v-btn>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const rightClasses = [
  'right',
  'my-n11',
  'my-sm-n12',
  'my-md-n13',
  'my-lg-n14',
  'my-xl-n15',
  'my-xxl-n16'
]

const gradients = {
  'JavaScript': ['#FFEB3B', '#FBC02D'],
  'TypeScript': ['#303F9F', '#1E88E5'],
  'OCaml': ['#FB8C00', '#FFCA28'],
  'Python': ['#C0CA33', '#7CB342'],
  'Vue': ['#64DD17', '#388E3C'],
  'Go': ['#0288D1', '#26C6DA'],
  'Ruby': ['#B71C1C', '#D50000'],
  'Elixir': ['#4527A0', '#B39DDB'],
  'C': ['#90A4AE', '#616161'],
  'HTML': ['#DD2C00', '#FF7043']
}

function getPrimaryColor(language) {
  const colors = gradients[language]
  if (colors === undefined) return "#F5F5F5"
  else return colors[0]
}

function getSecondaryColor(language) {
  const colors = gradients[language]
  if (colors === undefined) return "#E0E0E0"
  else return colors[1]
}

const showcase = {
  highest: {
    github: 'https://github.com/highest-app/highest',
    website: 'https://highest.netlify.app'
  },
  bop: {
    github: 'https://github.com/BecauseOfProg',
    website: 'https://becauseofprog.fr',
    discord: 'https://discord.becauseofprog.fr'
  },
  mapping: {
    github: 'https://github.com/theovidal/mapping',
    docs: 'https://github.com/theovidal/mapping/blob/main/assets/docs/Dossier%20Projet%202021%20-%20CAPITANIO%20Kylian%2C%20VIDAL%20Th%C3%A9o.pdf'
  },
  tipe: {
    github: 'https://github.com/theovidal/tipe'
  }
}

const icons = {
  github: 'mdi-github',
  website: 'mdi-web',
  docs: 'mdi-file-document-outline',
  discord: 'mdi-message-outline'
}

const { data: repos } = await useFetch('https://api.github.com/users/theovidal/repos?sort=created&direction=desc&per_page=15')
</script>

<style scoped lang="sass">
@use 'vuetify/settings'
$border-radius: 24px

.v-card
  border-radius: $border-radius
  padding: 4px
  > div
    height: 100%
    background-color: settings.$card-background
    border-radius: $border-radius - 2px

.v-parallax.right
  clip-path: polygon(0 0, 100% 8%, 100% 92%, 0% 100%)
  z-index: 1
  .v-container .v-row .v-col .v-row
    text-align: right
  &:last-child
    margin-bottom: 0 !important

@media screen and (max-width: 750px)
  .portfolio-parallax
    min-height: 550px !important

@media screen and (min-width: 1200px)
  .portfolio-parallax
    max-height: 400px !important

</style>