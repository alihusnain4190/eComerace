import React, { useContext } from "react";
import { ProductContext } from "../context/products";
import Loading from "../components/Loading";
import ProductList from "../components/Products/ProductList";

export default function Products() {
  const { isLoading, products, featured } = useContext(ProductContext);
  if (isLoading) return <Loading />;
  return <ProductList products={products} title="our product" />;
}
