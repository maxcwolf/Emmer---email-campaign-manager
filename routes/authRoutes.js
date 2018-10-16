const passport = require("passport");

module.exports = app => {
  //get user code from google
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );
  //resolves user code given back by google
  app.get("/auth/google/callback", passport.authenticate("google"));
};
