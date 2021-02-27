// cart context
import React, { useState } from "react";
import localCart from "../utils/localCart";
const CartContext = React.createContext();
function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const [total, setToal] = useState(0);
  const [cartItem, setCartItem] = useState(0);

  return (
    <CartContext.Provider value={{ cart, total, cartItem }}>
      {children}
    </CartContext.Provider>
  );
}
export { CartContext, CartProvider };
