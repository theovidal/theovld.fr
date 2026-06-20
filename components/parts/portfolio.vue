<script setup lang="ts">
  import IconDocument from '~icons/mdi/file-document-outline'
  import IconDiscord from '~icons/custom/discord'
  import MdiChevronRight from '~icons/mdi/chevron-right'

  import projects from "~/data/projects";
  import { categories } from "~/data/projects";
  import experiences from "~/data/experiences";

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

  const filterWithAttachments = (dataObject, type) => {
    return Object.entries(dataObject)
      .filter(([_, value]) => value.attachment) // Only keep items with an attachment
        .sort((a, b) => b[1].date - a[1].date)
      .map(([key, value]) => ({
        id: key,
        type: type, // Optional: helps differentiate them if combined
        ...value
      }));
  };
  const allAttachments = [
    ...filterWithAttachments(experiences, 'experience'),
    ...filterWithAttachments(projects, 'project')
  ];
  console.log(allAttachments)
</script>

<template>
  <v-container
      id="portfolio"
    fluid>
    <v-row class="justify-around">
      <v-col cols="12">
        <h2 class="gradient-text text-center text-display-large mb-0">{{ $t('portfolio.title') }}</h2>
        <p class="text-center">{{ $t('portfolio.description') }}</p>
      </v-col>
      <v-col
        v-for="(category, categoryId) in categories"
        :key="categoryId"
        cols="12"
        :md="category.full ? 12 : 6">
        <v-row density="compact">
          <v-col
            cols="12"
            class="d-flex align-center">
            <v-icon
              color="primary"
              :icon="category.icon"/>
            <h3 class="gradient-text text-headline-large ml-2 my-0">{{ $t(`portfolio.categories.${categoryId}`) }}</h3>
          </v-col>
          <v-col
            v-for="projectId in category.projects"
            :key="projectId"
            class="pa-1"
            cols="12"
            sm="6"
            :md="category.full ? 4 : 6"
            :lg="category.full ? 3 : 6">
            <v-card
                :id="`portfolio-${projectId}`"
                class="b-card box-shadow">
              <template v-if="!projects[projectId].noBanner">
                <v-img
                  v-if="!projects[projectId].noBanner"
                  :src="`/img/portfolio/${projectId}-banner-min.webp`"
                  :alt="`Banner for project ${$t(`portfolio.${projectId}.name`)}`"/>
                <hr style="height: 2px"/>
              </template>
              <v-card-text>
                <h3 class="text-heading-5 my-0">{{ $t(`portfolio.${projectId}.title`) }}</h3>
                <p class="text-justify font-weight-medium">{{ $t(`portfolio.${projectId}.description`) }}</p>
                <ul class="pl-0">
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
                <v-chip
                  v-for="tag in projects[projectId].tags"
                  :key="tag"
                  size="small"
                  class="ma-1">
                  {{ tag }}
                </v-chip>
              </v-card-text>
              <v-card-actions v-if="projects[projectId].links || projects[projectId].attachment">
                <v-tooltip
                  v-for="(url, name) in projects[projectId].links"
                  :key="name"
                  :text="$t(`portfolio.links.${name}`)"
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
                <template v-if="projects[projectId].attachment">
                  <v-spacer/>
                  <v-btn
                    class="gradient text-white"
                    target="_blank"
                    :append-icon="MdiChevronRight"
                    :href="projects[projectId].attachment.path">
                    {{ $t('portfolio.consult')}}
                  </v-btn>
                </template>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="sass">
ul li span
  padding-left: 2px
</style>