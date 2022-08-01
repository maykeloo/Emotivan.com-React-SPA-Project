<template>
  <span class="undertext" :class="dark">
    <slot></slot>
    <span class="line"></span>
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

        &:hover {
            .line {
                &:after {
                    width: 100%;
                }
            }
        }

    & .line {
        height: 5px;
        width: 100%;
        display: block;
        margin-top: 2px;
        background: #d3d3d3;
        animation-name: scaling;
        position: relative;

        &:after {
            position: absolute;
            content: '';
            bottom: 0;
            left: 0;
            width: 0;
            height: 5px;
            background: black;
            transition: 0.2s;
        }


    }
}
</style>