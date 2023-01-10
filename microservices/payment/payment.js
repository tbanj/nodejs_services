const express = require("express");
const cors = require("cors");

const paymentSRVRoutes = require("../../routes/paymentService.js");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 8082;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("Payment Service Called");
});

app.use("/payment", paymentSRVRoutes);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
