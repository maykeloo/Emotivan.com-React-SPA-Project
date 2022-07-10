<script>
import Navigation from "./components/Navigation.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  components: {
    Navigation,
    Sidebar,
  },
  data() {
    return {
      sidebarVisible: false,
    };
  },

  watch: {
    '$store.state.dark'(value) {
      if(value) {
        document.body.style.background = '#004643'
      } else {
        document.body.style.background = '#eff0f3'
      }
    }
  },
};
</script>

<template>
<div id="scroll-container" class="scroll-container">
  <main id="appcontent">
    <sidebar :visible="sidebarVisible"></sidebar>
    <navigation></navigation>
    <router-view></router-view>
  </main>
</div>  
</template>

<style lang="scss">
// font (POPPINS)
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

body {
  background: #eff0f3;
  transition: background 0.5s cubic-bezier(0.62, 0.05, 0.01, 0.99); 
  color: rgb(11, 9, 10);
}

* {
  box-sizing: border-box;
}


#appcontent {
  font-family: "Poppins", Helvetica, Arial, sans-serif;
  width: 75%;
  margin: 0 auto;
  margin-top: 2rem;
  position: relative;

  @media screen and (max-width: 786px) {
    width: 90%;
  }

  @media screen and (min-width: 2400px) {
    width: 50%;
  }
}

.fadeswipe-enter-active,
.fadeswipe-leave-active {
  transition: 0.7s cubic-bezier(0.62, 0.05, 0.01, 0.99);
  transition-delay: 0.50s;
}

.fadeswipe-enter-from {
  transform: translateY(30px);
  opacity: 0;
}


@media screen and (max-width: 768px) {
  html {
    font-size: 70%;
  }
}
@media screen and (min-width: 768px) {
  html {
    font-size: 53.33333333%;
  }
}
@media screen and (min-width: 1024px) {
  html {
    font-size: 71.111111%;
  }
}
@media screen and (min-width: 1200px) {
  html {
    font-size: 83.333333%;
  }
}
@media screen and (min-width: 1440px) {
  html {
    font-size: 100%;
    background: none;
  }
}
</style>
