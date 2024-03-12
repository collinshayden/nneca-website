<template>
  <h2 class="title">Local Clubs in Northern New England</h2>
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
      info="We are located on the UVM campus in Burlington VT, and meet twice a week on Monday/Friday 5-7 in Marsh Life Science 129."
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
    <Club
      title="Bennington Area Chess Club"
      desc="Meets Sundays at various cafes in Bennington. Usually starts around 8:30."
      contact="Contact Andrew Palmer via palmera62@hotmail.com for specific details."
    />
    <Club
      title="Putney Chess Club"
      desc="Casual play every Thursday 5:30-7:30pm at the Putney Co-op. Club meetings resume November 16th. All ages & levels welcome."
      contact="Contact Dan Foster via fosterbalance@gmail.com for more details."
    />
    <h2>New Hampshire</h2>
    <Club
      title="Weare Woodpushers"
      desc="Rated club SS tournament play on Wednesday evenings (typically one round per week) for Weare and surrounding areas (Concord, Dunbarton, Henniker, Hopkinton, Goffstown, Hillsboro, etc.)"
      info="Wednesday Evenings, at the Hand in Hand Senior Center, 33 N. Stark Highway, Weare.  Doors open at 6 pm, arrive by 6:30 pm for play beginning at 6:45 pm. Check in advance to confirm scheduling."
      contact="Contact Greg Smith via weare.woodpushers.nh@gmail.com for more details."
    />
    <Club
      title="Plymouth NH Chess Club"
      desc="At this point we are a small informal club that does not have rated games, but if the interest and attendance are there, we can always try."
      info="Meets at the Pease Public Library, 1 Russell Street, downstairs, from 6PM to 8PM every Tuesday."
      contact="If you have any questions or concerns please email Doug Grant at dgrant116@gmail.com or call 603-444-6982. "
    />
    <Club
      title="Claremont Chess Club"
      desc="All ages and skill levels are welcome. Come play chess! This is an unstructured club where we just show up and play. We have 7 chess sets and clocks available for use. I do offer informal teaching to beginners. Other than that, most of us normally play 3 or 5 minute blitz so that we have the chance to rotate around and play with several opponents. "
      info="Claremont Chess Club meets at 6:00-8:30pm Monday nights at Arrowhead Recreation Center located on 18 Robert Easter Way Claremont NH 03743."
      contact="Contact Chris Soucy via csouce1@gmail.com for more details"
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

.clubs p {
  text-indent: 0;
}
@media only screen and (max-width: 700px) {
  .clubs {
    width: 85%;
  }
}
</style>
