<template>
  <div class="contact-wrapper">
    <swiping-text class="toLeft">
      <h1 class="contact-title">Rozpocznijmy projekt</h1>
    </swiping-text>
    <swiping-text>
      <p class="contact-subtitle">Perhaps there’s a way your business could benefit by partnering with BB Agency? Please
        share your thoughts in the form below, and we’ll respond within 48 hours of receiving the inquiry.</p>
    </swiping-text>
    <ContactFormular></ContactFormular>
    <FooterComponent :dark="true"></FooterComponent>
  </div>
</template>

<script setup>
import SwipingText from '@/components/SwipingText.vue';
import ContactFormular from './ContactFormular.vue';
import FooterComponent from '@/components/FooterComponent.vue';

</script>

<style scoped lang="scss">
  .contact-wrapper {
    padding-top: 10rem;

    .contact-title {
      font-size: 4rem;
      text-align: left;
    }

    .contact-subtitle {
      font-size: 2rem;
      margin-top: 1rem;
      text-align: left;
    }
  }
</style>