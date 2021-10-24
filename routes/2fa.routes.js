const _2fa = require("../controllers/2fa.controller");

var router = require("express").Router();

// generate
router.get("/generate", _2fa.generate);

router.post("/verify", _2fa.verify);

module.exports = router;