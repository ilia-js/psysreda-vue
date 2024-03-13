<template>
  <div class="app">
    <div class="app__tabs-bar">
      <TabsBar />
    </div>

    <div>
      <router-view />
    </div>

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
  </div>
</template>

<script lang="ts" setup>
import TabsBar from '@/components/tabs/TabsBar.vue'
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.app {
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: $px-40;

  &__tabs-bar {
    display: flex;
    justify-content: center;
  }
}

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
