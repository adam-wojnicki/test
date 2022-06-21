const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("asdf");
});

app.listen(4000, () => {
  console.log("App working on post 4000");
});
