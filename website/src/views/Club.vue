<template>
  <div class="details">
    <h3>{{ title }}</h3>
    <p>{{ desc }}</p>
    <p>{{ info }}</p>
    <p>{{ contact }}</p>
  </div>
</template>

<script>
export default {
  props: ["title", "desc", "info", "contact"],
};
</script>

<style scoped>
.details {
  padding-bottom: 1em;
}
p {
  text-align: center;
}
</style>
