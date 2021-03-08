<template>
  <div class="home">
    <router-link :to="{ path: '/game' }">Start Game</router-link>
    <h1>Home: {{ deckId }}</h1>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "Home",
  data: function() {
    return {};
  },
  computed: {
    ...mapState(["deckId"])
  },
  methods: {
    ...mapActions(["getDeck"]),
    ...mapMutations(["RESET"])
  },
  async mounted() {
    this.RESET();
    await this.getDeck();
  }
};
</script>
