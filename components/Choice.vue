<template>
  <v-card class="mx-auto main-page-block" max-width="480px" min-height="270">
    <v-card-title class="psysreda-card-header">
      Кому подойдут консультации?
    </v-card-title>
    <v-card-text class="mt-0 custom-text-1">
      <v-list flat class="pl-15">
        <v-list-item-group
          color="#444"
          no-action
        >
          <v-tooltip
            top
            color="red"
            open-delay="200"
            content-class="custom-tooltip"
            v-for="(item, i) in items"
            :key="i"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-list-item
                two-line
                v-bind="attrs"
                v-on="on"
              >
                <v-list-item-icon class="pt-3">
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                  <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
            <span v-html="item.tooltip">
            </span>
          </v-tooltip>
        </v-list-item-group>
      </v-list>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    selectedItem: 0,
    items: [
      {
        title: 'Отношения',
        subtitle: 'жертва-спасатель-агрессор',
        icon: 'mdi-human-male-female',
        tooltip: 'Мои консультации подойдут тем, кто устал от разрушающих отношений.<br/>\n' +
          'Всю жизнь старается, заботиться о других, в ответ упреки и безразличие.<br/>\n' +
          'Тем, кто ощущает в душе боль и пустоту одиночества.'
      },
      {
        title: 'Жизнь состоит из ожиданий',
        subtitle: 'и откладывания на потом',
        icon: 'mdi-clock-fast',
        tooltip: 'Вы часто ждете подходящий момент или человека.<br/>\n' +
          'Вам часто говорят - ты хороший человек, но мы не можем быть вместе.<br/>\n' +
          'Вы «торчите на эмоциях» от эйфории до эмоционального упадка.'
      },
      {
        title: 'Твоей жизнью распоряжается',
        subtitle: 'кто угодно, только не ты',
        icon: 'mdi-account-minus-outline',
        tooltip: 'Для тех, кто боится сказать свое НЕТ, и живет в тревоге.<br/>\n' +
          'Кто ощущает, что живет не свою жизнь, терпит и подстраивается<br/>\n' +
          'Для тех, кто устал и хочет менять свою жизнь, но не знает, как себе помочь.'
      }
    ]
  })
}
</script>
<style lang="scss" scoped>
h2 {
  font-size: 1.1rem;
  font-weight: bold;
  text-align: left;
}

.custom-tooltip {
  opacity: var(--v-tooltip-opacity, 1) !important;
  background: var(--v-tooltip-bg, rgba(97, 97, 97, 1)) !important;
}
</style>
