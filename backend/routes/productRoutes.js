const express = require("express");
const { product_get } = require("../controller/productController");
const product_routes = express.Router();

product_routes.get("/api/product-get", product_get);

module.exports = { product_routes };
