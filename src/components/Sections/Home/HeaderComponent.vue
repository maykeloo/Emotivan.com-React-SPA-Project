<template>
  <section>
    <h1>
      <swiping-text :color="'faf9f9'"> At Forge, </swiping-text>
      <swiping-text :color="'faf9f9'"> I create pages that</swiping-text>
      <swiping-text :color="'faf9f9'"> let you feel <under-text>emotions.</under-text></swiping-text>
    </h1>
    <p class="subhead__text">
      <swiping-text :color="'faf9f9'">Be recognized in the <under-text>digital</under-text> world.</swiping-text>
    </p>
  </section>
</template>

<script>
import UnderText from "@/components/UnderText.vue";
import SwipingText from "@/components/SwipingText.vue";
export default {
  components: {
    UnderText,
    SwipingText,
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 5rem;
  font-weight: 500;
  width: 60%;
  line-height: 6rem;

  @media screen and (max-width: 786px) {
    width: 100%;
    line-height: 4.5rem;
    font-size: 4rem;
  }
}

.subhead__text {
    font-size: 2rem;
    width: 30%;
    font-weight: 3001;

    @media screen and (max-width: 786px) {
      width: 80%
    }
}
</style>