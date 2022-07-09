<template>
<div  class="line__wrapper">
    <h2>Prowadze 4,5 stopniowy proces tworzenia strony</h2>
    <process></process>
</div>


</template>

<script>
import Process from '@/components/svg/Process.vue';

export default {
  components: { Process },
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
        color: white;
        top: 0;
    }

    h2 {
        color: white;
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