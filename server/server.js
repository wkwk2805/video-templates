const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3005;

const user = require("./user");
const post = require("./post");
const file = require("./file");
const like = require("./like");
const comment = require("./comment");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/user", user);
app.use("/post", post);
app.use("/file", file);
app.use("/like", like);
app.use("/comment", comment);

app.listen(PORT, () => {
  console.log(`Connected ${PORT}port!`);
});
