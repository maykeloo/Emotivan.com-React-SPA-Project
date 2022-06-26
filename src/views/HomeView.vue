<template>
  <div class="home">
    <header-component></header-component>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import HeaderComponent from '@/components/Sections/Home/HeaderComponent.vue';

export default {
  name: 'HomeView',
  components: {
    Navigation,
    HeaderComponent
}
}
</script>

<style lang="scss" scoped>
  .home {
    padding-top: calc(60px + 10rem);

    @media screen and (max-width: 786px) {
      padding-top: calc(60px + 6rem);
    }
  }
</style>
