import * as mutationType from "./mutationTypes";

const mutations = {
  [mutationType.GET_COUNT](state) {
    state.count++;
  },
  [mutationType.CHANGE_COUNT](state) {
    let num = parseInt(Math.random() * 100);
    state.count += num;
  }
};

export default mutations;
