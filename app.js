const { default: axios } = require("axios");
const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.json("{hello}");
});

//Get all users
// axios
//   .get("https://reqres.in/api/users")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });


//Create a User
axios
  .post("https://reqres.in/api/users", {
    name: "Blini",
    job: "Fashion Designer",
  })
  .then((result) => {
    console.log(result.data);
  })
  .catch((err) => {
    console.log(err.message);
  });

app.listen(port, () => {
  console.log(`Running on ${port}`);
});
