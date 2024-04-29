<template>
  <h2 class="title">Upcoming Grand Prix Events</h2>
  <div>
    <Tournament
      title="Chess de Mayo - May 5"
      format="4SS G55d5, Premier(1600+), U1925, U1325, EF $55/40/30, Prizes $2000"
      link="https://new.uschess.org/chess-de-mayo"
      link_desc="Details here"
    />
    <Tournament
      title="2024 Bennington Spring Open - May 11"
      format="4SS G55+5, Open/U1750/U1350, EF $30, Prizes $670"
      link="https://new.uschess.org/bennington-spring-open-2024"
      link_desc="Details here"
    />
    <Tournament
      title="2024 New England Class Championship - June 15/16"
      format="5SS 3 G60+30 + 2 G90+30, Master-Expert/Class A/B/C/D/E, EF $120/$80 for A-D/$60 for E, Prizes $6500"
      link="https://new.uschess.org/2024-new-england-class-championship"
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
