const express = require("express");

const order_routes = express.Router();

const {
  order_get,
  order_post,
  order_put,
  order_delete,
} = require("../controller/orderController");

order_routes.get("/api/order-get", order_get);
order_routes.post("/api/order-post", order_post);
order_routes.put("/api/order-put/:order_id", order_put);
order_routes.delete("/api/order-delete/:order_id", order_delete);

module.exports = { order_routes };
