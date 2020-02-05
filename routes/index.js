const express = require("express");
const router = express.Router();

const { login, callBack, general } = require("../controllers/index");


router.route("/login").get(login);
router.route("*").get(general);
router.route("/callback").get(callBack);

module.exports = router;
