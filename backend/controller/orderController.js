const { connection } = require("../model/connection");

let order_get = async (req, res) => {
  try {
    const sql = "SELECT * FROM order_details";
    await connection.query(sql, (err, result) => {
      if (err) {
        res.send({ status: 400, error: err.sqlMessage });
      } else {
        res.send({ status: 200, response: result });
      }
    });
  } catch (err) {
    res.send({ status: 400, Error: err.sqlMessage });
  }
};

let order_post = async (req, res) => {
  try {
    const sql = "INSERT INTO order_details SET ?";
    const data = req.body;
    await connection.query(sql, data, (err, result) => {
      if (err) {
        res.send({ status: 400, Error: err.sqlMessage });
      } else {
        res.send({ status: 200, response: result });
      }
    });
  } catch (err) {
    res.send({ status: 400, Error: err.sqlMessage });
  }
};

let order_put = async (req, res) => {
  try {
    const sql = "UPDATE order_details SET ? WHERE order_id = ? ";
    const data = [req.body, req.params.order_id];
    await connection.query(sql, data, (err, result) => {
      if (err) {
        res.send({ status: 400, Error: err.sqlMessage });
      } else {
        res.send({ status: 200, response: result });
      }
    });
  } catch (err) {
    res.send({ status: 400, Error: err.sqlMessage });
  }
};

let order_delete = async (req, res) => {
  try {
    const sql = "DELETE FROM order_details WHERE order_id = ? ";
    const data = [req.params.order_id];
    await connection.query(sql, data, (err, result) => {
      if (err) {
        res.send({ status: 400, Error: err.sqlMessage });
      } else {
        res.send({ status: 200, response: result });
      }
    });
  } catch (err) {
    res.send({ status: 400, Error: err.sqlMessage });
  }
};

module.exports = { order_get, order_post, order_put, order_delete };
