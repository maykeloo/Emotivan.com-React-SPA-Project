<template>
  <span class="button">
    <span class="btn__text">
      <slot name="slot1"></slot>
    </span>
    <slot name="slot2"></slot>
  </span>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
svg {
  z-index: 1;
}

.button {
  padding: 1rem 2rem;
  cursor: pointer;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  z-index: 1;
  background: #f9bc69;
  border-radius: 0;
  .btn__text {
    color: #eff0f3;
    font-size: 1.2rem;
  }

  &:hover {
    border-color: #abd1c6;
    &:after {
      width: 100%;
      opacity: 1;
    }

    svg {
      fill: #f9bc69;
    }
  }

  &:after {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      background: #abd1c6;
      width: 0%;
      opacity: 0;
      height: 100%;
      transition: 0.3s cubic-bezier(0.62, 0.05, 0.01, 0.99);
      z-index: -1;
  }

  
  @media screen and (max-width: 786px) {
    width: 100%;
    justify-content: center;
  }
}


</style>