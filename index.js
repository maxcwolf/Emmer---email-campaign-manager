const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

//if there is a port assigned by heroku, use PORT, otherwise, use 5000
const PORT = process.env.PORT || 5000; //heroku's oportunity to pass in the correct port to use
app.listen(PORT);
