<template>
  <div class="content">
    <h2>
      <slideup class="toLeft">But, who <under-text>am I</under-text></slideup>
      <slideup class="toLeft">actually?</slideup>
    </h2>
    <video-compontent></video-compontent>
  </div>
</template>

<script>
import Slideup from "@/components/Slideup.vue";
import UnderText from "@/components/UnderText.vue";
import VideoCompontent from "./VideoCompontent.vue";

export default {
  components: {
    Slideup,
    UnderText,
    VideoCompontent
},
};
</script>

<style lang="scss" scoped>
.content {
  margin-top: 15rem;
  h2 {
    color: black;
    text-align: center;
    line-height: 6rem;
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
    justify-content: center;
  }
}
</style>