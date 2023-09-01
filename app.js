const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello CopyCat🐱 updated at 0901");
});

module.exports = app;
