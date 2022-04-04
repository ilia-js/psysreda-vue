<template>
  <div>
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
.simple-card {
  max-width: 480px;
  margin: 0 auto;
}
</style>
