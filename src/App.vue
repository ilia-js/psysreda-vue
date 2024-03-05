<template>
  <v-app>
    <v-tabs v-model="menu" centered show-arrows>
      <v-tab v-for="tab in preparedTabs" :key="tab.path" :to="tab.path">{{ tab.label }} </v-tab>
    </v-tabs>
    <v-main>
      <router-view />
    </v-main>

    <!--      <v-footer fixed padless>-->
    <!--        <v-btn-->
    <!--          v-for="social in socialNetworks"-->
    <!--          :key="social.link"-->
    <!--          :href="social.link"-->
    <!--          target="_blank"-->
    <!--          icon-->
    <!--        >-->
    <!--          <v-icon :color="social.color" size="24px">{{ social.icon }}</v-icon>-->
    <!--        </v-btn>-->
    <!--      </v-footer>-->
  </v-app>
</template>

<script lang="ts" setup>
import { topMenuTabs } from '@/settings/topMenuTabs'
import { computed, ref } from 'vue'
//import { VApp } from 'vuetify/vuetify'

const menu = ref('')

const preparedTabs = computed(() => {
  return topMenuTabs.filter((el) => !el.disabled)
})
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

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

:deep(.v-main) {
  padding-bottom: $space-after-blocks !important;
}
</style>
