const express = require("express");
const authCtrl = require("../controllers/auth");
const router = express.Router();

router.post('/register', authCtrl.register);
router.post('/login', authCtrl.login);

module.exports = router;