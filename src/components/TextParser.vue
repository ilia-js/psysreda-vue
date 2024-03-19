<template>
  <div
    v-for="(line, index) in lines"
    v-html="line + (index < lines.length - 1 ? endLineText : '')"
  />
</template>
<script lang="ts" setup>
defineProps({
  lines: { type: Array, required: true },
  endLineText: { String, default: '' }
})
</script>
