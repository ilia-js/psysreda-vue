<template>
  <div>
    <Introduction/>
    <ConsultationsForWhom class="mt-16 mb-16"/>
    <CodependencyTest class="mt-16 mb-16"/>
  </div>
</template>
<script>
import Introduction from '../components/Introduction'
import CodependencyTest from '../components/CodependencyTest'
import ConsultationsForWhom from '../components/ConsultationsForWhom'

export default {
  components: {
    Introduction,
    CodependencyTest,
    ConsultationsForWhom
  }
}
</script>
<style lang="scss" scoped>
</style>
