<template>
  <div class="Croupier Item">
    <h1>Croupier Cards</h1>

    <div class="Row Cards">
      <Card v-for="card in cards" v-bind:card="card" :key="card.code" />
    </div>
    <div class="Row">Points: {{ this.$store.state.croupierSum }}</div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  name: "Croupier",
  data: function() {
    return {
      cards: this.$store.state.croupierCards
    };
  },
  components: { Card }
};
</script>
