import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { deckId: "", playerCards: [], croupierCards: [] },
  mutations: {
    deckIdToState(state, payload) {
      state.deckId = payload.item;
    },
    playerCards(state, payload) {
      state.playerCards.push(payload.item);
    },
    croupierCards(state, payload) {
      state.croupierCards.push(payload.item);
    }
  },
  actions: {},
  modules: {}
});
