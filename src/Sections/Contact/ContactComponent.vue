<template>
  <div class="contact-wrapper">

    <h1 class="contact-title" v-if="$isMobile()">
      <swiping-text class="toLeft">Rozpocznijmy</swiping-text> 
      <swiping-text class="toLeft">projekt</swiping-text>
    </h1>
    <h1 v-else class="contact-title">
      <swiping-text class="toLeft">Rozpocznijmy projekt</swiping-text>
    </h1>

    <span class="contact-subtitle" v-if="$isMobile()">
      <swiping-text class="toLeft delay">Perhaps there’s a way your </swiping-text>
      <swiping-text class="toLeft delay"> business could benefit by </swiping-text>
      <swiping-text class="toLeft delay"> partnering with BB Agency?</swiping-text> 
      <swiping-text class="toLeft delay">Please share your thoughts in</swiping-text>
      <swiping-text class="toLeft delay"> the form below, and we’ll </swiping-text> 
      <swiping-text class="toLeft delay"> respond within </swiping-text>  
      <swiping-text class="toLeft delay">48 hours of receiving</swiping-text>
      <swiping-text class="toLeft delay"> the inquiry.</swiping-text>
    </span>
    <span v-else class="contact-subtitle">
      <swiping-text class="toLeft delay">Perhaps there’s a way your business could benefit by partnering with BB Agency?</swiping-text> 
      <swiping-text class="toLeft delay">Please share your thoughts in the form below, and we’ll respond within </swiping-text>  
      <swiping-text class="toLeft delay">48 hours of receiving the inquiry.</swiping-text>
    </span>
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