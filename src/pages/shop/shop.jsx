import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./product";
import "./shop.css";

function Shop() {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>EXP-Mart</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
    // when import the shop.css the component inside the shop.jsx (product.jsx ) is also callable and implemented the styles
  );
}

export default Shop;
