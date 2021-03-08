<template>
  <div class="Game Wrapper">
    <h1>Game: {{ this.$store.state.deckId }}</h1>
    <div class="Row">
      <Player />
      <Dealer />
      <Engine />
    </div>
    <div class="Row"><Bet /></div>
  </div>
</template>

<script>
import Player from "@/components/Player.vue";
import Dealer from "@/components/Dealer.vue";
import Engine from "@/components/Engine.vue";
import Bet from "@/components/Bet.vue";

export default {
  name: "Game",
  components: {
    Player,
    Bet,
    Dealer,
    Engine
  },
  data: function() {
    return {};
  }
};
</script>
<style lang="sass">
.Wrapper
  width: 100%
  margin: 0 auto
  .Row
    border: 1px solid red
    display: flex
    flex-flow: row
    justify-content: space-around
    padding: 1em
    margin: 3em 1em
    .Item
      width: 40%
      border: 1px solid green
      padding: 2em
      margin: 1em
      button
        margin: 0.5em 1em
        padding: 0.3em 0.8em
      .Card
        display: flex
        flex-flow: row
        img
          max-width: 100px
</style>
