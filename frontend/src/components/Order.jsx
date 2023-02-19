import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Button, Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function Order() {
  const [data1, setData] = useState([]);
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

  const [validated, setValidated] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("")

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  async function getData() {
    const response = await fetch(`http://localhost:3300/api/order-get`);
    const data = await response.json();
    setData(data.response);
    console.log(data, "show data");
  }
  
  function deletedata(order_id) {
    fetch(`http://localhost:3300/api/order-delete/${order_id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 200) {
        alert("Are you sure, you want to remove this order");
      }
    });
    getData();
  }

  const search=(event)=>{
    const matchedUsers = data1.filter((data1) =>{
      `${data1.customer_name}`.toLowerCase()
      .includes(event.target.value.toLowerCase())
    })
    setData(matchedUsers);
    setSearchPhrase(event.target.value)
  }
  
  function getOlddata(
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
    phone
  ) {
    setOrder_id(order_id);
    setProduct_id(product_id);
    setSku(sku);
    setProduct_name(product_name);
    setProduct_category(product_category);
    setQty(qty);
    setShipping_type(shipping_type);
    setTotal_amount(total_amount);
    setCustomer_name(customer_name);
    setDob(dob);
    setPhone(phone);
  }

  function updatedata() {
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
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    };
    fetch(`http://localhost:3300/api/order-put/${order_id}`, reqData).then(
      (result) => {
        result.json().then((resp) => {
          console.log(resp);
          alert("Updated Successfully");
        });
      }
    );
    setShow(false);
    getData();
  }

  useEffect(() => {
    getData();
  }, []);
  const columns = [
    {
      name: "Order ID",
      selector: (row) => row.order_id,
    },
    {
      name: "Product ID",
      selector: (row) => row.product_id,
    },
    {
      name: "SKU",
      selector: (row) => row.sku,
    },
    {
      name: "Product Name",
      selector: (row) => row.product_name,
    },
    {
      name: "Product Category",
      selector: (row) => row.product_category,
    },
    {
      name: "Quantity",
      selector: (row) => row.qty,
    },
    {
      name: "Shipping Type",
      selector: (row) => row.shipping_type,
    },
    {
      name: "Total Amount",
      selector: (row) => row.total_amount,
    },
    {
      name: "Customer Name",
      selector: (row) => row.customer_name,
    },
    {
      name: "DOB",
      selector: (row) => row.dob,
    },
    {
      name: "Phone No.",
      selector: (row) => row.phone,
    },
    {
      name: "Update",
      cell: (row) => {
        return (
          <Button
            type="submit"
            onClick={() => {
              setValidated(true);
              handleShow();
              getOlddata(
                row.order_id,
                row.product_id,
                row.sku,
                row.product_name,
                row.product_category,
                row.qty,
                row.shipping_type,
                row.total_amount,
                row.customer_name,
                row.dob,
                row.phone
              );
            }}
          >
            Update
          </Button>
        );
      },
    },
    {
      name: "Delete",
      cell: (row) => {
        return (
          <Button type="submit" onClick={() => deletedata(row.order_id)}>
            Delete
          </Button>
        );
      },
    },
  ];

  return (
    <div>
      <div className="container">
        <Row>
          <Col
            style={{
              textAlign: "left",
              marginTop: "2rem",
              marginLeft: "-5rem",
            }}
          >
            <Link to="/product">
              <Button>View Product</Button>
            </Link>
          </Col>
          <Col>
          <div>
            <input type="text"
             placeholder="Search"
             value={searchPhrase}
             onChange={search}/>
          </div>
          </Col>
          <Col
            style={{
              textAlign: "right",
              marginTop: "2rem",
              marginRight: "-5rem",
            }}
          >
            <Link to="/add-order">
              <Button>Add Order</Button>
            </Link>
          </Col>
        </Row>
      </div>

      <div style={{ textAlign: "left" }}>
        <DataTable
          title="Order Detail"
          columns={columns}
          data={data1}
          pagination
          fixedHeader
        />
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form validated={validated}>
            <Form.Group className="mb-3">
              <Form.Label>Order ID</Form.Label>
              <Form.Control
                required
                value={order_id}
                onChange={(e) => setOrder_id(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Product ID</Form.Label>
              <Form.Control
                required
                value={product_id}
                onChange={(e) => setProduct_id(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>SKU</Form.Label>
              <Form.Control
                required
                value={sku}
                onChange={(e) => setSku(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                required
                value={product_name}
                onChange={(e) => setProduct_name(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Product Category</Form.Label>
              <Form.Control
                required
                value={product_category}
                onChange={(e) => setProduct_category(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>QTY</Form.Label>
              <Form.Control
                required
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Shipping Type</Form.Label>
              <Form.Control
                required
                value={shipping_type}
                onChange={(e) => setShipping_type(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Total Amount</Form.Label>
              <Form.Control
                required
                value={total_amount}
                onChange={(e) => setTotal_amount(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control
                required
                value={customer_name}
                onChange={(e) => setCustomer_name(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>DOB</Form.Label>
              <Form.Control
                required
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              updatedata();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Order;
