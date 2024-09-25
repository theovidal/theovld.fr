<template>
  <div
      class="d-flex justify-center align-center"
      style="min-height: 100vh;">
    <div class="text-center">
      <h3 class="gradient-text text-h3">{{ $t('link.redirecting') }}</h3>
      <template v-if="link !== ''">
        <p>{{ $t('link.manual') }}</p>
        <v-btn
          :prepend-icon="MdiLinkVariant"
          color="primary"
          :text="domain"
          :href="link"/>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import MdiLinkVariant from '~icons/mdi/link-variant'
import redirectMap from '@/data/links'

const router = useRouter()
const route = useRoute()

const regex = /(?:https?:\/\/)?(?:www\.)?([^\/]+)/;

const link = ref('https://www.google.com/aaahezaf/ah')
const domain = ref('google.com')

onMounted(() => {
  const slug = route.params.slug

  if (redirectMap[slug]) {
    link.value = redirectMap[slug]
    domain.value = link.value.match(regex)[1]
    window.location.href = redirectMap[slug]
  } else {
    router.push('/')
  }
})
</script>