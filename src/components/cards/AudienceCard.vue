<template>
  <SimpleCard class="price-card">
    <template v-slot:title> Кому подойдут консультации? </template>
    <v-list flat class="pl-5 pt-3">
      <v-list-item-group color="#444" no-action>
        <v-tooltip
          top
          color="red"
          open-delay="250"
          close-delay="0"
          content-class="custom-tooltip"
          v-for="(item, i) in items"
          :key="i"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-list-item two-line v-bind="attrs" v-on="on" inactive>
              <v-list-item-icon class="pt-0">
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
          <span v-html="item.tooltip"> </span>
        </v-tooltip>
      </v-list-item-group>
    </v-list>
  </SimpleCard>
</template>
<script>
import SimpleCard from "../SimpleCard";

export default {
  name: "AudienceCard",
  components: { SimpleCard },
  data: () => ({
    selectedItem: 0,
    items: [
      {
        title: "Отношения",
        subtitle: "жертва-спасатель-агрессор",
        icon: "mdi-human-male-female",
        tooltip:
          "Мои консультации подойдут тем, кто устал от <b>разрушающих отношений</b>.<br/>\n" +
          "Всю жизнь старается заботиться о других, в ответ <b>упреки и безразличие</b>.<br/>\n" +
          "Тем, кто ощущает в душе <b>боль и пустоту одиночества</b>.",
      },
      {
        title: "Жизнь состоит из ожиданий",
        subtitle: "и откладывания на потом",
        icon: "mdi-clock-fast",
        tooltip:
          "Вы часто ждете <b>подходящий момент или человека</b>.<br/>\n" +
          "Вам часто говорят - ты хороший человек, <b>но мы не можем быть вместе</b>.<br/>\n" +
          "Вы «торчите на эмоциях» от <b>эйфории до эмоционального упадка</b>.",
      },
      {
        title: "Твоей жизнью распоряжается",
        subtitle: "кто угодно, только не ты",
        icon: "mdi-account-minus-outline",
        tooltip:
          "Для тех, кто боится сказать свое НЕТ, и <b>живет в тревоге</b>.<br/>\n" +
          "Кто ощущает, что живет не свою жизнь, <b>терпит и подстраивается</b>.<br/>\n" +
          "Для тех, кто устал и хочет менять свою жизнь, <b>но не знает, как себе помочь</b>.",
      },
    ],
  }),
};
</script>
<style lang="scss" scoped>
.custom-tooltip {
  opacity: var(--v-tooltip-opacity, 1) !important;
  background: #fff !important;
  border: 2px dashed #fa6060 !important;
  padding: 20px;
  border-radius: 20px;
  font-size: 16px;
  line-height: 28px;
  color: #000;
}

.v-list-item__content {
  text-align: left;
}

v-list-item--link {
  cursor: none;
}

::v-deep {
  .simple-card-text {
    padding-top: 0px !important;
    padding-bottom: 30px !important;
  }
}
</style>
