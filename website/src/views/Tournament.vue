<template>
  <div class="details">
    <h3>{{ title }}</h3>
    <p>{{ format }}</p>
    <a :href="link" target="_blank">{{ link_desc }}</a>
  </div>
</template>

<script>
export default {
  props: ["title", "format", "link", "link_desc"],
};
</script>

<style>
  .details {
    padding-bottom: 1em;
  }
</style>
