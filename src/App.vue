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

      <v-footer fixed padless>
        <v-btn
          v-for="social in socialNetworks"
          :key="social.link"
          :href="social.link"
          target="_blank"
          icon
        >
          <v-icon :color="social.color" size="24px">{{ social.icon }}</v-icon>
        </v-btn>
      </v-footer>
    </v-container>
  </v-app>
</template>

<script>
import { appTabs, socialNetworks } from "@/settings";

export default {
  name: "App",

  data() {
    return {
      menu: "",
      appTabs,
      socialNetworks,
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
@import "@/assets/scss/variables.scss";

.container {
  max-width: $container-max-width;
}

.v-tabs {
  margin-bottom: $space-after-tabs;
}

.v-footer {
  display: flex;
  justify-content: center;
  height: $footer-height;
  border-top: $footer-border-style !important;
}

::v-deep .v-main {
  padding-bottom: $space-after-blocks !important;
}
</style>
