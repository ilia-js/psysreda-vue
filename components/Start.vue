<!--NEXT Раздел "Начало"-->
<template>
  <div class="col-md-12 b-odd i-7 goal-start">
    <div class="row">
      <div class="col-4 i-3">
        <img src="img/logo.jpg" class='img-fluid logo rounded'>
      </div>
      <div class="col-6">
        <h1>Как перестать думать только о других?<br/>Как научиться заботиться о себе?!</h1>
        <div class="shift">
          <ul class="dash">
      		  <li>Если ты задаёшь себе эти вопросы, то значит ты готов к изменениям в своей жизни.</li>
  			    <li>И мы сможем начать совместную работу.</li>
          </ul>
         <h2>Психотерапевт<br/>Татьяна Гвоздовская</h2>
          <div class="online">
            <h3>Консультации ОН-ЛАЙН</h3>
            * Ты получаешь скидку 15% на первую консультацию, если записываешься прямо сейчас<br/>
            <button type="button" class="btn btn-danger i-2 bt-1 t-4" @click="signup_modal=true">ЗАПИСАТЬСЯ</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.goal-start h1{margin:50px 0 30px;}
.goal-start .shift{padding-left:50px;}
.goal-start ul{padding-left:0px;margin-bottom:30px;}
.goal-start h2{margin-left:-20px;font-size:1.5rem;font-weight:bold;}
.goal-start .warranties{width:50px;height:20px;margin-left:-20px;width:80px;height:20px;font-size:0.75rem;padding:0;}
.goal-start .online{margin-left:-20px;margin-top:50px;}
</style>
