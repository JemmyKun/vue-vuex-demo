import * as mutationType from "./mutationTypes";
import * as actionType from "./actionTypes";
export default {
  [actionType.HANDLE_COUNT]({ commit }) {
    setTimeout(() => {
      commit(mutationType.CHANGE_COUNT);
    }, 1500);
  }
};
