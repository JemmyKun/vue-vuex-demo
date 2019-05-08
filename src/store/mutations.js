import * as mutationType from "./mutationTypes";

const mutations = {
  [mutationType.GET_COUNT](state) {
    state.count++;
  },
  [mutationType.CHANGE_COUNT](state) {
    let num = parseInt(Math.random() * 100);
    state.count += num;
  },
  [mutationType.GET_TOP_MOVIES](state, data) {
    state.topMovies = data;
  },
  [mutationType.DELETE_TOP_MOVIES](state, id) {
    state.topMovies.subjects = state.topMovies.subjects.filter(
      item => item.id !== id
    );
  }
};

export default mutations;
