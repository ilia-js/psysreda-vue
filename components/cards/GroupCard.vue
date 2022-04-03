<template>
  <SimpleCard>
    <template v-slot:title>
      Арт-Терапевтическая группа
    </template>
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
  </SimpleCard>
</template>

<script>
import SimpleCard from '../SimpleCard'

export default {
  name: 'GroupCard',
  components: { SimpleCard }
}
</script>

<style lang="scss" scoped>
.simple-card {
  max-width: 600px;
  margin: 0 auto;
}

.v-card__text {
  padding-bottom: 0;
}
</style>
