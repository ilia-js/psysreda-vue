<template>
  <v-card class="base-card" :max-width="maxWidth" :min-height="minHeight" elevation="0">
    <v-card-title class="psysreda-card-header">
      <slot name="title" />
    </v-card-title>
    <v-card-text class="base-card__text text-center px-14 pt-5">
      <slot />
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
defineProps({
  maxWidth: String,
  minHeight: String
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.base-card {
  border: 2px dashed #bbb;
  border-radius: $border-radius !important;
}
</style>
