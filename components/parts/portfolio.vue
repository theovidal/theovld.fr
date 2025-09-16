<script setup lang="ts">
  import IconDocument from '~icons/mdi/file-document-outline'
  import IconDiscord from '~icons/custom/discord'

  import projects from "~/data/projects";
  import { categories } from "~/data/projects";

  const reposLoaded = ref(false)
  const { data: repos } = await useFetch(
      'https://api.github.com/users/theovidal/repos?sort=created&direction=desc&per_page=15',
      {
        lazy: true,
        server: false,
        onResponse() {
          reposLoaded.value = true
        }
      }
  )

  const icons = {
    github: '$github',
    docs: IconDocument,
    discord: IconDiscord
  }

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
    'MATLAB': ['#DD2C00', '#FF7043'],
    'Jupyter Notebook': ['#F57C00', '#FFCC80'],
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
</script>

<template>
  <v-container
      id="portfolio"
      class="w-screen">
    <v-row class="justify-around">
      <v-col
          class="py-3"
          cols="12">
        <h2 class="gradient-text text-center text-h2">{{ $t('portfolio.title') }}</h2>
        <p class="text-center">{{ $t('portfolio.description') }}</p>
      </v-col>
      <v-col
        v-for="(category, categoryId) in categories"
        :key="categoryId"
        cols="12"
        md="6">
        <v-row>
          <v-col
            cols="12"
            class="d-flex align-center">
            <v-icon
                color="primary"
                :icon="category.icon"/>
            <h3 class="gradient-text text-h4 ml-2">{{ $t(`portfolio.categories.${categoryId}`) }}</h3>
          </v-col>
          <v-col
            v-for="projectId in category.projects"
            :key="projectId"
            class="pa-1"
            cols="12"
            sm="6">
            <v-card
                :id="`portfolio-${projectId}`"
                class="b-card box-shadow">
              <v-parallax
                :src="`/img/portfolio/${projectId}-banner-min.webp`"
                :alt="`Banner for project ${$t(`portfolio.${projectId}.name`)}`">
                  <v-row class="h-100 align-end">
                    <v-row class="translucent">
                      <v-col
                          v-if="projects[projectId].withoutLogo === undefined"
                          class="d-flex flex-column justify-center flex-0-0-0">
                          <v-img
                              width="56"
                              :src="`/img/portfolio/${projectId}-min.webp`"
                              :alt="`Icon for project ${$t(`portfolio.${projectId}.title`)}`"/>
                      </v-col>
                      <v-col
                        class="py-0 d-flex align-center">
                        <h3 class="text-white text-heading-5">{{ $t(`portfolio.${projectId}.title`) }}</h3>
                      </v-col>
                      <v-col class="text-right">
                        <v-tooltip
                          v-for="(url, name) in projects[projectId].links"
                          :key="name"
                          :text="$t(`portfolio.links.${name}`)"
                          location="left">
                          <template #activator="{ props }">
                            <v-btn
                              :href="url"
                              target="_blank"
                              color="white"
                              variant="text"
                              :icon="icons[name]"
                              v-bind="props">
                            </v-btn>
                          </template>
                        </v-tooltip>
                      </v-col>
                    </v-row>
                  </v-row>
              </v-parallax>
              <v-card-text>
                <v-chip
                  v-for="tag in projects[projectId].tags"
                  :key="tag"
                  variant="outlined"
                  class="ma-1">
                  {{ tag }}
                </v-chip>
                <p class="text-justify font-weight-medium">{{ $t(`portfolio.${projectId}.description`) }}</p>
                <ul>
                  <li>
                    <date
                      :beginning="projects[projectId].beginning"
                      :end="projects[projectId].end"
                      show-from/>
                  </li>
                  <li v-if="projects[projectId].madeWith">
                    <span>{{ $t('portfolio.madeWith') }}&nbsp;</span>
                    <component
                        v-for="(link, name, i) in projects[projectId].madeWith"
                        :is="link === null ? 'span' : 'a'"
                        :key="name"
                        :href="link">
                      <template v-if="i > 0">, </template>{{ name }}
                    </component>
                  </li>
                  <li><span>{{ $t('portfolio.challenges') }}&nbsp;</span> {{ $t(`portfolio.${projectId}.challenges`) }}</li>
                </ul>
              </v-card-text>
              <v-card-actions v-if="projects[projectId].open !== undefined">
                <v-btn
                  :href="projects[projectId].open"
                  :text="$t(`portfolio.links.${projects[projectId].openText}`)"
                  color="primary"
                  variant="text"
                  target="_blank"
                  append-icon="$openinnew"/>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col
          class="text-center"
          cols="12">
        <v-row>
          <h3 class="gradient-text text-h4">{{ $t('portfolio.all') }}</h3>
          <v-spacer/>
          <v-btn
            :text="$t('portfolio.view')"
            href="https://github.com/theovidal"
            target="_blank"
            variant="outlined"
            append-icon="$openinnew"
          />
        </v-row>
        <v-skeleton-loader
          :loading="repos === undefined"
          color="background"
          type="image">
          <v-slide-group show-arrows>
            <v-row class="align-stretch">
              <v-col
                v-for="repo in repos"
                :key="repo.id"
                class="pa-1">
                <v-card
                  :href="repo.html_url"
                  target="_blank"
                  class="color-card box-shadow ma-1 h-100"
                  :style="{
                    background: `linear-gradient(165deg, ${getPrimaryColor(repo.language)} 0%, ${getSecondaryColor(repo.language)} 100%) !important`,
                    'max-width': '250px'
                  }">
                  <div class="content text-left">
                    <v-card-title class="d-flex align-center">
                      {{ repo.name }}
                      <template v-if="repo.stargazers_count > 0">
                        <v-spacer/>
                        <v-icon
                            size="sm"
                            color="yellow-darken-2"
                            icon="$ratingFull"/>
                        {{ repo.stargazers_count }}
                      </template>
                    </v-card-title>
                    <v-card-text>
                      <p
                        v-if="repo.language !== null"
                        :style="`color: ${getPrimaryColor(repo.language)}`">
                        {{ repo.language }}
                      </p>
                      <p>
                        {{ repo.description }}
                      </p>
                      <v-chip
                        v-for="topic in repo.topics.slice(0, 4)"
                        :key="topic"
                        class="ma-1"
                        variant="outlined">
                        {{ topic }}
                      </v-chip>
                    </v-card-text>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-slide-group>
        </v-skeleton-loader>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="sass">

</style>