import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      sidebarVisible: false,
      changing: false,
      route: '',
      popup: {
        copy: false,
        email: false,
      },
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
      state.popup.copy = true;

      setTimeout(() => {
        state.popup.copy = false
      }, 3000)
    },
    setPopupResponse(state, value) {
      state.popup.email = value;
    },
    setRoute(state, value) {
      state.route = value
    },
    closeSidebar(state) {
      state.sidebarVisible = false;
    },
    toggleChanging(state) {
      state.changing = true;

      setTimeout(() => {
        state.changing = false;
      }, 600);
    }
  },
});
