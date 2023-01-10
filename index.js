const gateway = require("fast-gateway");

const PORT = process.env.PORT || 9001;
const server = gateway({
  routes: [
    {
      prefix: "/order",
      target: "http://localhost:8081/",
      hooks: {},
    },
    {
      prefix: "/payment",
      target: "http://localhost:8082/",
      hooks: {},
    },
  ],
});

server.get("/mytesting", (req, res) => {
  res.send("Gateway Called");
});

server.start(PORT).then((server) => {
  console.log("Gateway is running " + PORT);
});
