import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/products";
import { CartContext } from "../context/cart";
import { useHistory } from "react-router-dom";
import Loading from "../components/Loading";
export default function ProductDetails() {
  const { id } = useParams();
  const history = useHistory();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });
  if (products.length === 0) return <Loading />;
  else {
    const {
      image: { url },
      title,
      price,
      description,
    } = product;

    return (
      <section className="single-product">
        <img className="single-product-image" src={url} title={title}></img>
        <article>
          <h1>{title}</h1>
          <h1>{price}</h1>
          <p>{description}</p>
          <button
            className="btn btn-primary btn-block"
            onClick={() => {
              //cart
              addToCart(product);
              history.push("/cart");
            }}
          >
            add to cart
          </button>
        </article>
      </section>
    );
  }
}
