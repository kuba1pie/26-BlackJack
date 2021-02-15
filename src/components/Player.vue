<template>
  <div class="Player Item">
    <h1>Player Cards</h1>

    <DrawCard v-bind:deckId="this.$store.state.deckId" v-bind:target="target" />
    <Card v-for="card in cards" v-bind:card="card" :key="card.code" />

    <div class="Row">
      <button>Hit</button>
      <button>Stand</button>
      <button>Double Down</button>
    </div>
  </div>
</template>

<script>
import DrawCard from "@/components/DrawCard.vue";
import Card from "@/components/Card.vue";

export default {
  name: "Player",
  data: function() {
    return { target: "player", cards: this.$store.state.playerCards };
  },
  components: { DrawCard, Card },
};
</script>
