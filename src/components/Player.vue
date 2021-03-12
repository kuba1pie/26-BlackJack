<template>
  <div class="Player Item">
    <p>Player</p>

    <div class="Row">Points: {{ playerSum }}</div>
    <div class="Row">
      <Card v-for="card in playerCards" v-bind:card="card" :key="card.code" />
    </div>
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
    ...mapState(["playerCards", "playerSum", "deckId"]),
  },
  methods: {
    ...mapActions(["getCards"]),
  },
  async mounted() {
    await this.getCards({ user: "player", deckId: this.deckId, count: 2 });
  },
  components: { Card },
};
</script>
