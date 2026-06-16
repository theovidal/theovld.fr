<template>
  <span>
    <template v-if="(showSoon && !props.end)">
      ({{ $t('general.prospective') }})&nbsp;
    </template>
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
  showFrom: boolean,
  showSoon: boolean
}

const props = defineProps<Props>()
</script>