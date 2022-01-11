<!--NEXT Раздел "Начало"-->
<template>
  <v-row style="">
    <v-col lg="4">
      <img src="img/logo.png" class='img-fluid' style="border-radius:25px;">
    </v-col>
    <v-col lg="8" class="text-right pr-16">
      <h1>Как перестать думать только о других?</h1>
      <h1 class="second">Как научиться заботиться о себе?!</h1>
      <div class="shift text-right">
        <ul class="none">
          <li>Если ты задаёшь себе эти вопросы, значит ты готов к изменениям</li>
          <li>И мы сможем начать совместную работу</li>
        </ul>
        <h2>Психотерапевт<br/>Татьяна Гвоздовская</h2>
        <div class="online text-right">
          <h3>Предварительная консультация ОН&#8209;ЛАЙН</h3>
          <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#signup_modal">ЗАПИСАТЬСЯ</button>
        </div>
      </div>
    </v-col>
    <ModalSignup />
  </v-row>
  
</template>
<style scoped>
  h1{margin:50px 0 0px;font-size:2.5rem;}
  h1.second{margin:0 0 30px;font-size:2.1rem;}
  h2{margin-left:-20px;font-size:1.5rem;font-weight:bold;}
  ul{padding-left:0px;margin-bottom:30px;}
  button{color:#fff;padding:10px 15px;font-size:1.1rem;margin-top:20px;}
  .container{padding:40px 0 !important;}
  .shift{padding-left:50px;}
  .warranties{width:50px;height:20px;margin-left:-20px;width:80px;height:20px;font-size:0.75rem;padding:0;}
  .online{margin-left:-20px;margin-top:50px;}
  .none{list-style-type: none}
</style>
