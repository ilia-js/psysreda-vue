<template>
  <BaseCard class="contacts-block">
    <template #title>
      <div class="contacts-block__bigger-title">Татьяна Гвоздовская,</div>
      <div class="contacts-block__smaller-title">психотерапевт</div>
      <v-img
        src="@/assets/images/logo.png"
        max-width="280px"
        height="350"
        class="rounded-1 mt-6 d-inline-block mx-auto"
      />
    </template>

    <p class="text-center mb-5">
      Если ты задаёшь себе этот вопрос,<br />
      то значит ты <b>готов к изменениям</b> <br />и мы сможем начать совместную работу
    </p>
    <v-btn class="psysreda-red-button mt-2" @click="open" v-html="lang.buttonContact"></v-btn>
    <!--    <ContactDialog-->
    <!--      v-model="show"-->
    <!--      :title="lang.titleContact"-->
    <!--      :button-text="lang.buttonContactApprove"-->
    <!--      :type="clientConnectionTypes.connectOnline"-->
    <!--    />-->
  </BaseCard>
</template>

<script lang="ts" setup>
import { lang } from '@/settings/lang'
import { ref } from 'vue'
import BaseCard from '@/components/BaseCard.vue'

const show = ref<boolean>(false)

const open = () => {
  show.value = true
}
</script>

<style lang="scss" scoped>
.contacts-block {
  &__bigger-title {
    font-size: 1.15em;
  }

  &__smaller-title {
    font-size: 0.85em;
  }
}

// TODO Move inside component's class.
.local-input {
  max-width: 90%;
}

:deep(.base-card__text) {
  padding-top: 0 !important;
  font-size: 17px;
  color: rgba(0, 0, 0, 0.8) !important;
}

:deep(.v-dialog) {
  border-radius: 25px;
}
</style>
