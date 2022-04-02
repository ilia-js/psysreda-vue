<template>
  <SimpleCard>
    <template v-slot:title>
      Подтверждение образования
    </template>
    <v-carousel height="400" class="carousel-container" hide-delimiters show-arrows
                @change="change">
      <v-carousel-item v-for="(document, documentKey) in documents" :key="documentKey">
        <v-list class="carousel-container__custom-list">
          <v-list-item v-for="(item, itemKey) in document.items" :key="itemKey">
            <span v-if="item.title" v-html="item.title" class="carousel-container__title">
            </span>
            <span v-if="item.label" class="carousel-container__label">
              {{ item.label }}
            </span>
            <span v-if="item.text">
              <br/>{{ item.text }}
            </span>
          </v-list-item>
          <div class="text-center">
            <v-btn v-if="document.image" color="primary" @click="openDocument" small depressed>Документ
            </v-btn>
          </div>
        </v-list>
      </v-carousel-item>
    </v-carousel>
    <div class="document-counter text-center b-5">
      {{ currentIndex + 1 }} из {{ documents.length }}
    </div>
    <v-dialog v-model="documentDialog" max-width="600">
      <v-card>
        <v-card-title class="pt-7 pb-5" v-html="this.currentTitle">
        </v-card-title>
        <v-card-text class="text-center pb-5">
          <img width="500" :src="documents[currentIndex].image"/>
        </v-card-text>
        <v-card-actions class="pb-8">
          <v-btn @click="closeDocument" class="mx-auto" color="primary" depressed small>Закрыть</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </SimpleCard>
</template>
<script>
import DOCUMENTS from '~/settings/documents'

export default {
  name: 'DocumentsCard',
  data () {
    return {
      documentDialog: false,
      currentIndex: 0,
      currentTitle: '',
      documents: DOCUMENTS
    }
  },
  methods: {
    openDocument () {
      this.documentDialog = true
    },
    closeDocument () {
      this.documentDialog = false
    },
    change (index) {
      this.currentIndex = index
      if (this.documents[index].items[0]) {
        this.currentTitle = this.documents[index].items[0].title
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.document-counter {
  font-size: 20px;
  font-weight: bold;
}

.carousel-container {
  max-width: 650px;
  margin: 15px auto 0;

  &__custom-list {
    border: 1px dashed #ddd;
    border-radius: 15px;
    padding: 30px 20px;
    margin: 0 90px;
    min-height: 280px;
    font-size: 16px;
  }

  &__label {
    color: coral;
    padding-right: 3px;
  }

  &__title {
    display: block;
    font-size: 22px;
    text-align: center;
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
