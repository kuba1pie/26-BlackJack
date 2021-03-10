<template>
  <div class="Engine Item">
    <button v-on:click="hit" id="btnHit">Hit</button>
    <button v-on:click="stand" id="btnStand">Stand</button>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "Engine",
  data: function() {
    return {};
  },
  computed: {
    ...mapState(["playerSum", "dealerSum", "deckId", "bet"]),
  },
  methods: {
    ...mapActions(["getCards"]),
    ...mapMutations(["ADD_TO_WALLET", "SUB_FROM_WALLET"]),
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
    win() {
      this.ADD_TO_WALLET({ betValue: this.bet });
      console.log(this.bet);
    },
    loose() {
      this.SUB_FROM_WALLET({ betValue: this.bet });
    },
    remis() {},
    check() {
      if (this.dealerSum < 22) {
        if (this.dealerSum - this.playerSum > 0) {
          console.log("you loose");
          this.loose();
        } else if (this.dealerSum == this.playerSum) {
          console.log("remis");
          this.loose();
        } else if (
          Math.abs(this.dealerSum - 21) < Math.abs(this.playerSum - 21)
        ) {
          console.log("dealer wins");
          this.loose();
        } else if (
          Math.abs(this.dealerSum - 21) > Math.abs(this.playerSum - 21)
        ) {
          console.log("you win");
          this.win();
        } else {
          console.log("error");
        }
      } else if (
        Math.abs(this.dealerSum - 21) < Math.abs(this.playerSum - 21)
      ) {
        console.log("dealer wins");
        this.loose();
      } else if (
        Math.abs(this.dealerSum - 21) > Math.abs(this.playerSum - 21)
      ) {
        console.log("you win");
        this.win();
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
