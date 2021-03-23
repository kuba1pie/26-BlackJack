<template>
  <div class="Home">
    <Bet />
    <div class="Start">
      <router-link :to="{ path: '/game' }" v-if="bet" class="btnStart"
        >Start Game</router-link
      >
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

import Bet from "@/components/Bet.vue";
export default {
  name: "Home",
  data: function() {
    return {};
  },
  components: {
    Bet
  },
  computed: {
    ...mapState(["deckId", "bet"])
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
