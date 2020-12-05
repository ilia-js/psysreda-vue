<template>
  <div class="modal fade" id="signup_modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">
					<h1>Запись на предварительную консультацию</h1>
					<div id="request">
					  <div class="form-group">
					    <label for="name" >Ваше имя</label>
					    <input type="text" class="form-control" id="name" placeholder="Введите ваше имя">
					  </div>
					  <div class="form-group">
					    <label for="phone">Телефон</label>
					    <input type="text" class="form-control" id="phone" placeholder="Введите ваш телефон">
					  </div>
					  <div class="description">
					  	* Введённые имя и телефон используются только для связи с Вами
					  </div>
					  <div id="message">
				  	</div>
					  <button class="btn btn-primary" @click="send_request">Отправить заявку</button>
				  </div>
				  <div id="result"></div>
	       </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
	//import notify from 'notify'
	export default {
	  data: () => ({
	  	name: '',
	  	phone: ''
	  }),
	  created: function() {
	  },
	  methods: {
			send_request: function(){
				document.getElementById("message").innerHTML = ''
				let result = true
				let fields = [{ field: 'name', label: 'Ваше Имя' }, { field: 'phone', label: 'Телефон'}]
				fields.forEach((item) => {
						if (document.getElementById(item.field).value.trim() == '') {
							document.getElementById("message").style.display = "block"
							document.getElementById("message").innerHTML += 'Заполните поле "' + item.label + '"<br>'
							result = false
						}
					})
				if (result) {
					//Send notification to telegram
					this.$notify('Заявка на консультацию с сайта psysreda.ru\nДата заполнения: ' + (new Date().toLocaleDateString()) + '\nИмя: ' + document.getElementById('name').value + '\nТелефон: ' + document.getElementById('phone').value)
					document.getElementById("request").style.display = "none"
					document.getElementById("result").innerHTML = 'Ваша заявка успешно отправлена.<br> Обычное время обработки заявки - один рабочий день.'
				}
			},
	  }
	}
</script>
<style scoped>
	h1{font-size:2.4rem;font-weight:bold;text-align:center;padding-bottom:50px;}
	label{font-size:1rem;}
	.modal-dialog{max-width:1000px;}
	.modal-body{padding:20px 50px 40px;font-size:12pt;}
	.description{padding:10px 0 20px;}
	#message{display:none;padding:0 0 20px;color:#f00;font-weight:bold;}
	#result{font-size:1.2rem;}
</style>
