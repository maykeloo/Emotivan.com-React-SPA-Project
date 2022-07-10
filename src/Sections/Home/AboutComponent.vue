<template>
  <div class="content">
    <video-compontent></video-compontent>
    <h2>
      <slideupcenter>But, who <under-text>am I</under-text></slideupcenter>
      <slideupcenter>actually?</slideupcenter>
    </h2>
  </div>
</template>

<script>
import UnderText from "@/components/UnderText.vue";
import VideoCompontent from "./VideoCompontent.vue";
import slideupcenter from "../../components/Slideupcenter.vue";

export default {
  components: {
    slideupcenter,
    UnderText,
    VideoCompontent,
    slideupcenter
},
};
</script>

<style lang="scss" scoped>
.content {
  margin-top: 5rem;
  h2 {
    color: black;
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
</style>