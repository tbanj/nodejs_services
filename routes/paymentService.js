const express = require("express");
const { paymentList } = require("../controllers/paymentService");

const router = express.Router();

router.post("/payment-list", paymentList);

module.exports = router;
