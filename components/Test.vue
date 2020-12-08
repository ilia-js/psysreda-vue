<!--NEXT Раздел "Тест на созависимость"-->
<template>
<div class="s-container col-md-12">
  <div>
    <h1 class="text-center">Нужна ли тебе работа</br/>с со-зависимостью?</h1>
    <h2 class="text-center">Этот легкий бесплатный тест поможет тебе<br/>определить степень созависимости</h2>
    <p class="text-center">
    	<button type="button" class="btn btn-danger" data-toggle="modal" data-target="#test_modal" data-backdrop="static" data-keyboard="false">Пройти ТЕСТ</button>
    </p>
  </div>
  <ModalTest />
</div>
</template>
<style scoped>
	h1{font-size:2.7rem;font-weight:bold;padding-bottom:20px;margin:0 10px;}
	h2{font-size:1.6rem;font-weight:normal;padding:0 30px 20px;}
	button{font-size:1.4rem;margin-top:40px;}
</style>