import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      sidebarVisible: false,
      dark: true,
      changing: false,
      route: '',
      popup: false,
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
    setPopup(state) {
      console.log('test')
      state.popup = true;

      setTimeout(() => {
        state.popup = false
      }, 3000)
    },
    setRoute(state, value) {
      state.route = value
    },
    closeSidebar(state) {
      state.sidebarVisible = false;
    },
    toggleDarkMode(state, value) {
        state.dark = value;
    },
    toggleChanging(state) {
      state.changing = true;

      setTimeout(() => {
        state.changing = false;
      }, 600);
    }
  },
});
