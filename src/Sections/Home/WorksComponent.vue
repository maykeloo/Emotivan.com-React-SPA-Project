<template>
  <section>
    <slideupcenter>
      <h2 :style="darkMode">The work we do, and the people <UnderText :style="darkMode">we help.</UnderText></h2>
    </slideupcenter>
    <p :style="darkMode" ref="works" class="subtitle">
      12 — SaaS companies we’ve helped in the past 24 months. Our holistic
      process takes care of discovery, branding, design, and development.
    </p>
    <swiper :space-between="60"     
    :breakpoints="breakpoints" :autoplay="autoplay" :scrollbar="true" :modules="modules" :slides-per-view="3" :direction="'horizontal'" class="mySwiper">
      <swiper-slide>
        <div class="card">
          <img src="@/assets/przyklad.png" alt="" />
          <p :style="darkMode" class="card__title">Testowy</p>
          <p :style="darkMode" class="card__text">
            ThoughtSpot — Researching, informing, and reinvigorating the product
            experience for the multi-billion data analytics platform.
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <img src="@/assets/przyklad.png" alt="" />
          <p :style="darkMode" class="card__title">Testowy</p>
          <p :style="darkMode" class="card__text">
            ThoughtSpot — Researching, informing, and reinvigorating the product
            experience for the multi-billion data analytics platform.
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <img src="@/assets/przyklad.png" alt="" />
          <p :style="darkMode" class="card__title">Testowy</p>
          <p :style="darkMode" class="card__text">
            ThoughtSpot — Researching, informing, and reinvigorating the product
            experience for the multi-billion data analytics platform.
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <img src="@/assets/przyklad.png" alt="" />
          <p :style="darkMode" class="card__title">Testowy</p>
          <p :style="darkMode" class="card__text">
            ThoughtSpot — Researching, informing, and reinvigorating the product
            experience for the multi-billion data analytics platform.
          </p>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/scrollbar";
import "swiper/css/bundle";
import { Autoplay, Scrollbar } from "swiper";
import Slideupcenter from "@/components/Slideupcenter.vue";
import UnderText from "@/components/UnderText.vue";
export default {
  components: { Slideupcenter, UnderText, Swiper, SwiperSlide },
  setup() {
    return {
      modules: [Scrollbar, Autoplay],
    };
  },
  data() {
    return {
        breakpoints: {
            '@0.00': {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            '@0.75': {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            '@1.00': {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        }
    }
  },
  methods: {
    isInViewport(element) {
      if (element) {
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
        color: this.$store.state.dark ? "#eff0f3" : "#0b090a",
        fill: this.$store.state.dark ? "#eff0f3" : "#0b090a",
      };
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (this.isInViewport(this.$refs.works)) {
        this.$store.commit("toggleDarkMode", false);
      }
    });
  },
};
</script>

<style scoped lang="scss">
section {
  margin-top: 15rem;
  padding-bottom: 10rem;
}

h2 {
  line-height: 6.25rem;
  font-weight: 600;
  font-size: 5rem;
  padding-bottom: 0.5rem;
  width: 65%;
  transition: 0.2s;
  text-align: left;

  @media screen and (max-width: 786px) {
    font-size: 4rem;
    width: 100%;
    line-height: 4.5rem;
  }
}
.subtitle {
  width: 40%;
  font-size: 1.2rem;
  transition: 0.2s;

  @media screen and (max-width: 786px) {
    width: 100%;
  }
}

.mySwiper {
    display: flex;
    margin-top: 5rem;
}

.swiper-slide {
  transition: 0.3s;
}
.swiper-wrapper {
    display: flex;

  &:active {
    > .swiper-slide {
      transform: scale(0.95);
    }
  }
}

.swiper-scrollbar-drag {
    background: black !important;
}

.card {
  display: flex;
  flex-direction: column;
  width: 100%;

img {
                                                                                             object-fit: contain;
}

  &__title {
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
  }

  &__text {
    font-size: 1.2rem;
  }
}
</style>