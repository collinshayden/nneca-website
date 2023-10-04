<template>
  <h1>New England Chess Association</h1>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'GrandPrix' }">Grand Prix</router-link> |
    <router-link :to="{ name: 'Team' }">Team Championship</router-link> |
    <router-link :to="{ name: 'Tournaments' }"
      >Upcoming Tournaments</router-link
    > |
    <router-link :to="{ name: 'EmailForm' }">Form</router-link> 
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #070a0d;
}

nav {
  padding: 30px;
  padding-top: 10px;
  font-size: large;
}

nav a {
  font-weight: bold;
  color: #0f76dd;
  font-size: large;
  text-decoration: none;
  padding: 4px;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: #060303;
  border: 1px solid black;
}

h1 {
  font-family:Georgia, 'Times New Roman', Times, serif;
}
</style>
