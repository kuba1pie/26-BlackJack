<template>
  <div class="Card">
    <img :src="this.card.image" />
  </div>
</template>

<script>
export default {
  name: "Card",
  data: function() {
    return {};
  },
  props: {
    card: Object
  }
};
</script>
