const express = require("express");

const cors = require("cors");

// const connection = require('../backend/model/connection')

const app = express();

app.use(express.json());

app.use(cors());

const { order_routes } = require("./routes/orderRoutes");
const { product_routes } = require("./routes/productRoutes");

const port = 3300;

app.use("/", order_routes);

app.use("/", product_routes);

app.listen(port, (err) => {
  if (err) {
    console.log("Error");
  } else {
    console.log(`server is running on ${port}`);
  }
});
