<template>
  <div class="content">
    <video-compontent></video-compontent>
    <div class="text">
      <h2 :style="darkMode" >
        <slideup>But, who <under-text>am I</under-text></slideup>
        <slideup>actually?</slideup>
      </h2>
      <slideup :style="styleObject">
        <p :style="darkMode">
          Our clients are the companies and startups who make the world go round
          — they treat diseases, move parcels, insure cars, create jobs, send
          emails and publish courses.
        </p>
      </slideup>
      <slideup :style="styleObject">
        <p :style="darkMode">
          Vast and complex businesses like these need digital experiences that
          are just as people-friendly as they are robust and scalable.
        </p>
      </slideup>
      <slideup :style="styleObject">
        <p :style="darkMode">
          Through challenging core assumptions, we shape the products and
          services that improve the lives of thousands every single day.
        </p>
      </slideup>
    </div>
  </div>
</template>

<script>
import UnderText from "@/components/UnderText.vue";
import VideoCompontent from "./VideoCompontent.vue";
import slideup from "../../components/Slideup.vue";

export default {
  components: {
    slideup,
    UnderText,
    VideoCompontent,
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