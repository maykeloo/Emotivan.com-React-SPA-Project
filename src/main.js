import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/js/bootstrap.js'
import store from './store'
import VueMobileDetection from "vue-mobile-detection";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { RiChatSmile2Line, BiPatchCheckFill, BiShieldLockFill, BiPersonLinesFill, LaTelegramPlane } from "oh-vue-icons/icons";

// ICONS
addIcons(RiChatSmile2Line, BiPatchCheckFill, BiShieldLockFill, BiPersonLinesFill, LaTelegramPlane);

createApp(App).component("v-icon", OhVueIcon).use(VueMobileDetection).use(store).use(router).mount('#app')
