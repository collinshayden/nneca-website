<template>
  <div>
    <h2>2024 New England Grand Prix Standings</h2>
    <p>
      This page is dedicated to display the live standings of the current 2024
      Grand Prix. The data is pulled from
      <a
        href="https://docs.google.com/spreadsheets/d/1sUah6u_FEgw35qm7nhImlAmHUlXG5V3zD0vq2hqaI00/edit?usp=sharing"
        target="_blank"
        >this spreadsheet</a
      >, which includes the breakdown of points by event, links to players' USCF
      profiles, the ability to sort by different columns, and details of the
      current prize fund. If you believe there to be an error in the standings,
      please reach out to Joseph Truelson.
    </p>
  </div>
  <div class="table-container">
    <table>
      <tr
        v-for="(row, index) in rows"
        :key="index"
        :class="{ 'bold-row': index === 0 }"
      >
        <td>{{ row[0] }}</td>
        <td>{{ row[1] }}</td>
        <td>{{ row[2] }}</td>
        <td>{{ row[3] }}</td>
        <td>{{ row[4] }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      rows: [],
    };
  },
  async created() {
    const response = await axios.get(
      "https://sheets.googleapis.com/v4/spreadsheets/1sUah6u_FEgw35qm7nhImlAmHUlXG5V3zD0vq2hqaI00/values/Standings!A1:E271",
      {
        params: {
          // this is an API key that gives read access to Google Sheets owned by a Google account specifically made for this page.
          // while not the best practice to put an API key in a public GitHub repo, there are no security issues as this is the
          // only spreadsheet that will ever live on this account.
          key: "AIzaSyAw5QCd93cJMneomg2V8dW87RFB-UXsaiI",
        },
      }
    );
    console.log("Response data:", response.data);
    this.rows = response.data.values;
  },
};
</script>

<style scoped>
.table-container {
  width: 100%;
}

.table-container table {
  width: 60%;
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
}

.table-container td {
  text-align: center;
  vertical-align: middle;
  border: 1px solid black;
  padding: 10px;
}

.bold-row {
  font-weight: bold;
}

p {
  width: 60%;
  padding: 10px;
  padding-bottom: 1.8em;
  margin: auto;
  text-align: left;
  font-size: 1.3em;
  text-indent: 2em;
}

@media (max-width: 600px) {
  p {
    width: 75%;
  }
  .table-container td {
    padding: 5px;
  }
}

@media (max-width: 400px) {
  p {
    width: 80%;
  }
  .table-container td {
    padding: 2px;
    font-size: 0.8em;
  }
}
</style>
