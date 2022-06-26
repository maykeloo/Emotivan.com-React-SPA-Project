import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      sidebarVisible: false,
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
  },
  actions: {},
  modules: {},
});
