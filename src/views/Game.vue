<template>
  <div class="Game">
    <Dealer />
    <div class="Screen">
      <p>Wallet:</p>
      <p>{{ wallet }}</p>
      <p>
        Bet:
      </p>
      <p>{{ bet }}</p>
      <Engine />
    </div>
    <Player />
  </div>
</template>

<script>
import Player from "@/components/Player.vue";
import Dealer from "@/components/Dealer.vue";
import Engine from "@/components/Engine.vue";

import { mapState } from "vuex";
export default {
  name: "Game",
  components: {
    Player,
    Dealer,
    Engine,
  },
  computed: {
    ...mapState(["wallet", "bet"]),
  },
  data: function() {
    return {};
  },
};
</script>
<style lang="sass"></style>
