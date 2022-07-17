<template>
  <footer :style="[dark && 'color: #eff0f3']">
    <div class="footer__top"> 
        <div class="column__first">
            <img v-if="!dark" src="@/assets/emotiovan.svg" alt="">
            <img v-else src="@/assets/emotiovan-light.svg" alt="">
            <span class="column__first-text">Feel emotions</span>
            <span>emotivan@outlook.com</span>
        </div>
        <div class="column">
            <span class="column__title">Everything</span>
            <router-link :style="[dark && 'color: #eff0f3']" to="/"><span>Home</span></router-link>
            <router-link :style="[dark && 'color: #eff0f3']" to="/about"><span>About</span></router-link>
            <router-link :style="[dark && 'color: #eff0f3']" to="/services"><span>Services</span></router-link>
        </div>
    </div>
    <div class="footer__bottom">
        <span>© emotivan 2022. All rights reserved. Privacy policy</span>
        <div class="footer__bottom-links">
            <a :style="[dark && 'color: #eff0f3']" href="">tw</a>
            <a :style="[dark && 'color: #eff0f3']" href="">fb</a>
            <a :style="[dark && 'color: #eff0f3']" href="">li</a>
        </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: ['dark']
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