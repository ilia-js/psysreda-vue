<template>
  <v-dialog
    :value="value"
    @input="$emit('input', $event)"
    width="500"
    persistent
  >
    <v-card class="px-2">
      <v-card-title class="pt-5 pb-4">
        <span v-html="title"></span>
        <div v-if="isTestEnvironment" class="test-environment">
          ::: Test environment :::
        </div>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="pt-6 pb-8">
        <v-form
          v-model="valid"
          @submit.prevent="contact"
          ref="form"
          v-if="status === 'init'"
        >
          <v-text-field
            v-model="formData.name"
            label="Ваше имя"
            :rules="[formValidators.requiredName]"
            class="local-input"
          />
          <v-text-field
            v-model="formData.phone"
            label="Ваш телефон"
            :rules="[formValidators.requiredPhone]"
            class="local-input"
          />
          <v-radio-group
            v-model="formData.connector"
            row
            :rules="[formValidators.requiredConnector]"
          >
            <v-radio label="Телефон" value="phone" />
            <v-radio label="WhatsApp" value="whatsapp" />
            <v-radio label="Telegram" value="telegram" />
          </v-radio-group>
        </v-form>
        <div class="result-message" v-else>
          Спасибо! Я скоро с Вами свяжусь.
        </div>
      </v-card-text>
      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          @click="status === 'init' ? close() : cancel()"
          small
          depressed
          class="my-2"
        >
          Закрыть
        </v-btn>
        <v-btn
          @click="contact"
          small
          depressed
          class="my-2 ml-5 psysreda-pink-button"
          v-if="status === 'init'"
        >
          {{ buttonText }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { formValidators } from "@/helpers/formValidators";
import { isTestEnvironment } from "@/helpers";
import { format } from "date-fns";
import { DATE_TIME_FORMAT } from "@/settings/dates";
import { notifySiteOwner } from "@/api/api";

const initData = {
  name: "",
  phone: "",
  connector: "",
};

export default {
  name: "ContactDialog",
  props: {
    value: Boolean,
    title: String,
    buttonText: String,
  },
  data() {
    return {
      valid: false,
      formData: { ...initData },
      status: "init",
      formValidators,
    };
  },
  computed: {
    isTestEnvironment,
  },
  methods: {
    async contact() {
      this.$refs.form.validate();
      if (!this.valid) {
        return;
      }
      let text = "Кто-то запросил он-лайн связь на сайте!\n";
      text +=
        "Дата и время запроса:\n" + format(new Date(), DATE_TIME_FORMAT) + "\n";
      text += "Имя:\n" + this.formData.name;
      text += "\nТелефон:\n" + this.formData.phone;
      text += "\nСпособ связи:\n" + this.formData.connector;
      await notifySiteOwner(text);
      this.status = "data_sent";
    },
    close() {
      this.$emit("input", false);
    },
    cancel() {
      this.close();
      this.formData = { ...initData };
      setTimeout(() => {
        this.status = "init";
      }, 300);
    },
  },
};
</script>
