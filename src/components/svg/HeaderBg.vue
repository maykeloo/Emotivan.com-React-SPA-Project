<template>

    <!-- MOBILE -->

    <svg v-if="$isMobile()" width="2999" height="5368" viewBox="0 0 2999 5368" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_46_6)">
            <rect x="500" y="500" width="1368" height="2073" rx="684" fill="#FF00AA" fill-opacity="0.15" />
        </g>
        <g filter="url(#filter1_f_46_6)">
            <path
                d="M506 3768C506 3379.74 820.744 3065 1209 3065V3065C1597.26 3065 1912 3379.74 1912 3768V4165C1912 4553.26 1597.26 4868 1209 4868V4868C820.744 4868 506 4553.26 506 4165V3768Z"
                fill="#FFEE00" fill-opacity="0.15" />
        </g>
        <g filter="url(#filter2_f_46_6)">
            <rect x="1237" y="1703" width="1262" height="1943" rx="631" fill="#0084FF" fill-opacity="0.15" />
        </g>
        <defs>
            <filter id="filter0_f_46_6" x="0" y="0" width="2368" height="3073" filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_46_6" />
            </filter>
            <filter id="filter1_f_46_6" x="6" y="2565" width="2406" height="2803" filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_46_6" />
            </filter>
            <filter id="filter2_f_46_6" x="737" y="1203" width="2262" height="2943" filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_46_6" />
            </filter>
        </defs>
    </svg>


    <!-- DESKTOP -->
    <svg v-else width="5266" height="3582" viewBox="0 0 5266 3582" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_46_6)">
            <rect x="500" y="685.062" width="2035.07" height="1408.22" rx="704.111" fill="#FF00AA"
                fill-opacity="0.15" />
        </g>
        <g filter="url(#filter1_f_46_6)">
            <rect x="2941" y="500" width="1824.62" height="1262.59" rx="631.297" fill="#FFEE00" fill-opacity="0.15" />
        </g>
        <g filter="url(#filter2_f_46_6)">
            <rect x="2061" y="1763" width="1905.64" height="1318.66" rx="659.33" fill="#0084FF" fill-opacity="0.15" />
        </g>
        <defs>
            <filter id="filter0_f_46_6" x="0" y="185.062" width="3035.07" height="2408.22" filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_46_6" />
            </filter>
            <filter id="filter1_f_46_6" x="2441" y="0" width="2824.62" height="2262.59" filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_46_6" />
            </filter>
            <filter id="filter2_f_46_6" x="1561" y="1263" width="2905.64" height="2318.66" filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_46_6" />
            </filter>
        </defs>
    </svg>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: -1;
    }
</style>