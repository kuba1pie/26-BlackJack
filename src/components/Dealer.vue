<template>
  <div class="Dealer Item">
    <p>Dealer</p>
    <div class="Cards">
      <Card v-for="card in dealerCards" v-bind:card="card" :key="card.code" />
    </div>
    <p class="Points">Points: {{ dealerSum }}</p>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Dealer",
  data: function() {
    return {};
  },
  computed: {
    ...mapState(["dealerCards", "dealerSum", "deckId"])
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
