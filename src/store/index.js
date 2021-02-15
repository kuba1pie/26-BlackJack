import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { deckId: ""},
  mutations: {
    deckIdToState(state, payload) {
      state.deckId = (payload.item);
    },
  },
  actions: {},
  modules: {},
});
