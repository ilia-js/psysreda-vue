<template>
  <SimpleCard class="price-card">
    <template v-slot:title> Стоимость услуг </template>
    <div class="question">Каким вы видите наше взаимодействие?</div>
    <v-radio-group v-model="chosenItemName" class="pl-7">
      <v-radio v-for="item in items" :key="item.name" :value="item.name">
        <template slot="label">
          <span v-html="item.label" />
        </template>
      </v-radio>
    </v-radio-group>
    <div class="text-center">
      <v-btn
        class="psysreda-red-button mt-5 mb-2"
        @click="show = true"
        :disabled="!chosenItemName"
      >
        <v-icon left class="d-none">mdi-cellphone-information</v-icon>
        ПОКАЗАТЬ
      </v-btn>
    </div>
    <v-dialog width="600" v-model="show">
      <v-card v-if="chosenItemName" class="pb-5 pt-3">
        <v-btn
          @click="show = false"
          text
          rounded
          class="mr-0 ml-auto d-block"
          small
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-card-title
          class="pt-0"
          v-html="items.find((x) => x.name === chosenItemName).label"
        >
        </v-card-title>
        <v-card-text class="pt-5 pb-7">
          <div v-if="chosenItemName === 'initial_consultation'">
            <ul>
              <li>
                На первой встрече я знакомлюсь, задаю вопросы, для меня важно
                услышать, с чем ты пришел, как устроена твоя жизнь.
              </li>
              <li>
                Мне тоже можно задавать вопросы, это помогает снять напряжение
                ибо ты не на допросе. Диалог помогает развеять ожидания и страхи
                о терапии или того, что, терапевт- безупречный человек лишенный
                эмоций, препарирующий всех как лягушку взглядом.
              </li>
              <li>
                Мы обсудим, чего бы тебе хотелось от наших встреч и на основании
                того, что ты предъявляешь о себе, учитывая запрос, я предложу
                возможный формат работы.
              </li>
              <li>
                Также мы обсудим границы наших отношений и график дальнейших
                встреч.
              </li>
            </ul>
            <h2 class="text-center mt-7">4 000 руб / 50 минут</h2>
          </div>
          <div v-if="chosenItemName === 'long_term_therapy'">
            <ul>
              <li>
                Если ты решил работать со своей со-зависимостью и выбрал меня
                своим терапевтом, моя задача организовать стабильные
                терапевтические отношения.
              </li>
              <li>
                Поэтому, я беру в терапию клиентов только с постоянным
                сеттингом.
              </li>
              <li>
                Постоянный сеттинг это встречи в назначенный день и время четыре
                раза в месяц.
              </li>
              <li>
                Постоянство необходимо для установления доверия в отношениях,
                поддержания механизмов психики, связанных с сопротивлением и
                формированием нейронных связей. Это помогает регулировать
                количество и обеспечивает качество моей работы.
              </li>
              <li>
                Терапия это самое ценное, долгосрочное вложение в твою жизнь, и
                оно не измеримо ни с чем. Твои результаты остаются с тобой и
                работают на тебя в отличие от платьев и прочих временных
                атрибутов благополучия пожизненно.
              </li>
            </ul>
            <h2 class="text-center mt-7">16 000 руб / 4 встречи</h2>
          </div>
          <div v-if="chosenItemName === 'therapeutic_group'">
            <ul>
              <li>Долгосрочная терапевтическая группа</li>
              <li>Проходит в режиме он-лайн 4 раза в месяц</li>
              <li>По понедельникам, с 20:00 до 22:30 (МСК)</li>
              <li>
                Подходит всем, кто заинтересован в улучшении отношений с собой
                или с другими
              </li>
            </ul>
            <h2 class="text-center mt-7">10 000 руб / 4 встречи</h2>
          </div>
          <div v-if="chosenItemName === 'art_therapeutic_group'">
            <ul>
              <li>
                Арт-терапевтическая
                <span class="text-no-wrap">группа</span> "Весна твоей души"
              </li>
              <li>Состоится с <b>16 по 17 апреля</b> 2022 года</li>
              <li>Проходит в очном режиме в г.Тбилиси</li>
              <li>
                Вы можете прийти с любым запросом про себя, своё состояние или
                сложности в отношениях
              </li>
              <li>
                Стоимость 150 лари при оплате до 14 апреля, 170 лари при оплате
                с 15 апреля
              </li>
            </ul>
            <h2 class="text-center mt-7">150-170 лари / 2 дня</h2>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </SimpleCard>
</template>
<script>
import SimpleCard from "@/components/SimpleCard";

export default {
  name: "PriceCard",
  components: { SimpleCard },
  data: () => ({
    show: false,
    items: [
      {
        name: "initial_consultation",
        label: "Первичная консультация",
      },
      {
        name: "long_term_therapy",
        label: "Долгосрочная терапия",
      },
      {
        name: "therapeutic_group",
        label: "Терапевтическая группа (он-лайн)",
      },
      {
        name: "art_therapeutic_group",
        label:
          'Арт-Терапевтическая <span class="text-no-wrap">группа</span> (г.Тбилиси)',
      },
    ],
    chosenItemName: null,
  }),
};
</script>
<style lang="scss" scoped>
.simple-card {
  max-width: 500px;
  margin: 0 auto;
}

::v-deep {
  .simple-card-text {
    padding-top: 10px !important;
  }
}

.question {
  font-size: 17px;
  color: #333;
  padding-bottom: 10px;
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

::v-deep {
  .v-dialog {
    border-radius: 25px !important;
  }
}
</style>
