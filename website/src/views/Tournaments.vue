<template>
  <h2 class="title">Upcoming Grand Prix Events</h2>
  <div>
    <Tournament
      title="1st Concord Open - 3x Multiplier - June 29"
      format="4SS G55d5, Premier (1700+)/U1925/U1325, EF $55/$40/$30, Prizes $2000"
      link="https://new.uschess.org/1st-concord-open"
      link_desc="Details here"
    />
    <Tournament
      title="2nd Putney Summer Series - 1x Multiplier - July 7"
      format="4SS G45+5, Open/U1650, EF $20, Prizes $240"
      link="https://new.uschess.org/putney-summer-series-2"
      link_desc="Details here"
    />
    <Tournament
      title="3rd Putney Summer Series - 1x Multiplier - July 28"
      format="4SS G45+5, Open/U1650, EF $20, Prizes $240"
      link="https://new.uschess.org/putney-summer-series-3"
      link_desc="Details here"
    />
    <Tournament
      title="Northern New England G55 Championship - 2x Multiplier - August 8"
      format="4SS G55d5, Open, EF FREE to Festival players, $30 otherwise, Prizes $500"
      link="https://new.uschess.org/northern-new-england-chess-festival"
      link_desc="Details here"
    />
    <Tournament
      title="Northern New England Chess Festival - 4x Multiplier - August 9/10/11"
      format="6SS G90+30, Premier (1800+)/U2025/U1425, EF $150/$100/$80, Prizes $6000"
      link="https://new.uschess.org/northern-new-england-chess-festival"
      link_desc="Details here"
    />
    <Tournament
      title="1st Autumn Classic - 2x Multiplier - September 28/29"
      format="4SS G90+30, Open/U1700, EF $45/$30, Prizes $500"
      link="https://new.uschess.org/1st-autumn-classic"
      link_desc="Details here"
    />
    <Tournament
      title="1st Origami Open - 4x Multiplier - October 25-27"
      format="6SS 4 G60+30, 2 G90+30, 1700+/U1925/U1325, EF $125/90/65, Prizes $5500"
      link="https://new.uschess.org/1st-origami-open"
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
}
</style>
