<!--NEXT Раздел "Подвал"-->
<template>
<div class="col-md-12 muted s-container">
  <div class="row">
    <div class="col-md-6">
      <span>Гвоздовская Татьяна &copy; 2020</span>
      <div class="social">
        <a href="https://www.facebook.com/gvozdtatyana" target="_blank"><img src="icons/facebook_32.png"></a>
        <a href="https://www.instagram.com/mypsyholog/" target="_blank"><img src="icons/instagram_32.png"></a>
      </div>
    </div>
    <div class="col-md-6 confidential">
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#confidential_modal">
        Политика конфиденциальности
      </button>
    </div>
  </div>
  <ModalConfidential />
</div>
</template>
<script>
</script>
<style scoped>
  button, button:hover, button:active{background:none;border:none;color:#007bff;}
  button:hover{text-decoration:underline;}
  button:focus{outline:0!important;outline-color:transparent!important;outline-width:0!important;outline-style:none!important;box-shadow:0 0 0 0 rgba(0,123,255,0)!important;}
  .s-container{padding:30px 100px !important;}
  .social{margin:5px 0 10px;}
  .social img{margin-right:10px;}
  .confidential{text-align:right;padding-top:20px;}
</style>
