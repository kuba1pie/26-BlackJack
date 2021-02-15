<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <GetDeckId />
    <DrawCard />
  </div>
</template>

<script>
// @ is an alias to /src
import GetDeckId from "@/components/GetDeckId.vue";
import DrawCard from "@/components/DrawCard.vue";

export default {
  name: "Home",
  components: {
    GetDeckId,
    DrawCard,
  },
};
</script>
