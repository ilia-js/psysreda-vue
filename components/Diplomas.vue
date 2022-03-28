<template>
  <v-card class="mx-auto" max-width="700" min-height="330">
    <v-card-title class="psysreda-card-header">
      Дипломы. Курсы. <br/> Подтверждения квалификации.
    </v-card-title>
    <v-card-text class="pt-3">
      <v-carousel height="340" class="carousel-container">
        <v-carousel-item v-for="(item,i) in items" :key="i">
          <v-list class="carousel-container__custom-list">
            <v-list-item>
              <span class="carousel-container__small-title">Вид:</span> {{ item.type }}
            </v-list-item>
            <v-list-item>
              <span class="carousel-container__small-title">Квалификация:</span> {{ item.qualification }}
            </v-list-item>
            <v-list-item>
              <span class="carousel-container__small-title">Специальность:</span> {{ item.speciality }}
            </v-list-item>
            <v-list-item>
              <span class="carousel-container__small-title">Год:</span> {{ item.year }}
            </v-list-item>
          </v-list>
        </v-carousel-item>
      </v-carousel>
      <!--      <v-carousel height="340" class="caurusel-container">-->
      <!--        <v-carousel-item-->
      <!--          v-for="(item,i) in items"-->
      <!--          :key="i"-->
      <!--          :src="item.src"-->
      <!--          reverse-transition="fade-transition"-->
      <!--          transition="fade-transition"-->

      <!--        ></v-carousel-item>-->
      <!--      </v-carousel>-->
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: 'Diplomas',
  data () {
    return {
      items: [
        {
          type: 'Диплом',
          qualification: 'Психолог. Преподаватель психологии.',
          speciality: 'Психология',
          year: '2005',
          src: 'img/diplomas/diploma_1.jpeg'
        },
        {
          type: 'Диплом1',
          qualification: 'Психолог. Преподаватель психологии.1',
          speciality: 'Психология1',
          year: '2005',
          src: 'img/diplomas/diploma_1.jpeg'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.carousel-container {
  max-width: 600px;
  margin: 0 auto;

  &__custom-list {
    border: 1px dashed gray;
    padding: 20px 20px;
    margin: 0 90px;
    min-height: 250px;
    font-size: 16px;
  }

  &__small-title {
    color: coral;
    padding-right: 3px;
  }

  .v-list-item {
    display: block;
    min-height: auto;
    padding-bottom: 15px
  }
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 40px;
}

h2 {
  color: #000;
  font-size: 1.3rem;
}

p {
  color: #000;
  font-size: 1.2rem;
}

.carousel-caption {
  bottom: 60px;
  padding: 10px 0 0 0;
  background: #efefef !important;
  opacity: 0.8;
  border: 1px solid #999;
}

.desc {
  background: #efefef !important;
  opacity: 0.8 !important;
}
</style>
