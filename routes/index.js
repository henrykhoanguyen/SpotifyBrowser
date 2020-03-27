const express = require("express");
const {
  login,
  callBack,
  general,
  aboutMe,
  topArtists,
  topTracks,
  followedArtists
} = require("../controllers/index");

const router = express.Router();

router.route("/login").get(login);
router.route("*").get(general);
router.route("/callback").get(callBack);

router.route("/me").get(aboutMe);

router.route("/topArtists").get(topArtists);
router.route("/topTracks").get(topTracks);

router.route("/followedArtists").get(followedArtists);

module.exports = router;
