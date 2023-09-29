<template>
  <div class="details">
    <h3>{{ title }}</h3>
    <p>{{ format }}</p>
    <a :href="link" target="_blank">Full details here</a>
  </div>
</template>

<script>
export default {
  props: ["title", "format", "link"],
};
</script>

<style></style>
