<template>
  <BaseDialog ref="baseDialogRef" @click:close="emit('click:close')">
    <template #header> {{ lang.title.codependencyTest }}</template>
    <template #body>
      <div class="test-dialog__body">
        <TextParser v-if="!questionNumber" :lines="lang.test.introduction" />
        <ResultComponent v-else-if="isShowResult" :result="result" />
        <QuestionComponent
          v-else
          v-model="answers[questionNumber]"
          :question="codependencyTestQuestions[questionNumber - 1]"
        />
      </div>
    </template>
    <template #buttons>
      <div class="test-dialog__buttons">
        <BaseButton
          :text="actionButtonText"
          color-scheme="red"
          @click="handleClickActionButton"
          :disabled="
            questionNumber && !isShowResult && typeof answers[questionNumber] === 'undefined'
          "
        />
        <BaseButton
          :text="lang.button.close"
          color-scheme="whiteAndBlack"
          @click="emit('click:close')"
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

const emit = defineEmits(['click:close'])

const baseDialogRef = ref<InstanceType<typeof BaseDialog> | undefined>()
const questionNumber = ref<number>(0)
const answers = ref<Record<number, number>>({})
const isShowResult = ref<boolean>(false)

const isLastQuestion = computed<boolean>(() => {
  return questionNumber.value === codependencyTestQuestions.length
})

const actionButtonText = computed<string>(() => {
  if (!questionNumber.value) {
    return lang.button.startTest
  }

  if (isShowResult.value) {
    return lang.button.finish
  }

  if (isLastQuestion.value) {
    return lang.button.showResult
  }

  return lang.button.continue
})

const result = computed<number>(() => {
  return Object.values(answers.value).reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  )
})

const handleClickActionButton = () => {
  if (isShowResult.value) {
    emit('click:close')
  }

  if (isLastQuestion.value) {
    isShowResult.value = true
    return
  }

  questionNumber.value++
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
    flex-direction: row-reverse;
  }
}
</style>
