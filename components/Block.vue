<template>
  <div>
  <component
    v-bind:is="name"
  />
    sometimes
  </div>
</template>

<script>
export default {
  name: 'Block',
  props: {
    name: {
      type: String,
      required: true,
    },
  }
}
</script>

<style scoped>

</style>
