<template>
  <div>
    <v-carousel
      class="carousel-container"
      hide-delimiters
      show-arrows
      @change="change"
    >
      <v-carousel-item
        v-for="(document, documentKey) in documents"
        :key="documentKey"
      >
        <v-list class="carousel-container__custom-list">
          <v-list-item v-for="(item, itemKey) in document.items" :key="itemKey">
            <span
              v-if="item.title"
              v-html="item.title"
              class="carousel-container__title"
            >
            </span>
            <span v-if="item.label" class="carousel-container__label">
              {{ item.label }}
            </span>
            <span
              v-if="item.text"
              v-html="'<br/>' + item.text"
              class="carousel-container__text"
            >
            </span>
          </v-list-item>
          <div class="text-center">
            <v-btn
              v-if="document.image"
              class="psysreda-pink-button"
              @click="openDocument"
              small
              depressed
            >
              Документ
            </v-btn>
          </div>
        </v-list>
      </v-carousel-item>
    </v-carousel>
    <div class="document-counter text-center b-5 d-none">
      {{ currentIndex + 1 }} из {{ documents.length }}
    </div>
    <v-dialog v-model="documentDialog" max-width="600">
      <v-card min-height="500">
        <v-card-title class="pt-7 pb-5" v-html="currentTitle"></v-card-title>
        <v-card-text class="text-center pb-5">
          <img
            class="document-image"
            :src="getDiplomaUrl(documents[currentIndex].image)"
            alt=""
          />
        </v-card-text>
        <v-card-actions class="pb-8">
          <v-btn
            @click="closeDocument"
            class="mx-auto psysreda-pink-button"
            depressed
            small
            >Закрыть
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import DOCUMENTS from "@/data/documents";

export default {
  name: "DocumentsCard",
  data() {
    return {
      documentDialog: false,
      currentIndex: 0,
      currentTitle: "",
      documents: DOCUMENTS,
    };
  },
  methods: {
    openDocument() {
      this.documentDialog = true;
    },
    closeDocument() {
      this.documentDialog = false;
    },
    change(index) {
      this.currentIndex = index;
      if (this.documents[index].items[0]) {
        this.currentTitle = this.documents[index].items[0].title;
      }
    },
    getDiplomaUrl(file) {
      return require("@/assets/images/diplomas/" + file);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.document-counter {
  font-size: 20px;
  font-weight: bold;
}

.carousel-container {
  max-width: 650px;
  margin: 15px auto 40px;

  &__custom-list {
    border: 2px dashed #bbb !important;
    border-radius: $border-radius !important;
    padding: 30px 20px 40px;
    margin: 0 90px;
    min-height: 280px;
    font-size: 16px;
  }

  &__label {
    color: #dc3545;
    padding-right: 3px;
  }

  &__title {
    display: block;
    font-size: 22px;
    text-align: center;
    @media (max-width: 600px) {
      font-size: 18px;
    }
    @media (max-width: 440px) {
      font-size: 16px;
    }
  }

  &__text {
    @media (max-width: 440px) {
      font-size: 0.9em;
    }
  }

  .v-list-item {
    display: block;
    min-height: auto;
    padding-bottom: 15px;
  }
}

::v-deep {
  .v-window__prev,
  .v-window__next {
    top: 180px;
  }

  .document-image {
    max-width: 90%;
  }

  .v-dialog {
    border-radius: 25px !important;
  }

  .carousel-container,
  .v-carousel__item {
    height: auto !important;
  }
}
</style>
