<template>
  <v-container id="contact">
    <v-row class="justify-center">
      <v-col
          class="py-3"
          cols="12">
        <h2 class="text-h2 text-center gradient-text">{{ $t('contact.title') }}</h2>
      </v-col>
      <v-col
        cols="12"
        md="8">
        <v-card
          class="color-card box-shadow"
          height="750px">
          <div class="content text-left">
            <v-card-text
                class="d-flex align-center justify-center"
                style="height: 100%">
              <iframe :src="$t('contact.link')"/>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
