<template>
  <section id="works-section">
    <slideup>
      <h2>Nasze poprzednie prace</h2>
    </slideup>
    <slideup>
      <p ref="works" class="subtitle">
        Projects carried out for other clients who has trusted me.
      </p>
    </slideup>
    <swiper :space-between="60"    
        :autoplay="{
      delay: 1500,
      disableOnInteraction: false,
    }" 
    :breakpoints="breakpoints" :modules="modules" :slides-per-view="3" :direction="'horizontal'" class="mySwiper">
      <swiper-slide>
        <div class="card-work">
          <video autoplay muted playsinline src="@/assets/gotuje.mp4"></video>
          <p class="card__title">Ania gotuje</p>
          <p class="card__text">
              The blog of an internetora cooking enthusiast that she creates together with her community.  
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card-work">
          <video autoplay muted playsinline src="@/assets/kuznia.mp4"></video>
          <p class="card__title">Forge</p>
          <p class="card__text">
            Business page
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card-work">
          <video autoplay muted playsinline src="@/assets/whats.mp4"></video>
          <p class="card__title">What is in my fridge</p>
          <p class="card__text">
          A tool to search for recipes based on the ingredients we have available
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card-work">
          <video autoplay muted playsinline src="@/assets/ms.mp4"></video>
          <p class="card__title">MS</p>
          <p class="card__text">
            Business page
          </p>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/free-mode";
import "swiper/css/bundle";
import { Autoplay,  FreeMode } from "swiper";
import Slideup from "@/components/Slideup.vue";
import UnderText from "@/components/UnderText.vue";
export default {
  components: { Slideup, UnderText, Swiper, SwiperSlide },
  setup() {
    return {
      modules: [ Autoplay, FreeMode],
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
};
</script>

<style scoped lang="scss">
section {
  margin-top: 15rem;
  padding-bottom: 10rem;
}

.swiper-horizontal>.swiper-scrollbar, .swiper-scrollbar.swiper-scrollbar-horizontal {
  width: 100% !important;
}

h2 {
  font-weight: 600;
  font-size: 4rem;
  padding-bottom: 0.5rem;
  transition: 0.2s;
  text-align: left;

  @media screen and (max-width: 786px) {
    font-size: 3.5rem;
    width: 100%;
  }
}
.subtitle {
  font-size: 1.5rem;
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
  height: fit-content;
}
.swiper-wrapper {
    display: flex;

  @media screen and (min-width: 786px) {
    &:hover {
      > .swiper-slide {
        cursor: grab;
      }
    }
    &:active {
      > .swiper-slide {
        cursor: grabbing;
        transform: scale(0.95);
      }
    }
  }
}

.swiper-scrollbar-drag {
    background: black !important;
}

.card-work {
  display: flex;
  flex-direction: column;
  width: 100%;

  img {
    object-fit: contain;
  }

  .card__title {
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
  }

  .card__text {
    font-size: 1.2rem;
  }
}
</style>