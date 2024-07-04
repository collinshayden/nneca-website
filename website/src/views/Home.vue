<template>
  <div class="body">
    <h2>Welcome</h2>
    <p>
      Welcome to the official website of the Northern New England Chess
      Association! We are a new organization, founded by Hayden Collins and NM
      Joseph Truelson, with the aim to grow and support chess activity in New
      England. This chess association will be the governing body over the New
      England Grand Prix, a new series of tournaments starting in 2024.
    </p>
    <p>
      As we are located in Vermont and New Hampshire, our short-term focus will
      primarily be to grow chess in our local communities. We are hoping that
      directors from the rest of New England will include their events in the
      Grand Prix and aid in the growth of New England chess.
    </p>
    <h2>Get Involved</h2>
    <p>Want to see more chess in your area? Lets make it happen!</p>
    <p>
      Becoming a USCF tournament director is very easy, and can have a large
      impact on your local chess scene. All that is required to become a club
      level TD is filling out one form, emailing it to USCF, and then completing
      a SafeSport training, which takes about an hour. The form and other TD
      info can be found
      <a href="https://new.uschess.org/tournament-directors" target="_blank"
        >here</a
      >. We now have a NNECA USCF affiliate, so let us know if you would like to
      be added as a TD, which will allow you to run rated events. Players make
      up most of the TDs around here, so create whichever events you want to
      play in most! If you want any help or advice about directing events or
      participating in the Grand Prix, email me at hayden.collins@uvm.edu.
    </p>
    <p>
      Another great way to grow your local chess community is to start your own
      chess club. You may be surprised how many folks might attend your local
      club. Some clubs host a rated game every week, others are simply casual
      play. There is certainly demand for both, so I recommend doing whichever
      you would prefer to play in. If you would like to advertise on our clubs
      page, feel free to contact us.
    </p>
    <h2>Source Code</h2>
    <p>
      This website was created by Hayden Collins using Vue.js. The source code
      and commit history can be found on
      <a href="https://github.com/collinshayden/nneca-website" target="_blank"
        >GitHub</a
      >. If you're interested in creating a website of your own, feel free to
      clone the repository and modify it to fit your needs. If you want any
      help/advice, you're welcome to email me.
    </p>
    <h2>Contact</h2>
    <p style="text-indent: 0">
      Hayden Collins - hayden.collins@uvm.edu <br />
      Joesph Truelson - josephtruelson@gmail.com
    </p>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

html {
  background-color: #f0f2f5;
}

.body {
  width: 85%;
  font-size: 1.1em;
  padding: 2em;
  margin: auto;
  background-color: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  line-height: 1.6;
  margin-top: 1em;
}

h2 {
  font-family: "Roboto", sans-serif;
  color: #333;
  border-bottom: 2px solid #007bff;
  padding-bottom: 5px;
  margin-bottom: 15px;
}

p {
  font-size: 1em;
  text-indent: 1em;
}

a {
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s;
}

a:hover {
  color: #0056b3;
}

@media (max-width: 750px) {
  .body {
    width: 95%;
    padding: 0.5em;
  }

  h2 {
    font-size: 1.5em;
  }

  p {
    font-size: 1em;
  }
}
</style>
