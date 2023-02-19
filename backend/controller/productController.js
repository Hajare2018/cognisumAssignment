const { connection } = require("../model/connection");

let product_get = async (req, res) => {
  try {
    const sql = "SELECT * FROM product_master";
    await connection.query(sql, (err, result) => {
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

module.exports = { product_get };
