const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("asdf");
});
app.get("/aa", (req, res) => {
  res.send("aa");
});

app.listen(4000, () => {
  console.log("App working on post 4000");
});
