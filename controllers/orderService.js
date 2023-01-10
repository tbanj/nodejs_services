// should be use when .env data is
require("dotenv").config();
const orderList = (req, res) => {
  let response = {
    data: {
      item: [
        {
          id: 1,
          name: "order-1",
        },
        {
          id: 2,
          name: "order-2",
        },
      ],
    },
  };

  res.status(200).json(response);
};

module.exports = { orderList };
