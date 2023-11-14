<template>
  <h2 class="title">Upcoming Tournaments</h2>
  <div>
    <Tournament
      title="Vermont Open - November 18/19"
      format="4SS G60+30, Championship (1700+)/U1825/U1425, EF $50, Prizes $2000"
      link="https://new.uschess.org/2023-vermont-open"
      link_desc="Details here"
    />
    <Tournament 
      title="Northern Vermont Scholastics - November 26"
      format="4SS G30+0, Elementary (K-5), Middle School (6-8), HS (9-12), Adults, EF $5 advance, $10 onsite"
      link="https://new.uschess.org/northern-vermont-scholastics"
      link_desc="Details here"
    />
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
      title="3rd UVM Spring Open - February 3/4"
      format="4SS G90+30, Open/U1400, EF $50/$35, Prizes $500"
      link="https://new.uschess.org/3rd-uvm-spring-open"
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
