<template>
  <div class="Engine Item">
    <button v-on:click="hit">Hit</button>
    <button v-on:click="stand">Stand</button>
    <button v-on:click="hit">Double Down</button>
    <button v-on:click="ccc">Check</button>
  </div>
</template>

<script>
import store from "../store/index.js";
import { mapState, mapActions } from "vuex";
export default {
  name: "Engine",
  data: function() {
    return {
      cards: store.state.playerCards,
    };
  },
  computed: {
    ...mapState(["playerCards", "deckId"]),
  },
  methods: {
    ...mapActions(["getCards"]),
    hit() {
      console.log("Hit");
      this.getCards({ user: "player", deckId: this.deckId, count: 1 });
    },
    dealerDraw() {
      this.getCards({ user: "dealer", deckId: this.deckId, count: 1 });
    },
    stand() {
      this.getCards({ user: "dealer", deckId: this.deckId, count: 1 });
    },
  },
};
</script>
