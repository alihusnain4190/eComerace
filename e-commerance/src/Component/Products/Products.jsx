import React from "react";
import {Grid} from "@material-ui/core";
import Product from "./Product/Product";
import { AssignmentReturned } from "@material-ui/icons";
const products = [
  { id: 1, name: "phone", description: "this is a apple phone", price: "$500" },
  {
    id: 1,
    name: "samsung",
    description: "this is a samsung phone",
    price: "$500",
  },
];
const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product}></Product>
          </Grid>
        ))}
      </Grid> 
    </main>
  );
};

export default Products;
