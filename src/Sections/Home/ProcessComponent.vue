<template>
<div  class="line__wrapper">
    <slideup>
        <h2>4,(5) a step-by-step process for <under-text>developing</under-text></h2>
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
}

</script>

<style scoped lang="scss">
    svg {
        width: 100%;
        height: 100%;
    }

    .line__wrapper {
        position: relative;
    }

    .content__wrapper {
        position: absolute;
        color: #eff0f3;
        top: 0;
    }

    h2 {
        color: #eff0f3;
        font-size: 5rem;
        width: 80%;

        @media screen and (max-width: 786px) {
            font-size: 4rem;
            font-weight: 700;
            line-height: 3.5rem;
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