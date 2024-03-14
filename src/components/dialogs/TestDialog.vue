<template>
  <BaseDialog ref="baseDialogRef" @click:close="emit('click:close')">
    <template #header>
      {{ lang.title.testNaSozavisimost }}
    </template>
    <template #body>
      <div class="test-dialog__body"></div>
    </template>
    <template #buttons>
      <BaseButton :text="lang.button.startTest" color-scheme="red" @click="handleClickStartTest" />
      <BaseButton
        :text="lang.button.close"
        color-scheme="whiteAndBlack"
        @click="emit('click:close')"
      />
    </template>
  </BaseDialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { lang } from '@/settings/lang'
import BaseDialog from '@/components/base/dialogs/BaseDialog.vue'
import BaseButton from '@/components/base/buttons/BaseButton.vue'

const emit = defineEmits(['click:close'])

const baseDialogRef = ref<InstanceType<typeof BaseDialog> | undefined>()

const handleClickStartTest = () => {
  console.log('on click start test')
}

defineExpose({
  open: () => {
    baseDialogRef.value?.open()
  },
  close: () => {
    baseDialogRef.value?.close()
  }
})
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.test-dialog {
  &__body {
    display: flex;
    flex-direction: column;
    gap: $px-20;
  }
}
</style>
