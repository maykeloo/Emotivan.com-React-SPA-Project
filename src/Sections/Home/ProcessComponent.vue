<template>
<div  class="line__wrapper">
    <slideup>
        <h2>Prowadze 4,5 stopniowy proces tworzenia strony</h2>
    </slideup>
    <process></process>
</div>


</template>

<script>
import Process from '@/components/svg/Process.vue';
import Slideup from '@/components/Slideup.vue';

export default {
  components: { Process, Slideup },
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

        @media screen and (max-width: 786px) {
            line-height: 4.5rem;
            font-size: 4rem;
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