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
        <BaseButton :text="lang.button.writeMe" color-scheme="red" @click="openMessageDialog" />
      </div>
    </template>
  </BaseCard>
  <MessageDialog ref="messageDialogRef" @click:close="onClickCloseMessageDialog" />
</template>

<script lang="ts" setup>
import { lang } from '@/settings/lang'
import { ref } from 'vue'
import BaseCard from '@/components/BaseCard.vue'
import BaseButton from '@/components/base/buttons/BaseButton.vue'

import MessageDialog from '@/components/dialogs/MessageDialog.vue'

const messageDialogRef = ref<InstanceType<typeof MessageDialog> | undefined>()

const openMessageDialog = () => {
  messageDialogRef.value?.open()
}

const onClickCloseMessageDialog = () => {
  messageDialogRef.value?.close()
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
</style>
