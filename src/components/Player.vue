<template>
  <div class="Player Item">
    <h1>Player Cards</h1>
    <button v-on:click="hit">Hit</button>
    <button v-on:click="stand">Stand</button>
    <button v-on:click="hit">Double Down</button>
    <div class="Row">
      <Card v-for="card in cards" v-bind:card="card" :key="card.code" />
    </div>

    <div class="Row">Points: {{ this.$store.state.playerSum }}</div>

    <div v-if="this.$store.state.playerSum > 21">
      Deler Wins
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import { drawCard } from "@/components/helpers.js";

export default {
  name: "Player",
  data: function() {
    return {
      cards: this.$store.state.playerCards,
    };
  },
  methods: {
    hit() {
      console.log("Hit");
      drawCard(this.$store.state.deckId, 1, "player");
      if (this.$store.state.playerSum > 21) {
        console.log("dealer wins");
      }
    },
    stand() {
      console.log("Stand");
      drawCard(this.$store.state.deckId, 1, "croupier");
      if (this.$store.state.croupierSum < 21) {
        drawCard(this.$store.state.deckId, 1, "croupier");
      }
    },
  },
  mounted() {
    drawCard(this.$store.state.deckId, 2, "player");
  },
  components: { Card },
};
</script>
