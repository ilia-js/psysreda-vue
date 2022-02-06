<template>
  <v-card class="mx-auto" width="480" min-height="320">
    <v-card-title class="psysreda-card-header">
      Курс "Океан Эмоций"
    </v-card-title>
    <v-card-text class="text-center custom-text-1 course-card-text">
      <v-row>
        <v-col class="pl-12">
          <v-img
            src="img/ocean.jpg"
            max-width="170"
            class="rounded-2 img-fluid"
          />
        </v-col>
        <v-col class="pt-6 pl-11">
          <v-btn small class="ml-0 mt-0 py-2 psysreda-orange-button d-block btn-fix-width-1">
            О КУРСЕ
          </v-btn>
          <v-btn small class="ml-0 mt-8 py-2 psysreda-blue-button d-block btn-fix-width-1">
            РАСПИСАНИЕ
          </v-btn>
          <v-btn small class="ml-0 mt-8 py-2 psysreda-red-button d-block btn-fix-width-1">
            СТОИМОСТЬ
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>

</template>

<script>
export default {
  name: 'OceanOfEmotionsCourse'
}
</script>

<style scoped>

</style>
