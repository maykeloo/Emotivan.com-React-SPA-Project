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
  border-radius: 50px;

  .btn__text {
    color: #eff0f3;
    font-size: 1.2rem;
  }

  &:hover {
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
      border-radius: 50px;
      top: 0;
      left: 0;
      background: #faae44;
      width: 50%;
      opacity: 0;
      height: 100%;
      transition: 0.3s;
      z-index: -1;
  }

  
  @media screen and (max-width: 786px) {
    width: 100%;
    justify-content: center;
  }
}


</style>