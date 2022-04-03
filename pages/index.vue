<template>
  <div>
    <Introduction/>
    <Audience class="mt-16 mb-16"/>
    <CodependencyTest class="mt-16 mb-16"/>
  </div>
</template>
<script>
import Introduction from '../components/Introduction'
import CodependencyTest from '../components/CodependencyTest'
import Audience from '../components/cards/Audience'

export default {
  components: {
    Introduction,
    CodependencyTest,
    Audience
  }
}
</script>
<style lang="scss" scoped>
</style>
