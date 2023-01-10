const paymentList = async (req, res) => {
  let response = {
    data: {
      item: [
        {
          id: 1,
          name: "Payment-1",
        },
        {
          id: 2,
          name: "Payment-2",
        },
      ],
    },
  };

  res.status(200).json(response);
};

module.exports = { paymentList };
