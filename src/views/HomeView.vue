<template>
  <div class="home">
    <header-component></header-component>
    <about-component></about-component>
    <offer-component></offer-component>
    <services-component></services-component>
    <process-component></process-component>
    <works-component></works-component>
    <project-component></project-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import HeaderComponent from '@/Sections/Home/HeaderComponent.vue';
import AboutComponent from '@/Sections/Home/AboutComponent.vue';
import ServicesComponent from '@/Sections/Home/ServicesComponent.vue';
import ProcessComponent from '@/Sections/Home/ProcessComponent.vue';
import WorksComponent from '@/Sections/Home/WorksComponent.vue';
import ProjectComponent from '@/Sections/Home/ProjectComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import OfferComponent from '@/Sections/Home/OfferComponent.vue';

export default {
  name: 'HomeView',
  components: {
    Navigation,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    ProcessComponent,
    WorksComponent,
    ProjectComponent,
    FooterComponent,
    OfferComponent
}
}
</script>

<style lang="scss" scoped>
  .home {
    padding-top: calc(60px + 2rem);

    @media screen and (max-width: 786px) {
      padding-top: 60px;
    }
  }
</style>
