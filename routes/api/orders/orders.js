const express = require("express");
const routes = express.Router();
//express

routes.get("/test", (req, res) => {
  res.json({ msg: "hello form Orders" });
});

module.exports = routes;
