// Comment
const express = require("express");
const router = express.Router();
const database = require("../../database/connect");
const service = require("./service")(database);

router.put("/", (req, res) => {
  service.insert(req);
});

router.patch("/", (req, res) => {
  service.update(req);
});

router.delete("/", (req, res) => {
  service.delete(req);
});

module.exports = router;
