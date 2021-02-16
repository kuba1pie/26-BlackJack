<template>
  <div class="hello">
    <button v-on:click="loadData">Greet</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DrawCard",
  data: function() {
    return {
      cards: [],
      deck: this.deckId,
      comt: this.target + "Cards",
    };
  },
  methods: {
    loadData: function() {
      axios
        .get(
          "https://deckofcardsapi.com/api/deck/" +
            this.deckId +
            "/draw/?count=" +
            this.count
        )
        .then((response) => {
          this.cards = response.data.cards;
          let i;
          for (i = 0; i < this.cards.length; i++) {
            const value = this.cards[i].value;
            if (value == "KING" || value == "QUEEN" || value == "JACK") {
              this.cards[i].points = 10;
            } else if (value == "ACE") {
              alert("AS!");
              this.cards[i].points = 10;
            } else {
              this.cards[i].points = parseInt(value);
            }
            this.$store.commit(this.comt, {
              item: this.cards[i],
              sum: this.cards[i].points,
            });
          }
        })
        .catch((e) => {
          console.log(e);
          //this.errors.push(e);
        });
    },
  },
  props: {
    deckId: {
      type: String,
      default: "wmd9bw7ldlcy",
    },
    count: {
      type: Number,
      default: 2,
    },
    target: {
      type: String,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.hello
  border: 1px solid red
</style>
