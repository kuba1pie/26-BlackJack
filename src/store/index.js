import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    deckId: "",
    playerCards: [],
    playerSum: 0,
    croupierSum: 0,
    croupierCards: []
  },
  mutations: {
    deckIdToState(state, payload) {
      state.deckId = payload.item;
    },
    playerCards(state, payload) {
      state.playerCards.push(payload.item);
      state.playerSum += payload.sum;
    },
    croupierCards(state, payload) {
      state.croupierCards.push(payload.item);
      state.croupierSum += payload.sum;
    },
    reset(state) {
      state.croupierCards = [];
      state.playerCards = [];
      state.croupierSum = 0;
      state.playerSum = 0;
    }
  },
  actions: {},
  modules: {}
});
