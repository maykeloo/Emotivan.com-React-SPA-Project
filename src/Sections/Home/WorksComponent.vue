<template>
  <section>
    <h2>The work we do, and the people <UnderText>we help.</UnderText></h2>
    <p ref="works" class="subtitle">
      12 — SaaS companies we’ve helped in the past 24 months. Our holistic
      process takes care of discovery, branding, design, and development.
    </p>
    <swiper :space-between="60"     
    :breakpoints="breakpoints" :scrollbar="true" :modules="modules" :slides-per-view="3" :direction="'horizontal'" class="mySwiper">
      <swiper-slide>
        <div class="card">
          <img src="@/assets/przyklad.png" alt="" />
          <p class="card__title">Testowy</p>
          <p class="card__text">
            ThoughtSpot — Researching, informing, and reinvigorating the product
            experience for the multi-billion data analytics platform.
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <img src="@/assets/przyklad.png" alt="" />
          <p class="card__title">Testowy</p>
          <p class="card__text">
            ThoughtSpot — Researching, informing, and reinvigorating the product
            experience for the multi-billion data analytics platform.
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <img src="@/assets/przyklad.png" alt="" />
          <p class="card__title">Testowy</p>
          <p class="card__text">
            ThoughtSpot — Researching, informing, and reinvigorating the product
            experience for the multi-billion data analytics platform.
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <img src="@/assets/przyklad.png" alt="" />
          <p class="card__title">Testowy</p>
          <p class="card__text">
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
import { Scrollbar } from "swiper";
import Slideup from "@/components/Slideup.vue";
import UnderText from "@/components/UnderText.vue";
export default {
  components: { Slideup, UnderText, Swiper, SwiperSlide },
  setup() {
    return {
      modules: [Scrollbar],
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
        color: this.$store.state.dark ? "white" : "#0b090a",
        fill: this.$store.state.dark ? "white" : "#0b090a",
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
  text-align: center;
  line-height: 6.25rem;
  font-weight: 600;
  font-size: 5rem;
  padding-bottom: 0.5rem;
  text-align: left;
  width: 60%;

  @media screen and (max-width: 786px) {
    font-size: 4rem;
    width: 100%;
    line-height: 4.5rem;
  }
}
.subtitle {
  width: 40%;
  font-size: 1.2rem;

  @media screen and (max-width: 786px) {
    width: 100%;
  }
}

.mySwiper {
    display: flex;
    margin-top: 5rem;
}
.swiper-wrapper {
    display: flex;
}

.swiper-scrollbar-drag {
    background: black !important;
}

.card {
  display: flex;
  flex-direction: column;
  width: 100%;

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