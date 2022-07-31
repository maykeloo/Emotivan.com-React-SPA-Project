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
  border: 1px solid black;
  border-radius: 0;
  .btn__text {
    color: black;
    font-size: 1.2rem;
  }

  &:hover {
    background: #f9bc69;
  }

  @media screen and (max-width: 786px) {
    width: 100%;
    justify-content: center;
  }
}


</style>