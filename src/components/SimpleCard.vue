<template>
  <v-card
    class="simple-card"
    :max-width="maxWidth"
    :min-height="minHeight"
    elevation="0"
  >
    <v-card-title class="psysreda-card-header">
      <slot name="title" />
    </v-card-title>
    <v-card-text class="simple-card-text text-center px-14 pt-5">
      <slot />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "SimpleCard",
  props: {
    maxWidth: String,
    minHeight: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.simple-card {
  border: 2px dashed #bbb;
  border-radius: $border-radius !important;
}
</style>
