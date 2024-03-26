<template>
  <div class="education-view">
    <div class="education-view__title">
      {{ lang.title.education }}
    </div>
    <BaseCard v-for="item in educationHistory" :key="item.title + item.type + item.location">
      <template #body>
        <div class="education-view__item-title">{{ item.title }}</div>
        <div class="education-view__item-period">{{ item.period }}</div>
        <div class="education-view__item-type">{{ item.type }}</div>
        <div class="education-view__item-city">{{ item.city }},</div>
        <div class="education-view__item-location">{{ item.location }}</div>
      </template>
    </BaseCard>
  </div>
</template>
<script lang="ts" setup>
import BaseCard from "@/components/BaseCard.vue";
import { educationHistory } from "@/settings/education/educationHistory";
import { lang } from "@/settings/lang";
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

  &__item-title {
    font-size: 1.25rem;
  }

  &__item-period {
    font-size: 1.5rem;
    margin-top: $px-15;
  }

  &__item-type {
    font-size: 1.125rem;
    margin-top: $px-15;
  }

  &__item-city {
    font-size: 1rem;
    margin-top: $px-15;
  }

  &__item-location {
    font-size: 1rem;
  }
}

:deep(.base-card__container) {
  margin-bottom: $px-40;
}

:deep(.base-card__body) {
  max-width: 500px;
  text-align: center;
  padding: $px-25 $px-15 0;
}
</style>
