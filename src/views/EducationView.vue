<template>
  <div class="education-view">
    <div class="education-view__title">
      {{ lang.title.education }}
    </div>
    <div
      class="education-view__item-container"
      v-for="(item, index) in educationHistory"
      :key="item.title + item.type + item.location"
    >
      <div class="education-view__item">
        <div class="education-view__item-title">{{ item.title }}</div>
        <div class="education-view__item-period">{{ item.period }}</div>
        <div class="education-view__item-type">{{ item.type }}</div>
        <div class="education-view__item-city">{{ item.city }},</div>
        <div class="education-view__item-location">{{ item.location }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { educationHistory } from "@/settings/education/educationHistory";
import { lang } from "@/settings/lang";

const palette = ["rgba(238, 232, 170)", "rgba(255, 228, 196)"];

const getColor = (index: number) => {
  return palette[index % palette.length];
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";

.education-view {
  padding-left: $px-20;
  padding-right: $px-20;

  &__title {
    text-align: center;
    margin-bottom: $px-40;
    color: #444;
    font-size: 2.25rem;
  }

  &__item-container {
    display: flex;
    justify-content: center;
    margin-bottom: $px-40;
  }

  &__item {
    max-width: 500px;
    text-align: center;
    padding: $px-15 $px-15 $px-25;
    border-radius: $border-radius;
    border: 2px dashed #bbb;
  }

  &__item-type {
    font-size: 1.125rem;
    margin-top: $px-15;
  }

  &__item-period {
    font-size: 1.5rem;
    margin-top: $px-15;
  }

  &__item-title {
    font-size: 1.25rem;
  }

  &__item-city {
    font-size: 1rem;
    margin-top: $px-15;
  }

  &__item-location {
    font-size: 1rem;
  }
}
</style>
