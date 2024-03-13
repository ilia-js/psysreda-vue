<template>
  <Teleport to="body">
    <div class="base-dialog">
      <div class="base-dialog__container">
        <div class="base-dialog__header">
          <slot name="header" />
        </div>
        <div class="base-dialog__body">
          <slot name="body" />
        </div>
        <div class="base-dialog__buttons">
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
.base-dialog {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(128, 64, 0, 0.75);

  &__container {
    width: 400px;
    height: 400px;
    text-align: center;
    padding: 20px 40px;
    border: 1px solid #999;
    background-color: #fff;
    opacity: 1;
    border-radius: 25px;
  }

  &__header {
    font-size: 2rem;
  }

  &__body {
    margin-top: 30px;
  }

  &__buttons {
    margin-top: 20px;
  }
}
</style>
