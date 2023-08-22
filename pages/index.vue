<template>
  <div>
    <banner
      center
      src="/img/alps.jpeg"
      style="height: 103vh">
      <v-container>
        <v-row class="align-center flex-column">
          <h1 class="text-h1">Théo Vidal</h1><br/>
          <h3 class="text-subtitle-1">{{ $t('home.subtitle') }}</h3>
        </v-row>
        <v-row class="justify-center">
          <socials/>
        </v-row>
      </v-container>
    </banner>
    <v-container
      id="introduction"
      class="gradient"
      style="max-width: 100vw">
      <v-row class="justify-center">
        <v-col>
          <v-row
            class="flex-column align-center justify-center"
            style="height: 100%">
            <h1>{{ $t('home.welcome') }}</h1>
            <p class="text-justify">{{ $t('home.introduction') }}</p>
          </v-row>
        </v-col>
        <v-col class="text-center">
          <v-avatar
            size="200">
            <v-img
              cover
              src="/img/me.jpeg"
              alt="Profile picture"/>
          </v-avatar>
        </v-col>
      </v-row>
    </v-container>
    <timelines/>
    <interests/>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="sass">
.navbar .v-col
  flex-grow: 0

#introduction
  clip-path: polygon(0 0, 100% 6%, 100% 94%, 0% 100%)
  margin-top: -17px
</style>
