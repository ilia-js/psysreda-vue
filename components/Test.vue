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
            <v-btn class="mt-1 py-2 psysreda-red-button" v-bind="attrs" v-on="on">
              ПРОЙТИ ТЕСТ
            </v-btn>
          </div>
        </template>
        <v-card>
          <v-card-title class="custom-text-1 pt-5 pb-4">
            Тест на созависимость
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pt-3">
            <div>
              <!--Next block: Questions-->
              <div id="questions" v-if="!total">
                <div v-if="currentQuestionIndex === undefined" class="description">
                  Вам предлагается 20 утверждений, которые нужно оценить применительно к себе.
                  <br/>Отвечайте, не думая слишком долго над каждым утверждением.
                  <br/>Обычно, первый ответ, который приходит в голову - <i>является самым точным</i>.<br/>
                  <input
                    type="submit"
                    value="Начать тест"
                    @click="startTest()"
                    class="mt-4 action-buttons psysreda-orange-button"
                  >
                </div>
                <div v-if="currentQuestionIndex !== undefined" class="pt-4 text-center">
                  <b>Вопрос №{{ currentQuestionIndex + 1 }}</b> из {{questionsNumber}}
                  <div class="mt-1 text-left">
                    {{ currentQuestion.content }}
                  </div>
                  <div class="answer-variants text-left">
                    <input type="radio" @change="setAnswer(1)" ref="answer_1" name="answer_1"> 1 (никогда)<br/>
                    <input type="radio" @change="setAnswer(2)" ref="answer_2" name="answer_2"> 2 (иногда)<br/>
                    <input type="radio" @change="setAnswer(3)" ref="answer_3" name="answer_3"> 3 (часто)<br/>
                    <input type="radio" @change="setAnswer(4)" ref="answer_4" name="answer_4"> 4 (почти всегда)
                  </div>
                  <input
                    v-if="currentQuestionIndex < questionsNumber - 1"
                    type="submit"
                    value="Далее ->"
                    @click="nextQuestion()"
                    :class="`mt-4 action-buttons ${isAnswered && 'green-button'}`"
                  >
                  <input
                    v-else
                    type="submit"
                    value="Получить результат"
                    id="show_result"
                    @click="showResult"
                    :disabled="!isAnswered"
                    :class="`action-buttons ${isAnswered && 'psysreda-orange-button'}`"
                  >
                </div>
              </div>
              <!--Next block: Answers-->
              <div id="answers" v-if="total">
                <h1>Рузультаты теста</h1>
                <br><span class="result">Ваш результат:</span> <b id="sum_result"></b><br/><br/>
                Шкала оценки результатов:<br/>
                <ul class='shkala'>
                  <li style='margin-top:5px;'>Более <b>60 баллов</b> - очень высокая степень зависимых моделей</li>
                  <li style='margin-top:5px;'>От <b>40 до 59 баллов</b> - высокая степень зависимых моделей</li>
                  <li style='margin-top:5px;'>От <b>30 до 39 баллов</b> - средняя степень зависимых и/или контрзависимых моделей</li>
                  <li style='margin-top:5px;'>От <b>21 до 29 баллов</b> - очень мало зависимых и/или высокая степень контрзависимых моделей</li>
                </ul>
              </div>
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
      {content: "Я склонен (склонна) брать на себя ответственность за чувства и/или поведение других людей"},
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
    currentQuestionIndex: undefined,
    isAnswered: false,
    currentAnswerNumber: undefined,
    showTest: false
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
    setAnswer(answerNumber) {
      this.answers.push(answerNumber);
      for(let i = 1; i <= 4; i++) {
        if (answerNumber !== i) this.$refs[`answer_${i}`].checked = false;
      }
      this.currentAnswerNumber = answerNumber;
      this.isAnswered = true;
    },
    showResult() {
      let answerString = '';
      let total = 0;
      total = this.answers.reduce((acc, a) => acc + a, 0);
      //$('#test_modal').animate({ scrollTop: $('#test_modal .modal-content').height() }, 'slow');
      // Send notification to telegram
      console.log('Список ответов:', this.answers);
      let text = 'Тест пройден!\n';
      text += 'Дата заполнения: ' + this.$moment().format('DD.MM.YYYY') + '\n';
      text += 'Сумма теста: ' + total;
      this.$telegram(text);
      this.total = total;
    },
    nextQuestion() {
      this.isAnswered = false;
      this.currentQuestionIndex++;
      this.$refs[`answer_${this.currentAnswerNumber}`].checked = false
    },
    startTest() {
      this.currentQuestionIndex = 0;
    },
    setShowTest(val) {
      this.showTest = val;
    }
  }
}
</script>
<style scoped>
/*h1.test-info{font-size:2.7rem;font-weight:bold;padding-bottom:20px;margin:0 10px;}*/
/*h2.test-info{font-size:1.6rem;font-weight:normal;padding:0 30px 20px;}*/
/*button.test-info{font-size:1.4rem;margin-top:40px;}*/

/*h1{font-size:2.4rem;font-weight:bold;text-align:center;}*/
/*.modal-dialog{max-width:1000px;}*/
/*.modal-body{padding:20px 50px;font-size:12pt;}*/
.answer-variants{
  padding:5px 0 15px 10px;
}
.result{font-size:1.3rem;text-decoration:underline;padding-right:10px;}
#sum_result{font-size:1.5rem;}
#questions{font-size:1.1rem;}
#answers{display:none;font-size:1.1rem;}
.action-buttons {
  color:#fff;
  border-radius:5px;
  padding:5px 10px;
  border:0;
}
.test-card {
  padding-top: 18px;
  padding-bottom: 33px;
  margin-top: 64px;
}
</style>

