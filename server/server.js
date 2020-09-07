const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3005;

const user = require("./router/user");
const post = require("./router/post");
const file = require("./router/file");
const like = require("./router/like");
const comment = require("./router/comment");

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
