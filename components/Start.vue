<!--NEXT Раздел "Начало"-->
<template>
  <v-row class="mt-8">
    <v-col lg="4">
      <v-card class="d-inline-block pt-3 pr-6 mt-6" min-width="600px">
        <v-card-title class="d-block text-right">
          Нужна ли мне работа с созависимостью?
        </v-card-title>
        <v-card-text class="text-right">
          <v-btn>Пройти бесплатный тест</v-btn>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col lg="8" class="text-right pr-16">
      <div/>
      <v-card class="d-inline-block pr-6 mt-6 pt-2" min-width="480px">
        <v-card-title class="d-block text-center">
          <p class="mt-2 mb-2 py-0" style="font-size: 23px; color: #444; line-height: 33px;">
            Как перестать думать только о других?
            <br/>Как научиться заботиться о себе?!
          </p>

          <v-img
            src="img/logo.png"
            max-width="300px"
            class="tanya-logo mt-6 d-inline-block"
          />

        </v-card-title>
        <v-card-text class="text-center pb-10">
<!--          <h1>Татьяна Гвоздовская</h1>-->
<!--          <h2 class="mt-4">Психотерапевт</h2>-->
          <p class="text-center mb-0" style="font-size: 17px;line-height: 17px;color:#666;">
            Если ты задаёшь себе эти вопросы,<br/> то значит ты готов к изменениям
            <br/>и мы сможем начать совместную работу
          </p>
          <div>
            <v-btn color="#dc3545" middle class="py-2" style="color: #fff">Связаться ОН&#8209;ЛАЙН</v-btn>
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

  .tanya-logo {
    border-radius: 102px;
  }
  //h2{margin-left:-20px;font-size:1.5rem;font-weight:bold;}
  ul{padding-left:0px;margin-bottom:30px;}
  button{color:#fff;padding:10px 15px;font-size:1.1rem;margin-top:20px;}
  .shift{padding-left:50px;}
  .online{margin-left:-20px;margin-top:50px;}
  .none{list-style-type: none}
</style>
