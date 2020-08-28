const express = require("express");
const router = express.Router();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

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

// router.post("/delete", (req, res, next) => {
//   function imageExists(image_url) {
//     var http = new XMLHttpRequest();

//     http.open("HEAD", image_url, false);
//     http.send();

//     return http.status != 403;
//   }

//   Player.find()
//     .sort("name")
//     .limit(20)
//     .then((players) => {
//       for (var i = 0; i < players.length; i++) {
//         if (!imageExists(players[i].image)) {
//           Player.findByIdAndDelete(players[i]._id)
//             .then((player) => {
//               console.log(player);
//             })
//             .catch((err) => {
//               console.log(err);
//               res.status(500).json({
//                 message: "Error",
//                 error: err,
//               });
//             });
//         }
//       }
//       res.status(200).json("deleted");
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({
//         message: "Error",
//         error: err,
//       });
//     });
// });

module.exports = router;
