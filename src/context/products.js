// products context
import React, { useEffect, useState } from "react";
import axios from "axios";
import url from "../utils/URL";
import { featuredProduct } from "../utils/helpers";
export const ProductContext = React.createContext();

export default function ProductProvider({ children }) {
  const [isLoading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${url}/products`)
      .then((resp) => {
        const feature = featuredProduct(resp.data);
        setFeatured(feature);
        setProducts(resp.data);
        setLoading(false);
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
