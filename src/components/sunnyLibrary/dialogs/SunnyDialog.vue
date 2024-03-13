<template>
  <Teleport to="body">
    <div class="sunny-dialog">
      <div class="sunny-dialog__container">
        <div class="sunny-dialog__header">
          <slot name="header" />
        </div>
        <div class="sunny-dialog__body">
          <slot name="body" />
        </div>
        <div class="sunny-dialog__buttons">
          <slot name="buttons" />
        </div>
      </div>
    </div>
  </Teleport>
</template>
<script lang="ts" setup>
document.body.style.overflow = 'hidden'
</script>
<style lang="scss" scoped>
@import '@/assets/scss/sunnyLibrary.scss';

.sunny-dialog {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(128, 64, 0, 0.75);
  //background-color: $sunny-dialog-background-color;
  &__container {
    width: 400px;
    height: 400px;
    text-align: center;
    padding: $sunny-dialog-padding;
    border: $sunny-dialog-border;
    background-color: $sunny-dialog-container-background-color;
    opacity: 1;
    border-radius: 25px;
  }

  &__header {
    font-size: 2rem;
  }

  &__body {
    margin-top: 20px;
  }

  &__buttons {
    margin-top: 20px;
  }
}
</style>
