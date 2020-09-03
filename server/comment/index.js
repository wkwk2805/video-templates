const express = require("express");
const router = express.Router();
const service = require("./service")();

router.get("/", (req, res) => {
  service.insert();
  res.send("Hello Comment");
});

module.exports = router;
