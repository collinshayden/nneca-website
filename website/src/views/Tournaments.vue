<template>
  <h2 class="title">Upcoming Grand Prix Events</h2>
  <div>
    <Tournament
      title="Nashua Grand Prix Tornado - February 17"
      format="4SS G55d5, Premier (1600+), U2025, U1625, U1225, EF $50/$40/$35/$30, Prizes $2400"
      link="https://onlineregistration.cc/tournaments/index.php?view=zNTizdLa&tid=m6Ciog=="
      link_desc="Details here"
    />
    <Tournament
      title="1st Warner Open - March 9"
      format="4SS G/55 d5, Premier (1600+), U1925, U1325, EF $55/$40/$30, Prizes $2000"
      link="https://new.uschess.org/1st-warner-open"
      link_desc="Details here"
    />
    <Tournament
      title="1st Burlington Bloom - March 23/24"
      format="TBD - fill out interest form below!"
      link="https://forms.gle/L3PfJSfTMfAfJHca6"
      link_desc="Interest form"
    />
    <Tournament
      title="1st Penguin Festival - April 6/7"
      format="5SS 3 rds G60+30 + 2 rds 90+30, Emperor (1600+), Magellanic (U1925), Little Blue (U1325), EF $120/$80/$60, Prizes $4100"
      link="https://new.uschess.org/1st-penguin-festival"
      link_desc="Details here"
    />
    <Tournament
      title="1st New England Amateur Team Championship - April 13/14"
      format="4SS G90+30, U1800 (avg), EF $200/team, Prizes $2000"
      link="https://newenglandchess.org/team"
      link_desc="Details here"
    />
    <Tournament
      title="2024 Bennington Spring Open - May 11"
      format="4SS G55+5, Open/U1750/U1350, EF $30, Prizes $670"
      link="https://new.uschess.org/bennington-spring-open-2024"
      link_desc="Details here"
    />
  </div>
  <h2 class="title">Upcoming Non-Grand Prix Events</h2>
  <div>
    <Tournament
      title="March Chess Madness - March 2"
      format="4SS G30+0 Grades 1-6 (Scholastic Only), Free Entry, Bennington VT"
      link="https://www.chessonthehill.com/marchmadness"
      link_desc="Details here"
    />
    <Tournament
      title="2024 Vermont Speed Chess & 960 Championships - March 3"
      format="960 - 4SS G10+5, Blitz - 7SS G3+2, Bullet 6SS 5 game matches - G1+1"
      link="https://new.uschess.org/2024-vermont-speed-960-chess-championships"
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
