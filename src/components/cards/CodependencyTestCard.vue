<template>
  <BaseCard>
    <template #header>
      Нужна ли мне работа<br />
      с со-зависимостью?
    </template>
    <template #body>
      <div class="testing-card__body">
        <div>
          Этот <b>легкий</b> бесплатный <b>тест</b><br />
          поможет тебе определить<br />
          степень созависимости
        </div>
        <BaseButton
          :text="lang.testMe"
          color-scheme="red"
          class="testing-card__button"
          @click="openTestDialog"
        />
      </div>
    </template>
  </BaseCard>
  <CodependencyTestDialog ref="testDialogRef" @click:close="onClickCloseTestDialog" />
</template>
<script lang="ts" setup>
import { notifySiteOwner } from '@/api/api'
import { format } from 'date-fns'
import { DATE_TIME_FORMAT } from '@/settings/dates'

import { computed, onBeforeMount, ref } from 'vue'
import BaseCard from '@/components/BaseCard.vue'
import { lang } from '@/settings/lang'
import BaseButton from '@/components/base/buttons/BaseButton.vue'
import CodependencyTestDialog from '@/components/dialogs/TestDialog.vue'

const testDialogRef = ref<InstanceType<typeof CodependencyTestDialog> | undefined>()

const openTestDialog = () => {
  testDialogRef.value?.open()
}

const onClickCloseTestDialog = () => {
  testDialogRef.value?.close()
}

const questions = ref([])
const total = ref(0)
const currentQuestionIndex = ref(0) // TODO It was null here. Why?
const show = ref(false)
const isTestFinished = ref(false)
const currentAnswer = ref(null)
const status = ref('not_started')
const showContactDialog = ref(false)

//
//
const questionsNumber = computed(() => questions.value.length)
//
const currentQuestion = computed(() => questions.value[currentQuestionIndex.value])

const percentAnswered = computed(() =>
  Math.ceil((currentQuestionIndex.value + 1) * (100 / questionsNumber.value))
)

const startTest = () => {
  currentQuestionIndex.value = 0
}

const nextQuestion = () => {
  currentQuestionIndex.value++
  total.value += Number(currentAnswer.value)
  currentAnswer.value = null
}

const processResult = async () => {
  total.value += Number(currentAnswer.value)
  isTestFinished.value = true

  let text = 'Кто-то заполнил тест на сайте!\n'
  text += 'Дата и время заполнения:\n' + format(new Date(), DATE_TIME_FORMAT) + '\n'
  text += 'Сумма теста:\n' + total.value
  await notifySiteOwner(text)
}

const close = () => {
  show.value = false
  if (currentQuestionIndex.value !== null) {
    // TODO It could be null anymore. Solve it.
    status.value = 'in_progress'
  }
  if (isTestFinished.value) {
    status.value = 'finished'
  }
}

const again = () => {
  // this.show = false
  setTimeout(() => {
    status.value = 'not_started'
    isTestFinished.value = false
    currentQuestionIndex.value = null // TODO Solve it...
    total.value = 0
    currentAnswer.value = null
  }, 300)
}

const openContactDialog = () => {
  showContactDialog.value = true
}
</script>
<style lang="scss" scoped>
@import '@/scss/variables.scss';

.testing-card {
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
    width: 150px;
  }
}

//::v-deep {
//  .base-card__text {
//    padding-top: 8px !important;
//    font-size: 17px;
//    color: rgba(0, 0, 0, 0.8) !important;
//  }
//
//  .v-label {
//    color: #111 !important;
//    font-style: italic;
//  }
//
//  .v-dialog {
//    border-radius: 25px;
//  }
//}

p {
  margin-bottom: 12px !important;
}

.v-card__text {
  font-size: 17px;
  color: rgba(0, 0, 0, 0.8) !important;
}

.current-question {
  color: #000;
}

.test-results {
  .your-result {
    display: flex;
    margin-bottom: 20px;
    font-size: 16px;
    font-family: Tahoma, serif;

    b {
      padding-left: 10px;
      font-size: 18px;
    }
  }

  .scale {
    font-size: 1em;
  }

  ul {
    padding-left: 0;
  }

  li {
    margin-top: 10px;
    list-style-type: none;
    padding-left: 0;

    b {
      font-family: Tahoma, serif;
      font-size: 0.9em;
    }
  }

  .dialog-title {
    position: relative;
  }
}
</style>
