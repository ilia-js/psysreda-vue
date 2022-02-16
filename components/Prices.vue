<!--NEXT Раздел "Стоимость"-->
<template>
  <v-card class="mx-auto main-page-block" max-width="480px" min-height="330">
    <v-card-title class="psysreda-card-header">
      Стоимость услуг
    </v-card-title>
    <v-card-text class="pt-5 px-12">
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>
            Первичная консультация
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <ul class="">
              <li>На первой встрече я знакомлюсь, задаю вопросы, для меня важно услышать, с чем ты пришел, как устроена
                твоя
                жизнь.
              </li>
              <li>
                Мне тоже можно задавать вопросы, это помогает снять напряжение ибо ты не на допросе. Диалог помогает
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
            <h2 class="text-center">3500руб / 50 мин</h2>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>
            Долгосрочная терапия
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <ul class="">
              <li>Если ты решил работать со своей со-зависимостью и выбрал меня своим терапевтом, моя задача
                организовать
                стабильные терапевтические отношения.
              </li>
              <li>Поэтому, я беру в терапию клиентов только с постоянным сеттингом.</li>
              <li>Постоянный сеттинг это встречи в назначенный день и время четыре раза в месяц.</li>
              <li>
                Постоянство необходимо для установления доверия в отношениях, поддержания механизмов психики, связанных
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
            <h2 class="text-center">14 000руб / 4 встречи</h2>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>
            Терапевтическая группа
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <h2 class="text-center">-руб / -</h2>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: 'Prices',
  data: () => ({})
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
  padding-bottom: 0;
}

.v-expansion-panel {
  margin-bottom: 20px;
}
</style>
