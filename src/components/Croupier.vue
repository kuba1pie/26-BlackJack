<template>
  <div class="Croupier Item">
    <h1>Croupier Cards</h1>

    <DrawCard v-bind:deckId="this.$store.state.deckId" v-bind:target="target" />
    <Card v-for="card in cards" v-bind:card="card" :key="card.code" />
  </div>
</template>

<script>
import DrawCard from "@/components/DrawCard.vue";
import Card from "@/components/Card.vue";

export default {
  name: "Croupier",
  data: function() {
    return { target: "croupier", cards: this.$store.state.croupierCards };
  },
  components: { DrawCard, Card },
};
</script>
