<script>

export default {
    props: {
        color: {
            type: String,
            default: 'black'
        }
    },
    methods: {
        changePath() {
            if (this.$router.currentRoute.value.fullPath != '/') {
                gsap.to('.view *', {
                    autoAlpha: 0,
                    duration: 0.4,
                })
                setTimeout(() => {
                    this.$router.push('/')
                }, 500)
            }
        }
    }
}

</script>

<template>
    <svg @click="changePath()" width="186" height="114" viewBox="0 0 186 114" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M81.2504 68.4253C104.853 92.0273 143.12 92.0273 166.722 68.4253L185.973 87.6753C151.739 121.909 96.234 121.909 62 87.6753L81.2504 68.4253Z"
            :fill="color" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M104.722 44.9259C81.1197 21.3236 42.8527 21.3236 19.2504 44.9259L0 25.6755C34.234 -8.5585 89.7384 -8.5585 123.973 25.6755L104.722 44.9259Z"
            :fill="color" />
    </svg>
</template>

<style lang="scss" scoped>
svg {
    height: 5rem;
    width: 5rem;
    cursor: pointer;
}

path {
    transition: fill 0.5s;
}
</style>
