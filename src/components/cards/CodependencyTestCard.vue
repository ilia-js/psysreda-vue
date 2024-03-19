<template>
  <BaseCard>
    <template #header>
      Нужна ли мне работа<br />
      с со-зависимостью?
    </template>
    <template #body>
      <div class="codependency-test-card__body">
        <div>
          Этот <b>легкий</b> бесплатный <b>тест</b><br />
          поможет тебе определить<br />
          степень созависимости
        </div>
        <BaseButton
          :text="testResult ? lang.button.passAgain : lang.button.passTest"
          :color-scheme="testResult ? 'lightGrey' : 'red'"
          class="codependency-test-card__button"
          @click="openTestDialog"
        />
      </div>
    </template>
  </BaseCard>
  <CodependencyTestDialog
    ref="testDialogRef"
    @click:close="handleCloseTestDialog"
    @test:finish="handleFinishTest"
  />
</template>
<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue'
import BaseCard from '@/components/BaseCard.vue'
import { lang } from '@/settings/lang'
import BaseButton from '@/components/base/buttons/BaseButton.vue'
import CodependencyTestDialog from '@/components/dialogs/TestDialog.vue'
import { LocalStorageKeys } from '@/settings/localStorage'

const testDialogRef = ref<InstanceType<typeof CodependencyTestDialog> | undefined>()
const testResult = ref<number | undefined>(undefined)

onBeforeMount(() => {
  if (localStorage.getItem(LocalStorageKeys.CodependencyTest)) {
    testResult.value = Number(localStorage.getItem(LocalStorageKeys.CodependencyTest))
  }
})

const openTestDialog = () => {
  testDialogRef.value?.open()
}

const handleCloseTestDialog = () => {
  testDialogRef.value?.close()
}

const handleFinishTest = async (result: number | null) => {
  testResult.value = result || undefined

  testDialogRef.value?.close()

  // TODO Implement send to telegram.
  //   let text = 'Кто-то заполнил тест на сайте!\n'
  //   text += 'Дата и время заполнения:\n' + format(new Date(), DATE_TIME_FORMAT) + '\n'
  //   text += 'Сумма теста:\n' + total.value
  //   await notifySiteOwner(text)
}
</script>
<style lang="scss" scoped>
@import '@/scss/variables.scss';

.codependency-test-card {
  &__body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    line-height: 25px;
  }

  &__button {
    margin-top: $px-20;
    width: 170px;
  }
}
</style>
