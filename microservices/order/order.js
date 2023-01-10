const express = require("express");
const cors = require("cors");

const orderSRVRoutes = require("../../routes/orderService.js");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/order", orderSRVRoutes);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
