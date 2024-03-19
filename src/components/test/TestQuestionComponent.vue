<template>
  <div class="question-component">
    <div class="question-component__info">Вопрос: {{ info }}</div>
    <div class="question-component__question">
      {{ question }}
    </div>
    <div class="question-component__answers">
      <div v-for="(answer, index) in lang.test.answers" class="question-component__item">
        <RadioButton
          v-model="answerNumber"
          :inputId="`answer${index + 1}`"
          name="answer"
          :value="index + 1"
        />
        <label :for="`answer${index + 1}`">{{ answer }}</label>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { lang } from '@/settings/lang'
import RadioButton from 'primevue/radiobutton'

const answerNumber = defineModel()

defineProps({
  question: { type: String, required: true },
  info: { type: String }
})
</script>
<style lang="scss" scoped>
@import '@/scss/variables';
.question-component {
  &__question {
    margin-top: $px-20;
    text-align: center;
    font-size: 1.5rem;
    font-weight: normal;
    border: 1px dashed #ddd;
    padding: $px-20;
    line-height: 2rem;
  }

  &__info {
    margin-top: -$px-15;
  }

  &__answers {
    margin-top: $px-30;
    display: flex;
    flex-direction: column;
    gap: $px-10;
    align-items: flex-start;
  }

  &__item {
    display: flex;
    gap: $px-10;
    label {
      cursor: pointer;
    }
  }
}
</style>
