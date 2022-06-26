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
};
</script>

<template>
  <main id="appcontent">
    <sidebar :visible="sidebarVisible"></sidebar>
    <navigation></navigation>
    <router-view></router-view>
  </main>
</template>

<style lang="scss">
// font (PROMPT)
@import url("https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

body {
  background: #89b0ae;
}

* {
  color: #042826;
}

#appcontent {
  font-family: "Prompt", Helvetica, Arial, sans-serif;
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

.button {
  padding: 0.25rem 2rem;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
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
