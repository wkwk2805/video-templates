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

router.get("/success", (req, res) => {
  console.log(req.user);
  if (req.user) {
    res.json({ ok: true, message: "로그인 성공" });
  } else {
    res.json({ ok: false, message: "로그인 실패" });
  }
});

router.get("/failure", (req, res) => {
  res.json({ ok: false, message: "로그인 실패" });
});

router.get("/search/email", async (req, res) => {
  const email = await service.searchEmail(req);
  res.json({ email: email });
});

router.get("/search/password", async (req, res) => {
  await service.searchPassword(req);
});

module.exports = router;
