<template>
  <section>

    <!-- DESKTOP -->
    <h1 v-if="!$isMobile()">
      <swiping-text> Strony internetowe, które</swiping-text>
      <swiping-text> <div class="animated"> pozwolą ci poczuć <div class="text__swap-wrapper overflow">      
        <Transition name="slide-up">
          <span class="text__swap" v-if="textCounter == 0">
            emocje.
          </span>
          <span class="text__swap" v-else-if="textCounter == 1">
            szczęście.
          </span>
          <span class="text__swap" v-else-if="textCounter == 2">
            dumę.
          </span>
          <span class="text__swap" v-else-if="textCounter == 3">
            wartość.
          </span>
          </Transition>
      </div> 
      </div>
      </swiping-text>
    </h1>

    <!-- MOBILE -->
    <h1 v-else>
      <swiping-text> Strony internetowe,</swiping-text>
      <swiping-text> które pozwolą ci </swiping-text>
      <swiping-text> <div class="animated"> poczuć <div class="text__swap-wrapper overflow">      
        <Transition name="slide-up">
          <span class="text__swap" v-if="textCounter == 0">
            emocje.
          </span>
          <span class="text__swap" v-else-if="textCounter == 1">
            szczęście.
          </span>
          <span class="text__swap" v-else-if="textCounter == 2">
            dumę.
          </span>
          <span class="text__swap" v-else-if="textCounter == 3">
            wartość.
          </span>
          </Transition>
      </div> </div></swiping-text>
    </h1>
    <p class="subhead__text">
      <swiping-text>Bądz rozpoznawalny w <under-text>cyfrowym</under-text> świecie.</swiping-text>
    </p>
    <div class="buttons__wrapper">
      <btn class="btn" @click="changePath()">
        <template #slot1>
          Rozpocznij projekt 
        </template>
        <template #slot2>
          <v-icon name="ri-chat-smile-2-line"  fill="black" scale="1.5"/>
        </template>
      </btn>
    </div>
  </section>
</template>

<script>
import UnderText from "@/components/UnderText.vue";
import SwipingText from "@/components/SwipingText.vue";
import Btn from '@/components/Btn.vue';
import { gsap } from "gsap";

export default {
  components: {
    UnderText,
    SwipingText,
    Btn,
  },
  data() {
    return {
      textCounter: 0
    }
  },
  methods: {
    changePath() {
        gsap.to('.home *', {
          autoAlpha: 0,
          duration: 0.4,
        })
        setTimeout(() => {
          this.$router.push('/contact')
        }, 500)
      }
  },
  mounted() {
    setInterval(() => {
      
      if(this.textCounter > 2) {
        this.textCounter = 0
      } else {
        this.textCounter++;
      }
    }, 3000)
    gsap.from('.btn', {
      y: 20,
      autoAlpha: 0,
      delay: 1,
      duration: 0.3
    })
  }
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 5rem;
  font-weight: 600;
  line-height: 6.25rem;
  margin-bottom: 0;

  @media screen and (max-width: 786px) {
    width: 100%;
    line-height: 4rem;
    font-size: 3.5rem;
    letter-spacing: -3px;
    font-weight: 500;
  }
}

.animated {
  display: flex;
  gap: 1rem;
}

.subhead__text {
    font-size: 2rem;
    font-weight: 400;
    margin-top: 2rem;

    @media screen and (max-width: 786px) {
      line-height: 2rem;
      font-size: 1.5rem;
      font-weight: 400;
    }
}

.box {
  width: 25rem;
  height: 25rem;
  position: absolute;

  &__red {
    background: rgba(255, 0, 170, 0.4);
    top: 10%;
    left: 10%;
    backdrop-filter: blur(200px);
-webkit-backdrop-filter: blur(200px);
    z-index: -1;
  }

  &__yellow {
    background: rgba(255, 238, 0, 0.4);
    top: 10%;
    right: 10%;
    backdrop-filter: blur(200px);
-webkit-backdrop-filter: blur(200px);
    z-index: -1;
  }

  &__blue {
    background: rgba(0, 132, 255, 0.4);
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
    backdrop-filter: blur(200px);
-webkit-backdrop-filter: blur(200px);
    z-index: -1;
  }
}

.buttons__wrapper {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  @media screen and (max-width: 786px) {
    justify-content: flex-start;
  }
}

.btn__content {
  font-size: 1.25rem;
  color: black;
}

.text__swap-wrapper {
  display: inline-block;
  overflow: hidden;
  width: 20rem;

  @media screen and (max-width: 786px) {
    width: unset
  }
}
.text__swap-under {
  width: 100%;
  height: 100%;
}

.text__swap {
  position: absolute;
  z-index: -1;
  color: black;
  white-space: nowrap;
}

img {
  width: 1.5rem;
}


// ANIMATION
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  transform: translateY(20px);
  opacity: 0
}

.slide-up-leave-to {
  transform: translateY(-20px);
  opacity: 0
}
</style>