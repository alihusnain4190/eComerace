import React, { useContext } from "react";

import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { CartContext } from "../../context/cart";
export default function CartItem({ id, image, title, price, amount }) {
  const { removeItem, increaseItem, decreaseItem } = useContext(CartContext);
  return (
    <article className="cart-item">
      <img src={image} alt={title}></img>
      <div>
        <h4>{title}</h4>
        <h5>{price}</h5>
        <button
          type="button"
          className="cart-btn remove-btn"
          onClick={() => {
            console.log("remove items");
            removeItem(id);
          }}
        >
          Remove
        </button>
      </div>
      <div>
        <button
          type="button"
          className="cart-btn amount-btn"
          onClick={() => {
            increaseItem(id);
          }}
        >
          <FaAngleUp />
        </button>
        <p className="item-amount">{amount}</p>
        <button
          type="button"
          className="cart-btn amount-btn"
          onClick={() => {
            decreaseItem(id, amount);
          }}
        >
          <FaAngleDown />
        </button>
      </div>
    </article>
  );
}
