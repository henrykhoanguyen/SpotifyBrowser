const express = require("express");
const { login, callBack, general, aboutMe } = require("../controllers/index");

const router = express.Router();

router.route("/login").get(login);
router.route("*").get(general);
router.route("/callback").get(callBack);
router.route("/me").get(aboutMe);

module.exports = router;
