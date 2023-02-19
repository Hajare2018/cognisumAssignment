import React, { useState,useEffect } from "react";
import DataTable from "react-data-table-component";

function Product() {
  const [data1, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(`http://localhost:3300/api/product-get`);
      console.log(response)
      const data = await response.json();
      setData(data.response);
      console.log(data, "show data");
    }
    getData();
  }, []);

  const columns = [
    {
      name: "Category",
      selector: (row) => row.category,
    },
    {
      name: "Product Name",
      selector: (row) => row.product_name,
    },
    {
      name: "SKU",
      selector: (row) => row.sku,
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "Price ($)",
      selector: (row) => row.price,
    },
    {
      name: "Discount (%)",
      selector: (row) => row.discount,
    },
  ];
  return (
    <div style={{margin:"2rem", backgroundColor:"gray"}}>
      <div style={{ textAlign: "left" }}>
        <DataTable
          title="Product Detail"
          columns={columns}
          data={data1}
          pagination
          fixedHeader
        />
      </div>
    </div>
  );
}

export default Product;
