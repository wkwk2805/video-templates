// File
const express = require("express");
const router = express.Router();
const database = require("../../database/connect");
const service = require("./service")(database);
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "server/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/upload", upload.array("assets"), (req, res) => {
  service.insert(req);
});

router.get("/download", async (req, res) => {
  const file = await service.getFilePath(req);
  res.download(file);
  await service.downloadCount(req);
});

module.exports = router;
