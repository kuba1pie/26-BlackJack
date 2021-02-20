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

export default {
  name: "Engine",
  data: function() {
    return {
      cards: this.$store.state.playerCards,
    };
  },
  methods: {
    ccc() {
      check(this.$store.state.playerSum, this.$store.state.croupierSum);
    },
    hit() {
      console.log("Hit");
      drawCard(this.$store.state.deckId, 1, "player");
      setTimeout(this.ccc(), 3000);
    },
    stand() {
      //
      console.log("Stand");
      drawCard(this.$store.state.deckId, 1, "croupier");
      //let croupierSum = this.$store.state.croupierSum;
      //check(this.$store.state.playerSum, this.$store.state.croupierSum);
      console.log("dealer to >17 and check");
      console.log(this.$store.state.croupierSum);
      if (this.$store.state.croupierSum < 17) {
        drawCard(this.$store.state.deckId, 1, "croupier");
        setTimeout(console.log(this.$store.state.croupierSum), 30000);
      }
      // do {
      // drawCard(this.$store.state.deckId, 1, "croupier");
      //setTimeout(console.log(this.$store.state.croupierSum), 3000);
      //} while (this.$store.state.croupierSum < 17);
      //drawCard(this.$store.state.deckId, 1, "croupier");
      //croupierSum = croupierSum + 1;
      //console.log(croupierSum);
      //console.log("delaer sum: " + this.$store.state.croupierSum);
      //console.log(croupierSum);
      //console.log("delaer sum: " + this.$store.state.croupierSum);
      //console.log("delaer stop");
      //console.log("delaer check");
    },
  },
  mounted() {
    drawCard(this.$store.state.deckId, 2, "player");
    drawCard(this.$store.state.deckId, 1, "croupier");
  },
};
</script>
