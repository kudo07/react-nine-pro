import React, { useContext } from "react";
import "./shop.css";
import { ShopContext } from "../../context/shop-context";

function Product(props) {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmnt = cartItems[id];
  return (
    <div className="product">
      <img src={productImage} alt="f" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Explode {cartItemAmnt > 0 && <> ({cartItemAmnt})</>}
      </button>
    </div>
  );
}

export default Product;
