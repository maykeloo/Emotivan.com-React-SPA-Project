<template>
<div class="overflow">
  <div class="hidden" ref="slide">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    isInViewport(element) {
      if(!this.$refs.slide) return
      if(this.$refs.slide) {
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
    checkIf() {
        if(this.isInViewport(this.$refs.slide)) {
            this.$refs.slide.classList.add('showElement')
            window.removeEventListener('scroll', this.checkIf);
        }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.checkIf)    
  }
};
</script>

<style scoped>
.hidden {
  opacity: 0;
  width: fit-content;
  transform: translateY(50px);
}
.overflow {
  overflow: hidden;
}
.showElement {
  opacity: 1;
  transform: translate(0, 0);
  -webkit-transition: all 0.8s cubic-bezier(0.62, 0.05, 0.01, 0.99);
  -moz-transition: all 0.8s cubic-bezier(0.62, 0.05, 0.01, 0.99);
  transition: all 0.8s cubic-bezier(0.62, 0.05, 0.01, 0.99);
}
</style>