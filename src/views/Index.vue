<template>
  <div class="index-container">
    <h1>
      <span class="special-first-title">Как научиться заботиться о себе</span
      ><span class="special-exclamation-mark">?</span> <br />
      <span class="special-second-title"
        >Как перестать <s>думать только о других</s></span
      ><span class="special-exclamation-mark">!</span>
    </h1>
    <contactCard />
    <AudienceCard class="mt-16 mb-16" />
    <TestingCard class="mt-16 mb-16" />
  </div>
</template>
<script>
import contactCard from "../components/cards/ContactCard";
import TestingCard from "../components/cards/TestingCard";
import AudienceCard from "../components/cards/AudienceCard";

export default {
  name: "IndexComponent",
  components: {
    contactCard,
    TestingCard,
    AudienceCard,
  },
};
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

.special-exclamation-mark {
  padding-left: 3px;
}

.special-first-title {
  color: #333;
}

.special-second-title {
  color: #333;
  font-size: 28px;
}
</style>
