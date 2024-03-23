<template>
  <div class="education-view">
    <div
      class="education-view__item-container"
      v-for="item in educationHistory"
      :key="item.title + item.type + item.location"
    >
      <div class="education-view__item">
        <div>{{ item.type }}</div>
        <div>{{ item.title }}</div>
        <div>{{ item.period }}</div>
        <div>{{ item.location }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { educationHistory } from "@/settings/education/educationHistory";
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";

.education-view {
  &__item-container {
    display: flex;
    justify-content: center;
    margin-bottom: $px-40;
  }
  &__item {
    max-width: 500px;
    text-align: center;
  }
}
</style>
