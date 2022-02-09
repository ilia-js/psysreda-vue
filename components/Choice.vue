<template>
  <v-card class="mx-auto main-page-block" max-width="480px" min-height="270">
    <v-card-title class="psysreda-card-header">
      Кому подойдут консультации?
    </v-card-title>
    <v-card-text class="mt-0 custom-text-1">
      <v-list shaped>
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
        >

          <v-list-item two-line>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Отношения</v-list-item-title>
              <v-list-item-subtitle> жертва-спасатель-агрессор</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-tooltip bottom color="red">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
                class="mt-5 py-6"
              >
                <v-list-item
                  two-line v-bind="attrs"
                  v-on="on"
                >
                  <v-list-item-icon>
                    <v-icon>mdi-account</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Жизнь состоит из ожиданий</v-list-item-title>
                    <v-list-item-subtitle> и откладывания на потом</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

              </v-btn>
            </template>
            <span>            Вы часто ждете подходящий момент или человека.<br/>
            Вам часто говорят - ты хороший человек, но мы не можем быть вместе.<br/>
            Вы «торчите на эмоциях» от эйфории до эмоционального упадка.
</span>
          </v-tooltip>

          <v-tooltip bottom color="red">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
                class="mt-5 py-6"
              >
                <v-list-item two-line>
                  <v-list-item-icon>
                    <v-icon>mdi-account</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Твоей жизнью распоряжается</v-list-item-title>
                    <v-list-item-subtitle>кто угодно, только не ты</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

              </v-btn>
            </template>
            <span>Для тех, кто боится сказать свое НЕТ, и живет в тревоге.<br/>
            Кто ощущает, что живет не свою жизнь, терпит и подстраивается<br/>
            Для тех, кто устал и хочет менять свою жизнь, но не знает, как себе помочь.</span>
          </v-tooltip>

        </v-list-item-group>
      </v-list>
      <div>
        <div>
          <h2></h2>
          <p class="text-left d-none">
            Мои консультации подойдут тем, кто устал от разрушающих отношений.<br/>
            Всю жизнь старается, заботиться о других, в ответ упреки и безразличие.<br/>
            Тем, кто ощущает в душе боль и пустоту одиночества.<br/>
          </p>
          <br/>
        </div>
        <div class="part">
          <p class="text-left d-none">
            Вы часто ждете подходящий момент или человека.<br/>
            Вам часто говорят - ты хороший человек, но мы не можем быть вместе.<br/>
            Вы «торчите на эмоциях» от эйфории до эмоционального упадка.
          </p>
          <br/>
        </div>
        <div class="part">
          <p class="text-left d-none">
            Для тех, кто боится сказать свое НЕТ, и живет в тревоге.<br/>
            Кто ощущает, что живет не свою жизнь, терпит и подстраивается<br/>
            Для тех, кто устал и хочет менять свою жизнь, но не знает, как себе помочь.
          </p>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    selectedItem: 0,
    items: [
      {
        text: 'Отношения жертва-спасатель-агрессор',
        icon: 'mdi-clock'
      },
      {
        text: 'Жизнь состоит из ожиданий и откладывания на потом',
        icon: 'mdi-account'
      },
      {
        text: 'Conversions',
        icon: 'mdi-flag'
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
</style>
