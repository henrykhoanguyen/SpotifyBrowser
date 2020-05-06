const express = require("express");
const {
  login,
  callBack,
  general,
  aboutMe,
  topArtists,
  topTracks,
  followedArtists,
  getUserPlaylists,
  getUserSavedTracks,
  getRecommendations,
  search,
  getSingle,
  getArtistTopTracks
} = require("../controllers/index");

const router = express.Router();

router.route("/login").get(login);
// router.route("*").get(general);
router.route("/callback").get(callBack);

router.route("/").get(aboutMe);

router.route("/topArtists").get(topArtists);
router.route("/topTracks").get(topTracks);

router.route("/followedArtists").get(followedArtists);
router.route("/getUserPlaylists/:query").get(getUserPlaylists);
router.route("/getUserSavedTracks/:query").get(getUserSavedTracks);
router.route("/getArtistTopTracks/:id").get(getArtistTopTracks);

// This require seeds: artist id, genres, and tracks
router.route("/recommendations").get(getRecommendations);
router.route("/search/:query").get(search);

router.route("/single/:type/:id").get(getSingle);

module.exports = router;
