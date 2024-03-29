<template>
  <SimpleCard>
    <template v-slot:title>
      Нужна ли мне работа<br />
      с со-зависимостью?
    </template>
    Этот <b>легкий</b> бесплатный <b>тест</b><br />
    поможет тебе определить<br />
    степень созависимости
    <v-dialog v-model="show" width="600" persistent>
      <template v-slot:activator="{ on, attrs }">
        <div class="text-center">
          <v-btn class="mt-8 psysreda-red-button" v-bind="attrs" v-on="on">
            {{ status === "not_started" ? "ПРОЙТИ ТЕСТ" : "" }}
            {{ status === "in_progress" ? "ВЕРНУТЬСЯ К ТЕСТУ" : "" }}
            {{ status === "finished" ? "ПОСМОТРЕТЬ РЕЗУЛЬТАТ" : "" }}
          </v-btn>
        </div>
      </template>
      <v-card class="px-2">
        <v-card-title class="pt-5 pb-4 dialog-title">
          Тест на созависимость
          <div v-if="isTestEnvironment" class="test-environment">
            ::: Test environment :::
          </div>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="pt-6 pb-8">
          <div v-if="!isTestFinished">
            <div v-if="currentQuestionIndex === null">
              <p>
                Вам предлагается 20 утверждений, которые нужно оценить
                применительно к себе.
              </p>
              <p>Не думайте слишком долго над каждым утверждением.</p>
              <p>
                Обычно первый ответ, который приходит в голову -
                <i>является самым точным</i>.
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
                <v-radio label="никогда" value="1" />
                <v-radio label="иногда" value="2" />
                <v-radio label="часто" value="3" />
                <v-radio label="почти всегда" value="4" />
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
          <div class="test-results" v-else>
            <div class="your-result">
              <div>Ваш результат:</div>
              <b>{{ total }}</b>
            </div>
            <div class="scale">Шкала оценки результатов:</div>
            <ul>
              <li>
                Более <b>60 баллов</b> - очень высокая степень зависимых моделей
              </li>
              <li>
                От <b>40 до 59 баллов</b> - высокая степень зависимых моделей
              </li>
              <li>
                От <b>30 до 39 баллов</b> - средняя степень зависимых и/или
                контрзависимых моделей
              </li>
              <li>
                От <b>21 до 29 баллов</b> - очень мало зависимых и/или высокая
                степень контрзависимых моделей
              </li>
            </ul>
            <v-btn
              class="psysreda-red-button mt-6"
              @click="openContactDialog"
              v-html="lang.buttonContact"
            />
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            @click="close"
            v-if="!isTestFinished"
            small
            depressed
            class="my-2"
          >
            Закрыть
          </v-btn>
          <v-btn
            @click="again"
            v-if="isTestFinished"
            small
            depressed
            class="my-2"
          >
            ПРОЙТИ ЕЩЁ РАЗ
          </v-btn>
          <v-btn
            @click="close"
            v-if="isTestFinished"
            small
            depressed
            class="psysreda-pink-button my-2 ml-5"
          >
            Готово
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <ContactDialog
      v-model="showContactDialog"
      :title="lang.titleContact"
      :button-text="lang.buttonContactApprove"
      :type="clientConnectionTypes.connectOnlineAfterTest"
    />
  </SimpleCard>
</template>
<script>
import SimpleCard from "@/components/SimpleCard";
import { QUESTIONS } from "@/data/testing";
import { isTestEnvironment } from "@/helpers";
import { notifySiteOwner } from "@/api/api";
import { format } from "date-fns";
import { DATE_TIME_FORMAT } from "@/settings/dates";
import ContactDialog from "@/components/dialogs/ContactDialog";
import { lang } from "@/settings/lang";
import { clientConnectionTypes } from "@/settings";

export default {
  name: "TestingCard",
  components: { SimpleCard, ContactDialog },
  data() {
    return {
      questions: [],
      total: 0,
      currentQuestionIndex: null,
      show: false,
      isTestFinished: false,
      currentAnswer: null,
      status: "not_started",
      showContactDialog: false,
      lang,
      clientConnectionTypes,
    };
  },
  created() {},
  beforeMount() {
    if (this.isTestEnvironment) {
      this.questions = [QUESTIONS[0]];
    } else {
      this.questions = QUESTIONS;
    }
  },
  computed: {
    questionsNumber() {
      return this.questions.length;
    },
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    },
    percentAnswered() {
      return Math.ceil(
        (this.currentQuestionIndex + 1) * (100 / this.questionsNumber)
      );
    },
    isTestEnvironment,
  },
  methods: {
    startTest() {
      this.currentQuestionIndex = 0;
    },
    nextQuestion() {
      this.currentQuestionIndex++;
      this.total += Number(this.currentAnswer);
      this.currentAnswer = null;
    },
    async processResult() {
      this.total += Number(this.currentAnswer);
      this.isTestFinished = true;
      let text = "Кто-то заполнил тест на сайте!\n";
      text +=
        "Дата и время заполнения:\n" +
        format(new Date(), DATE_TIME_FORMAT) +
        "\n";
      text += "Сумма теста:\n" + this.total;
      await notifySiteOwner(text);
    },
    close() {
      this.show = false;
      if (this.currentQuestionIndex !== null) {
        this.status = "in_progress";
      }
      if (this.isTestFinished) {
        this.status = "finished";
      }
    },
    again() {
      // this.show = false
      setTimeout(() => {
        this.status = "not_started";
        this.isTestFinished = false;
        this.currentQuestionIndex = null;
        this.total = 0;
        this.currentAnswer = null;
      }, 300);
    },
    openContactDialog() {
      this.showContactDialog = true;
    },
  },
};
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

  .v-dialog {
    border-radius: 25px;
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

.test-results {
  .your-result {
    display: flex;
    margin-bottom: 20px;
    font-size: 16px;
    font-family: Tahoma, serif;

    b {
      padding-left: 10px;
      font-size: 18px;
    }
  }

  .scale {
    font-size: 1em;
  }

  ul {
    padding-left: 0;
  }

  li {
    margin-top: 10px;
    list-style-type: none;
    padding-left: 0;

    b {
      font-family: Tahoma, serif;
      font-size: 0.9em;
    }
  }

  .dialog-title {
    position: relative;
  }
}
</style>
