<!--NEXT Раздел "Тест на созависимость"-->
<template>
  <v-card class="d-inline-block test-card" min-width="480px" min-height="270" max-width="600">
    <v-card-title class="psysreda-card-header">
      Нужна ли мне работа с<br/> со-зависимостью?
    </v-card-title>
    <v-card-text class="mt-0 text-center custom-text-1">
      <p class="mb-3">
        Этот легкий бесплатный тест<br/> поможет тебе
        определить<br/> степень созависимости
      </p>
      <v-dialog
        v-model="showTest"
        width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <div class="text-center">
            <v-btn class="mt-2 py-2 psysreda-red-button" v-bind="attrs" v-on="on">
              ПРОЙТИ ТЕСТ
            </v-btn>
          </div>
        </template>
        <v-card>
          <v-card-title class="custom-text-1 pt-5 pb-4">
            Тест на созависимость
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pt-6 pb-8" style="font-size: 17px; color: #333;">
            <div v-if="!isTestFinished">
              <div v-if="currentQuestionIndex === null">
                <p>Вам предлагается 20 утверждений, которые нужно оценить применительно к себе.</p>
                <p>Не думайте слишком долго над каждым утверждением.</p>
                <p>Обычно первый ответ, который приходит в голову - <i>является самым точным</i>.
                </p>
                <v-btn
                  type="submit"
                  @click="startTest()"
                  class="mt-4 psysreda-button"
                  color="green darken-1"
                >
                  Начать тест
                </v-btn>
              </div>
              <div v-else>
<!--                  <b>Вопрос №{{ currentQuestionIndex + 1 }}</b> из {{questionsNumber}}-->
                <p class="mt-1">
                  {{ currentQuestion.content }}
                </p>
                <div class="pt-3 pb-9">
                  <input type="radio" @change="setAnswer(1)" ref="answer_1" name="answer_1"> 1 (никогда)<br/>
                  <input type="radio" @change="setAnswer(2)" ref="answer_2" name="answer_2"> 2 (иногда)<br/>
                  <input type="radio" @change="setAnswer(3)" ref="answer_3" name="answer_3"> 3 (часто)<br/>
                  <input type="radio" @change="setAnswer(4)" ref="answer_4" name="answer_4"> 4 (почти всегда)
                </div>
                <v-btn
                  v-if="currentQuestionIndex < questionsNumber - 1"
                  type="submit"
                  @click="nextQuestion()"
                  class="psysreda-button mb-2"
                  :disabled="!isAnswered"
                  color="green darken-1"
                >
                  Далее
                </v-btn>
                <v-btn
                  v-else
                  type="submit"
                  id="show_result"
                  @click="processResult"
                  :disabled="!isAnswered"
                  :class="`${isAnswered && 'psysreda-button'}`"
                  color="green darken-1"
                >
                  Получить результат
                </v-btn>
              </div>
            </div>
            <div v-else>
              Ваш результат: <b>{{ total }}</b><br/><br/>
              Шкала оценки результатов:<br/>
              <ul class='shkala'>
                <li style='margin-top:5px;'>Более <b>60 баллов</b> - очень высокая степень зависимых моделей</li>
                <li style='margin-top:5px;'>От <b>40 до 59 баллов</b> - высокая степень зависимых моделей</li>
                <li style='margin-top:5px;'>От <b>30 до 39 баллов</b> - средняя степень зависимых и/или контрзависимых моделей</li>
                <li style='margin-top:5px;'>От <b>21 до 29 баллов</b> - очень мало зависимых и/или высокая степень контрзависимых моделей</li>
              </ul>
            </div>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="showTest = false"
            >
              Закрыть
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    questions: [
      {content: "Я склонен/склонна брать на себя ответственность за чувства и/или поведение других людей"},
      {content: "Я затрудняюсь идентифицировать свои чувства, такие как счастье, злость, смущение, уныние или возбуждение"},
      // {content: "Мне тяжело выражать свои чувства"},
      // {content: "Я испытываю страх или беспокойство при мысли о том, как другие отреагируют на мои чувства или поведение"},
      // {content: "Я свожу к минимуму проблемы и отрицаю или изменяю правду о чувствах или поведении людей, с которыми общаюсь"},
      // //6-10
      // {content: "Мне трудно устанавливать или поддерживать тесные взаимоотношения"},
      // {content: "Я боюсь быть отвергнутым (отвергнутой)"},
      // {content: "Я стараюсь добиваться во всем совершенства и сужу себя строго"},
      // {content: "Мне трудно принимать решения"},
      // {content: "Я склонен (склонна) полагаться на мнения других, а не действовать по своему усмотрению"},
      // //11-15
      // {content: "Я склонен (склонна) ставить желания и потребности других людей на первый план"},
      // {content: "Я склонен (склонна) ценить мнение других людей выше своего собственного"},
      // {content: "Мое ощущение собственного достоинства идет извне, в зависимости от мнения или действий других людей, которые, как мне кажется, больше в этом разбираются"},
      // {content: "Я нахожу, что тяжело быть уязвимым (уязвимой) и просить о помощи"},
      // {content: "Я всегда подвергаюсь контролю или стремлюсь контролировать, и наоборот, всегда слежу за тем, чтобы никогда не оказаться ответственным (ответственной)"},
      // //16-20
      // {content: "Я слишком лоялен (лояльна) к другим, даже в том случае, когда эта лояльность не оправдывается"},
      // {content: "У меня привычка рассматривать ситуации по принципу 'все или ничего'"},
      // {content: "Я очень толерантен (толерантна) к непоследовательности и смешанным поручениям"},
      // {content: "В моей жизни происходят эмоциональные кризисы и хаос"},
      // {content: "Я стараюсь искать взаимоотношения там, где чувствую себя “нужным” (“нужной”), и пытаюсь затем сохранять их"}
    ],
    answers: [],
    total: 0,
    currentQuestionIndex: null,
    isAnswered: false,
    currentPoints: null,
    showTest: false,
    isTestFinished: false,
  }),
  created() {
  },
  computed: {
    questionsNumber() {
      return this.questions.length;
    },
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    }
  },
  methods: {
    startTest() {
      this.currentQuestionIndex = 0;
    },
    setAnswer(points) {
      this.currentPoints = points;
      this.answers.push(points);
      this.isAnswered = true;
    },
    nextQuestion() {
      this.isAnswered = false;
      this.currentQuestionIndex++;
      this.$refs[`answer_${this.currentPoints}`].checked = false
      this.total += this.currentPoints;
    },
    processResult() {
      this.total += this.currentPoints;
      this.isTestFinished = true;
      let text = 'Тест пройден!\n';
      text += 'Дата заполнения: ' + this.$moment().format('DD.MM.YYYY') + '\n';
      text += 'Сумма теста: ' + this.total;
      if (!this.$helpers.isDevOrTest()) {
        this.$telegram(text);
      } else {
        console.log('Список ответов:', this.answers);
      }
    },
  }
}
</script>
<style lang="scss" scoped>
p {
  margin-bottom: 12px !important;
}
</style>
<style lang="scss">
.test-card {
  padding-top: 18px;
  padding-bottom: 33px;
  margin-top: 64px;
  .v-card__text {
    font-size: 18px !important;
  }
}
</style>

