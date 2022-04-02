<template>
  <DocumentsCard class="documents-card-container"/>
</template>
<style lang="scss" scoped>
</style>
<script>
import DocumentsCard from '~/components/cards/DocumentsCard'

export default {
  components: {
    DocumentsCard
  }
}
</script>
<style lang="scss" scoped>
.documents-card-container {
  max-width: 700px;
  margin: 0 auto;
}
</style>
