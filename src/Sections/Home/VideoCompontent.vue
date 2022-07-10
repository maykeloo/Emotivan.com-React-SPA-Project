<template>
  <div class="text">
  <video autoplay muted playsinline loop>
    <source src="@/assets/videohome1.mp4" />
  </video>
    <slideup :style="styleObject">
        <p :style="darkMode">Our clients are the companies and startups who make the world go round — they treat diseases, move parcels, insure cars, create jobs, send emails and publish courses.</p>
    </slideup>
    <slideup :style="styleObject">
        <p :style="darkMode">Vast and complex businesses like these need digital experiences that are just as people-friendly as they are robust and scalable.</p>
    </slideup>
    <slideup :style="styleObject">
        <p :style="darkMode" ref="visible">Through challenging core assumptions, we shape the products and services that improve the lives of thousands every single day.</p>
    </slideup>
  </div>
</template>

<script>
import Slideup from '@/components/Slideup.vue'
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
  },
}
</script>

<style lang="scss" scoped>
video {
    width: 100%;
    clip-path: inset(1px 1px);

    @media screen and (max-width: 786px) {
        object-fit: contain;
    }
}
.text {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-bottom: 5rem;

    p {
        font-size: 3rem;
        width: 70%; 
        color: rgb(11, 9, 10);
        display: inline-block;
        line-height: 3rem;
        transition: color 0.5s cubic-bezier(0.62, 0.05, 0.01, 0.99); 

        @media screen and (max-width: 786px) {
          width: 100%;
        }
    }
}
</style>