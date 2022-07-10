<template>
  <footer>
    <div class="footer__top"> 
        <div class="column__first">
            <img src="@/assets/forge.svg" alt="">
            <span class="column__first-text">We challange core assumptions.</span>
            <span>info@bb.agency</span>
        </div>
        <div class="column">
            <span class="column__title">To o mnie</span>
            <span>Home</span>
            <span>Home</span>
            <span>Home</span>
        </div>
        <div class="column">
            <span class="column__title">To o mnie</span>
            <span>Home</span>
            <span>Home</span>
            <span>Home</span>
        </div>
        <div class="column">
            <span class="column__title">To o mnie</span>
            <span>Home</span>
            <span>Home</span>
            <span>Home</span>
        </div>
    </div>
    <div class="footer__bottom">
        <span>© BB Agency 2022. All rights reserved. Privacy policy</span>
        <div class="footer__bottom-links">
            <a href="">tw</a>
            <a href="">fb</a>
            <a href="">li</a>
        </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">

footer {
  display: flex;
  flex-direction: column;
  margin-top: 7.5rem;
  padding-bottom: 5rem;
}

.footer__top {
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 786px) {
    flex-direction: column;
    gap: 1.5rem;
  }
}

.footer__bottom {
  display: flex;
  gap: 3rem;
  margin-top: 3rem;
  justify-content: space-between;

  > div {
    display: flex;
    gap: 1rem
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
    width: 3rem;
  }
}

.column {
  display: flex;
  flex-direction: column;
  gap: 1rem;

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