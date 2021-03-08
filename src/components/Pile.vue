<template>
  <div class="hello">
    <button v-on:click="loadData('dealer', cards)">Pile dealer</button>
    <button v-on:click="loadData('player')">Pile Player</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Pile",
  data: function() {
    return {};
  },
  methods: {
    loadData: function(pileId, cards) {
      axios
        .post(
          "https://deckofcardsapi.com/api/deck/" +
            this.deckId +
            "/pile/" +
            pileId +
            "/add/?cards=" +
            cards
        )
        .then(response => {
          response;
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  },
  props: ["deckId", "cards"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.hello
  border: 1px solid red
</style>
