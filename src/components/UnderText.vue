<template>
  <span class="undertext">
    <slot></slot>
  </span>
</template>

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
    color: rgb(0, 78, 255);
    font-style: italic;
    &:before {
        position: absolute;
        content: '';
        bottom: -3px;
        left: 0;
        height: 7px;
        width: 100%;

        background: rgba(0, 78, 255, 0.3);
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
        background: rgb(0, 78, 255);
        transition: 0.3s;
    }

    &:hover {
        &:after {
            width: 100%;
        }
    }
}
</style>