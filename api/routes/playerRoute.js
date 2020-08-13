const express = require("express");
const router = express.Router();

const { Player } = require("../models/player");

//get all Player
router.post("/", (req, res, next) => {
  let name = req.body.name ? req.body.name : "";
  let nationality = req.body.nationality ? req.body.nationality : "";
  let role = req.body.role ? req.body.role : "";
  let skip = req.body.skip ? parseInt(req.body.skip) : 0;
  let limit = req.body.limit ? parseInt(req.body.limit) : 50;

  Player.find({
    username: { $regex: name, $options: "i" },
    nationality: { $regex: nationality, $options: "i" },
    role: { $regex: role, $options: "i" },
  })
    .sort({ name: 1 })
    .skip(skip)
    .limit(limit)
    .then((players) => {
      res.status(200).json(players);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Error",
        error: err,
      });
    });
});

module.exports = router;
