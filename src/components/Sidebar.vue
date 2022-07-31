<template>
  <transition name="sidebar">
    <aside v-if="this.$store.state.sidebarVisible" id="sidebar">
      <div class="sidebar__content">
        <div class="sidebar__leftside">
          <span @click="toggleSidebar('/')"><swiping-text class="toLeft" v-if="this.$store.state.sidebarVisible"><span class="continuous-5">Strona główna</span></swiping-text></span>
          <span @click="toggleSidebar('/contact')"><swiping-text class="toLeft" v-if="this.$store.state.sidebarVisible"><span class="continuous-5">Kontakt</span></swiping-text></span>
          <span @click="toggleSidebar('/about')"><swiping-text class="toLeft" v-if="this.$store.state.sidebarVisible"><span class="continuous-5">O nas</span></swiping-text></span>
          <span @click="toggleSidebar('/services')"><swiping-text class="toLeft" v-if="this.$store.state.sidebarVisible"><span class="continuous-5">Usługi</span></swiping-text></span>
        </div>
        <div class="sidebar__rightside">
          <span>+48 514 010 099</span>
          <span>emotivan@outlook.com</span>
          <div class="sidebar__links">
            <a href="" target="_blank">tw</a>
            <a href="" target="_blank">fb</a>
            <a href="" target="_blank">li</a>
          </div>
        </div>
      </div>
    </aside>
  </transition>
</template>

<script>
import SwipingText from "./SwipingText.vue";
export default {
  components: {
    SwipingText,
  },
  props: {
    visible: {
      required: true,
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleSidebar(value) {
      this.$store.commit("setSidebar");
      this.$store.commit("toggleChanging")
      this.$router.push(value)
    },
  },
};
</script>

<style lang="scss" scoped>
#sidebar {
  width: 100vw;
  height: 100vh;
  z-index: 9;
  position: fixed;
  top: 0;
  left: 0;
  background: #BEE3DB;
  display: flex;
  color: black;
  align-items: center;

  @media screen and (max-width: 786px) {
    align-items: flex-end;
  }
}

.continuous-5 {
  transition: 0.7s;
  padding-bottom: 3px;
  background: 
     linear-gradient(currentColor 0 0) 
     var(--d, 201%) 100% /200% 3px 
     no-repeat;
}
.continuous-5:hover {
  --d: -101%;
}

.sidebar {
  &__content {
    width: 75%;
    margin: 0 auto;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 2.5rem;

    @media screen and (max-width: 786px) {
      width: 90%;
      height: 90%;
      padding-bottom: 1rem;
      justify-content: space-evenly;
      gap: 2rem;
    }
  }

  &__leftside {
    width: 100%;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 786px) {
      width: 100%;
      gap: 1rem;
      justify-content: center;
    }

    span {
      cursor: pointer;
      font-size: 6rem;
      font-weight: 300;
      height: fit-content;
      color: black;
      display: block;
      width: fit-content;

      @media screen and (max-width: 786px) {
        text-align: center;
        font-size: 4rem;
      }

      @media screen and (max-width: 1200px) {
          font-size: 4rem;
      }
    }
    a {
      text-decoration: none;
    }
  }

  &__rightside {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;

    @media screen and (max-width: 786px) {
      width: 90%;
      flex-direction: column;
      gap: 1rem;
    }

    > span {
      color: black;
      font-size: 1.5rem;
      font-weight: 300;
    }
  }

  &__links {
    display: flex;
    gap: 1rem;

    a {
      font-size: 1.5rem;
      color: black;
    }
  }
}
.line {
  display:inline-block;
  font-size:40px;
  font-family:sans-serif;
  margin:25px;
  padding-bottom:10px;
  cursor:pointer;
  background: linear-gradient(90deg, currentColor calc(100%/3), transparent 0 calc(200%/3), currentColor 0)  var(--d, 100%) 100% /300% 10px no-repeat;
  transition:0.5s;

  @media screen and (max-width: 786px) {
    margin: 0;
    background: linear-gradient(90deg, currentColor calc(100%/3), transparent 0 calc(200%/3), currentColor 0)  var(--d, 100%) 100% /300% 3px no-repeat;
  }

  &:hover {
    --d: 0%;
  }
}

.toLeft {
  justify-content: flex-start;

  @media screen and (max-width: 786px) {
    justify-content: center;
    > span {
      display: flex;
      justify-content: center;
    }
  }
}

// ANIMATIONS
.sidebar-enter-active {
  transition: 0.7s cubic-bezier(0.62, 0.05, 0.01, 0.99);
}
.sidebar-leave-active {
  transition: 0.3s cubic-bezier(0.62, 0.05, 0.01, 0.99);
}

.sidebar-enter-from {
  transform: translateY(100%);
}
.sidebar-leave-to {
  opacity: 0;
}
</style>