<template>
  <div class="Bet">
    <h2>bet</h2>
    <button
      v-for="number in numbers"
      :key="number"
      class="btnBet"
      v-on:click="setBet(number)"
    >
      {{ number }}
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Bet",
  data: function() {
    return {
      numbers: [10, 20, 50, 100, 200],
    };
  },
  props: {
    card: Object,
  },
  computed: {
    ...mapState(["wallet", "bet"]),
  },
  methods: {
    ...mapMutations(["SET_BET"]),
    setBet(val) {
      this.SET_BET({ value: val });
    },
  },
};
</script>
