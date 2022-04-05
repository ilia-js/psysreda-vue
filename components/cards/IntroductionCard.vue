<template>
  <SimpleCard>
    <template v-slot:title>
      <div class="bigger-title">Татьяна Гвоздовская,</div>
      <div class="smaller-title">психотерапевт</div>
      <v-img
        src="/img/logo.png"
        max-width="280px"
        height="350"
        class="rounded-1 mt-6 d-inline-block mx-auto"
      />
    </template>
    <p class="text-center mb-5">
      Если ты задаёшь себе этот вопрос,<br/> то значит ты <b>готов к изменениям</b>
      <br/>и мы сможем начать совместную работу
    </p>
    <v-btn class="psysreda-red-button mt-2">
      Связаться ОН&#8209;ЛАЙН
    </v-btn>
  </SimpleCard>
</template>

<script>
import SimpleCard from '../SimpleCard'

export default {
  name: 'IntroductionCard',
  components: { SimpleCard }
}
</script>

<style lang="scss" scoped>
.bigger-title {
  font-size: 1.15em;
}

.smaller-title {
  font-size: 0.85em;
}

::v-deep {
  .simple-card-text {
    padding-top: 0px !important;
    font-size: 17px;
    color: rgba(0, 0, 0, 0.8) !important;
  }
}
</style>
