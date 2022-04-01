<template>
  <div>
    <v-row class="mt-12">
      <v-col md="12" lg="6">
        <Prices/>
      </v-col>
    </v-row>
  </div>
</template>
<style lang="scss" scoped>
</style>
<script>

import Prices from '../components/Prices'

export default {
  components: {
    Prices
  }
}
</script>
