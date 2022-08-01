<template>
<transition>
  <div v-if="$store.state.popup.copy" class="popup">
    <slot name="copy"></slot>
  </div>
</transition>
<transition>
  <div v-if="$store.state.popup.email" class="popup">
    <slot name="email"></slot>
  </div>
</transition>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
    .popup {
        position: fixed;
        bottom: 5%;
        color: white;
        left: 50%;
        transform: translateX(-50%);
        background: black;
        padding: 1rem 3rem;
        font-size: 2rem;
        display: flex;
        align-items: center;
        gap: 2rem;
        z-index: 999999999;
        height: 10rem;

        @media screen and (max-width: 786px) {
          width: 90vw;
          padding: 1rem;
        }
    }


    .v-enter-active,
    .v-leave-active {
    transition: 0.2s ease;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
        transform: translate(-50%, 30px);
    }
</style>