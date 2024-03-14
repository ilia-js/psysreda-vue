<template>
  <Teleport v-if="showDialog" to="body">
    <div class="base-dialog">
      <div class="base-dialog__container">
        <div class="base-dialog__close pi pi-times" v-if="closeIcon" @click="emit('click:close')" />
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
import { ref } from 'vue'

const emit = defineEmits(['click:close'])

defineProps({
  closeIcon: Boolean
})

const showDialog = ref<boolean>(true)

defineExpose({
  open: () => {
    document.body.style.overflow = 'hidden'
    showDialog.value = true
  },
  close: () => {
    document.body.style.overflow = 'auto'
    showDialog.value = false
  }
})
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.base-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(128, 64, 0, 0.75);

  &__container {
    position: relative;
    width: 400px;
    min-height: 400px;
    text-align: center;
    padding: 20px 40px;
    border: 1px solid #999;
    background-color: #fff;
    opacity: 1;
    border-radius: 25px;
  }

  &__close {
    position: absolute;
    top: -20px;
    right: -20px;
    cursor: pointer;
    font-size: 2rem;
  }

  &__header {
    font-size: 2rem;
  }

  &__body {
    margin-top: 30px;
  }

  &__buttons {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: $px-10;
  }
}
</style>
