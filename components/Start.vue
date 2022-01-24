<!--NEXT Раздел "Начало"-->
<template>
  <v-row class="mt-8 flex-row-reverse">
    <v-col lg="6">
      <v-card class="d-inline-block pt-3 pr-6 mt-6" min-width="480px" min-height="320" max-width="600">
        <v-card-title class="psysreda-card-header">
          Курс "Океан Эмоций"
        </v-card-title>
        <v-card-text class="text-center custom-text-1 course-card-text">
          <v-row>
            <v-col class="pl-12">
              <v-img
                src="img/ocean.jpg"
                max-width="170"
                class="rounded-img-2 img-fluid"
              />
            </v-col>
            <v-col class="pt-6 pl-11">
              <v-btn small class="ml-0 mt-0 py-2 psysreda-orange-button d-block btn-fix-width-1">
                О КУРСЕ
              </v-btn>
              <v-btn small class="ml-0 mt-8 py-2 psysreda-blue-button d-block btn-fix-width-1">
                РАСПИСАНИЕ
              </v-btn>
              <v-btn small class="ml-0 mt-8 py-2 psysreda-red-button d-block btn-fix-width-1">
                СТОИМОСТЬ
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <Test/>
    </v-col>
    <v-col lg="6" class="text-right pr-16">
      <div/>
      <v-card class="d-inline-block pr-6 mt-6 pt-2" min-width="480px" min-height="680" max-width="600">
        <v-card-title class="psysreda-card-header">
          <p class="mb-2 py-0">
            Как перестать думать только о других?
            <br/>Как научиться заботиться о себе?!
          </p>

          <v-img
            src="img/logo.png"
            max-width="300px"
            class="rounded-img-1 mt-6 d-inline-block"
          />

        </v-card-title>
        <v-card-text class="text-center pb-10">
<!--          <h1>Татьяна Гвоздовская</h1>-->
<!--          <h2 class="mt-4">Психотерапевт</h2>-->
          <p class="text-center mb-0 custom-text-1">
            Если ты задаёшь себе эти вопросы,<br/> то значит ты готов к изменениям
            <br/>и мы сможем начать совместную работу
          </p>
          <div>
            <v-btn class="py-2 psysreda-red-button">
              Связаться ОН&#8209;ЛАЙН
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
      <div class="shift text-right">
      </div>
    </v-col>
    <ModalSignup />
  </v-row>

</template>
<style lang="scss" scoped>
h1{
  font-size:2.6rem;
  font-weight: normal;
  color: #555;
}
h2{
  font-size:1.7rem;
  font-weight: normal;
  color: #666;
}

.rounded-img-1 {
  border-radius: 142px;
}
.rounded-img-2 {
  border-radius: 32px;
}
//h2{margin-left:-20px;font-size:1.5rem;font-weight:bold;}
ul{padding-left:0px;margin-bottom:30px;}
button{color:#fff;padding:10px 15px;font-size:1.1rem;margin-top:20px;}
.shift{padding-left:50px;}
.online{margin-left:-20px;margin-top:50px;}
.none{list-style-type: none}
.course-card-text {
  margin-top: 25px;
  margin-bottom: 48px;
}
</style>
<script>
import Test from './Test'
export default {
  components: { Test }
}
</script>
