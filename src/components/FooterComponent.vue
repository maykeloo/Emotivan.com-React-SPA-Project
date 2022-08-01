<template>
  <footer :style="[dark && 'color: black']">
    <div class="footer__top"> 
        <div class="column__first">
            <Slideup v-if="!dark">
              <img  src="@/assets/emotiovan.svg" alt="">
            </Slideup>
            <Slideup v-else >
              <img src="@/assets/emotiovan-light.svg" alt="">
            </Slideup>
            <Slideup>
              <span class="column__first-text">Feel emotions</span>
            </Slideup>
            <Slideup>
              <span>emotivan@outlook.com</span>
            </Slideup>
        </div>
        <div class="column">
            <Slideup>
              <span class="column__title">Everything</span>
            </Slideup>
            <Slideup>
              <router-link :style="[dark && 'color: black']" to="/"><span>Home</span></router-link>
            </Slideup>
            <Slideup>
              <router-link :style="[dark && 'color: black']" to="/about"><span>About</span></router-link>
            </Slideup>
            <Slideup>
              <router-link :style="[dark && 'color: black']" to="/services"><span>Services</span></router-link>
            </Slideup>
        </div>
    </div>
    <div class="footer__bottom">
        <Slideup>
          <span>© emotivan 2022. All rights reserved. Privacy policy</span>
        </Slideup>
        <div class="footer__bottom-links">
            <Slideup>
              <a :style="[dark && 'color: black']" href="">tw</a>
            </Slideup>
            <Slideup>
              <a :style="[dark && 'color: black']" href="">fb</a>
            </Slideup>
            <Slideup>
              <a :style="[dark && 'color: black']" href="">li</a>
            </Slideup>
        </div>
    </div>
  </footer>
</template>

<script>
import Slideup from './Slideup.vue';
export default {
    props: ["dark"],
    components: { Slideup, Slideup, Slideup, Slideup, Slideup }
}
</script>

<style scoped lang="scss">


footer {
  display: flex;
  flex-direction: column;
  margin-top: 7.5rem;
  padding-bottom: 5rem;
  color: #0b090a;
}

.footer__top {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media screen and (max-width: 786px) {
    flex-direction: column;
    align-items: unset;
    gap: 1.5rem;
  }
}

.footer__bottom {
  display: flex;
  gap: 3rem;
  margin-top: 3rem;
  justify-content: space-between;

  > .footer__bottom-links {
    display: flex;
    gap: 1rem;

    > a {
      color: #f9bc69;
    }
  }
}

.column__first {
  display: flex;
  flex-direction: column;
  width: 20%;
  gap: 2rem;
  justify-content: space-between;

  @media screen and (max-width: 786px) {
    width: 100%;
    gap: 1rem;
  }

  &-text {
    font-size: 1.2rem;
    font-weight: 600;
  }

  img {
    width: 10rem;
  }
}

.column {
  display: flex;
  gap: 1rem;

  a {
    color: black;
  }

  @media screen and (max-width: 786px) {
    flex-direction: row;
    justify-content: space-between;
  }

  &__title {
    margin-bottom: 0.5rem;  
    font-weight: 600;
  }
}

</style>