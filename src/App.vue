<template>
  <v-app>
    <v-container>
      <v-tabs v-model="menu" centered show-arrows>
        <v-tab v-for="tab in preparedTabs" :key="tab.path" :to="tab.path"
          >{{ tab.label }}
        </v-tab>
      </v-tabs>
      <v-main>
        <router-view />
      </v-main>

      <div class="empty-space"></div>
      <v-footer fixed padless>
        <v-btn icon href="https://www.facebook.com/psysreda" target="_blank">
          <v-icon color="#4267B2" size="24px">mdi-facebook</v-icon>
        </v-btn>
        <v-btn icon href="https://www.instagram.com/mypsyholog" target="_blank">
          <v-icon color="#e95950" size="24px">mdi-instagram</v-icon>
        </v-btn>
      </v-footer>
    </v-container>
  </v-app>
</template>

<script>
import { appTabs } from "@/settings";

export default {
  name: "App",

  data() {
    return {
      menu: "",
      appTabs,
    };
  },

  computed: {
    preparedTabs() {
      return appTabs.filter((el) => !el.disabled);
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 1240px;
}

.v-tabs {
  margin-bottom: 100px;
}

.v-footer {
  display: flex;
  justify-content: center;
  height: 45px;
  border-top: 1px dashed #aaa !important;
}

.v-card__text {
  background: #eee;
  padding-top: 15px;
  padding-bottom: 15px;
}

.empty-space {
  padding-bottom: 100px;
}
</style>
