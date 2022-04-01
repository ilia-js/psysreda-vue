<template>
  <v-card class="mx-auto main-page-block" max-width="480px" min-height="330" style="border: 1px dashed #ccc"
          elevation="0">
    <v-card-title class="psysreda-card-header">
      Стоимость услуг
    </v-card-title>
    <v-card-text class="pt-5 px-12">
      <p>Каким вы видите наше взаимодействие?</p>
      <v-radio-group v-model="chosenItemName">
        <v-radio
          v-for="item in items"
          :key="item.name"
          :label="item.label"
          :value="item.name"
        ></v-radio>
      </v-radio-group>

      <v-dialog
        width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <div class="text-center">
            <v-btn class="" v-bind="attrs" v-on="on" :disabled="!chosenItemName">
              <v-icon left>mdi-cellphone-information</v-icon>
              Узнать стоимость
            </v-btn>
          </div>
        </template>
        <v-card v-if="chosenItemName">
          <v-card-title class="pt-6">{{ items.find(x => x.name === chosenItemName).label }}</v-card-title>
          <v-card-text class="pt-3">
            <div v-if="chosenItemName === 'initial_consultation'">
              <ul>
                <li>На первой встрече я знакомлюсь, задаю вопросы, для меня важно услышать, с чем ты пришел, как
                  устроена
                  твоя
                  жизнь.
                </li>
                <li>
                  Мне тоже можно задавать вопросы, это помогает снять напряжение ибо ты не на допросе. Диалог
                  помогает
                  развеять ожидания и страхи о терапии или того, что, терапевт- безупречный человек лишенный эмоций,
                  препарирующий всех как лягушку взглядом.
                </li>
                <li>
                  Мы обсудим, чего бы тебе хотелось от наших встреч и на основании того, что ты предъявляешь о себе,
                  учитывая
                  запрос, я предложу возможный формат работы.
                </li>
                <li>Также мы обсудим границы наших отношений и график дальнейших встреч.</li>
              </ul>
              <h2 class="text-center mt-7">4 000 руб / 50 минут</h2>
            </div>
            <div v-if="chosenItemName === 'long_term_therapy'">
              <ul class="">
                <li>Если ты решил работать со своей со-зависимостью и выбрал меня своим терапевтом, моя задача
                  организовать
                  стабильные терапевтические отношения.
                </li>
                <li>Поэтому, я беру в терапию клиентов только с постоянным сеттингом.</li>
                <li>Постоянный сеттинг это встречи в назначенный день и время четыре раза в месяц.</li>
                <li>
                  Постоянство необходимо для установления доверия в отношениях, поддержания механизмов психики,
                  связанных
                  с
                  сопротивлением и формированием нейронных связей. Это помогает регулировать количество и обеспечивает
                  качество моей работы.
                </li>
                <li>
                  Терапия это самое ценное, долгосрочное вложение в твою жизнь, и оно не измеримо ни с чем. Твои
                  результаты
                  остаются с тобой и работают на тебя в отличие от платьев и прочих временных атрибутов благополучия
                  пожизненно.
                </li>
              </ul>
              <h2 class="text-center mt-7">16 000 руб / 4 встречи</h2>
            </div>
            <div v-if="chosenItemName === 'therapeutic_group'">
              <h2 class="text-center mt-7">-руб / - встречи</h2>
            </div>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: 'Prices',
  data: () => ({
    items: [
      {
        name: 'initial_consultation',
        label: 'Первичная консультация'
      },
      {
        name: 'long_term_therapy',
        label: 'Долгосрочная терапия'
      },
      {
        name: 'therapeutic_group',
        label: 'Терапевтическая группа'
      }
    ],
    chosenItemName: null
  })
}
</script>
<style lang="scss" scoped>
h2 {
  font-size: 1.3rem;
  font-weight: bold;
  padding: 5px 0 30px;
}

li {
  margin-bottom: 7px;
}

.v-card__text {
  color: rgba(0, 0, 0, 0.8) !important;
}

.v-card__subtitle, .v-card__text {
  font-size: 17px;
}

.v-expansion-panel {
  margin-bottom: 20px;
}
</style>
