<template>
  <div class="question-component">
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
  question: { type: String, required: true }
})
</script>
<style lang="scss" scoped>
@import '@/scss/variables';
.question-component {
  &__question {
    text-align: center;
    font-size: 1.5rem;
    font-weight: normal;
    border: 1px solid #bbb;
    padding: $px-20;
  }

  &__answers {
    margin-top: $px-40;
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
