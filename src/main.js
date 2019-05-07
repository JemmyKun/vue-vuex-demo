import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import "./app.scss";

// 全局的pub/sub
Vue.prototype.$bus = new Vue();

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
