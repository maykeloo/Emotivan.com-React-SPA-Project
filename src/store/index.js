import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      sidebarVisible: false,
      dark: true
    };
  },
  getters: {},
  mutations: {
    setSidebar(state) {
      if (state.sidebarVisible) {
        state.sidebarVisible = false;
      } else {
        state.sidebarVisible = true;
      }
    },
    toggleDarkMode(state, value) {
        state.dark = value;
    }
  },
  actions: {},
  modules: {},
});
