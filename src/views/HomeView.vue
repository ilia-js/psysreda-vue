<template>
  <div class="home-view">
    <div class="home-view__header">
      <span class="home-view__title-line-primary">
        Как перестать <s>думать только о других</s>
      </span>
      <span class="home-view__exclamation-mark">?</span> <br />
      <span class="home-view__title-line-secondary">Как научиться заботиться о себе</span
      ><span class="home-view__exclamation-mark">!</span>
    </div>
    <div class="home-view__cards">
      <WelcomeCard />
      <AuditoryCard />
      <CodependencyTestCard />
    </div>
  </div>
</template>
<script lang="ts" setup>
// TODO
import WelcomeCard from '@/components/cards/WelcomeCard.vue'
import AuditoryCard from '@/components/cards/AuditoryCard.vue'
import CodependencyTestCard from '@/components/cards/CodependencyTestCard.vue'
</script>
<style lang="scss" scoped>
@import '@/scss/variables.scss';

.home-view {
  &__header {
    text-align: center;
    margin-bottom: 25px;
    color: #444;
    font-size: 2.25rem;
  }

  &__title-line-primary {
    color: #333;
    font-size: 1.25rem;
  }

  &__exclamation-mark {
    padding-left: 3px;
  }

  &__title-line-secondary {
    color: #333;
  }

  :deep(.base-card) {
    margin-top: $px-50;
  }
}
</style>
