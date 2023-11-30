<template>
  <h2 class="title">Upcoming Tournaments</h2>
  <div>
    <Tournament
      title="Upper Valley Action - December 10"
      format="4SS G25d5, Open, EF $20, Prizes $200"
      link="https://new.uschess.org/uvchess-121023-action-g25d5"
      link_desc="Details here"
    />

    <Tournament
      title="1st RAR Open - December 16"
      format="4SS G55d5, Premier (1600+)/U2025/U1225, EF $50/$35/$30, Prizes $2500"
      link="https://new.uschess.org/1st-rar-open"
      link_desc="Details here"
    />
    <Tournament
      title="New England Grand Prix Inaugural Event - January 13"
      format="4SS G55d5, Premier (1600+), U2125, U1825, U1525, U1225, EF $50/$40/$35/$30/$25, Prizes $2700"
      link="https://onlineregistration.cc/tournaments/index.php?view=zNTizdLa&tid=m6CioQ=="
      link_desc="Details here"
    />
    <Tournament
      title="3rd UVM Spring Open - February 3/4"
      format="4SS G90+30, Open/U1400, EF $50/$35, Prizes $500"
      link="https://new.uschess.org/3rd-uvm-spring-open"
      link_desc="Details here"
    />
    <Tournament
      title="Nashua Grand Prix Tornado - February 17"
      format="4SS G55d5, Premier (1600+), U2025, U1625, U1225, EF $50/$40/$35/$30, Prizes $2400"
      link="https://onlineregistration.cc/tournaments/index.php?view=zNTizdLa&tid=m6Ciog=="
      link_desc="Details here"
    />
    <Tournament
      title="1st New England Amateur Team Championship - March 23/24"
      format="4SS G90+30, U1800 (avg), EF $200/team, Prizes $2000"
      link="https://newenglandchess.org/team"
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

<style>
.title {
  font-size: 1.6em;
}
</style>
