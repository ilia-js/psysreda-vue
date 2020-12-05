<!--NEXT Раздел "Начало"-->
<template>
  <div class="col-md-12 container">
    <div class="row">
      <div class="logo col-4">
        <img src="img/logo.png" class='img-fluid rounded'>
      </div>
      <div class="col-6 text-center">
        <h1>Как перестать думать только о других?<br/>Как научиться заботиться о себе?!</h1>
        <div class="shift text-center">
          <ul class="dash">
      		  <li>Если ты задаёшь себе эти вопросы, то значит ты готов к изменениям в своей жизни</li>
  			    <li>И мы сможем начать совместную работу</li>
          </ul>
         <h2>Психотерапевт<br/>Татьяна Гвоздовская</h2>
          <div class="online text-center">
            <h3>Предварительная консультация ОН-ЛАЙН</h3>
            <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#signup_modal">ЗАПИСАТЬСЯ</button>
          </div>
        </div>
      </div>
    </div>
    <ModalSignup />
  </div>
</template>
<style scoped>
  h1{margin:50px 0 30px;font-size:2.5rem;}
  h2{margin-left:-20px;font-size:1.5rem;font-weight:bold;}
  ul{padding-left:0px;margin-bottom:30px;}
  button{color:#fff;padding:10px 15px;font-size:1.1rem;margin-top:20px;}
  .container{padding:40px 0 !important;}
  .logo{margin:0 50px 0 0px;}
  .shift{padding-left:50px;}
  .warranties{width:50px;height:20px;margin-left:-20px;width:80px;height:20px;font-size:0.75rem;padding:0;}
  .online{margin-left:-20px;margin-top:50px;}
</style>
