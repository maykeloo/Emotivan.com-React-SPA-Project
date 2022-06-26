<template>
  <transition name="sidebar">
    <aside v-if="this.$store.state.sidebarVisible" id="sidebar">
      <div class="sidebar__content">
        <div class="sidebar__leftside">
          <router-link @click="toggleSidebar()" to=""
            ><swiping-text v-if="this.$store.state.sidebarVisible"
              >Home</swiping-text
            ></router-link
          >
          <router-link @click="toggleSidebar()" to=""
            ><swiping-text v-if="this.$store.state.sidebarVisible"
              >About me</swiping-text
            ></router-link
          >
          <router-link @click="toggleSidebar()" to=""
            ><swiping-text v-if="this.$store.state.sidebarVisible"
              >Services</swiping-text
            ></router-link
          >
          <router-link @click="toggleSidebar()" to=""
            ><swiping-text v-if="this.$store.state.sidebarVisible"
              >Blog</swiping-text
            ></router-link
          >
        </div>
        <div class="sidebar__rightside">
          <span>+48 514 010 099</span>
          <span>forge@outlook.com</span>
          <span>forge.</span>
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

<style lang="scss">
#sidebar {
  width: 100vw;
  height: 100vh;
  z-index: 9;
  position: fixed;
  top: 0;
  left: 0;
  background: #555b6e;
  display: flex;
  align-items: center;

  @media screen and (max-width: 786px) {
    align-items: flex-end;
  }
}

.sidebar {
  &__content {
    width: 80%;
    margin: 0 auto;
    height: 60%;
    display: flex;

    @media screen and (max-width: 786px) {
      width: 90%;
      flex-direction: column;
      height: 90%;
      padding-bottom: 1rem;
      gap: 2rem;
    }
  }

  &__leftside {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 786px) {
      width: 100%;
      justify-content: unset;
      gap: 1rem;
      justify-content: center;
    }

    span {
      font-size: 6rem;
      font-weight: 500;
      color: #faf9f9;

      @media screen and (max-width: 786px) {
        font-size: 4rem;
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
    justify-content: flex-end;
    align-items: flex-end;

    @media screen and (max-width: 786px) {
      width: 90%;
    }

    > span {
      color: #faf9f9;
      font-size: 1.5rem;
      font-weight: 200;
    }
  }

  &__links {
    display: flex;
    gap: 1rem;
    font-size: 1.5rem;
    margin-top: 1.5rem;
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