<template>
  <div class="process-wrapper">
    <slideup>
      <h2 ref="visible">
        5 stopniowy proces <under-text>wdrażania</under-text>
      </h2>
    </slideup>

    <!-- MOBILE -->
    <div v-if="$isMobile()" class="slides-wrapper">
      <div class="slides left">
        <div>
          <h2>Test 1111</h2>
          <img src="@/assets/slides1.svg" alt="" />
        </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            veniam eligendi dolorem minima, harum ex fuga ab autem nostrum aut!
          </p>
      </div>
      <div class="slides right">
        <div>
          <h2>Test 1111</h2>
          <img src="@/assets/slides2.svg" alt="" />
        </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            veniam eligendi dolorem minima, harum ex fuga ab autem nostrum aut!
          </p>
      </div>
      <div class="slides left">
        <div>
          <h2>Test 1111</h2>
          <img src="@/assets/slides3.svg" alt="" />
        </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            veniam eligendi dolorem minima, harum ex fuga ab autem nostrum aut!
          </p>
      </div>
      <div class="slides right">
        <div>
          <h2>Test 1111</h2>
          <img src="@/assets/slides4.svg" alt="" />
        </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            veniam eligendi dolorem minima, harum ex fuga ab autem nostrum aut!
          </p>
      </div>
      <div class="slides left">
        <div>
          <h2>Test 1111</h2>
          <img src="@/assets/slides5.svg" alt="" />
        </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            veniam eligendi dolorem minima, harum ex fuga ab autem nostrum aut!
          </p>
      </div>
      <div @click="scrollDown()" class="slides slides-last up">
        <div>
          <img src="@/assets/slides6-arrow.svg" alt="" />
        </div>
      </div>
    </div>

    <!-- DESKTOP -->
    <div v-else class="slides-wrapper">
      <div class="slides desktop">
        <div>
          <h2>Your order</h2>
          <img src="@/assets/slides1.svg" alt="" />
        </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            veniam eligendi dolorem minima, harum ex fuga ab autem nostrum aut!
          </p>
      </div>
      <div class="slides desktop">
        <div>
          <h2>Test 1111</h2>
          <img src="@/assets/slides2.svg" alt="" />
        </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            veniam eligendi dolorem minima, harum ex fuga ab autem nostrum aut!
          </p>
      </div>
      <div class="slides desktop">
        <div>
          <h2>Test 1111</h2>
          <img src="@/assets/slides3.svg" alt="" />
        </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            veniam eligendi dolorem minima, harum ex fuga ab autem nostrum aut!
          </p>
      </div>
      <div class="slides desktop">
        <div>
          <h2>Test 1111</h2>
          <img src="@/assets/slides4.svg" alt="" />
        </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            veniam eligendi dolorem minima, harum ex fuga ab autem nostrum aut!
          </p>
      </div>
      <div class="slides desktop">
        <div>
          <h2>Test 1111</h2>
          <img src="@/assets/slides5.svg" alt="" />
        </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            veniam eligendi dolorem minima, harum ex fuga ab autem nostrum aut!
          </p>
      </div>
      <div @click="scrollDown()" class="slides slides-last desktop">
        <div>
          <img src="@/assets/slides6-arrow.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slideup from "@/components/Slideup.vue";
import UnderText from "@/components/UnderText.vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  components: { Slideup, UnderText, Slideup },
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
    scrollDown() {
      document.getElementById("works-section").scrollIntoView()
    }
  },
  mounted() {
    gsap.utils.toArray(".slides.left").forEach((block, index) => {
      ScrollTrigger.create({
        trigger: block,
        start: "top 100%",
        onEnter: () =>
          gsap.from(block, {
            x: 30,
            duration: 1,
            ease: "power4",
            autoAlpha: 0,
          }),
      });
    });

    gsap.utils.toArray(".slides.right").forEach((block, index) => {
      ScrollTrigger.create({
        trigger: block,
        start: "top 100%",
        onEnter: () =>
          gsap.from(block, {
            x: -30,
            duration: 1,
            ease: "power4",
            autoAlpha: 0,
          }),
      });
    });

    gsap.from('.slides.up', {
      scrollTrigger: {
        trigger: '.slides.up',
        start: "top 100%",
      },
      y: 30,
      stagger: 0.1,
      duration: 1,
      ease: "power4",
      autoAlpha: 0,
    });

    gsap.from('.slides.desktop', {
      scrollTrigger: {
        trigger: '.slides-wrapper',
        start: "top 20%",
      },
      y: 30,
      stagger: 0.1,
      duration: 1,
      ease: "power4",
      autoAlpha: 0,
    });
  },
};
</script>

<style scoped lang="scss">
svg {
  width: 100%;
  height: 100%;
}

.process-wrapper {
  position: relative;
  margin-top: 7.5rem;
}

.content__wrapper {
  position: absolute;
  color: black;
  top: 0;
}

h2 {
  color: black;
  font-size: 4rem;
  width: 100%;
  font-weight: 600;

  @media screen and (max-width: 786px) {
    font-size: 3.5rem;
    width: 100%;
    text-align: left;
  }
}

.content__box {
  width: 30%;

  @media screen and (max-width: 786px) {
    width: 100%;
  }
  &-title {
    font-size: 2rem;
    margin: 0;
    font-weight: 600;
  }
}

.slides-wrapper {
  display: flex;
  margin-top: 7.5rem;
  flex-wrap: wrap;
  gap: 5px;

  @media screen and (max-width: 786px) {
    flex-direction: column;
    margin-top: 3rem;
  }

  .slides {
    padding: 1rem;
    display: flex;
    width: 32%;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    aspect-ratio: 1;

    &:after {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 3rem;
      width: 7.5rem;
      height: 7.5rem;
      border-radius: 50%;
      background: white;
      top: 1rem;
      right: 1rem;
      z-index: -1;
    }

    @media screen and (max-width: 786px) {
      width: 100%;
      aspect-ratio: unset;
    }

    &.slides-last {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    > div {
      display: flex;
      align-items: flex-end;
      flex-direction: column-reverse;
      align-items: flex-start;
      gap: 1rem;
    }

    &.desktop{
      visibility: hidden;
    }

    &.left{
      visibility: hidden;
    }

    &.right{
      visibility: hidden;
    }

    &:nth-child(1) {
      background: #F9BC69;
      color: white;

      h2 {
        color: white;
      }

      &:after {
        color: black;
        content: '1'
      }
    }

    &:nth-child(2) {
      background: #89B0AE;
        color: white;

        h2 {
          color: white;
        }

      &:after {
        content: '2';
        color: black;
      }
    }

    &:nth-child(3) {
      background: #faf9f9;

      &:after {
        background: #F9BC69;
        content: '3'
      }
    }

    &:nth-child(4) {
      background: #ffd6ba;

      &:after {
        color: black;
        content: '4';
      }
    }

    &:nth-child(5) {
      background: #e16162;

      &:after {
        content: '5';
        color: black;
      }
      color: white;

      h2 {
        color: white;
      }
    }

    &:nth-child(6) {
      background: transparent;
      border: 1px solid black;
      color: white;
      aspect-ratio: 1;
      transition: 0.2s;
      cursor: pointer;

      @media screen and (max-width: 786px) {
        width: 100%;
      }

      img {
        transition: 0.2s;
      }

      &:hover {
        background: #89B0AE;
        img {
          transform: rotate(49deg);
        }
      }

      &:after {
        display: none;
      }

      h2 {
        color: white;
      }
    }

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.5rem;
    }

    img {
      max-height: 12rem;
    }
  }
}
</style>