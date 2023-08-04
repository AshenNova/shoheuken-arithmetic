const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use("/", express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.send(fs.readFileSync("./index.html", "utf8"));
});

app.get("/arithmetic", (req, res) => {
  res.send(fs.readFileSync("./arithmetic.html", "utf8"));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
