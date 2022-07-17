<template>
  <div class="overflow">
    <transition name="swipeup" appear>
      <span :style="{ color: `#${color}` }">
        <slot></slot>
      </span>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.overflow {
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 786px) {
    justify-content: flex-start;
  }
  &.toLeft {
    justify-content: flex-start;
  }

  span {
    display: inline-block;

    @media screen and (max-width: 786px) {
      display: block;
      width: 100%;
    }
  }
}
.swipeup-enter-active,
.swipeup-leave-active {
  transition: 0.7s cubic-bezier(0.62, 0.05, 0.01, 0.99);
  transition-delay: 0.5s;
}

.swipeup-enter-from {
  transform: translateY(100%);
}
</style>