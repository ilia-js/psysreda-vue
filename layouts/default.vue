<template>
  <v-app>
    <v-container>
      <v-tabs centered>
        <v-tab @click="$router.push('/')">Главная</v-tab>
        <v-tab @click="$router.push('/group')">Терапевтическая группа</v-tab>
        <v-tab @click="$router.push('/course')" class="d-none">Курс "Океан Эмоций"</v-tab>
        <v-tab @click="$router.push('/price')">Стоимость</v-tab>
        <v-tab @click="$router.push('/documents')">Подтверждение образования</v-tab>
      </v-tabs>
      <Nuxt/>
    </v-container>
  </v-app>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1240px;
}

.v-tabs {
  margin-bottom: 100px;
}
</style>
