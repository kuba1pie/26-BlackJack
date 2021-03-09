<template>
  <div class="Engine Item">
    <button v-on:click="hit">Hit</button>
    <button v-on:click="stand">Stand</button>
    <button>Check</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Engine",
  data: function() {
    return {};
  },
  computed: {
    ...mapState(["playerSum", "dealerSum", "deckId"])
  },
  methods: {
    ...mapActions(["getCards"]),
    hit() {
      this.getCards({ user: "player", deckId: this.deckId, count: 1 })
        .then(() => {
          if (this.playerSum > 21) {
            this.getCards({ user: "dealer", deckId: this.deckId, count: 1 });
            this.stand();
          }
        })
        .catch(() => {
          // error callback function
        });
    },
    check() {
      if (this.dealerSum - this.playerSum > 0) {
        console.log("you loose");
      } else if (this.dealerSum == this.playerSum) {
        console.log("remis");
      } else {
        console.log("you win");
      }
    },
    wh() {
      this.getCards({ user: "dealer", deckId: this.deckId, count: 1 }).then(
        () => {
          if (this.dealerSum - this.playerSum < 0) {
            console.log("you loose");
          } else if (this.dealerSum == this.playerSum) {
            console.log("remis");
          } else {
            console.log("you win");
          }
        }
      );
    },
    stand() {}
  }
};
</script>
