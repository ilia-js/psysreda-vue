<template>
  <SimpleCard>
    <template v-slot:title>
      Арт-терапевтическая группа<br/>“Весна твоей души”
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
          <v-btn small class="ml-0 mt-0 py-2 psysreda-orange-button d-block"
                 @click="chosenItemName='audience';show=true;">
            Кому подходит?
          </v-btn>
          <v-btn small class="ml-0 mt-8 py-2 psysreda-green-button d-block"
                 @click="chosenItemName='price';show=true;">
            Стоимость?
          </v-btn>
          <v-btn small class="ml-0 mt-8 py-2 psysreda-blue-button d-block"
                 @click="chosenItemName='date';show=true;">
            Когда?
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-dialog width="600" v-model="show">
      <v-card v-if="chosenItemName" class="pb-5 pt-3">
        <v-btn @click="show=false" text rounded class="mr-0 ml-auto d-block" small>
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-card-title class="pt-0">
          {{ items.find(x => x.name === chosenItemName).label }}
        </v-card-title>
        <v-card-text class="pt-5 pb-7">
          <div v-if="chosenItemName === 'audience'">
            <ul>
              <li>
              </li>
            </ul>
          </div>
          <div v-if="chosenItemName === 'price'">
            <ul>
              <li>
              </li>
            </ul>
          </div>
          <div v-if="chosenItemName === 'date'">
            <ul>
              <li>
              </li>
            </ul>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </SimpleCard>
</template>

<script>
import SimpleCard from '../SimpleCard'

export default {
  name: 'ArtTherapyGroupCard',
  components: { SimpleCard },
  data () {
    return {
      show: false,
      items: [
        {
          name: 'audience',
          label: 'Кому подходит?'
        },
        {
          name: 'price',
          label: 'Стоимость'
        },
        {
          name: 'date',
          label: 'Когда?'
        }
      ],
      chosenItemName: null
    }
  }

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
