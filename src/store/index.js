import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    deckId: "",
    wallet: 2000,
    bet: 0,
    playerCards: [],
    playerSum: 0,
    dealerSum: 0,
    dealerCards: [],
    deckStatus: "",
  },
  mutations: {
    GET_DECKID(state, payload) {
      state.deckId = payload;
    },
    STATUS_DECKID(state, payload) {
      state.deckStatus = payload;
    },
    RESET(state) {
      state.dealerCards = [];
      state.playerCards = [];
      state.dealerSum = 0;
      state.playerSum = 0;
      state.wallet = 2000;
    },
    SET_BET(state, payload) {
      state.bet = payload.value;
    },
    ADD_TO_WALLET(state, payload) {
      state.wallet += payload.betValue;
    },
    SUB_FROM_WALLET(state, payload) {
      state.wallet -= payload.betValue;
    },
    PUSH_PLAYER_CARDS(state, cards) {
      let i;
      for (i = 0; i < cards.length; i++) {
        const value = cards[i].value;
        if (value == "KING" || value == "QUEEN" || value == "JACK") {
          cards[i].points = 10;
        } else if (value == "ACE") {
          alert("AS!");
          cards[i].points = 10;
        } else {
          cards[i].points = parseInt(value);
        }
        state.playerCards.push(cards[i]);
        state.playerSum += cards[i].points;
      }
    },
    PUSH_DEALER_CARDS(state, cards) {
      let i;
      for (i = 0; i < cards.length; i++) {
        const value = cards[i].value;
        if (value == "KING" || value == "QUEEN" || value == "JACK") {
          cards[i].points = 10;
        } else if (value == "ACE") {
          alert("AS!");
          cards[i].points = 10;
        } else {
          cards[i].points = parseInt(value);
        }
        state.dealerCards.push(cards[i]);
        state.dealerSum += cards[i].points;
      }
    },
  },
  actions: {
    async getDeck(context) {
      context.commit("STATUS_DECKID", "loading");
      return axios
        .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        .then((response) => {
          context.commit("GET_DECKID", response.data.deck_id);
          context.commit("STATUS_DECKID", "done");
        });
    },
    async getCards(context, payload) {
      let user = payload.user.toUpperCase();
      return axios
        .get(
          "https://deckofcardsapi.com/api/deck/" +
            payload.deckId +
            "/draw/?count=" +
            payload.count
        )
        .then((response) => {
          context.commit("PUSH_" + user + "_CARDS", response.data.cards, user);
        })
        .catch(function(error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
    },
  },
});
