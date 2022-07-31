<template>
  <span class="undertext" :class="dark">
    <slot></slot>
  </span>
</template>

<script>
export default {
    computed: {
        dark() {
            if(!this.$store.state.dark) {
                return 'darker'
            } else {
                return ''
            }
        }
    }
}
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
    color: black;
    &:before {
        position: absolute;
        content: '';
        bottom: -4px;
        left: 0;
        height: 7px;
        width: 100%;

        background: rgba(239, 240, 243, 0.3);
        animation-name: scaling;
        animation-delay: 1s;
        animation-duration: 0.5s;
    }

    &:after {
        position: absolute;
        content: '';
        bottom: -4px;
        left: 0;
        width: 0;
        height: 7px;
        background: black;
        transition: 0.3s;
    }

    &.darker {
        &:before {
        position: absolute;
        content: '';
        bottom: -4px;
        left: 0;
        height: 7px;
        width: 100%;

        background: rgba(11, 9, 10, 0.3);
        animation-name: scaling;
        animation-delay: 1s;
        animation-duration: 0.5s;
    }

    &:after {
        position: absolute;
        content: '';
        bottom: -4px;
        left: 0;
        width: 0;
        height: 7px;
        background: rgb(11, 9, 10);
        transition: 0.3s;
    }
    }

    &:hover {
        &:after {
            width: 100%;
        }
    }
}
</style>