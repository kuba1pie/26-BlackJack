<template>
  <div class="Player Item">
    <h1>Player Cards</h1>
    <div class="Row">
      <Card v-for="card in cards" v-bind:card="card" :key="card.code" />
    </div>

    <div class="Row">Points: {{ this.$store.state.playerSum }}</div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "Player",
  data: function() {
    return {
      cards: this.$store.state.playerCards
    };
  },
  components: { Card }
};
</script>
