<template>
  <SimpleCard>
    <template v-slot:title>
      АРТ-ТЕРАПЕВТИЧЕСКАЯ <span class="text-no-wrap">ГРУППА</span><br />“ВЕСНА
      ТВОЕЙ ДУШИ”
    </template>
    <v-row class="justify-space-around">
      <v-col>
        <v-img
          src="@/assets/images/art-therapy.jpg"
          max-width="250"
          class="rounded-2 img-fluid mx-auto"
        />
      </v-col>
      <v-col class="pt-9 pl-13">
        <div class="d-inline-block">
          <div class="text-right">
            <v-btn
              class="black-gray-light-button ml-0 mt-0 py-2"
              @click="openDialog('audience')"
              depressed
              small
            >
              Для кого?
            </v-btn>
            <div />
            <v-btn
              class="black-gray-light-button ml-0 mt-8 py-2"
              @click="openDialog('process')"
              depressed
              small
            >
              Как проходит?
            </v-btn>
            <div />
            <v-btn
              class="black-gray-light-button ml-0 mt-8 py-2"
              @click="openDialog('results')"
              depressed
              small
            >
              Что вы получите?
            </v-btn>
            <div />
            <v-btn
              small
              class="black-gray-button ml-0 mt-12"
              @click="openDialog('place_price')"
              depressed
            >
              Сколько стоит? Где и когда?
            </v-btn>
            <div />
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn
          class="psysreda-red-button mt-8"
          @click="open"
          v-html="lang.buttonEnrollArtTherapyGroup"
        />
      </v-col>
    </v-row>
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
        <v-card-title class="pt-0">
          {{ items.find((x) => x.name === chosenItemName).label }}
        </v-card-title>
        <v-card-text class="pt-5 pb-7">
          <div v-if="chosenItemName === 'audience'">
            <ul>
              <li>
                Для тех, кто удерживает много чувств и переживаний; обиды,
                страха, тревожащих мыслей, кто переполнен болью и ищет пути
                вынести их наружу.
              </li>
              <li>
                Или тех, кому сложно впустить в свою жизнь что-то новое, принять
                что-то, что повлияет на вашу жизнь, даже если перемен очень
                хочется. Например перемен в отношениях или перемен в их
                отсутствии.
              </li>
              <li>
                Кто “ощущает мир кожей”. Открыт для внешних воздействий и не
                находит в себе сил противостоять, раним и ранен
                упреками,оценкой,недоверием,предательством, расставанием.
              </li>
              <li>
                Кому одиноко или слишком неуютно с другими Кто живет в
                депрессии, отчаянии, апатии или раздражении Ощущает потребность
                в том, чтобы лучше себя понимать и жить с собой в согласии.
              </li>
            </ul>
          </div>
          <div v-if="chosenItemName === 'process'">
            <ul>
              <li>
                На группе мы будем формулировать запрос исходя из того, что с
                вами происходит. Исследовать, как устроена ваша сложность, ваше
                переживание.
              </li>
              <li>
                Искать что вам мешает, а что помогает ощущать себя свободнее и
                счастливее.
              </li>
              <li>
                Создавать метафорически через образы и рисунок возможности для
                перемен в жизни.
              </li>
              <li>
                Взращивать внутренние опоры, искать ресурсы для хорошей жизни.
              </li>
            </ul>
            <ul>
              <li>
                Мы будем использовать художественные средства как инструмент
                психотерапии; бумагу, краски, мелки, карандаши.
              </li>
              <li>
                <b
                  >При этом, не нужно иметь никаких художественных навыков!!!</b
                >
              </li>
              <li>
                В процессе вы не учитесь рисовать, вы учитесь узнавать и
                понимать себя, действовать по новому и выражать то, что невидимо
                для вас и требует внимания.
              </li>
            </ul>
          </div>
          <div v-if="chosenItemName === 'results'">
            <ul>
              <li>
                Я очень надеюсь, что участие в группе принесет вам много
                открытий о вас и ваших отношениях.
              </li>
              <li>
                Поможет совершить переход из текущего состояния в желаемое.
              </li>
              <li>
                Поддержит вас следовать своему пути- прямо и с уверенностью,
                опираясь на себя и этот мир.
              </li>
              <li>Прожить то, что не прожито.</li>
              <li>
                Посмотреть на свою сложность в новом ракурсе и найти свой способ
                решения
              </li>
            </ul>
          </div>
          <div v-if="chosenItemName === 'place_price'">
            <ul>
              <li><b>16-17 апреля</b> 2022 года (суббота, воскресение)</li>
              <li>г. Тбилиси, Психологический центр <b>“Зебра”</b></li>
              <li>
                <b>150 лари</b> за два дня при оплате до 14 апреля 2022<br />
                170 лари при оплате с 15 апреля
              </li>
            </ul>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
    <ContactDialog
      v-model="showSignUp"
      :title="lang.titleEnrollArtTherapyGroup"
      :button-text="lang.buttonEnrollArtTherapyGroupApprove"
      :type="clientConnectionTypes.enrollArtTherapyGroup"
    />
  </SimpleCard>
</template>

<script>
import SimpleCard from "@/components/SimpleCard";
import { formValidators } from "@/helpers/formValidators";
import { notifySiteOwner } from "@/api/api";
import { format } from "date-fns";
import { DATE_TIME_FORMAT } from "@/settings/dates";
import { isTestEnvironment } from "@/helpers";
import ContactDialog from "@/components/dialogs/ContactDialog";
import { lang } from "@/settings/lang";
import { clientConnectionTypes } from "@/settings";

const initData = {
  name: "",
  phone: "",
  connector: "",
};

export default {
  name: "ArtTherapyGroupCard",
  components: { SimpleCard, ContactDialog },
  data() {
    return {
      show: false,
      showSignUp: false,
      valid: false,
      formData: { ...initData },
      status: "init",
      formValidators,
      items: [
        {
          name: "audience",
          label: "Для кого эта группа?",
        },
        {
          name: "process",
          label: "Как проходит группа?",
        },
        {
          name: "results",
          label: "Что вы получите?",
        },
        {
          name: "place_price",
          label: "Сколько стоит, где и когда?",
        },
      ],
      chosenItemName: null,
      lang,
      clientConnectionTypes,
    };
  },
  computed: {
    isTestEnvironment,
  },
  methods: {
    openDialog(name) {
      this.chosenItemName = name;
      this.show = true;
    },
    open() {
      this.showSignUp = true;
    },
    async contact() {
      this.$refs.form.validate();
      if (!this.valid) {
        return;
      }
      let text = "Кто-то запросил запись на арт-терапевтическую группу!\n";
      text +=
        "Дата и время запроса:\n" + format(new Date(), DATE_TIME_FORMAT) + "\n";
      text += "Имя:\n" + this.formData.name;
      text += "\nТелефон:\n" + this.formData.phone;
      text += "\nСпособ связи:\n" + this.formData.connector;
      await notifySiteOwner(text);
      this.status = "data_sent";
    },
    close() {
      this.showSignUp = false;
    },
    cancel() {
      this.close();
      this.formData = { ...initData };
      setTimeout(() => {
        this.status = "init";
      }, 300);
    },
  },
};
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

::v-deep {
  .v-dialog {
    border-radius: 25px !important;
  }
}
</style>
