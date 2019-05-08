import Vue from "vue";
import Vuex from "vuex";

import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

const state = {
  topMovies: [],
  count: 0,
  list: [],
  home: {
    count: 0
  },
  about: {
    name: "",
    dataList: []
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
