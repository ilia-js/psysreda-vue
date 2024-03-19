<template>
  <BaseDialog
    ref="baseDialogRef"
    @click:close="emit('click:close', result || resultFromLocalStorage)"
  >
    <template #header> {{ lang.title.codependencyTest }}</template>
    <template #body>
      <div class="test-dialog__body">
        <ResultComponent
          v-if="isShowResult || resultFromLocalStorage"
          :result="result || Number(resultFromLocalStorage)"
        />
        <template v-else>
          <TextParser v-if="!questionNumber" :lines="lang.test.introduction" />
          <QuestionComponent
            v-else
            v-model="answers[questionNumber]"
            :question="codependencyTestQuestions[questionNumber - 1]"
            :info="`${questionNumber}/${codependencyTestQuestions.length}`"
          />
        </template>
      </div>
    </template>
    <template #buttons>
      <div class="test-dialog__buttons">
        <BaseButton
          :text="lang.button.close"
          color-scheme="whiteAndBlack"
          @click="emit('test:finish', result || resultFromLocalStorage)"
        />
        <BaseButton
          :text="actionButtonText"
          color-scheme="red"
          @click="handleClickActionButton"
          :disabled="isActionButtonDisabled"
        />
      </div>
    </template>
  </BaseDialog>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { lang } from '@/settings/lang'
import BaseDialog from '@/components/base/dialogs/BaseDialog.vue'
import BaseButton from '@/components/base/buttons/BaseButton.vue'
import TextParser from '@/components/TextParser.vue'
import { codependencyTestQuestions } from '@/settings/tests/codependencyTest/codependencyTestQuestions'
import QuestionComponent from '@/components/test/TestQuestionComponent.vue'
import ResultComponent from '@/components/test/TestResultComponent.vue'
import { LocalStorageKeys } from '@/settings/localStorage'

const emit = defineEmits(['click:close', 'test:finish'])

let resultFromLocalStorage = ref<number | undefined>()

const baseDialogRef = ref<InstanceType<typeof BaseDialog> | undefined>()
const questionNumber = ref<number>(0)
const answers = ref<Record<number, number>>({})
const isShowResult = ref<boolean>(false)

const isLastQuestion = computed<boolean>(() => {
  return questionNumber.value === codependencyTestQuestions.length
})

const actionButtonText = computed<string>(() => {
  if (resultFromLocalStorage.value) {
    return lang.button.passAgain
  }

  if (!questionNumber.value) {
    return lang.button.startTest
  }

  if (isShowResult.value) {
    return lang.button.finish
  }

  if (isLastQuestion.value) {
    return lang.button.showResult
  }

  return `${lang.button.continue}`
})

const result = computed<number>(() => {
  return Object.values(answers.value).reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  )
})

const isActionButtonDisabled = computed<boolean>(() => {
  return (
    !!questionNumber.value &&
    !isShowResult.value &&
    typeof answers.value[questionNumber.value] === 'undefined'
  )
})

const handleClickActionButton = () => {
  if (resultFromLocalStorage.value) {
    resultFromLocalStorage.value = undefined
    localStorage.removeItem(LocalStorageKeys.CodependencyTest)
  }

  if (isShowResult.value) {
    emit('test:finish', result.value)

    return
  }

  if (isLastQuestion.value) {
    localStorage.setItem(LocalStorageKeys.CodependencyTest, result.value.toString())

    isShowResult.value = true

    return
  }

  console.log('NEXT question')

  questionNumber.value++
}

defineExpose({
  open: () => {
    questionNumber.value = 0
    answers.value = {}
    isShowResult.value = false
    baseDialogRef.value?.open()
    if (localStorage.getItem(LocalStorageKeys.CodependencyTest)) {
      resultFromLocalStorage.value = Number(localStorage.getItem(LocalStorageKeys.CodependencyTest))
    }
  },
  close: () => {
    baseDialogRef.value?.close()
  }
})
</script>
<style lang="scss" scoped>
@import '@/scss/variables.scss';

.test-dialog {
  &__body {
    display: flex;
    flex-direction: column;
    gap: $px-20;
    font-size: 1.125rem;
  }

  &__buttons {
    margin-top: $px-30;
    display: flex;
    justify-content: space-between;
  }
}
</style>
