<script>

export default {
    props: {
        color: {
            type: String,
            required: true,
            default: '#eff0f3'
        }
    }
}

</script>

<template>
<svg width="31" height="31" viewBox="0 0 31 31" :style="{fill: color}" xmlns="http://www.w3.org/2000/svg">
<path d="M31 14.9898L31 9.53674e-06L9.00661 8.57538e-06L31 14.9898ZM22 31C25.1281 31 27.2797 30.093 28.7678 28.279C30.2559 26.465 31 23.6711 31 19.8973L9.00661 8.57538e-06C6 8.44396e-06 3.20402 0.866518 1.9133 2.59954C0.652951 4.28397 0.0227767 7.03736 0.0227765 10.8597L22 31ZM22 31L6.33986e-07 16.4961L3.18551e-09 30.9271L22 31Z" fill="black"/>
</svg>
</template>

<style lang="scss">
    svg {
        transition: 0.3s;
    }
</style>
