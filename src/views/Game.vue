<template>
  <div class="Game">
    <div class="left">
      <p>Wallet:</p>
      <p>{{ wallet }}</p>
    </div>
    <Dealer />
    <Engine />
    <Player />
    <div class="right">
      <p>
        Bet:
      </p>
      <p>{{ bet }}</p>
    </div>
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
