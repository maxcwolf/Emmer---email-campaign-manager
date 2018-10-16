const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys"); //import secrets

const User = mongoose.model("users"); //fetch the user model class from mongoose

//register passport strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback" //the route where the user will go after login *MUST ADD TO GOOGLE API WEBSITE*
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          done(null, existingUser); //pass in error and the user
        } else {
          new User({ googleId: profile.id })
            .save() //must call .save() to save to mongoDB instance
            .then(user => done(null, user));
        }
      });
    }
  )
);
