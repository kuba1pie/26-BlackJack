<template>
  <div class="card">
    <img :src="this.card.image" />
    <p>{{ this.card.value }}</p>
    <p></p>
  </div>
</template>

<script>
export default {
  name: "card",
  data: function() {
    return {};
  },
  props: {
    card: Object
  }
};
</script>
