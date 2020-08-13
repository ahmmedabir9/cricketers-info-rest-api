const mongoose = require("mongoose");

const playerSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  playerID: {
    type: String,
    require: true,
  },
  nationality: {
    type: String,
  },
  dateOfBirth: {
    type: String,
  },
  role: {
    type: String,
  },
  battingStyle: {
    type: String,
  },
  bowlingStyle: {
    type: String,
  },
  image: {
    type: String,
  },
});

const Player = mongoose.model("players", playerSchema);

module.exports = { Player };
