import React, { useState, useEffect } from "react";
import { Products, Navbar, Cart } from "./Component";
import { commerce } from "./lib/commerce";
const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const fetchProduct = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item);
  };
  useEffect(() => {
    fetchProduct();
    fetchCart();
  }, []);
  return (
    <div>
      {/* <Products products={products} onAddToCart={handleAddToCart} /> */}

      <Navbar totalItem={cart.total_items} />
      <Cart cart={cart}></Cart>
    </div>
  );
};

export default App;
