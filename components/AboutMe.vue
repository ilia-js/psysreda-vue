<!--NEXT Раздел "Обо мне"-->
<template>
	<div class="col-12 s-container">
		<div class="row">
			<div class="col-12 col-lg-1"></div>
		  <div class="col-12 col-lg-5">
		    <h1 class="s-title">Обо мне</h1>
		    <h1 class="s-title">Гвоздовская Татьяна</h1>
		    <div class="social">
		      <a href="https://www.facebook.com/gvozdtatyana" target="_blank"><img src="icons/facebook_32.png"></a>
		      <a href="https://www.instagram.com/mypsyholog/" target="_blank"><img src="icons/instagram_32.png"></a>
		    </div>
		    <div class="list">
			    <ul class="square">
			      <li>15 лет опыта в психологии</li>
			      <li>Психолог-преподаватель психологии</li>
			      <li>Сертифицированный гештальт-консультант, арт-терапевт</li>
			      <li>Автор тренингов и обучающих программ по работе с со-зависимостью и сексуальными дисфункциями в арт-терапии</li>
			      <li>Опыт ведения групп по работе с со-зависимым поведением</li>
			      <li>Личный опыт избавления от со-зависимости</li>
			      <li>Опыт 12-и шаговых программ</li>
			    </ul>
		    </div>
		    <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#more_about_me" aria-expanded="false" aria-controls="collapseExample">
		      Узнай о моём подходе
		    </button>
		    <div class="collapse" id="more_about_me">
		      <div class="card card-body">
			      Многие, приходя в терапию, ожидают конкретных советов и рекомендаций: как правильно вести себя, что сделать, чтобы измениться самому или изменить партнера. Так происходит, если Вы у терапевта впервые. 
			      <br><br>
						Мой же подход заключается в том, чтобы сопровождать Вас в путешествии познания себя, понимания как Вы создаете взаимоотношения, какова ваша роль в отношениях, чтобы Вы самостоятельно оценили свои действия и приняли решение. Своё решение!
						<br><br>
						На протяжении всей терапии у Вас будет поддержка, и когда трудно и когда легко. Это очень важно, так как со-зависимым сложнее проживать радость, чем боль. Боль привычнее. 
						<br><br>
						Мой опыт ожидания исцелиться отношениями с мужчиной оказался непосильной ношей, которая разрушает, а не способствует их гармоничному развитию. Ведь такие отношения для любви. А для исцеляющих отношений предназначен терапевт, который специально подготовлен для таких взаимоотношений.
						<br><br>
						Вы будете получать поддержку до тех пор, пока не почувствуете, что можете идти дальше самостоятельно.
						Вы получите помощь от квалифицированного терапевта, который не проживет за вас жизнь, а направит в нужном направлении.
						Вы “вернете себя” и почувствуйте опору внутри.
						<br><br>
						Приглашаю сделать осознанный шаг к новой жизни!
		      </div>

		   </div>            
		  </div>
		  <div class="col-12 col-lg-4">
		  	<img src="img/tanya.png" class='img-fluid'>
	  	</div>
		</div>
		</div>
	</div>
</template>
<style scoped>
	h1{padding:0 20px;}
	h1:nth-child(1){padding-top:50px;}
	h1:nth-child(2){font-size:1.5rem;}
	ul{padding-left:35px;}
	button{margin:15px 20px 30px;}
	.list{padding:0 20px;}
	.social{margin-bottom:10px;padding:0 20px;}
	.social img{margin-right:10px;}
	.s-title{text-align:left;}
	.img-fluid{margin:0 20px;border-radius:25px;display:inline-block;}
	#more_about_me{padding:20px;}
	@media (max-width: 500px) {
		.img-fluid{width:90%;}
	}
</style>	