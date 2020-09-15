// User
const express = require("express");
const router = express.Router();
const database = require("../../database/connect");
const service = require("./service")(database);

router.put("/", async (req, res) => {
  const isResult = await service.register(req);
  res.send(isResult);
});

router.patch("/", async (req, res) => {
  const isResult = await service.update(req);
  res.send(isResult);
});

router.delete("/", async (req, res) => {
  const isResult = await service.delete(req);
  res.send(isResult);
});

module.exports = router;
