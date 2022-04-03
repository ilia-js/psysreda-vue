<template>
  <div>
    <Introduction/>
    <AudienceCard class="mt-16 mb-16"/>
    <TestingCard class="mt-16 mb-16"/>
  </div>
</template>
<script>
import Introduction from '../components/Introduction'
import TestingCard from '../components/cards/TestingCard'
import AudienceCard from '../components/cards/AudienceCard'

export default {
  components: {
    Introduction,
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
