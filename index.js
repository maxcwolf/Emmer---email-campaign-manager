const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const authRoutes = require("./routes/authRoutes");
require("./models/User"); //this must be imported before passport since passport uses User
require("./services/passport");

mongoose.connect(keys.mongoURI); //connect to remote mongoDB hosted on mlabs

const app = express();

authRoutes(app);

//if there is a port assigned by heroku, use PORT, otherwise, use 5000
const PORT = process.env.PORT || 5000; //heroku's oportunity to pass in the correct port to use
app.listen(PORT);
