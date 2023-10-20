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
    <h2>Vermont</h2>
    <Club
      title="University of Vermont Chess Club"
      desc="The UVM Chess Club is student led organization dedicated to playing, studying, and teaching chess. 
      We provide a relaxed space in which chess enthusiasts of all levels are welcome to come and enjoy the beautiful sport of chess."
      info="We are located on the UVM campus in Burlington VT, and meet twice a week on Wednesdays 6:30-8:30 and Sundays 12:30-2:30 in the Mt Mansfield Room of the Davis Center."
      contact="Contact Hayden Collins via hayden.collins@uvm.edu for more details."
    />
    <Club
      title="Chittenden County Chess Club"
      desc="Meeting every Saturday morning at the South Burlington Public Library on Market Street in South Burlington  VT, we are a group of chess enthusiasts from all ages and playing abilities. 
    We warmly welcome all those interested in playing and learning about chess with casual blitz from 10:30 to 11:00 and a G60/+30, USCF rated Swiss tournament game at 11:00. Blitz tournament once a month. 
    USCF membership is recommended to play a free weekly rated game, but not required. Children under 12 are welcome to compete but must be accompanied by a parent."
      contact="Contact Walter Chesnut via wmc@wmchesnut.com for more details."
    />
    <Club 
      title="Stowe Chess Club"
      desc="Casual play every Thursday 6:30-8pm at MC’s Penalty Box Sports Bar, 823 S Main St, Stowe VT."
      contact="Contact Peter Schmeeckle via oldcastlerecords@yahoo.com for more details. Location is temporary, check with Peter about current venue."
    />
    <h2>New Hampshire</h2>
    <Club
      title="Weare Woodpushers"
      desc="Rated club SS tournament play on Wednesday evenings (typically one round per week) for Weare and surrounding areas (Concord, Dunbarton, Henniker, Hopkinton, Goffstown, Hillsboro, etc.)"
      info="Wednesday Evenings, at the Hand in Hand Senior Center, 33 N. Stark Highway, Weare.  Doors open at 6 pm, arrive by 6:30 pm for play beginning at 6:45 pm. Check in advance to confirm scheduling."
      contact="Contact Greg Smith via weare.woodpushers.nh@gmail.com for more details."
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
@media only screen and (max-width: 700px){
  .clubs {
    width: 85%;
  }
}
</style>
