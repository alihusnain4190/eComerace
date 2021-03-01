// cart context
import React, { useEffect, useState } from "react";
import localCart from "../utils/localCart";

const CartContext = React.createContext();
function CartProvider({ children }) {
  function getValueFromLocalStorage() {
    return localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
  }
  const [cart, setCart] = useState(getValueFromLocalStorage());

  const [total, setToal] = useState(0);
  const [cartItem, setCartItem] = useState(0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    let newCartItem = cart.reduce((acc, cur) => {
      return (acc = acc + cur.amount);
    }, 0);
    setCartItem(newCartItem);
    let newTotal = cart.reduce((acc, cur) => {
      return (acc = acc + cur.amount * cur.price);
    }, 0);
    newTotal = parseFloat(newTotal.toFixed(2));
    setToal(newTotal);
  }, [cart]);
  const removeItem = (id) => {
    const newCart = cart.filter((item) => {
      if (item.id !== id) return item;
    });
    setCart(newCart);
  };
  const increaseItem = (id) => {
    const newCart = cart.map((item) => {
      // if (item.id === id) {
      //     item.amount = item.amount + 1;
      //     return item;
      //   }
      //   return item;
      return item.id === id
        ? { ...item, amount: item.amount + 1 }
        : { ...item };
      //  }
    });
    setCart(newCart);
  };
  const decreaseItem = (id, amount) => {
    if (amount === 1) {
      removeItem(id);
    } else {
      const newCart = cart.map((item) => {
        return item.id === id
          ? { ...item, amount: item.amount - 1 }
          : { ...item };
      });
      setCart(newCart);
    }
  };
  const addToCart = (product) => {
    console.log();
    const {
      id,
      image: { url },
      title,
      price,
    } = product;
    const item = [...cart].find((item) => item.id === id);
    if (item) {
      increaseItem(id);
      return;
    } else {
      const newItem = { id, image: url, title, price, amount: 1 };
      const newCart = [...cart, newItem];
      setCart(newCart);
    }
  };
  const clearCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        cartItem,
        removeItem,
        increaseItem,
        decreaseItem,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export { CartContext, CartProvider };
