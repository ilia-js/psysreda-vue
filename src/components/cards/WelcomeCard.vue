<template>
  <BaseCard class="welcome-card">
    <template #header>
      <div class="welcome-card__title">
        <div>Татьяна Гвоздовская,</div>
        <div>гештальт - терапевт</div>
      </div>
      <img src="@/assets/images/logo.png" alt="Tatiana Gvozdovskaia" class="welcome-card__photo" />
    </template>
    <template #body>
      <div class="welcome-card__body">
        <div class="welcome-card__body-text">
          Если ты задаёшь себе этот вопрос,<br />
          то значит ты <b>готов к изменениям</b> <br />и мы сможем начать совместную работу
        </div>
        <TaniaButton :text="lang.buttonContact" color-scheme="red" />
      </div>
    </template>

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
import TaniaButton from '@/components/buttons/TaniaButton.vue'

const show = ref<boolean>(false)

const open = () => {
  show.value = true
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.welcome-card {
  &__title {
    margin-bottom: $px-20;

    div:first-child {
      font-size: 1.15em;
    }

    div:nth-child(2) {
      font-size: 0.85em;
    }
  }

  //&__title:nth-child(1) {
  //  font-size: 0.85em;
  //}

  &__photo {
    height: 350px;
    border-radius: 112px;
  }

  &__body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__body-text {
    margin-top: $px-10;
    margin-bottom: $px-20;
    text-align: center;
    font-size: 1.07rem;
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
