const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
const LocalStrategy = require("passport-local").Strategy;
const PORT = 3005;

app.use(
  session({ secret: "@#)#*&*@$*", resave: true, saveUninitialized: false })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy((username, password, done) => {
    console.log("LocalStrategy");
    /* User.findOne({ username: username }, function(err, user) {
    if (err) { return done(err); }
    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }
    if (!user.validPassword(password)) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  }); */
    done(null, username);
  })
);

passport.serializeUser((user, done) => {
  console.log("serialize");
  done(null, user);
});

passport.deserializeUser((id, done) => {
  console.log("deserialize");
  /* User.findById(id, function(err, user) {
    done(err, user);
  }); */
  done(null, id);
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/success",
    failureRedirect: "/failure",
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
