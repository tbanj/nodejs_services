const express = require("express");
const { paymentList } = require("../controllers/paymentService");

const router = express.Router();

router.get("/payment-list", paymentList);

module.exports = router;
