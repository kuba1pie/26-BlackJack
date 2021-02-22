<template>
  <div class="Engine Item">
    <button v-on:click="hit">Hit</button>
    <button v-on:click="stand">Stand</button>
    <button v-on:click="hit">Double Down</button>
    <button v-on:click="ccc">Check</button>
  </div>
</template>

<script>
import { drawCard, check } from "@/components/helpers.js";
import store from "../store/index.js";
export default {
  name: "Engine",
  data: function() {
    return {
      cards: store.state.playerCards,
    };
  },
  methods: {
    ccc() {
      check(store.state.playerSum, store.state.croupierSum);
    },
    hit() {
      console.log("Hit");
      drawCard(store.state.deckId, 1, "player");
    },
    dealerDraw() {
      console.log(store.state.croupierSum);
      drawCard(store.state.deckId, 1, "dealer");
    },
    stand() {},
  },
  mounted() {
    drawCard(store.state.deckId, 2, "player");
    drawCard(store.state.deckId, 1, "croupier");
  },
};
</script>
