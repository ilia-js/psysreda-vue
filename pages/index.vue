<template>
  <div class="index-container">
    <h1>Как научиться заботиться о себе?<br/> Как перестать думать только о других?</h1>
    <IntroductionCard/>
    <AudienceCard class="mt-16 mb-16"/>
    <TestingCard class="mt-16 mb-16"/>
  </div>
</template>
<script>
import IntroductionCard from '../components/cards/IntroductionCard'
import TestingCard from '../components/cards/TestingCard'
import AudienceCard from '../components/cards/AudienceCard'

export default {
  components: {
    IntroductionCard,
    TestingCard,
    AudienceCard
  }
}
</script>
<style lang="scss" scoped>
h1 {
  text-align: center;
  margin-top: -70px;
  margin-bottom: 25px;
  color: #444;
}

.index-container {
  padding-bottom: 50px;
}

.simple-card {
  max-width: 480px;
  margin: 0 auto;
}
</style>
