import tournament

<template>
  <h1>Upcoming Tournaments</h1>
  <div>
    <Tournament
      title="1st UVM Fall Open - October 14/15"
      format="4SS G80+10, Open/U1400, EF $45/$30"
      link="https://new.uschess.org/1st-uvm-fall-open-national-chess-day"
    />
    <Tournament
      title="1st Nashua Tornado - October 21"
      format="4SS G55d5, Premier (1400+)/U1875/U1275, EF $55/$40/$30"
      link="https://new.uschess.org/1st-nashua-tornado-0"
    />
    <Tournament
      title="Bennington Fall Open - October 28"
      format="4SS G60+5, Open/U1750/U1350, EF $25"
      link="https://new.uschess.org/bennington-fall-open-2023"
    />
    <Tournament
      title="Vermont Open - November 18/19"
      format="4SS G60+30, Championship (1700+)/U1825/U1425, EF $50"
      link="https://new.uschess.org/2023-vermont-open"
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
#footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding-top: 5px;
    margin: auto;
    text-align: center;
  }
@media only screen and (max-width:600px) {
  #footer {
    position: relative;
    
  }
}

</style>
