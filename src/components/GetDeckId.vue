<template>
  <div class="GetDeckId"></div>
</template>

<script>
import axios from "axios";
export default {
  name: "GetDeckId",
  methods: {
    loadData() {
      axios
        .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        .then(response => {
          this.$store.commit("deckIdToState", { item: response.data.deck_id });
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  },
  mounted() {
    this.loadData();
    this.$store.commit("reset");
  }
};
</script>
