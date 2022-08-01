<template>
  <div class="content">
    <div class="text">
      <h2 >
        <slideup>Coś o nas</slideup>
      </h2>
      <slideup>
        <p>
          Passionate about creating websites that the user will be able to feel, understand, <under-text>use</under-text>.
        </p>
      </slideup>
      <slideup>
        <p>
          I am currently working as a front-end developer and web designer for a little company in the Sub-Carpathian region.
        </p>
      </slideup>
      <slideup>
        <p>
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
    color: black;
    text-align: center;
    font-weight: 600;
    font-size: 4rem;
    padding-bottom: 0.5rem;
    text-align: center;

    @media screen and (max-width: 786px) {
      font-size: 3.5rem;
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
    font-size: 2rem;
    margin-top: 0.5rem;
    width: 100%;
    color: black;
    display: inline-block;
    line-height: 3rem;
    width: 50%;
    transition: color 0.5s cubic-bezier(0.62, 0.05, 0.01, 0.99);

    @media screen and (max-width: 786px) {
      width: 100%;
    }
  }
}
</style>