const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();

//generic register for passport to register strategies
passport.use(new GoogleStrategy()); //creates new instance of google passport strategy. pass in config

//if there is a port assigned by heroku, use PORT, otherwise, use 5000
const PORT = process.env.PORT || 5000; //heroku's oportunity to pass in the correct port to use
app.listen(PORT);
