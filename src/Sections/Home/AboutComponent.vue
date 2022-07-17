<template>
  <div class="content">
    <div class="text">
      <h2 :style="darkMode" >
        <slideup>Ale kim <under-text>jesteśmy</under-text></slideup>
        <slideup>tak właściwie?</slideup>
      </h2>
      <slideup :style="styleObject">
        <p :style="darkMode">
          Passionate about creating websites that the user will be able to feel, understand, <under-text>use</under-text>.
        </p>
      </slideup>
      <slideup :style="styleObject">
        <p :style="darkMode">
          I am currently working as a front-end developer and web designer for a little company in the Sub-Carpathian region.
        </p>
      </slideup>
      <slideup :style="styleObject">
        <p :style="darkMode">
          I am fascinated by the way a connection can be made between the code and the end user. Design, UX, UI - it's all really interesting, believe me!
        </p>
      </slideup>
    </div>
  </div>
</template>

<script>
import UnderText from "@/components/UnderText.vue";
import slideup from "../../components/Slideup.vue";

export default {
  components: {
    slideup,
    UnderText,
    slideup,
  },
};
</script>

<style lang="scss" scoped>
.content {
  margin-top: 5rem;
  h2 {
    color: #eff0f3;
    text-align: center;
    line-height: 6.25rem;
    font-weight: 600;
    font-size: 5rem;
    padding-bottom: 0.5rem;
    text-align: center;

    @media screen and (max-width: 786px) {
      font-size: 4rem;
      line-height: 4.5rem;
    }
  }
  .toLeft {
    display: flex;
    justify-content: flex-start;
  }
}

.text {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 5rem;

  p {
    font-size: 3rem;
    margin-top: 3rem;
    width: 100%;
    color: #eff0f3;
    display: inline-block;
    line-height: 3rem;
    width: 70%;
    transition: color 0.5s cubic-bezier(0.62, 0.05, 0.01, 0.99);

    @media screen and (max-width: 786px) {
      width: 100%;
    }
  }
}
</style>