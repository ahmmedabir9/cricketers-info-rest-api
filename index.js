const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require("cors");
const config = require("./config/database");

const app = express();

app.use(cors());
//Connection to DB
mongoose
  .connect(config.database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  });

var db = mongoose.connection;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const playerRoute = require("./api/routes/playerRoute");

app.use("/spinthewicket/allplayers", playerRoute);

app.get("/", (req, res) => {
  res.send("<div><h1>The Server is Running</h1></div>");
});

var port = process.env.PORT || 5000;

app.listen(port);
