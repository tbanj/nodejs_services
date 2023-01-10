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
};

module.exports = { paymentList };
