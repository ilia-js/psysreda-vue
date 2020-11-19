<template>
  <div class="modal fade" id="test_modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">
					<!--Next block: Questions-->
					<div id="questions">
						<h1>Тест на созависимость</h1>
						<div class="description">
							Вам предлагается 20 утверждений, которые нужно оценить применительно к себе.
							<br/><br/>Отвечайте, не думая слишком долго над каждым утверждением. Обычно первый ответ, который приходит в голову, является самым точным.
						</div>
						<ol class="test" v-for="(question, index) in questions" type="1" style="list-style-type:none;padding-left:15px;">
							<li>
								{{ index+1 }}. {{ question.content }}
								<div class="answer-variants">
									<input type="radio" @change="set_answer(index + 1, 1)" :name="'question_' + (index + 1)" style="margin-left:18px;"> 1 (никогда)<br/>
									<input type="radio" @change="set_answer(index + 1, 2)" :name="'question_' + (index + 1)" style="margin-left:18px;"> 2 (иногда)<br/>
									<input type="radio" @change="set_answer(index + 1, 3)" :name="'question_' + (index + 1)" style="margin-left:18px;"> 3 (часто)<br/>
									<input type="radio" @change="set_answer(index + 1, 4)" :name="'question_' + (index + 1)" style="margin-left:18px;"> 4 (почти всегда)
								</div>
							</li>		
						</ol>
						<input type="submit" value="Получить результат" id="show_result" @click="show_result" class="t-submit">
					</div>
					<!--Next block: Answers-->
					<div id="answers">
						<h1>Рузультаты теста</h1>
						<br><span class="result">Ваш результат:</span> <b id="sum_result"></b><br/><br/>
						Шкала оценки результатов:<br/>
						<ul class='shkala'>
							<li style='margin-top:5px;'>Более 60 баллов - очень высокая степень зависимых моделей</li>
							<li style='margin-top:5px;'>От 40 до 59 баллов - высокая степень зависимых моделей</li>
							<li style='margin-top:5px;'>От 30 до 39 баллов - средняя степень зависимых и/или контрзависимых моделей</li>
							<li style='margin-top:5px;'>От 21 до 29 баллов - очень мало зависимых и/или высокая степень контрзависимых моделей</li>
						</ul>
					</div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="close_test">Закрыть</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
	export default {
	  data: () => ({
			questions: [
				//1-5
				{content: "Я склонен (склонна) брать на себя ответственность за чувства и/или поведение других людей"},
				{content: "Я затрудняюсь идентифицировать свои чувства, такие как счастье,злость, смущение, уныние или возбуждение"},
				{content: "Мне тяжело выражать свои чувства"},
				{content: "Я испытываю страх или беспокойство при мысли о том, как другие отреагируют на мои чувства или поведение"},
				{content: "Я свожу к минимуму проблемы и отрицаю или изменяю правду о чувствах или поведении людей, с которыми общаюсь"},
				//6-10
				{content: "Мне трудно устанавливать или поддерживать тесные взаимоотношения"},
				{content: "Я боюсь быть отвергнутым (отвергнутой)"},
				{content: "Я стараюсь добиваться во всем совершенства и сужу себя строго"},
				{content: "Мне трудно принимать решения"},
				{content: "Я склонен (склонна) полагаться на мнения других, а не действовать по своему усмотрению"},
				//11-15
				{content: "Я склонен (склонна) ставить желания и потребности других людей на первый план"},
				{content: "Я склонен (склонна) ценить мнение других людей выше своего собственного"},
				{content: "Мое ощущение собственного достоинства идет извне, в зависимости от мнения или действий других людей, которые, как мне кажется, больше в этом разбираются"},
				{content: "Я нахожу, что тяжело быть уязвимым (уязвимой) и просить о помощи"},
				{content: "Я всегда подвергаюсь контролю или стремлюсь контролировать, и наоборот, всегда слежу за тем, чтобы никогда не оказаться ответственным (ответственной)"},
				//16-20
				{content: "Я слишком лоялен (лояльна) к другим, даже в том случае, когда эта лояльность не оправдывается"},
				{content: "У меня привычка рассматривать ситуации по принципу 'все или ничего'"},
				{content: "Я очень толерантен (толерантна) к непоследовательности и смешанным поручениям"},
				{content: "В моей жизни происходят эмоциональные кризисы и хаос"},
				{content: "Я стараюсь искать взаимоотношения там, где чувствую себя “нужным” (“нужной”), и пытаюсь затем сохранять их"}
			],
			answers: [],
			sum: 0
	  }),
	  created: function() {
	    
	  },
	  methods: {
			set_answer: function(index, answer){
				console.log("index: " + index + " answer: " + answer);
				this.answers[index]=answer;
			},
			show_result: function(){
				let sum = 0
				this.answers.forEach(function(item){
					sum += item
				})
				document.getElementById("sum_result").innerHTML = sum
				document.getElementById("answers").style.display = "block"
				document.getElementById("show_result").style.display = "none"
				document.getElementById("questions").style.display = "none"
				$('#test_modal').animate({ scrollTop: $('#test_modal .modal-content').height() }, 'slow');
				console.log(sum)
			},
			close_test: function(){
				//document.getElementById("sum_result").innerHTML = 0
				//document.getElementById("answers").style.display = "none"
				//document.getElementById("show_result").style.display = "block"
			}
	  }
	}
</script>
<style scoped>
	h1{font-size:2.4rem;font-weight:bold;text-align:center;}
	.modal-dialog{max-width:1000px;}
	.modal-body{padding:20px 50px;font-size:12pt;}
	.description{padding:30px 10px 10px;font-size:1.1rem;}
	.answer-variants{padding:5px 0 15px 0;}
	.result{font-size:1.3rem;text-decoration:underline;padding-right:10px;}
	#sum_result{font-size:1.5rem;}
	#questions{font-size:1.1rem;}
	#answers{display:none;font-size:1.1rem;}
	#show_result{color:#fff;border-radius:5px;padding:5px 10px;border:0;background-color:#f2354b;}
</style>
