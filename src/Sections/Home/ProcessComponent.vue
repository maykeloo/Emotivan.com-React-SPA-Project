<template>
<div class="line__wrapper">
    <slideup>
        <h2 ref="visible">4,(5) a step-by-step process for <under-text>developing</under-text></h2>
    </slideup>
    <process></process>
</div>


</template>

<script>
import Process from '@/components/svg/Process.vue';
import Slideup from '@/components/Slideup.vue';
import UnderText from '@/components/UnderText.vue';

export default {
  components: { Process, Slideup, UnderText },
    methods: {
    isInViewport(element) {
      if(element) {
        const rect = element.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        );
      }
    },
  },
    mounted() {
    window.addEventListener("scroll", () => {
      if (this.isInViewport(this.$refs.visible)) {
        this.$store.commit("toggleDarkMode", true);
      } 
    });
  },
}

</script>

<style scoped lang="scss">
    svg {
        width: 100%;
        height: 100%;
    }

    .line__wrapper {
        position: relative;
        margin-top: 10rem;
    }

    .content__wrapper {
        position: absolute;
        color: #eff0f3;
        top: 0;
    }

    h2 {
        color: #eff0f3;
        font-size: 5rem;
        width: 100%;
        font-weight: 600;

        @media screen and (max-width: 786px) {
            font-size: 4rem;
            width: 100%;
            line-height: 4.5rem;
            text-align: left;
        }   
    }

    .content__box {
        width: 30%;

        @media screen and (max-width: 786px) {
          width: 100%;
        }
        &-title {
            font-size: 3rem;
            margin: 0;
            font-weight: 600;
        }
    }
</style>