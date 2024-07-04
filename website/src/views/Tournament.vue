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
  padding: 1em 0;
  border-bottom: 1px solid #ddd;
}

h3 {
  font-size: 1.4em;
  color: #333;
}

p {
  margin: 0.5em 0;
}

a {
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s;
}

a:hover {
  color: #0056b3;
}
</style>

<style scoped>
p {
  text-align: center;
}
</style>