const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("here");
  res.sendStatus(500).json({ message: "error" });
  // res.send("hi");
});

app.listen(3000);
