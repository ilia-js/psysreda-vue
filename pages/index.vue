<template>
  <!--NEXT Цель "Что говорят мои клиенты"-->
  <div class="col-md-12 b-even goal-clients">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <h1 class="text-center mb-5">Истории моих клиентов</h1>
          <div class="row">
            <div class="col-md-6">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/O1gkycoOydY"></iframe>
              </div>
            </div>
            <div class="col-md-6">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/UjaH_JYkpE4"></iframe>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="card">
                <div class="content">
                  <span class="title">Алёна, 35 лет</span>
                  <p>
                    В апреле 2017 года я обратилась за психологической помощью и поддержкой к Татьяне Гвоздовской. В то время я переживала
                    очень непростой период в своей жизни - переезд в другую страну, свадьба с иностранцем, новая работа.
                  </p>
                  <template v-if="reviews[0].content">
                    <p>Было столько всего нового и непривычного мне,
                    что я сама не справлялась с эмоциями, были постоянные ссоры с мужем, я часто плакала, хотелось всё бросить и вернуться назад.</p>
                    <p>Поэтому я решила помочь самой себе, чтобы не сойти с ума, я обратилась к Тане. На сессиях была очень доверительная и безопасная атмосфера,
                    которая помогла мне раскрыться, оглядеться внутри себя, расставить свои границы и приоритеты, увидеть свои страхи.</p>
                    <p>Терапия - это не то, что тебя погладят по головке и дадут конфетку, нет, это работа 24 на 7, когда хочется уже сказать себе - хватит,
                    больше не хочу чувствовать и думать, но нет - процесс идёт, и такой кайф, когда я начала видеть причины и следствия своих
                    переживаний и поступков, иногда хотелось сказать - бе, это не моё, это не я, но потом это "бе" становилось родным и близким, так приходит
                    принятие себя со всеми белыми и чёрными пятнами.</p>
                    <p>Был период, когда мне казалось, ну теперь я разобралась со всем, и хотелось закончить терапию,
                    но с этого, пожалуй, началась самая серьёзная работа. Я научилась прислушиваться к себе, слышать себя и доверять себе.</p>
                    <p>Для меня терапия с Таней - это знакомство с самой собой без той шулухи, которую нам навязывают социумом, а родители
                    с детства вбивают в голову, принятие себя, не смотря на то, что кому-то это не нравится или не принято. Самое простое и самое сложное для меня - 
                    это быть честной с самой собой.</p>
                  </template>
                  </p>
                </div>
                <div class="action">
                  <a href="#" @click="open_card(1)" v-if="reviews[0].link1">Читать полностью</a>
                  <a href="#" @click="close_card(1)" v-if="reviews[0].link2">Скрыть историю</a>
                </div>
              </div>                      
            </div>
            <div class="col-md-2"></div>
          </div>
        </div>
        <div class="col-md-2"></div>
      </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    reviews: [
      { content:false, link1:true, link2:false }
    ]
  }),
  methods: {
    open_card: function(number) {
      reviews.review[number].content=true
      reviews.review[number].link1=false
      reviews.review[number].link2=true
    },
    close_card: function(number) {
      reviews.review[number].content=false
      reviews.review[number].link1=true
      reviews.review[number].link2=false
    }
  }
}
</script>

<style>
body{
    font-family:'Georgia',serif;
}
.goal-clients .card{padding:15px;margin-top:30px;border-radius:8px;}
.goal-clients .card .title{font-size:1.6rem;}
.goal-clients .more{}
</style>
