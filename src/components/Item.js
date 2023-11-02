import React, { useState } from "react";


function Item({ name, category }) {
  const [inCart,setInCart] = useState(false);
  
  const toggltCartStatus = () => {
    setInCart(preventInCart => !preventInCart);
  }
  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggltCartStatus}>{inCart ? "Remove From Cart" : "Add To Cart"}</button>
    </li>
  );
}

export default Item;
