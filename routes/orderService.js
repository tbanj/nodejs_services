const express = require("express");
const { orderList } = require("../controllers/orderService.js");

const router = express.Router();
router.get("/order-list", orderList);

module.exports = router;
