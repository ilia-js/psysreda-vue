<template>
  <BaseCard class="auditory-card">
    <template #header> Кому подойдут консультации? </template>
    <template #body>
      <div v-for="(item, i) in items" :key="i" class="auditory-card__item">
        <div class="auditory-card__item-title">{{ item.title }}</div>
        <div class="auditory-card__item-subtitle">{{ item.subtitle }}</div>
      </div>
    </template>
  </BaseCard>
</template>
<script lang="ts" setup>
import BaseCard from '@/components/BaseCard.vue'

interface ListItem {
  title: string
  subtitle: string
  icon: string
  tooltip: string
}

const items: ListItem[] = [
  {
    title: 'Отношения',
    subtitle: 'жертва-спасатель-агрессор',
    icon: 'mdi-human-male-female',
    tooltip:
      'Мои консультации подойдут тем, кто устал от <b>разрушающих отношений</b>.<br/>\n' +
      'Всю жизнь старается заботиться о других, в ответ <b>упреки и безразличие</b>.<br/>\n' +
      'Тем, кто ощущает в душе <b>боль и пустоту одиночества</b>.'
  },
  {
    title: 'Жизнь состоит из ожиданий',
    subtitle: 'и откладывания на потом',
    icon: 'mdi-clock-fast',
    tooltip:
      'Вы часто ждете <b>подходящий момент или человека</b>.<br/>\n' +
      'Вам часто говорят - ты хороший человек, <b>но мы не можем быть вместе</b>.<br/>\n' +
      'Вы «торчите на эмоциях» от <b>эйфории до эмоционального упадка</b>.'
  },
  {
    title: 'Твоей жизнью распоряжается',
    subtitle: 'кто угодно, только не ты',
    icon: 'mdi-account-minus-outline',
    tooltip:
      'Для тех, кто боится сказать свое НЕТ, и <b>живет в тревоге</b>.<br/>\n' +
      'Кто ощущает, что живет не свою жизнь, <b>терпит и подстраивается</b>.<br/>\n' +
      'Для тех, кто устал и хочет менять свою жизнь, <b>но не знает, как себе помочь</b>.'
  }
]
</script>
<style lang="scss" scoped>
@import '@/scss/variables.scss';

.auditory-card {
  &__item {
    width: 270px;
  }

  &__item-title {
    font-size: 1.125rem;
  }

  &__item-subtitle {
    padding-top: $px-5;
    font-size: 1rem;
  }
}

:deep(.base-card__body) {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $px-25;
}
</style>
