<script>
import Logo from "./svg/Logo.vue";
import Btn from "./svg/Btn.vue";

export default {
  components: {
    Logo,
    Btn,
  },
  mounted() {
    console.log();
  },
  methods: {
    setSidebar() {
      this.$store.commit("setSidebar");
      console.log(this.$store.state.sidebarVisible);
    },
  },
};
</script>

<template>
  <nav id="navigation">
    <Logo />
    <div class="navigation__buttons">
      <btn>Rozpocznij projekt</btn>
      <button @click="setSidebar()" :class="[{opened: this.$store.state.sidebarVisible}, 'menu']" aria-label="Main Menu">
      <svg width="60" height="50" viewBox="0 0 100 100">
        <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
        <path class="line line2" d="M 20,50 H 80" />
        <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
      </svg>
    </button>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
#navigation {
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  align-items: center;
  z-index: 10;
  height: 60px;
}

.navigation__buttons {
  display: flex;
  gap: 2rem;
  align-items: center;

  @media screen and (max-width: 786px) {
    gap: 1rem;
  }
}
.button {
  background: #ffd6ba;

  @media screen and (max-width: 786px) {
    padding: 0.25rem 1rem;
  }
}

.menu {
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;
  height: fit-content;
}
.line {
  fill: none;
  stroke: white;
  stroke-width: 4;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
.line1 {
  stroke-dasharray: 60 207;
  stroke-width: 4;
}
.line2 {
  stroke-dasharray: 60 60;
  stroke-width: 4;
}
.line3 {
  stroke-dasharray: 60 207;
  stroke-width: 4;
}
.opened .line1 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 4;
}
.opened .line2 {
  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
  stroke-width: 4;
}
.opened .line3 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 4;
}

</style>
