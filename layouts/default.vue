<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col md="12" class="px-16">
          <v-tabs>
            <v-tab @click="$router.push('/')">Главная</v-tab>
            <v-tab @click="$router.push('/course')">Курс "Океан Эмоций"</v-tab>
            <v-tab @click="$router.push('/price')">Стоимость</v-tab>
            <v-tab @click="$router.push('/documents')">Подтверждение образования</v-tab>
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
