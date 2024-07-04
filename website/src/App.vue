<template>
  <div id="app">
    <h1>Northern New England Chess Association</h1>
    <nav class="nav">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li>
          <router-link :to="{ name: 'GrandPrix' }">Grand Prix</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Standings' }">GP Standings</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Tournaments' }"
            >Upcoming Tournaments</router-link
          >
        </li>
        <li><router-link :to="{ name: 'Clubs' }">Clubs</router-link></li>
        <li>
          <router-link :to="{ name: 'EmailForm' }">Mailing List</router-link>
        </li>
      </ul>
    </nav>
    <div class="content-container">
      <div class="logo left">
        <p>Northern</p>
        <p>New England</p>
        <img
          src="../src/assets/logo.png"
          width="150"
          height="150"
          alt="Northern New England Chess Association logo"
        />
        <p>Chess</p>
        <p>Association</p>
      </div>
      <div class="main-content">
        <router-view />
      </div>
      <div class="logo right">
        <p>Northern</p>
        <p>New England</p>
        <img
          src="../src/assets/logo.png"
          width="150"
          height="150"
          alt="Northern New England Chess Association logo"
        />
        <p>Chess</p>
        <p>Association</p>
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #070a0d;
}

nav {
  padding: 20px;
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

nav a {
  font-weight: bold;
  color: #007bff;
  font-size: 1.1em;
  text-decoration: none;
  margin: 0 10px;
  transition: color 0.3s;
}

nav a:hover {
  color: #0056b3;
}

nav a.router-link-exact-active {
  color: #000;
  border-radius: 4px;
  border: 1px solid #000;
  padding: 4px 8px;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}

nav li {
  margin: 0 10px;
  position: relative;
}

nav li::after {
  content: "|";
  position: absolute;
  right: -15px;
  color: #007bff;
}

nav li:last-child::after {
  content: "";
}

h1 {
  font-family: "Georgia", serif;
  margin-top: 20px;
}

img {
  display: block;
  margin: 10px auto;
}

.content-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
}

.main-content {
  flex-grow: 1;
  width: 70%;
  padding: 0 20px;
}

.logo {
  width: 15%;
}

.logo.left {
  order: -1;
}

.logo.right {
  order: 1;
}

.logo p {
  text-indent: 0;
  text-align: center;
}

.nav li {
  display: inline;
}

.nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

@media (max-width: 1000px) {
  .logo {
    display: none;
  }
}

@media (max-width: 885px) {
  nav ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  nav li {
    margin: 0.3em 0;
  }

  nav li::after {
    content: "";
  }
}
</style>
