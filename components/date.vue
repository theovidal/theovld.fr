<template>
  <span>
    <template v-if="(showFrom && !props.end)">
      {{ $t('general.from') }}&nbsp;
    </template>
    <i18n-d :value="props.beginning" format="short"/>
    <template v-if="props.end && props.beginning.getTime() != props.end.getTime()">
      —
      <i18n-d :value="props.end" format="short"/>
    </template>
  </span>
</template>

<script setup lang="ts">
interface Props {
  beginning: Date,
  end: Date | undefined | null,
  showFrom: boolean
}

const props = defineProps<Props>()
</script>