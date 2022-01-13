<!--NEXT Раздел "Начало"-->
<template>
  <v-row class="mt-8">
    <v-col lg="4">
      <v-card class="d-inline-block pt-6 pl-12 pr-6 mt-6">
        <v-card-title class="d-block text-right">
          Как перестать думать только о других?
        </v-card-title>
        <v-card-text class="text-right">
          <div class="">
            <h3>Связаться со мной ОН&#8209;ЛАЙН</h3>
            <!--            <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#signup_modal">ЗАПИСАТЬСЯ</button>-->
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col lg="8" class="text-right pr-16">
      <div/>
      <v-card class="d-inline-block pt-6 pr-6 mt-6">
        <v-card-text class="text-center">
          <h1>Татьяна Гвоздовская</h1>
          <h2 class="mt-4">Психотерапевт</h2>
          <v-img
            src="img/logo.png"
            max-width="300px"
            class="tanya-logo mt-6 d-inline-block"
          />
          <p class="mt-4 mb-2 py-0">Как научиться заботиться о себе?!</p>
          <ul class="none">
            <li>Если ты задаёшь себе эти вопросы, значит ты готов к изменениям</li>
            <li>И мы сможем начать совместную работу</li>
          </ul>
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
    border-radius: 12px;
  }
  //h2{margin-left:-20px;font-size:1.5rem;font-weight:bold;}
  ul{padding-left:0px;margin-bottom:30px;}
  button{color:#fff;padding:10px 15px;font-size:1.1rem;margin-top:20px;}
  .shift{padding-left:50px;}
  .online{margin-left:-20px;margin-top:50px;}
  .none{list-style-type: none}
</style>
