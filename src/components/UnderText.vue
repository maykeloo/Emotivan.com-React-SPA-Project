<template>
  <span class="undertext">
    <slot></slot>
  </span>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@keyframes scaling {
    0% {
        width: 0
    }
    100% {
        width: 100%;
    }
}
.undertext {
    display: inline-block;
    position: relative;
    color: rgb(255, 214, 186);
    &:before {
        position: absolute;
        content: '';
        bottom: -3px;
        left: 0;
        height: 7px;
        width: 100%;

        background: rgba(255, 214, 186, 0.3);
        animation-name: scaling;
        animation-delay: 1s;
        animation-duration: 0.5s;
    }

    &:after {
        position: absolute;
        content: '';
        bottom: -3px;
        left: 0;
        width: 0;
        height: 7px;
        background: rgb(255, 214, 186);
        transition: 0.3s;
    }

    &:hover {
        &:after {
            width: 100%;
        }
    }
}
</style>