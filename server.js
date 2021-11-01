console.log("hello from Sushant");
const express = require("express");
//we have loaded express module
const mongoose = require("mongoose");
const dbURL = require("./config/key").mongoURI;
const users = require("./routes/api/users/user");
const comments = require("./routes/api/comments/comments");
const posts = require("./routes/api/posts/post");
const products = require("./routes/api/product/product");
const suppliers = require("./routes/api/suppliers/suppliers");
const inventories = require("./routes/api/inventory/inventory");
const orders = require("./routes/api/orders/orders");
const bodyParser = require("body-parser");
const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use(express.json());
// we are creating a new express server
mongoose
  .connect(dbURL)
  .then(() => console.log("server started"))
  .catch((err) => console.log(err));
//get http method
//get used to retrive a data
//put used for updation purpose
//post used to add new entries
//delete used to delete records from database
// app.get("/", (req, res) => {
//   console.log("hello from server");
// });
app.get("/", (req, res) => {
  res.json({ msg: "hello form JSON" });
});

app.use("/api/users", users);
app.use("/api/comments", comments);
app.use("/api/post", posts);
app.use("/api/products", products);
app.use("/api/suppliers", suppliers);
app.use("/api/inventories", inventories);
app.use("/api/orders", orders);

app.listen(5000, (req, res) => {
  console.log("Server started");
});
