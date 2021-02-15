<template>
  <div class="home">
    <router-link :to="{ path: '/game' }">Start Game</router-link>
    <GetDeckId />
    <h1>Home: {{ this.$store.state.deckId }}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import GetDeckId from "@/components/GetDeckId.vue";

export default {
  name: "Home",
  components: {
    GetDeckId
  },
  data: function() {
    return {};
  },
  mounted() {
    console.log("Home");
  }
};
</script>
