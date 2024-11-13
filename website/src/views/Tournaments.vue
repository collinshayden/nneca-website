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
  </div>
  <div>
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
