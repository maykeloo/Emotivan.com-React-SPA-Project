<template>
  <section>
    <h1>
      <swiping-text> I create pages that</swiping-text>
      <swiping-text> let you feel <div class="text__swap-wrapper overflow">      
        <Transition name="slide-up">
          <span class="text__swap" v-if="textCounter == 0">
            emotions.
          </span>
          <span class="text__swap" v-else-if="textCounter == 1">
            happiness.
          </span>
          <span class="text__swap" v-else-if="textCounter == 2">
            pride.
          </span>
          <span class="text__swap" v-else-if="textCounter == 3">
            your worth.
          </span>
          </Transition>
      </div> 
      </swiping-text>
    </h1>
    <p class="subhead__text">
      <swiping-text>Be recognized in the <under-text>digital</under-text> world.</swiping-text>
    </p>
    <div class="buttons__wrapper">
      <btn><span class="btn__content">Start project with me </span><v-icon name="ri-chat-smile-2-line" fill="white" scale="1.5"/></btn>
    </div>
  </section>
</template>

<script>
import UnderText from "@/components/UnderText.vue";
import SwipingText from "@/components/SwipingText.vue";
import Btn from '@/components/Btn.vue';

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
  mounted() {
    setInterval(() => {
      
      if(this.textCounter > 2) {
        this.textCounter = 0
      } else {
        this.textCounter++;
      }
    }, 3000)
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
    line-height: 6rem;
    font-size: 5rem;
  }
}

.subhead__text {
    font-size: 2rem;
    font-weight: 500;

    @media screen and (max-width: 786px) {
      width: 75%;
      line-height: 2.5rem;
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
  justify-content: flex-start;
  gap: 1.5rem;

  @media screen and (max-width: 786px) {
    justify-content: flex-start;
  }
}

.btn__content {
  font-size: 1.25rem;
  color: white;
}

.text__swap-wrapper {
  height: 5rem;
  width: 25rem;
  display: inline-block;
  overflow: hidden;
}
.text__swap-under {
  width: 100%;
  height: 100%;
}

.text__swap {
  position: absolute;
  z-index: -1;
  color: #004eff;
  font-style: italic;
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