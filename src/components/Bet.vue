<template>
  <div class="Bet">
    <p>Place Your Bet:</p>
    <div class="Tokens">
      <button
        v-for="number in numbers"
        :key="number"
        class="btnBet"
        v-on:click="setBet(number)"
      >
        {{ number }}
      </button>
    </div>
    <div class="BetValue">
      <p>Your Bet Value:</p>
      <p>{{ bet }}</p>
    </div>
    <div class="Wallet">
      <p>Your Wallet Value:</p>
      {{ wallet }}
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Bet",
  data: function() {
    return {
      numbers: ["clear", 5, 10, 25, 50, 100, 200]
    };
  },
  props: {
    card: Object
  },
  computed: {
    ...mapState(["wallet", "bet"])
  },
  methods: {
    ...mapMutations(["SET_BET"]),
    setBet(val) {
      this.SET_BET({ value: val });
    }
  }
};
</script>
