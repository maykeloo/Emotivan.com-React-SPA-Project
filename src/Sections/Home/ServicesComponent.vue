<template>
  <div class="content" >
    <slideup class="toLeft">
      <h2 :style="darkMode" ref="services">And what can I offer <under-text>you?</under-text></h2>
    </slideup>
    <slideup>
      <p class="subtext">We do this by following a simple approach.</p>
    </slideup>
    <div class="content__column" :style="darkMode" >
      <div >
        <slideup>
        <span class="title__and-icon" >
          <span>Privacy</span>
          <v-icon name="bi-patch-check-fill" :style="darkMode" scale="3" />
        </span>
        </slideup>
        <slideup>
          <p class="text__content">
            12 — SaaS companies we’ve helped in the past 24 months. Our holistic
            process takes care of discovery, branding, design, and development.
          </p>
        </slideup>
      </div>
      <div >
      <slideup>
        <span class="title__and-icon" >
          <span>Security</span>
          <v-icon name="bi-shield-lock-fill" :style="darkMode" scale="3" />
        </span>
        </slideup>
        <slideup>
          <p class="text__content">
            12 — SaaS companies we’ve helped in the past 24 months. Our holistic
            process takes care of discovery, branding, design, and development.
          </p>
        </slideup>
      </div>
      <div >
      <slideup>
        <span class="title__and-icon" >
          <span>Personal approach</span>
          <v-icon name="bi-person-lines-fill" :style="darkMode" scale="3" />
        </span>
        </slideup>
        <slideup>
          <p class="text__content">
            12 — SaaS companies we’ve helped in the past 24 months. Our holistic
            process takes care of discovery, branding, design, and development.
          </p>
        </slideup>
      </div>
    </div>
  </div>
</template>

<script>
import Slideup from "@/components/Slideup.vue";
import UnderText from "@/components/UnderText.vue";

export default {
  components: {
    Slideup,
    UnderText,
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
        color: this.$store.state.dark ? "#eff0f3" : "#0b090a",
        fill: this.$store.state.dark ? "#f9bc69" : "#0b090a",
      };
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (this.isInViewport(this.$refs.services)) {
        this.$store.commit("toggleDarkMode", true);
      } 
    });
  },
};
</script>

<style scoped lang="scss">
.content {
  margin-top: 7.5rem;
  h2 {
    color: black;
    text-align: center;
    line-height: 6.25rem;
    font-weight: 600;
    font-size: 5rem;
    padding-bottom: 0.5rem;
    text-align: center;
    margin-bottom: 0;

    @media screen and (max-width: 786px) {
      font-size: 4rem;
      line-height: 4.5rem;
      text-align: left;
    }
    .toLeft {
      display: flex;
      justify-content: flex-start;
    }
  }

  .title__and-icon {
    width: fit-content;
    display: flex;
    gap: 2rem;
    align-items: center;

    > span {
      font-size: 4rem;
      font-weight: 700;
      line-height: 3.5rem;
      text-align: left;
    }

    @media screen and (max-width: 786px) {
      flex-direction: column-reverse;
      align-items: flex-start;
    }
  }

  .text__content {
    width: 50%;
    font-size: 3rem;
    line-height: 3rem;

    @media screen and (max-width: 786px) {
      width: 100%;
    }
  }

  .subtext {
    text-align: left;
    font-size: 1.75rem;
    color: #ccc;
  }

  .content__column {
    transition: color 0.5s cubic-bezier(0.62, 0.05, 0.01, 0.99);

    > div {
      margin-top: 3rem;
    }
  }

  &__column {
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    gap: 4rem;


    @media screen and (max-width: 786px) {
      gap: 5rem;
    }

    > div {
      display: flex;
      align-items: flex-start;
      flex-direction: column;

      > img {
        width: 40%;

        @media screen and (max-width: 786px) {
          width: 100%;
        }
      }

      > span {
        font-size: 2rem;
        text-align: center;
        width: 40%;
        font-weight: 500;
        line-height: 2.5rem;

        @media screen and (max-width: 786px) {
          width: 100%;
        }
      }
    }
  }
}
</style>