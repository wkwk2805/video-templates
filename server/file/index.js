// File
const express = require("express");
const router = express.Router();
const service = require("./service")();

router.get("/", (req, res) => {
  res.send("Hello File");
});

module.exports = router;
