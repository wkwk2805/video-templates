const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
const LocalStrategy = require("passport-local").Strategy;
const PORT = 3005;
const database = require("./database/connect");

app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(
  session({ secret: "@#)#*&*@$*", resave: true, saveUninitialized: false })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      console.log("LocalStrategy");
      try {
        const result = await database.query(
          `SELECT email, phone, user_uuid FROM vt_user WHERE email = $1 AND password = $2`,
          [email, password]
        );
        const userInfo = result.rows[0];
        if (userInfo) {
          return done(null, userInfo);
        } else {
          return done(null, false, { message: "존재하지 않는 유저입니다." });
        }
      } catch (e) {
        return done(e);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  console.log("serialize");
  done(null, user);
});

passport.deserializeUser((user, done) => {
  console.log("deserialize");
  done(null, user);
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/user/success",
    failureRedirect: "/user/failure",
  })
);

const user = require("./router/user");
const post = require("./router/post");
const file = require("./router/file");
const like = require("./router/like");
const comment = require("./router/comment");

app.use("/user", user);
app.use("/post", post);
app.use("/file", file);
app.use("/like", like);
app.use("/comment", comment);

app.listen(PORT, () => {
  console.log(`Connected ${PORT}port!`);
});
