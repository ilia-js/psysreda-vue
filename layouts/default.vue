<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col md="12" class="px-16">
          <v-tabs>
            <v-tab>Главная</v-tab>
            <v-tab>Курс "Океан Эмоций"</v-tab>
            <v-tab>Стоимость</v-tab>
            <v-tab>Подтверждение образования</v-tab>
          </v-tabs>
        </v-col>
      </v-row>

      <Nuxt/>
    </v-container>
  </v-app>
</template>

<style lang="scss">
.container {
  max-width: 1240px;
}
</style>
