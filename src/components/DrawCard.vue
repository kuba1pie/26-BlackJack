<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DrawCard",
  data: function() {
    return {
      deckId: "",
    };
  },
  methods: {
    loadData() {
      this.deckId = this.$store.state.deckId;
      axios
        .get(
          "https://deckofcardsapi.com/api/deck/" +
            this.deckId +
            "/draw/?count=2"
        )
        .then((response) => {
          console.log(response.data.cards);
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
