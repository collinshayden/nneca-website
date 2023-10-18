<template>
  <h2 class="title">Local Clubs in New England</h2>
  <div class="body">
    <p>
      This page is dedicated for chess clubs that are located within New
      England. Attending your local club is a great way to get involved with
      your local chess scene and meet like-minded folks. As this website is
      quite new, this list is by no means comprehensive. If you don't see your
      local club on this list, feel free to let us know about it or share this
      site with the organizer.
    </p>
    <p>
      If you would like your club to be featured on this page, email
      hayden.collins@uvm.edu.
    </p>
  </div>

  <div class="clubs">
    <Club
      title="University of Vermont Chess Club"
      desc="The UVM Chess Club is student led organization dedicated to playing, studying, and teaching chess. 
      We provide a relaxed space in which chess enthusiasts of all levels are welcome to come and enjoy the beautiful sport of chess."
      info="We are located on the UVM campus in Burlington VT, and meet twice a week on Wednesdays 6:30-8:30 and Sundays 12:30-2:30 in the Mt Mansfield Room of the Davis Center."
      contact="Email hayden.collins@uvm.edu for more details."
    />
  </div>
</template>

<script>
import Tournament from "./Tournament.vue";
import Club from "./Club.vue";
export default {
  components: { Tournament, Club },
};
</script>

<style>
.title {
  font-size: 1.6em;
}
.clubs {
  width: 70%;
  font-size: large;
  padding: 10px;
  margin: auto;
  text-align: center;
}
</style>
