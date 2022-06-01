<template>
  <SimpleCard>
    <template v-slot:title>
      <div class="bigger-title">Татьяна Гвоздовская,</div>
      <div class="smaller-title">психотерапевт</div>
      <v-img
        src="@/assets/images/logo.png"
        max-width="280px"
        height="350"
        class="rounded-1 mt-6 d-inline-block mx-auto"
      />
    </template>
    <p class="text-center mb-5">
      Если ты задаёшь себе этот вопрос,<br />
      то значит ты <b>готов к изменениям</b> <br />и мы сможем начать совместную
      работу
    </p>
    <v-btn
      class="psysreda-red-button mt-2"
      @click="open"
      v-html="lang.buttonContact"
    ></v-btn>
    <ContactDialog
      v-model="show"
      :title="lang.titleContact"
      :button-text="lang.buttonContactApprove"
      :type="clientConnectionTypes.connectOnline"
    />
  </SimpleCard>
</template>

<script>
import SimpleCard from "../SimpleCard";
import ContactDialog from "@/components/dialogs/ContactDialog";
import { lang } from "@/settings/lang";
import { clientConnectionTypes } from "@/settings";

export default {
  name: "contactCard",
  components: { ContactDialog, SimpleCard },
  data() {
    return {
      show: false,
      lang,
      clientConnectionTypes,
    };
  },
  methods: {
    open() {
      this.show = true;
    },
  },
};
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

::v-deep {
  .simple-card-text {
    padding-top: 0 !important;
    font-size: 17px;
    color: rgba(0, 0, 0, 0.8) !important;
  }

  .v-dialog {
    border-radius: 25px;
  }
}
</style>
