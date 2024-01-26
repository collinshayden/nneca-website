<template>
  <body>
    <div>
      <h2>Join our mailing list!</h2>
      <form id="form" ref="myform">
        <label for="name">Full Name:</label><br />
        <input type="text" id="name" name="name" required /><br />
        <label for="email">Email:</label><br />
        <input type="email" id="email" name="email" required /><br />
        <p>
          The following questions are optional, but will help us get to know our
          demographic better.
        </p>
        <label for="location">Where are you located?</label><br />
        <textarea id="location" name="location"></textarea><br />
        <label for="hear"
          >How did you hear about the New England Chess Association?</label
        ><br />
        <textarea id="hear" name="hear"></textarea><br />
        <label for="events"
          >What type of events would you like to see more of?</label
        ><br />
        <textarea id="events" name="events"></textarea><br />
        <label for="suggestions">Do you have any suggestions for us?</label
        ><br />
        <textarea id="suggestions" name="suggestions"></textarea><br />
        <label for="other">Anything else you'd like to tell us?</label><br />
        <textarea id="other" name="other"></textarea><br />
        <button type="submit" id="submit">Submit</button>
      </form>
    </div>
  </body>
</template>

<script>
export default {
  // the following JS sents the form data to a google sheet
  // from this tutorial: https://dev.to/kromate/connecting-your-html-forms-to-a-google-spreadsheet-p9h
  mounted() {
    let foo = document.createElement("script");
    const form = document.querySelector("#form");
    const submitButton = document.querySelector("#submit");
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxmwEPjlxpwIJZvKaT_ZOopJy4eR_udI8grA2XTbaHXwGvZQ4ZF52dupxHqGG_u4mCsYg/exec";

    form.addEventListener("submit", (e) => {
      submitButton.disabled = true;
      e.preventDefault();
      let requestBody = new FormData(form);
      fetch(scriptURL, { method: "POST", body: requestBody })
        .then((response) => {
          alert("Success!", response);
          submitButton.disabled = false;
        })
        .catch((error) => {
          alert("Error!", error.message);
          submitButton.disabled = false;
        });
    });
    this.$refs.myform.appendChild(foo);
  },
};
</script>

<style scoped>
label {
  font-size: 1.3em;
}
input {
  width: 20%;
  padding: 0.6em;
  border-radius: 7px;
  border: 2px solid gray;
}
textarea {
  width: 40%;
  height: 3em;
  border-radius: 7px;
  border: 2px solid gray;
}
p {
  font-size: 1.3em;
  text-indent: 0;
}
#submit {
  width: 8%;
  min-width: 100px;
  height: 2em;
  font-size: 1em;
  background-color: white;
}
</style>
