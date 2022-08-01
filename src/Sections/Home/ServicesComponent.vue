<template>
  <div class="content" >
    <slideup class="toLeft">
      <h2 ref="services">Co jeszcze zapewniamy?</h2>
    </slideup>
    <slideup>
      <p class="subtext">Let me introduce you to further advantages.</p>
    </slideup>
    <div class="content__column" >
      <div >
        <slideup>
        <span class="title__and-icon" >
          <span>Privacy</span>
          <v-icon name="bi-patch-check-fill" scale="3" />
        </span>
        </slideup>
        <slideup>
          <p class="text__content">
            As my principal, your details and those of your future site remain only in our correspondence. You don't have to worry about the MARKET COMPETITION finding out!
          </p>
        </slideup>
      </div>
      <div >
      <slideup>
        <span class="title__and-icon" >
          <span>Security</span>
          <v-icon name="bi-shield-lock-fill" scale="3" />
        </span>
        </slideup>
        <slideup>
          <p class="text__content">
          Once the site has been created, I can still remain its admin, take care of its status as well as up-to-date certification or domains.
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
};
</script>

<style scoped lang="scss">
.content {
  margin-top: 7.5rem;

  h2 {
    color: black;
    text-align: center;
    font-weight: 600;
    font-size: 4rem;
    padding-bottom: 0.5rem;
    text-align: center;
    margin-bottom: 0;

    @media screen and (max-width: 786px) {
      font-size: 3.5rem;
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
    gap: 1rem;
    align-items: center;

    > span {
      font-size: 3.5rem;
      font-weight: 600;
      line-height: 3.5rem;
      text-align: left;
    }

    @media screen and (max-width: 786px) {
      align-items: center;
    }
  }

  .text__content {
    width: 50%;
    font-size: 2rem;
    line-height: 3rem;
    margin-top: 1rem;
    display: block;

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
  }

  &__column {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin-top: 4rem;

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