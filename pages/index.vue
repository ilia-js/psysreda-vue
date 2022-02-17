<template>
  <div>
    <v-row class="mt-12">
      <v-col md="12" lg="6">
        <Introduction class="mb-16"/>
      </v-col>
      <v-col md="12" lg="6" class="d-flex flex-column justify-space-between">
        <CodependencyTest class="mb-16"/>
        <OceanOfEmotionsCourse class="mb-16"/>
      </v-col>
    </v-row>
    <v-row class="mt-0">
      <v-col md="12" lg="6" class="mt-5">
        <Prices/>
      </v-col>
      <v-col md="12" lg="6" class="mt-5">
        <ConsultationsForWhom/>
      </v-col>
    </v-row>
  </div>
  <!--      <Choice/>-->
  <!--      <AboutMe/>-->
  <!--      <Changes/>-->
  <!--      <Program/>-->
  <!--      <Reviews/>-->

  <!--      <Faq/>-->
  <!--      <Group/>-->
  <!--      <Diplomas/>-->
  <!--      <Footer/>-->
  <!--      <Block name="Start"></Block>-->
</template>
<style lang="scss" scoped>
</style>
<script>
import Choice from '../components/ConsultationsForWhom'

export default {
  components: { Choice }
}
</script>
