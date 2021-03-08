<template>
  <div class="Dealer Item">
    <h1>dealer Cards</h1>

    <div class="Row Cards">
      <Card v-for="card in dealerCards" v-bind:card="card" :key="card.code" />
    </div>
    <div class="Row">Points: {{ this.$store.state.dealerSum }}</div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Player",
  data: function() {
    return {};
  },
  computed: {
    ...mapState(["playerCards", "deckId"])
  },
  methods: {
    ...mapActions(["getCards"])
  },
  async mounted() {
    await this.getCards({ user: "dealer", deckId: this.deckId, count: 1 });
  },
  components: { Card }
};
</script>
