<template>
  <div>
    <v-row class="mt-12">
      <v-col md="12" lg="6">
        <Introduction class="mb-0"/>
      </v-col>
      <v-col md="12" lg="6" class="d-flex flex-column justify-space-between">
        <CodependencyTest class="mb-0"/>
        <ConsultationsForWhom/>
      </v-col>
    </v-row>
  </div>
</template>
<style lang="scss" scoped>
</style>
<script>
import Introduction from '../components/Introduction'
import CodependencyTest from '../components/CodependencyTest'
import ConsultationsForWhom from '../components/ConsultationsForWhom'

export default {
  components: {
    Introduction,
    CodependencyTest,
    ConsultationsForWhom
  }
}
</script>
