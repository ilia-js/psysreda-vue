<template>
  <v-card class="simple-card" elevation="0">
    <v-card-title class="psysreda-card-header">
      <slot name="title"/>
    </v-card-title>
    <v-card-text class="simple-card-text text-center px-14 pt-5">
      <slot/>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'SimpleCard'
}
</script>

<style lang="scss" scoped>
.simple-card {
  border: 1px dashed #ccc;
  border-radius: 8px;
}
</style>
