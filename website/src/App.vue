<template>
  <div class="logo">
    <p>Northern</p>
    <p>New England</p>
    <img
      src="../src/assets/logo.png"
      width="100"
      height="100"
      alt="Northern New England Chess Association logo"
    />
    <p>Chess Association</p>
  </div>
  <h1>Northern New England Chess Association</h1>
  <nav class="nav">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><div class="pipe">|</div></li>
      <li>
        <router-link :to="{ name: 'GrandPrix' }">Grand Prix</router-link>
      </li>
      <li><div class="pipe">|</div></li>
      <li>
        <router-link :to="{ name: 'Team' }">Team Championship</router-link>
      </li>
      <li><div class="pipe">|</div></li>
      <li>
        <router-link :to="{ name: 'Tournaments' }"
          >Upcoming Tournaments</router-link
        >
      </li>
      <li><div class="pipe">|</div></li>
      <li>
        <router-link :to="{ name: 'Clubs' }">Clubs</router-link>
      </li>
      <li><div class="pipe">|</div></li>
      <li>
        <router-link :to="{ name: 'EmailForm' }">Mailing List</router-link>
      </li>
    </ul>
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
}

nav a {
  font-weight: bold;
  color: #0f76dd;
  font-size: 1.3em;
  text-decoration: none;
  padding: 6px;
}

nav a.router-link-exact-active {
  color: #060303;
  border-radius: 4px;
  border: 1px solid black;
}

h1 {
  font-family: Georgia, "Times New Roman", Times, serif;
}

img {
  display: block;
  margin: auto;
}

.logo {
  float: left;
  position: absolute;
  top: 1%;
  left: 1.5%;
  text-align: center;
  display: block;
}

.nav li {
  display: inline-block;
  margin: auto;
  padding: 0.1em;
}

.nav ul {
  list-style-type: none;
  text-align: center;
  display: inline-block;
  margin: auto;
  padding: 0;
}
@media only screen and (max-width: 1050px) {
  .logo {
    scale: 0;
  }
}
@media only screen and (max-width: 750px) {
  nav {
    margin: auto;
    padding: 0;
  }
  nav a {
    margin: auto;
    padding: 0.05em;
  }
  .nav li {
    display: block;
    padding: 0.15em;
  }
  .pipe {
    scale: 0;
    padding: 0;
    margin: 0;
    display: none;
  }
  .logo {
    scale: 0;
  }
}
</style>
