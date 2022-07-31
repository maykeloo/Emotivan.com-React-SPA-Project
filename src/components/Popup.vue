<template>
<transition>
  <div v-if="$store.state.popup" class="popup">
    <slot></slot>
  </div>
</transition>
</template>

<script>
export default {

}
</script>

<style scoped 
SwipingTextlang="scss">
    .popup {
        position: fixed;
        bottom: 5%;
        color: white;
        left: 50%;
        transform: translateX(-50%);
        background: black;
        padding: 1rem 3rem;
        font-size: 2rem;
        white-space: nowrap;
        display: flex;
        align-items: center;
        gap: 2rem;
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