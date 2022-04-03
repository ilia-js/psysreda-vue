<template>
  <SimpleCard>
    <template v-slot:title>
      Нужна ли мне работа<br/> с со-зависимостью?
    </template>
    Этот легкий бесплатный тест<br/> поможет тебе
    определить<br/> степень созависимости
    <v-dialog
      v-model="showTest"
      width="600"
      persistent
    >
      <template v-slot:activator="{ on, attrs }">
        <div class="text-center">
          <v-btn class="mt-8 psysreda-red-button" v-bind="attrs" v-on="on">
            ПРОЙТИ ТЕСТ
          </v-btn>
        </div>
      </template>
      <v-card>
        <v-card-title class="pt-5 pb-4">
          Тест на созависимость
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="pt-6 pb-8">
          <div v-if="!isTestFinished">
            <div v-if="currentQuestionIndex === null">
              <p>Вам предлагается 20 утверждений, которые нужно оценить применительно к себе.</p>
              <p>Не думайте слишком долго над каждым утверждением.</p>
              <p>Обычно первый ответ, который приходит в голову - <i>является самым точным</i>.
              </p>
              <v-btn
                type="submit"
                @click="startTest()"
                class="mt-4 psysreda-pink-button"
                depressed
                small
              >
                Начать тест
              </v-btn>
            </div>
            <div v-else>
              <v-progress-linear
                v-model="percentAnswered"
                height="22"
                color="#ddd"
                style="color: black"
              >
                Вопрос {{ currentQuestionIndex + 1 }} из {{ questionsNumber }}
              </v-progress-linear>
              <div class="current-question mt-6">
                {{ currentQuestion.content }}
              </div>
              <v-radio-group v-model="currentAnswer" class="pt-0 pb-2 pl-4">
                <v-radio label="никогда" value="1"/>
                <v-radio label="иногда" value="2"/>
                <v-radio label="часто" value="3"/>
                <v-radio label="почти всегда" value="4"/>
              </v-radio-group>
              <v-btn
                v-if="currentQuestionIndex < questionsNumber - 1"
                type="submit"
                @click="nextQuestion()"
                class="psysreda-pink-button mb-2"
                :disabled="currentAnswer === null"
                small
                depressed
              >
                Далее
              </v-btn>
              <v-btn
                v-else
                type="submit"
                id="show_result"
                @click="processResult"
                :disabled="currentAnswer === null"
                :class="`${currentAnswer !== null && 'psysreda-pink-button'}`"
                small
                depressed
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
              <li style='margin-top:5px;'>От <b>30 до 39 баллов</b> - средняя степень зависимых и/или контрзависимых
                моделей
              </li>
              <li style='margin-top:5px;'>От <b>21 до 29 баллов</b> - очень мало зависимых и/или высокая степень
                контрзависимых моделей
              </li>
            </ul>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            @click="showTest = false"
            small depressed
            class="my-2"
          >
            Закрыть
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </SimpleCard>
</template>
<script>
import SimpleCard from '../SimpleCard'

export default {
  name: 'TestingCard',
  components: { SimpleCard },
  data: () => ({
    questions: [
      { content: 'Я склонен/склонна брать на себя ответственность за чувства и/или поведение других людей' },
      { content: 'Я затрудняюсь идентифицировать свои чувства, такие как счастье, злость, смущение, уныние или возбуждение' },
      { content: 'Мне тяжело выражать свои чувства' },
      { content: 'Я испытываю страх или беспокойство при мысли о том, как другие отреагируют на мои чувства или поведение' },
      { content: 'Я свожу к минимуму проблемы и отрицаю или изменяю правду о чувствах или поведении людей, с которыми общаюсь' },
      { content: 'Мне трудно устанавливать или поддерживать тесные взаимоотношения' },
      { content: 'Я боюсь быть отвергнутым (отвергнутой)' },
      { content: 'Я стараюсь добиваться во всем совершенства и сужу себя строго' },
      { content: 'Мне трудно принимать решения' },
      { content: 'Я склонен (склонна) полагаться на мнения других, а не действовать по своему усмотрению' },
      { content: 'Я склонен (склонна) ставить желания и потребности других людей на первый план' },
      { content: 'Я склонен (склонна) ценить мнение других людей выше своего собственного' },
      { content: 'Мое ощущение собственного достоинства идет извне, в зависимости от мнения или действий других людей, которые, как мне кажется, больше в этом разбираются' },
      { content: 'Я нахожу, что тяжело быть уязвимым (уязвимой) и просить о помощи' },
      { content: 'Я всегда подвергаюсь контролю или стремлюсь контролировать, и наоборот, всегда слежу за тем, чтобы никогда не оказаться ответственным (ответственной)' },
      { content: 'Я слишком лоялен (лояльна) к другим, даже в том случае, когда эта лояльность не оправдывается' },
      { content: 'У меня привычка рассматривать ситуации по принципу \'все или ничего\'' },
      { content: 'Я очень толерантен (толерантна) к непоследовательности и смешанным поручениям' },
      { content: 'В моей жизни происходят эмоциональные кризисы и хаос' },
      { content: 'Я стараюсь искать взаимоотношения там, где чувствую себя “нужным” (“нужной”), и пытаюсь затем сохранять их' }
    ],
    answers: [],
    total: 0,
    currentQuestionIndex: null,
    isAnswered: false,
    showTest: false,
    isTestFinished: false,
    currentAnswer: null
  }),
  created () {
  },
  computed: {
    questionsNumber () {
      return this.questions.length
    },
    currentQuestion () {
      return this.questions[this.currentQuestionIndex]
    },
    percentAnswered () {
      return Math.ceil((this.currentQuestionIndex + 1) * (100 / this.questionsNumber))
    }
  },
  methods: {
    startTest () {
      this.currentQuestionIndex = 0
    },
    nextQuestion () {
      this.isAnswered = false
      this.currentQuestionIndex++
      this.total += Number(this.currentAnswer)
      this.currentAnswer = null
    },
    processResult () {
      this.total += Number(this.currentAnswer)
      this.isTestFinished = true
      let text = 'Тест пройден!\n'
      text += 'Дата заполнения: ' + this.$moment().format('DD.MM.YYYY') + '\n'
      text += 'Сумма теста: ' + this.total
      if (!this.$helpers.isDevOrTest()) {
        this.$telegram(text)
      } else {
        console.log('Список ответов:', this.answers)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep {
  .simple-card-text {
    padding-top: 8px !important;
    font-size: 17px;
    color: rgba(0, 0, 0, 0.8) !important;
  }

  .v-label {
    color: #111 !important;
    font-style: italic;
  }
}

p {
  margin-bottom: 12px !important;
}

.v-card__text {
  font-size: 17px;
  color: rgba(0, 0, 0, 0.8) !important;
}

.current-question {
  color: #000;
}
</style>
