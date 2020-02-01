const express = require("express");
const router = express.Router();

const { login } = require("../controllers/index");

// router.get();
// TODO: build routes for login
router.route("/login").get(login);

module.exports = router;
