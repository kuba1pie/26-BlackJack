<template>
  <div class="Engine Item">
    <button v-on:click="hit" id="btnHit">Hit</button>
    <button v-on:click="stand" id="btnStand">Stand</button>
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
    ...mapState(["playerSum", "dealerSum", "deckId"]),
  },
  methods: {
    ...mapActions(["getCards"]),
    hit() {
      this.getCards({ user: "player", deckId: this.deckId, count: 1 })
        .then(() => {
          if (this.playerSum > 21) {
            this.stand();
          }
        })
        .catch(() => {
          // error callback function
        });
    },
    check() {
      if (this.dealerSum < 22) {
        if (this.dealerSum - this.playerSum > 0) {
          console.log("you loose");
        } else if (this.dealerSum == this.playerSum) {
          console.log("remis");
        } else if (
          Math.abs(this.dealerSum - 21) < Math.abs(this.playerSum - 21)
        ) {
          console.log("dealer wins");
        } else if (
          Math.abs(this.dealerSum - 21) > Math.abs(this.playerSum - 21)
        ) {
          console.log("you win");
        } else {
          console.log("error");
        }
      } else if (
        Math.abs(this.dealerSum - 21) < Math.abs(this.playerSum - 21)
      ) {
        console.log("dealer wins");
      } else if (
        Math.abs(this.dealerSum - 21) > Math.abs(this.playerSum - 21)
      ) {
        console.log("you win");
      } else {
        console.log("error12");
      }
    },
    stand() {
      document.getElementById("btnHit").style.display = "none";
      document.getElementById("btnStand").style.display = "none";
      this.getCards({ user: "dealer", deckId: this.deckId, count: 1 }).then(
        () => {
          if (this.dealerCards >= 17) {
            this.check();
          } else {
            this.getCards({
              user: "dealer",
              deckId: this.deckId,
              count: 1,
            }).then(() => {
              this.check();
            });
          }
        }
      );
    },
  },
};
</script>
