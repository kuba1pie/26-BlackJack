<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "GetDeckId",
  props: {
    msg: String,
  },
  methods: {
    loadData() {
      axios
        .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6")
        .then((response) => {
          console.clear();
          console.log("Deck_id: " + response.data.deck_id);
          this.$store.commit("deckIdToState", { item: response.data.deck_id });
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
body
  background-color: #333
</style>
