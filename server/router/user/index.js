// User
const express = require("express");
const router = express.Router();
const database = require("../../database/connect");
const service = require("./service")(database);

router.get("/", (req, res) => {
  res.send("Hello User");
});

module.exports = router;
