<template>
  <transition name="sidebar">
    <aside v-if="this.$store.state.sidebarVisible" id="sidebar">
      <div class="sidebar__content">
        <div class="sidebar__leftside">
          <router-link @click="toggleSidebar()" to=""><swiping-text class="toLeft" v-if="this.$store.state.sidebarVisible"><span class="line">Home</span></swiping-text></router-link>
          <router-link @click="toggleSidebar()" to=""><swiping-text class="toLeft" v-if="this.$store.state.sidebarVisible"><span class="line">About me</span></swiping-text></router-link>
          <router-link @click="toggleSidebar()" to=""><swiping-text class="toLeft" v-if="this.$store.state.sidebarVisible"><span class="line">Services</span></swiping-text></router-link>
          <router-link @click="toggleSidebar()" to=""><swiping-text class="toLeft" v-if="this.$store.state.sidebarVisible"><span class="line">Blog</span></swiping-text></router-link>
        </div>
        <div class="sidebar__rightside">
          <span>+48 514 010 099</span>
          <span>forge@outlook.com</span>
          <div class="sidebar__links">
            <a href="" target="_blank">tw</a>
            <a href="" target="_blank">fb</a>
            <a href="" target="_blank">in</a>
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
    toggleSidebar() {
      this.$store.commit("setSidebar");
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
  background: white;
  display: flex;
  align-items: center;

  @media screen and (max-width: 786px) {
    align-items: flex-end;
  }
}

.sidebar {
  &__content {
    width: 75%;
    margin: 0 auto;
    height: 80%;
    display: flex;

    @media screen and (max-width: 786px) {
      width: 90%;
      flex-direction: column;
      height: 90%;
      padding-bottom: 1rem;
      justify-content: space-evenly;
      gap: 2rem;
    }
  }

  &__leftside {
    width: 60%;
    display: flex;
    text-align: left;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 786px) {
      width: 100%;
      justify-content: unset;
      gap: 1rem;
      justify-content: center;
    }

    span {
      font-size: 7rem;
      font-weight: 700;
      color: black;

      @media screen and (max-width: 786px) {
        font-size: 5rem;
        text-align: center;
      }
    }
    a {
      text-decoration: none;
    }
  }

  &__rightside {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    @media screen and (max-width: 786px) {
      width: 90%;
    }

    > span {
      color: #232325;
      font-size: 1.5rem;
      font-weight: 300;
    }
  }

  &__links {
    display: flex;
    gap: 1rem;
    font-size: 1.5rem;
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
  justify-content: flex-start !important;

  @media screen and (max-width: 786px) {

    > span {
      display: flex;
      justify-content: center !important;
    }
  }
}

// ANIMATIONS
.sidebar-enter-active,
.sidebar-leave-active {
  transition: 0.7s cubic-bezier(0.62, 0.05, 0.01, 0.99);
}

.sidebar-enter-from {
  transform: translateY(100%);
}
.sidebar-leave-to {
  opacity: 0;
}
</style>