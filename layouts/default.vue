<template>
  <v-app>
    <v-container>
      <v-tabs v-model="menu" centered show-arrows>
        <v-tab to="/">Главная</v-tab>
        <v-tab to="/art-therapy-group">Арт-Терапевтическая группа</v-tab>
        <v-tab to="/course" class="d-none">Курс "Океан Эмоций"</v-tab>
        <v-tab to="/price">Стоимость</v-tab>
        <v-tab to="/documents">Подтверждение образования</v-tab>
      </v-tabs>
      <Nuxt/>
      <div class="empty-space"></div>
      <v-footer fixed padless>
        <v-card flat tile class="footer-card">
          <v-card-text>
            <v-btn icon href="https://www.facebook.com/psysreda" target="_blank">
              <v-icon color="#4267B2" size="24px">mdi-facebook</v-icon>
            </v-btn>
            <v-btn icon href="https://www.instagram.com/mypsyholog" target="_blank">
              <v-icon color="#e95950" size="24px">mdi-instagram</v-icon>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-container>
  </v-app>
</template>
<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      menu: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  max-width: 1240px;
}

.v-tabs {
  margin-bottom: 100px;
}

.footer-card {
  width: 100%;
  padding-top: 0px;
  text-align: center;
  border-top: 2px dashed #aaa;

}

.v-card__text {
  background: #eee;
  padding-top: 15px;
  padding-bottom: 15px
}

.empty-space {
  padding-bottom: 100px;
}
</style>
