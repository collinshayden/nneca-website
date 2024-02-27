<template>
  <div class="home">
    <div class="body">
      <h2>Welcome</h2>
      <p>
        Welcome to the official website of the Northern New England Chess
        Association! We are a new organization, founded by Hayden Collins and NM
        Joseph Truelson, with the aim to grow and support chess activity in New
        England. This chess association will also be the governing body over the
        New England Grand Prix and the New England Amateur Team Championship,
        both of which are new events that will be launched in 2024.
      </p>
      <p>
        As we are located in Vermont and New Hampshire, our short-term focus
        will primarily be to grow chess in our local communities. We are hoping
        that directors from the rest of New England will include their events in
        the Grand Prix and aid in the growth of New England chess.
      </p>
      <h2>Get Involved</h2>
      <p>Want to see more chess in your area? Lets make it happen!</p>
      <p>
        Becoming a USCF tournament director is very easy, and can have a large
        impact on your local chess scene. All that is required to become a club
        level TD is filling out one form and emailing it to USCF. The form and
        other TD info can be found
        <a href="https://new.uschess.org/tournament-directors" target="_blank"
          >here</a
        >. We now have a NNECA USCF affiliate, so let us know if you would like
        to be added as a TD, which will allow you to run rated events. Players
        make up most of the TDs around here, so create whichever events you want
        to play in most! If you want any help or advice about directing events
        or participating in the Grand Prix, email me at hayden.collins@uvm.edu.
      </p>
      <p>
        Another great way to grow your local chess community is to start your
        own chess club. You may be surprised how many folks might attend your
        local club. Some clubs host a rated game every week, others are simply
        casual play. There is certainly demand for both, so I recommend doing
        whichever you would prefer to play in. If you would like to advertise on
        our clubs page, feel free to contact us.
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
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style>
.body {
  width: 70%;
  font-size: large;
  padding: 10px;
  margin: auto;
  text-align: left;
}

html {
  background-color: #b0cee8;
}
p {
  font-size: 1.15em;
  text-indent: 2em;
}
</style>
