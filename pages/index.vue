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

    <v-row class="mt-0">
      <v-col md="12" lg="6" class="mt-16">
        <Prices/>
      </v-col>
      <v-col md="12" lg="6" class="mt-16">
        <OceanOfEmotionsCourse class="mb-0"/>
      </v-col>
    </v-row>

    <v-row>
      <v-col md="12" lg="12" class="mt-16">
        <Diplomas/>
      </v-col>
    </v-row>
  </div>
</template>
<style lang="scss" scoped>
</style>
<script>
import ConsultationsForWhom from '../components/ConsultationsForWhom'
import Diplomas from '../components/Diplomas'
import Introduction from '../components/Introduction'

export default {
  components: {
    ConsultationsForWhom,
    Diplomas,
    Introduction
  }
}
</script>
