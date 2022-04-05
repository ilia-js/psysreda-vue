<template>
  <SimpleCard>
    <template v-slot:title>
      <div class="bigger-title">Татьяна Гвоздовская,</div>
      <div class="smaller-title">психотерапевт</div>
      <v-img
        src="/img/logo.png"
        max-width="280px"
        height="350"
        class="rounded-1 mt-6 d-inline-block mx-auto"
      />
    </template>
    <p class="text-center mb-5">
      Если ты задаёшь себе этот вопрос,<br/> то значит ты <b>готов к изменениям</b>
      <br/>и мы сможем начать совместную работу
    </p>
    <v-btn class="psysreda-red-button mt-2" @click="open">
      Связаться ОН&#8209;ЛАЙН
    </v-btn>
    <v-dialog
      v-model="show"
      width="500"
      persistent
    >
      <v-card class="px-2">
        <v-card-title class="pt-5 pb-4">
          Связаться ОН&#8209;ЛАЙН
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="pt-6 pb-8">
          <v-form v-model="valid" @submit.prevent="contact" ref="form" v-if="status === 'init'">
            <v-text-field v-model="formData.name" label="Ваше имя" :rules="[formValidators.requiredName]"
                          class="local-input"/>
            <v-text-field v-model="formData.phone" label="Ваш телефон" :rules="[formValidators.requiredPhone]"
                          class="local-input"/>
            <v-radio-group v-model="formData.connector" row :rules="[formValidators.requiredConnector]">
              <v-radio label="Телефон" value="phone"/>
              <v-radio label="WhatsApp" value="whatsapp"/>
              <v-radio label="Telegram" value="telegram"/>
            </v-radio-group>
          </v-form>
          <div class="result-message" v-else>
            Спасибо! Я скоро с Вами свяжусь.
          </div>
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="status === 'init' ? close() : cancel()" small depressed class="my-2">
            Закрыть
          </v-btn>
          <v-btn @click="contact" small depressed class="my-2 ml-5 psysreda-pink-button" v-if="status === 'init'">
            СВЯЗАТЬСЯ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </SimpleCard>
</template>

<script>
import SimpleCard from '../SimpleCard'
import { formValidators } from '../../helpers/formValidators'

const initData = {
  name: '',
  phone: '',
  connector: ''
}

export default {
  name: 'IntroductionCard',
  components: { SimpleCard },
  data () {
    return {
      show: false,
      valid: false,
      formData: { ...initData },
      status: 'init',
      formValidators
    }
  },
  methods: {
    open () {
      this.show = true
    },
    contact () {
      this.$refs.form.validate()
      if (!this.valid) {
        return
      }
      this.status = 'data_sent'
    },
    close () {
      this.show = false
    },
    cancel () {
      console.log('cancel')
      this.close()
      this.formData = { ...initData }
      setTimeout(() => {
        this.status = 'init'
      }, 300)
    }
  }
}
</script>

<style lang="scss" scoped>
.bigger-title {
  font-size: 1.15em;
}

.smaller-title {
  font-size: 0.85em;
}

.local-input {
  max-width: 90%;
}

.result-message {
  font-size: 16px;
  color: #111;
  padding-top: 10px;
  padding-bottom: 10px;
}

::v-deep {
  .simple-card-text {
    padding-top: 0px !important;
    font-size: 17px;
    color: rgba(0, 0, 0, 0.8) !important;
  }

  .v-dialog {
    border-radius: 25px;
  }
}
</style>
