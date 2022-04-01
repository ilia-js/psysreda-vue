<template>
  <v-card class="main-page-block" min-height="330" elevation="0"
          style="border: 1px dashed #ccc">
    <v-card-title class="psysreda-card-header">
      Курс "Океан Эмоций"
    </v-card-title>
    <v-card-text class="text-center px-14 pt-5">
      <div>
        <v-row class="justify-space-around">
          <v-col class="">
            <v-img
              src="img/ocean.jpg"
              max-width="170"
              class="rounded-2 img-fluid mx-auto"
            />
          </v-col>
          <v-col class="pt-6">
            <div class="d-inline-block">
              <v-btn small class="ml-0 mt-0 py-2 psysreda-orange-button d-block btn-fix-width-1">
                О КУРСЕ
              </v-btn>
              <v-btn small class="ml-0 mt-8 py-2 psysreda-blue-button d-block btn-fix-width-1">
                РАСПИСАНИЕ
              </v-btn>
              <v-btn small class="ml-0 mt-8 py-2 psysreda-red-button d-block btn-fix-width-1">
                СТОИМОСТЬ
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-card-text>
  </v-card>

</template>

<script>
export default {
  name: 'OceanOfEmotionsCourse'
}
</script>

<style lang="scss" scoped>
.v-card__text {
  padding-bottom: 0;
}
</style>
