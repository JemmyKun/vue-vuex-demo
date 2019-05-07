import Vue from "vue";
import Router from "vue-router";

import Home from "pages/Home.vue";
import About from "pages/About.vue";
import Culture from "pages/Culture.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/about",
      component: About
    },
    {
      path: "/culture",
      component: Culture
    }
  ]
});
