<template>
    <video class="video" muted playsinline loop autoplay>
      <source src="@/assets/videoheader.mp4" />
    </video>
</template>

<script>
import Slideup from '@/components/Slideup.vue'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  components: { Slideup },
  data() {
    return {
        styleObject: {
            display: 'flex',
            'justify-content': 'flex-end',
        },
    }
  },
  methods: {
    isInViewport(element) {
      if(element) {
        const rect = element.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        );
      }
    },
  },
  computed: {
    darkMode() {
      return {
        color: this.$store.state.dark?'#eff0f3':'#0b090a'
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (this.isInViewport(this.$refs.visible)) {
        this.$store.commit("toggleDarkMode", false);
      } 
    });

    gsap.from('.video', {
      y: 20,
      autoAlpha: 0,
      delay: 1.3,
      duration: 0.3
    })
  },
}
</script>

<style lang="scss" scoped>
video {
    margin-top: 5rem;
    width: 100%;
    clip-path: inset(1px 1px);

    @media screen and (max-width: 786px) {
        object-fit: contain;
    }
}

</style>