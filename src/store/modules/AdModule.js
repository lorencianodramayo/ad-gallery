export const AdModule = {
  namespaced: true,
  state: {
    isFilterOpen: false
  },

  mutations: {
    SET_FILTER(state, filter) {
      state.isFilterOpen = filter;
    }
  },

  actions: {
    setUser({ commit }, filter) {
      commit("SET_FILTER", filter);
    }
  }
};
