<template>
  <BaseDialog>
    <template #header>
      {{ lang.title.messageMe }}
    </template>
    <template #body>
      <div class="contact-me-dialog__body">
        <InputText v-model="form.name" :placeholder="'Ваше имя'" :invalid="!validation.name()" />
        <InputText
          v-model="form.phone"
          :placeholder="'Ваш телефон'"
          :invalid="!validation.phone()"
        />
        <Textarea
          v-model="form.message"
          rows="5"
          cols="30"
          :placeholder="'Сообщение мне'"
          :invalid="!validation.message()"
        />
      </div>
    </template>
    <template #buttons>
      <BaseButton
        :text="lang.button.writeMe"
        :disabled="!isFormValid"
        color-scheme="red"
        @click="onClick"
      />
    </template>
  </BaseDialog>
</template>
<script lang="ts" setup>
import { computed, reactive } from 'vue'
import { lang } from '@/settings/lang'
import BaseDialog from '@/components/base/dialogs/BaseDialog.vue'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import BaseButton from '@/components/base/buttons/BaseButton.vue'

const MIN_NAME_LENGTH = 2
const MIN_PHONE_LENGTH = 9 // For local Spain number.
const MIN_MESSAGE_LENGTH = 10

const form = reactive({
  name: '',
  phone: '',
  message: ''
})

const validation = reactive({
  name: (): boolean => {
    return form.name.trim().length >= MIN_NAME_LENGTH
  },
  phone: (): boolean => {
    return form.phone.replace(/\s/g, '').length >= MIN_PHONE_LENGTH
  },
  message: (): boolean => {
    return form.message.trim().length >= MIN_MESSAGE_LENGTH
  }
})

const isFormValid = computed<boolean>(() => {
  return validation.phone() && validation.name() && validation.message()
})
const onClick = () => {
  console.log('on click')
  // this.$refs.form.validate()
  // if (!this.valid) {
  //   return
  // }
  // let text = 'Тип запроса:\n'
  // text += `${this.type}\n`
  // text += 'Дата и время запроса:\n' + format(new Date(), DATE_TIME_FORMAT) + '\n'
  // text += 'Имя:\n' + this.formData.name
  // text += '\nТелефон:\n' + this.formData.phone
  // text += '\nСпособ связи:\n' + this.formData.connector
  // await notifySiteOwner(text)
  // this.status = 'data_sent'
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.contact-me-dialog {
  &__body {
    display: flex;
    flex-direction: column;
    gap: $px-20;
  }
}
</style>
