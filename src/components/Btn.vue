<template>
  <span class="button">
    <slot></slot>
  </span>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.button {
  padding: 1rem 2rem;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 500;
  background: #004eff;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  

  @media screen and (max-width: 786px) {
    width: 100%;
    justify-content: center;
  }
}
</style>