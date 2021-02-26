// products context
import React, { useEffect, useState } from "react";
import axios from "axios";
import url from "../utils/URL";
export const ProductContext = React.createContext();

export default function ProductProvider({ children }) {
  const [isLoading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    axios
      .get(`${url}/products`)
      .then((resp) => {
        setProducts(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <ProductContext.Provider value={{ isLoading, products, featured }}>
      {children}
    </ProductContext.Provider>
  );
}
