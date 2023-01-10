const express = require("express");
const {} = require("../controllers/orderService.js");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
