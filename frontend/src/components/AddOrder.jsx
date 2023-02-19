import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AddOrder() {
  const [validated, setValidated] = useState(false);

  const [order_id, setOrder_id] = useState("");
  const [product_id, setProduct_id] = useState("");
  const [sku, setSku] = useState("");
  const [product_name, setProduct_name] = useState("");
  const [product_category, setProduct_category] = useState("");
  const [qty, setQty] = useState("");
  const [shipping_type, setShipping_type] = useState("");
  const [total_amount, setTotal_amount] = useState("");
  const [customer_name, setCustomer_name] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");

  function postdata() {
    let product = {
      order_id,
      product_id,
      sku,
      product_name,
      product_category,
      qty,
      shipping_type,
      total_amount,
      customer_name,
      dob,
      phone,
    };

    let reqData = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    };

    fetch(`http://localhost:3300/api/order-post`, reqData).then((response) =>
      console.log(`Data Submitted`)
    );
    setValidated(true);
  }

  return (
    <div>
      <div>
        <h4>Add Order</h4>
      </div>
      <div className="container">
        <Form validated={validated}>
          <Row>
            <Col>
              {" "}
              <Form.Group className="mb-3">
                <Form.Label>Order ID</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={order_id}
                  onChange={(e) => setOrder_id(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              {" "}
              <Form.Group className="mb-3">
                <Form.Label>Product ID</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={product_id}
                  onChange={(e) => setProduct_id(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              {" "}
              <Form.Group className="mb-3">
                <Form.Label>SKU</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={sku}
                  onChange={(e) => setSku(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={product_name}
                  onChange={(e) => setProduct_name(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              {" "}
              <Form.Group className="mb-3">
                <Form.Label>Product Category</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={product_category}
                  onChange={(e) => setProduct_category(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              {" "}
              <Form.Group className="mb-3">
                <Form.Label>QTY</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              {" "}
              <Form.Group className="mb-3">
                <Form.Label>Shipping Type</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={shipping_type}
                  onChange={(e) => setShipping_type(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Total Amount</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={total_amount}
                  onChange={(e) => setTotal_amount(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Customer Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={customer_name}
                  onChange={(e) => setCustomer_name(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              {" "}
              <Form.Group className="mb-3">
                <Form.Label>DOB</Form.Label>
                <Form.Control
                  required
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              required
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="primary"
            onClick={() => {
              postdata();
            }}
          >
            Save
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default AddOrder;
