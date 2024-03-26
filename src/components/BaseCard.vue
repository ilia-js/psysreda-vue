<template>
  <div class="base-card" :style="{ maxWidth, minHeight }">
    <div class="base-card__container">
      <div class="base-card__header" v-if="$slots.header">
        <slot name="header" />
      </div>
      <div class="base-card__body">
        <slot name="body" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  maxWidth: String,
  minHeight: String,
});
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.base-card {
  display: flex;
  justify-content: center;
  padding-right: $px-10;
  padding-left: $px-10;

  &__container {
    width: 480px;

    border: 2px dashed #bbb;
    border-radius: $border-radius !important;
  }

  &__header {
    display: block !important;
    font-size: 23px !important;
    color: #444 !important;
    line-height: 33px !important;
    text-align: center !important;
    margin-top: $px-20;
    margin-bottom: $px-20;
  }

  &__body {
    margin-bottom: $px-30;
    padding-right: $px-20;
    padding-left: $px-20;
  }
}
</style>
