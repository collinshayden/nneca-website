<template>
  <div class="body">
    <h2 class="title">Upcoming Grand Prix Events</h2>
    <p>
      This page is dedicated to listing all the upcoming New England Grand Prix
      events. New events will be added as they are planned, so fear not if the
      list is getting short! If you would like to direct a Grand Prix event,
      please reach out! We are hoping to expand the amount of GP events, and
      need more directors to help!
    </p>
    <p>
      Note: The New England Chess Festival that was planned for mid-August at
      Magdalen College has unfortunately been cancelled. The venue backed out
      because the campus is being sold and they didn't want liability issues.
      Total bummer, and we apologize for those of you who were excited to play.
      Checkout the 1st Origami Open for our next major GP event!
    </p>
  </div>
  <div>
    <Tournament
      title="1st Autumn Classic - 2x Multiplier - September 28/29"
      format="4SS G90+30, Open/U1700, EF $45/$30, Prizes $500"
      link="https://new.uschess.org/1st-autumn-classic"
      link_desc="Details here"
    />
    <Tournament
      title="Bennington Fall Open - 2x Multiplier - October 5"
      format="4SS G60+5, Open/U1750/U1350, EF $30, Prizes $780"
      link="https://new.uschess.org/bennington-fall-open"
      link_desc="Details here"
    />
    <Tournament
      title="1st Origami Open - 4x Multiplier - October 25-27"
      format="6SS 4 G60+30, 2 G90+30, 1700+/U1925/U1325, EF $125/90/65, Prizes $5500"
      link="https://new.uschess.org/1st-origami-open"
      link_desc="Details here"
    />
    <Tournament
      title="2024 Vermont Open - 3x Multiplier - November 15-17"
      format="5SS 40/90 SD/30 +30, Championship (1700+)/U1825/U1425, EF $55, Prizes $2000"
      link="https://new.uschess.org/vermont-open"
      link_desc="Details here"
    />
  </div>
  <div id="footer">
    <p>
      If you would like your tournament featured on this page, please email the
      details to hayden.collins@uvm.edu.
    </p>
  </div>
</template>

<script>
import Tournament from "./Tournament.vue";
export default {
  components: { Tournament },
};
</script>

<style scoped>
.title {
  font-size: 1.6em;
}
p {
  text-indent: 0;
  text-align: center;
}
</style>
