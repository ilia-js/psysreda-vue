<template>
  <SimpleCard>
    <template v-slot:title>
      АРТ-ТЕРАПЕВТИЧЕСКАЯ ГРУППА<BR/>“ВЕСНА ТВОЕЙ ДУШИ”
    </template>
    <v-row class="justify-space-around">
      <v-col>
        <v-img
          src="/img/art-therapy.jpg"
          max-width="250"
          class="rounded-2 img-fluid mx-auto"
        />
      </v-col>
      <v-col class="pt-12 pl-13">
        <div class="d-inline-block">
          <div class="text-right">
            <v-btn class="black-gray-light-button ml-0 mt-0 py-2" @click="openDialog('audience')"
                   depressed small>
              Для кого?
            </v-btn>
            <br/>
            <v-btn class="black-gray-light-button ml-0 mt-8 py-2" @click="openDialog('process')"
                   depressed small>
              Как проходит?
            </v-btn>
            <br/>
            <v-btn class="black-gray-light-button ml-0 mt-8 py-2" @click="openDialog('results')"
                   depressed small>
              Что вы получите?
            </v-btn>
            <v-btn small class="black-gray-button ml-0 mt-14"
                   @click="openDialog('place_price')"
                   depressed>
              Сколько стоит, где и когда?
            </v-btn>
          </div>
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
                Для тех, кто удерживает много чувств и переживаний; обиды, страха, тревожащих мыслей, кто переполнен
                болью и ищет пути вынести их наружу.
              </li>
              <li>
                Или тех, кому сложно впустить в свою жизнь что-то новое, принять что-то, что повлияет на вашу жизнь,
                даже если перемен очень хочется. Например перемен в отношениях или перемен в их отсутствии.
              </li>
              <li>
                Кто “ощущает мир кожей”. Открыт для внешних воздействий и не находит в себе сил противостоять, раним и
                ранен упреками,оценкой,недоверием,предательством, расставанием.
              </li>
              <li>
                Кому одиноко или слишком неуютно с другими
                Кто живет в депрессии, отчаянии, апатии или раздражении
                Ощущает потребность в том, чтобы лучше себя понимать и жить с собой в согласии.
              </li>
            </ul>
          </div>
          <div v-if="chosenItemName === 'process'">
            <ul>
              <li>На группе мы будем формулировать запрос исходя из того, что с вами происходит.
                Исследовать, как устроена ваша сложность, ваше переживание.
              </li>
              <li>
                Искать что вам мешает, а что помогает ощущать себя свободнее и счастливее.
              </li>
              <li>Создавать метафорически через образы и рисунок возможности для перемен в жизни.</li>
              <li>Взращивать внутренние опоры, искать ресурсы для хорошей жизни.
              </li>
            </ul>
            <ul>
              <li>Мы будем использовать художественные средства как инструмент психотерапии; бумагу, краски, мелки,
                карандаши.
              </li>
              <li><b>При этом, не нужно иметь никаких художественных навыков!!!</b>
              </li>
              <li>В процессе вы не учитесь рисовать, вы учитесь узнавать и понимать себя, действовать по новому и
                выражать то, что невидимо для вас и требует внимания.
              </li>
            </ul>
          </div>
          <div v-if="chosenItemName === 'results'">
            <ul>
              <li>
                Я очень надеюсь, что участие в группе принесет вам много открытий о вас и ваших отношениях.
              </li>
              <li>
                Поможет совершить переход из текущего состояния в желаемое.
              </li>
              <li>
                Поддержит вас следовать своему пути- прямо и с уверенностью, опираясь на себя и этот мир.
              </li>
              <li>
                Прожить то, что не прожито.
              </li>
              <li>
                Посмотреть на свою сложность в новом ракурсе и найти свой способ решения
              </li>
            </ul>
          </div>
          <div v-if="chosenItemName === 'place_price'">
            <ul>
              <li>
                16-17 апреля 2022 года (суббота, воскресение)
              </li>
              <li>
                г. Тбилиси, Психологический центр “Зебра”
              </li>
              <li>
                150 лари за два дня при оплате до 14 апреля 2022<br/>
                170 лари при оплате с 15 апреля
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
          label: 'Для кого эта группа?'
        },
        {
          name: 'process',
          label: 'Как проходит группа?'
        },
        {
          name: 'results',
          label: 'Что вы получите?'
        },
        {
          name: 'place_price',
          label: 'Сколько стоит, где и когда?'
        }
      ],
      chosenItemName: null
    }
  },
  methods: {
    openDialog (name) {
      this.chosenItemName = name
      this.show = true
    }
  }

}
</script>

<style lang="scss" scoped>
.simple-card {
  max-width: 700px;
  margin: 0 auto;
}

.v-card__text {
  padding-bottom: 0;
}

h2 {
  font-size: 22px;
  color: #333;
}

li {
  font-size: 16px;
  padding-bottom: 10px;
  color: #222;
}

</style>
